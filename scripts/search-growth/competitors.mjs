import { readFile } from "node:fs/promises";
import { parseCsv } from "./evidence.mjs";
import { invariant, normalizeQuery, stableId } from "./utils.mjs";

const aliases = {
  query: ["query", "keyword"],
  page: ["page", "url", "current url"],
  position: ["position", "current position"],
  volume: ["volume", "search volume"],
  difficulty: ["difficulty", "keyword difficulty", "kd"]
};

function numeric(value, field, optional = false) {
  if (optional && (value === undefined || value === null || String(value).trim() === "")) return null;
  invariant(value !== undefined && value !== null && String(value).trim() !== "", `Competitor ${field} is required`);
  const number = Number(String(value).replaceAll(",", ""));
  invariant(Number.isFinite(number) && number >= 0, `Competitor ${field} must be a non-negative number`);
  return number;
}

export async function loadCompetitorEvidence(filePath, origin) {
  const text = await readFile(filePath, "utf8");
  let rawRows;
  if (filePath.toLowerCase().endsWith(".json")) {
    const input = JSON.parse(text);
    rawRows = Array.isArray(input) ? input : input.rows;
  } else {
    const [headers, ...rows] = parseCsv(text);
    const indexes = Object.fromEntries(Object.entries(aliases).map(([field, names]) => [field, headers.findIndex((header) => names.includes(header.trim().toLowerCase()))]));
    for (const field of ["query", "page", "position"]) invariant(indexes[field] >= 0, `Competitor export is missing column: ${field}`);
    rawRows = rows.map((values) => Object.fromEntries(Object.entries(indexes).map(([field, index]) => [field, index < 0 ? undefined : values[index]])));
  }
  invariant(Array.isArray(rawRows) && rawRows.length > 0, "Competitor export must contain rows");
  const ownHost = new URL(origin).hostname.replace(/^www\./, "");
  const merged = new Map();
  for (const raw of rawRows) {
    const query = normalizeQuery(raw.query);
    invariant(query, "Competitor query is required");
    const url = new URL(raw.page);
    invariant(["https:", "http:"].includes(url.protocol) && !url.username && !url.password, "Competitor URL must be HTTP(S) without credentials");
    invariant(url.hostname.replace(/^www\./, "") !== ownHost, "Competitor URL must be outside the configured site");
    url.hash = "";
    const position = numeric(raw.position, "position");
    invariant(position >= 1, "Competitor position must be at least 1");
    const volume = numeric(raw.volume, "volume", true);
    const difficulty = numeric(raw.difficulty, "difficulty", true);
    invariant(difficulty === null || difficulty <= 100, "Competitor difficulty must be at most 100");
    const row = { query, page: url.href, position, volume, difficulty };
    const key = `${query}\u001f${url.href}`;
    if (!merged.has(key) || merged.get(key).position > position) merged.set(key, row);
  }
  return [...merged.values()].sort((a, b) => a.query.localeCompare(b.query) || a.page.localeCompare(b.page));
}

const stopWords = new Set(["a", "an", "the", "is", "are", "of", "for", "to", "in", "and", "with", "on", "xrp", "learn", "answers", "news", "www", "com"]);
const tokenAliases = { wallets: "wallet", fees: "fee", etfs: "etf", validators: "validator", transactions: "transaction", reserves: "reserve", payments: "payment", keys: "key" };
export function topicTokens(text) {
  return [...new Set(normalizeQuery(text).split(/[^\p{L}\p{N}]+/u).filter((word) => word.length > 1 && !stopWords.has(word)).map((word) => tokenAliases[word] ?? word))];
}

export function matchPages(query, catalog) {
  const tokens = topicTokens(query);
  if (!tokens.length) return [];
  return catalog.filter((item) => item.indexability === "eligible").map((item) => {
    const pageTokens = new Set(topicTokens(`${new URL(item.page).pathname} ${item.content?.title ?? ""} ${item.content?.h1 ?? ""} ${item.content?.description ?? ""} ${item.content?.openingAnswer ?? ""}`));
    const matched = tokens.filter((token) => pageTokens.has(token));
    return { page: item.page, sourcePath: item.sourcePath, score: matched.length / tokens.length, matchedTokens: matched };
  }).filter((item) => item.score >= 0.5).sort((a, b) => b.score - a.score || a.page.localeCompare(b.page)).slice(0, 3);
}

export function buildKeywordGaps({ competitorRows, currentRows, previousRows, catalog, brandTerms }) {
  const observed = new Set([...currentRows, ...previousRows].filter((row) => row.impressions > 0).map((row) => row.query));
  const groups = new Map();
  for (const row of competitorRows) {
    if (row.position > 20 || observed.has(row.query) || brandTerms.some((term) => row.query.includes(normalizeQuery(term)))) continue;
    if (!groups.has(row.query)) groups.set(row.query, []);
    groups.get(row.query).push(row);
  }
  return [...groups].map(([query, evidence]) => {
    const matches = matchPages(query, catalog);
    const volumes = evidence.map((row) => row.volume).filter((value) => value !== null);
    const difficulties = evidence.map((row) => row.difficulty).filter((value) => value !== null);
    const competitorCount = new Set(evidence.map((row) => new URL(row.page).hostname.replace(/^www\./, ""))).size;
    return {
      id: stableId(["keyword-gap", query]), query, evidenceState: "third_party_estimate",
      observation: "No impressions observed in the supplied GSC windows. This does not establish that the site never ranks.",
      competitors: evidence, competitorCount,
      volume: volumes.length ? Math.max(...volumes) : null,
      difficulty: difficulties.length ? Math.max(...difficulties) : null,
      mappingState: matches.length ? "existing_page_review" : "catalog_review_required",
      existingPageCandidates: matches,
      action: matches.length ? "Review existing page intent before optimizing. Token matching is a suggestion, not an intent decision."
        : "Review the full site for intent overlap, then consider a new page only with verified demand and unique source-backed value. Dynamic routes may not appear in the local catalog.",
      approvalState: "discovery_only"
    };
  }).sort((a, b) => b.competitorCount - a.competitorCount || (b.volume ?? -1) - (a.volume ?? -1) || a.query.localeCompare(b.query));
}
