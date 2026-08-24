import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { normalizeUrl } from "./utils.mjs";

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(target));
    else files.push(target);
  }
  return files;
}

function routePattern(appRoot, filePath) {
  const relative = path.relative(appRoot, path.dirname(filePath));
  const segments = relative.split(path.sep).filter(Boolean).filter((segment) => !segment.startsWith("(") || !segment.endsWith(")"));
  const route = `/${segments.join("/")}`.replace(/\/page$/, "");
  const escaped = route.split("/").map((segment) => {
    if (/^\[\.\.\..+\]$/.test(segment)) return ".+";
    if (/^\[.+\]$/.test(segment)) return "[^/]+";
    return segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }).join("/");
  return {
    route: route === "/" ? "/" : route.replace(/\/$/, ""),
    regex: new RegExp(`^${escaped || "/"}/?$`),
    dynamicCount: segments.filter((segment) => segment.startsWith("[")).length
  };
}

function extractPolicyPaths(source) {
  const noindexBlock = source.match(/NOINDEX_PATHS\s*=\s*new Set\(\[([\s\S]*?)\]\);/)?.[1] ?? "";
  const aliasBlock = source.match(/CANONICAL_ALIASES\s*=\s*new Map[^\[]*\(\[([\s\S]*?)\]\);/)?.[1] ?? "";
  const strings = (block) => new Set([...block.matchAll(/["'`](\/[^"'`?#]*)["'`]/g)].map((match) => match[1].replace(/\/$/, "") || "/"));
  const aliasStrings = [...strings(aliasBlock)];
  return { noindexPaths: strings(noindexBlock), aliasPaths: new Set(aliasStrings.filter((_, index) => index % 2 === 0)) };
}

export async function buildAaxrpCatalog({ repoRoot, origin, evidencePages }) {
  const appRoot = path.join(repoRoot, "src", "app");
  const pageFiles = (await walk(appRoot)).filter((filePath) => filePath.endsWith(`${path.sep}page.tsx`) || filePath.endsWith(`${path.sep}page.jsx`));
  const patterns = pageFiles
    .map((filePath) => ({ filePath, ...routePattern(appRoot, filePath) }))
    .sort((a, b) => a.dynamicCount - b.dynamicCount || b.route.length - a.route.length);
  let noindexPaths = new Set();
  let aliasPaths = new Set();
  try {
    ({ noindexPaths, aliasPaths } = extractPolicyPaths(await readFile(path.join(repoRoot, "src", "lib", "seo", "noindex-pages.ts"), "utf8")));
  } catch {
    noindexPaths = new Set();
    aliasPaths = new Set();
  }
  return [...new Set(evidencePages.map((page) => normalizeUrl(page, origin)))].map((page) => {
    const url = new URL(page);
    const match = patterns.find((candidate) => candidate.regex.test(url.pathname));
    const blocked = noindexPaths.has(url.pathname);
    const alias = aliasPaths.has(url.pathname);
    return {
      id: url.pathname,
      page,
      route: url.pathname,
      sourcePath: match ? path.relative(repoRoot, match.filePath) : null,
      routePattern: match?.route ?? null,
      indexability: blocked ? "blocked" : alias ? "alias" : match ? "eligible" : "unknown",
      verificationState: "local_only"
    };
  });
}

function tagAttribute(tag, name) {
  return tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']+)["']`, "i"))?.[1] ?? null;
}

async function verifyPage(item, { origin, sitemapUrls, fetchImpl }) {
  if (item.indexability !== "eligible") return item;
  try {
    const response = await fetchImpl(item.page, { redirect: "follow", headers: { "user-agent": "AAXRP-Search-Growth/1.0" }, signal: AbortSignal.timeout(10_000) });
    if (!response.ok) return { ...item, verificationState: "verification_failed", verificationReason: `http_${response.status}` };
    const finalUrl = normalizeUrl(response.url, origin);
    if (finalUrl !== item.page) return { ...item, verificationState: "verification_failed", verificationReason: "redirect_or_alias" };
    const html = await response.text();
    const canonicalTag = html.match(/<link\b[^>]*rel\s*=\s*["'][^"']*canonical[^"']*["'][^>]*>/i)?.[0] ?? null;
    const canonical = canonicalTag ? tagAttribute(canonicalTag, "href") : null;
    if (!canonical || normalizeUrl(canonical, origin) !== item.page) return { ...item, verificationState: "verification_failed", verificationReason: "canonical_mismatch" };
    const robotsTags = [...html.matchAll(/<meta\b[^>]*(?:name\s*=\s*["']robots["']|content\s*=\s*["'][^"']*noindex[^"']*["'])[^>]*>/gi)].map((match) => match[0].toLocaleLowerCase("en-US"));
    if (robotsTags.some((tag) => tag.includes("noindex"))) return { ...item, verificationState: "verification_failed", verificationReason: "live_noindex" };
    if (!sitemapUrls.has(item.page)) return { ...item, verificationState: "verification_failed", verificationReason: "missing_from_sitemap" };
    return { ...item, verificationState: "live_verified", verificationReason: null };
  } catch (error) {
    return { ...item, verificationState: "verification_failed", verificationReason: error.name === "TimeoutError" ? "timeout" : "request_failed" };
  }
}

export async function verifyCatalogLive(catalog, { origin, fetchImpl = fetch, concurrency = 5 } = {}) {
  const sitemapResponse = await fetchImpl(new URL("/sitemap.xml", origin), { headers: { "user-agent": "AAXRP-Search-Growth/1.0" }, signal: AbortSignal.timeout(10_000) });
  if (!sitemapResponse.ok) throw new Error(`Live sitemap verification failed with HTTP ${sitemapResponse.status}`);
  const sitemapXml = await sitemapResponse.text();
  const sitemapUrls = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => normalizeUrl(match[1], origin)));
  const results = new Array(catalog.length);
  let next = 0;
  async function worker() {
    while (next < catalog.length) {
      const index = next;
      next += 1;
      results[index] = await verifyPage(catalog[index], { origin, sitemapUrls, fetchImpl });
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, catalog.length) }, () => worker()));
  return results;
}
