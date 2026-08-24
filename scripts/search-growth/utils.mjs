import { createHash } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

export function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

export function stableId(parts) {
  return createHash("sha256").update(parts.join("\u001f")).digest("hex").slice(0, 16);
}

export function normalizeQuery(value) {
  return String(value ?? "").trim().toLocaleLowerCase("en-US").replace(/\s+/g, " ");
}

export function normalizeUrl(value, origin) {
  const input = String(value ?? "").trim();
  invariant(input, "Page URL is required");
  const url = new URL(input, origin);
  const expected = new URL(origin);
  invariant(url.hostname === expected.hostname || url.hostname === `www.${expected.hostname}` || `www.${url.hostname}` === expected.hostname, `Page URL is outside the configured site: ${url.href}`);
  invariant(!url.username && !url.password, "Page URL cannot contain credentials");
  invariant(!url.port || url.port === expected.port, `Page URL uses an unexpected port: ${url.port}`);
  url.protocol = expected.protocol;
  url.hostname = expected.hostname;
  url.hash = "";
  for (const key of [...url.searchParams.keys()]) {
    if (/^(utm_|gclid|fbclid)/i.test(key)) url.searchParams.delete(key);
  }
  url.pathname = url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "");
  return url.href;
}

export function parseIsoDate(value, label) {
  invariant(/^\d{4}-\d{2}-\d{2}$/.test(String(value)), `${label} must use YYYY-MM-DD`);
  const date = new Date(`${value}T00:00:00.000Z`);
  invariant(!Number.isNaN(date.valueOf()), `${label} is not a valid date`);
  invariant(date.toISOString().slice(0, 10) === value, `${label} is not a real calendar date`);
  return date;
}

export function inclusiveDays(start, end) {
  const days = Math.round((end.valueOf() - start.valueOf()) / 86_400_000) + 1;
  invariant(days > 0, "Period end must not precede period start");
  return days;
}

export function addDays(dateValue, days) {
  const date = new Date(`${dateValue}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function round(value, digits = 2) {
  const scale = 10 ** digits;
  return Math.round((Number(value) + Number.EPSILON) * scale) / scale;
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function safeJsonForHtml(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c").replaceAll(">", "\\u003e").replaceAll("&", "\\u0026");
}

export async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

export async function writeJsonAtomic(filePath, value) {
  await writeTextAtomic(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

export async function writeTextAtomic(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true });
  const tempPath = `${filePath}.${process.pid}.tmp`;
  await writeFile(tempPath, value, "utf8");
  await rename(tempPath, filePath);
}

export function parseArgs(argv) {
  const [command = "help", ...tokens] = argv;
  const options = {};
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    invariant(token.startsWith("--"), `Unexpected argument: ${token}`);
    const key = token.slice(2);
    const next = tokens[index + 1];
    if (!next || next.startsWith("--")) options[key] = true;
    else {
      options[key] = next;
      index += 1;
    }
  }
  return { command, options };
}
