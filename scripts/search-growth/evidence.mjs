import { readFile } from "node:fs/promises";
import path from "node:path";
import { invariant, normalizeQuery, normalizeUrl, round } from "./utils.mjs";

const FIELD_ALIASES = {
  query: ["query", "queries", "search query", "keyword"],
  page: ["page", "pages", "url", "landing page"],
  clicks: ["clicks"],
  impressions: ["impressions"],
  ctr: ["ctr", "click through rate", "click-through rate"],
  position: ["position", "average position"]
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  const source = text.replace(/^\uFEFF/, "");
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (char === '"' && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field.replace(/\r$/, ""));
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      field = "";
    } else field += char;
  }
  invariant(!quoted, "CSV contains an unclosed quoted field");
  row.push(field.replace(/\r$/, ""));
  if (row.some((value) => value !== "")) rows.push(row);
  invariant(rows.length >= 2, "CSV must contain a header and at least one data row");
  return rows;
}

function resolveHeaders(headers) {
  const normalized = headers.map((value) => value.trim().toLocaleLowerCase("en-US"));
  const indexes = {};
  for (const [field, aliases] of Object.entries(FIELD_ALIASES)) {
    indexes[field] = normalized.findIndex((value) => aliases.includes(value));
    invariant(indexes[field] >= 0, `Evidence is missing required column: ${field}`);
  }
  return indexes;
}

function numberValue(value, label, rowNumber) {
  const normalized = String(value).replaceAll(",", "").trim();
  const number = Number(normalized);
  invariant(Number.isFinite(number), `Row ${rowNumber}: ${label} must be numeric`);
  return number;
}

function normalizeCtr(value, rowNumber) {
  const raw = String(value).trim();
  const number = numberValue(raw.replace("%", ""), "ctr", rowNumber);
  const ctr = raw.includes("%") || number > 1 ? number / 100 : number;
  invariant(ctr >= 0 && ctr <= 1, `Row ${rowNumber}: ctr must be between 0 and 1, or a percentage`);
  return ctr;
}

function normalizeRow(raw, origin, rowNumber) {
  const query = normalizeQuery(raw.query);
  invariant(query, `Row ${rowNumber}: query is required`);
  const clicks = numberValue(raw.clicks, "clicks", rowNumber);
  const impressions = numberValue(raw.impressions, "impressions", rowNumber);
  const position = numberValue(raw.position, "position", rowNumber);
  invariant(clicks >= 0 && impressions >= 0, `Row ${rowNumber}: clicks and impressions cannot be negative`);
  invariant(Number.isInteger(clicks) && Number.isInteger(impressions), `Row ${rowNumber}: clicks and impressions must be whole numbers`);
  invariant(clicks <= impressions, `Row ${rowNumber}: clicks cannot exceed impressions`);
  invariant(position > 0, `Row ${rowNumber}: position must be greater than zero`);
  const suppliedCtr = normalizeCtr(raw.ctr, rowNumber);
  const calculatedCtr = impressions ? clicks / impressions : 0;
  invariant(Math.abs(suppliedCtr - calculatedCtr) <= 0.02, `Row ${rowNumber}: ctr materially disagrees with clicks divided by impressions`);
  return {
    query,
    page: normalizeUrl(raw.page, origin),
    clicks,
    impressions,
    ctr: suppliedCtr,
    position
  };
}

function parseCsvEvidence(text, origin) {
  const matrix = parseCsv(text);
  const indexes = resolveHeaders(matrix[0]);
  return matrix.slice(1).map((values, index) => normalizeRow(Object.fromEntries(Object.entries(indexes).map(([field, column]) => [field, values[column]])), origin, index + 2));
}

function parseJsonEvidence(text, origin) {
  const input = JSON.parse(text);
  invariant(Array.isArray(input.rows) && input.rows.length > 0, "GSC JSON must contain a non-empty rows array");
  return input.rows.map((row, index) => {
    invariant(Array.isArray(row.keys) && row.keys.length >= 2, `Row ${index + 1}: keys must contain query and page dimensions in that order`);
    return normalizeRow({ query: row.keys[0], page: row.keys[1], clicks: row.clicks, impressions: row.impressions, ctr: row.ctr, position: row.position }, origin, index + 1);
  });
}

export async function loadSearchEvidence(filePath, origin) {
  const text = await readFile(filePath, "utf8");
  const rows = path.extname(filePath).toLocaleLowerCase("en-US") === ".json" ? parseJsonEvidence(text, origin) : parseCsvEvidence(text, origin);
  invariant(rows.length > 0, "Evidence contains no usable rows");
  const merged = new Map();
  for (const row of rows) {
    const key = `${row.query}\u001f${row.page}`;
    const existing = merged.get(key) ?? { ...row, clicks: 0, impressions: 0, weightedPosition: 0 };
    existing.clicks += row.clicks;
    existing.impressions += row.impressions;
    existing.weightedPosition += row.position * Math.max(row.impressions, 1);
    merged.set(key, existing);
  }
  return [...merged.values()].map((row) => ({
    query: row.query,
    page: row.page,
    clicks: row.clicks,
    impressions: row.impressions,
    ctr: row.impressions ? round(row.clicks / row.impressions, 6) : 0,
    position: round(row.weightedPosition / Math.max(row.impressions, 1), 2)
  }));
}
