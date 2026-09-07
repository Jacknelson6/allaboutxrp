import { matchPages } from "./competitors.mjs";

function plainText(html) {
  return html.replace(/<(script|style|nav|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ").replace(/&#(x[0-9a-f]+|\d+);/gi, (_, value) => {
      const point = value[0].toLowerCase() === "x" ? parseInt(value.slice(1), 16) : Number(value);
      return point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : " ";
    }).replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, name) => ({ amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " })[name])
    .replace(/\s+/g, " ").trim();
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, "i"))?.[2] ?? "";
}

export function extractPageContent(html, page) {
  const clean = html.replace(/<(script|style|nav)\b[^>]*>[\s\S]*?<\/\1>/gi, " ");
  const main = clean.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
  const body = main.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1] ?? main;
  const heading = body.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  const afterHeading = heading ? body.slice(heading.index + heading[0].length) : "";
  const opening = [...afterHeading.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((match) => plainText(match[1])).find((text) => text.length >= 60) ?? null;
  const meta = [...clean.matchAll(/<meta\b[^>]*>/gi)].map((match) => match[0]).find((tag) => attribute(tag, "name").toLowerCase() === "description");
  const internalLinks = [];
  for (const match of body.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    try {
      const href = attribute(match[0], "href");
      if (!href || href.startsWith("#")) continue;
      const url = new URL(href.replaceAll("&amp;", "&"), page);
      if (url.origin !== new URL(page).origin) continue;
      url.hash = "";
      if (!internalLinks.some((item) => item.page === url.href)) internalLinks.push({ page: url.href, anchor: plainText(match[2]) });
    } catch { /* Ignore malformed links in retrieved HTML. */ }
  }
  return {
    title: plainText(clean.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "") || null,
    h1: heading ? plainText(heading[1]) : null,
    description: meta ? plainText(attribute(meta, "content")) : null,
    openingAnswer: opening,
    internalLinks,
    source: "live_html",
    retrievedAt: new Date().toISOString()
  };
}

function queryHeading(query) {
  return query.replace(/^\p{L}/u, (letter) => letter.toUpperCase()).replace(/\bxrpl\b/gi, "XRPL").replace(/\bxrp\b/gi, "XRP").replace(/\betfs?\b/gi, (word) => word.toUpperCase());
}

function snippet(text) {
  if (text.length <= 160) return text;
  return `${text.slice(0, 157).replace(/\s+\S*$/, "")}...`;
}

export function buildEditingBrief(opportunity, catalog) {
  const item = catalog.find((candidate) => candidate.page === opportunity.page);
  if (item?.verificationState !== "live_verified" || !item.content?.h1 || !item.content?.openingAnswer) {
    return { state: "not_available", reason: "Verified live title, H1, and opening paragraph are required. Rerun with --verify-live; unsupported markup requires manual review." };
  }
  const current = item.content;
  if (!current.title) return { state: "not_available", reason: "Live page title is missing; inspect the page before drafting." };
  const related = matchPages(opportunity.query, catalog.filter((candidate) => candidate.page !== opportunity.page));
  const heading = queryHeading(opportunity.query);
  const consolidation = opportunity.signals.cannibalizationRisk;
  return {
    state: consolidation ? "intent_review_required" : "draft_for_review",
    sourcePath: item.sourcePath,
    current,
    proposed: consolidation ? null : {
      title: `${heading} | AllAboutXRP`, h1: heading,
      description: snippet(current.openingAnswer),
      openingAnswer: current.openingAnswer
    },
    draftingMethod: "Query-led title and H1, description excerpted from the retrieved opening paragraph. Opening retained verbatim to avoid introducing unsupported claims. Check intent and factual freshness before using this draft.",
    internalLinkSuggestions: related.map((candidate) => {
      const source = catalog.find((entry) => entry.page === candidate.page);
      return {
        from: candidate.page, to: opportunity.page, sourcePath: candidate.sourcePath,
        suggestedAnchor: heading,
        state: source?.content ? source.content.internalLinks.some((link) => link.page.replace(/\/$/, "") === opportunity.page.replace(/\/$/, "")) ? "already_linked" : "placement_review_required" : "source_inspection_required"
      };
    }),
    review: consolidation ? "Choose one canonical intent owner before drafting changes. Multiple ranking pages are a review signal, not proof of harmful cannibalization."
      : "Confirm query intent, check the proposed title length and claims, and choose one bounded change. Link suggestions require checking the source passage for relevance."
  };
}
