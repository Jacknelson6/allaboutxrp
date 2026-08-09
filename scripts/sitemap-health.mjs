const siteUrl = (process.argv[2] || process.env.SITE_URL || "https://allaboutxrp.com").replace(
  /\/$/,
  "",
);
const expectedOrigin = new URL(siteUrl).origin;

function getLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
    match[1].replace(/&amp;/g, "&"),
  );
}

function getEntries(xml) {
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => ({
    loc: match[1].match(/<loc>([^<]+)<\/loc>/)?.[1]?.replace(/&amp;/g, "&"),
    lastmod: match[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? null,
  })).filter((entry) => entry.loc);
}

function normalizeUrl(value) {
  const url = new URL(value);
  url.hash = "";
  return url.href.replace(/\/$/, "");
}

function getCanonical(html) {
  const tags = html.match(/<link\b[^>]*>/gi) ?? [];
  const canonicalTag = tags.find((tag) =>
    /\brel=["'][^"']*\bcanonical\b[^"']*["']/i.test(tag),
  );
  return canonicalTag?.match(/\bhref=["']([^"']+)["']/i)?.[1] ?? null;
}

function hasMetaNoindex(html) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  return tags.some(
    (tag) =>
      /\bname=["']robots["']/i.test(tag) &&
      /\bcontent=["'][^"']*noindex/i.test(tag),
  );
}

async function fetchWithRetry(url, options = {}, attempts = 3) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await fetch(url, { ...options, signal: AbortSignal.timeout(15000) });
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    }
  }

  throw lastError;
}

async function fetchXml(pathname) {
  const response = await fetchWithRetry(`${siteUrl}${pathname}`, {
    headers: { "user-agent": "AllAboutXRP-Sitemap-Audit/1.0" },
  });
  const xml = await response.text();
  const contentType = response.headers.get("content-type") ?? "";

  if (!response.ok || !contentType.includes("xml") || !xml.includes("<urlset")) {
    throw new Error(
      `${pathname} is not a valid XML URL set (${response.status}, ${contentType || "no content type"})`,
    );
  }

  return { xml, urls: getLocs(xml) };
}

const failures = [];
const warnings = [];
const { xml: sitemapXml, urls } = await fetchXml("/sitemap.xml");
const { urls: newsUrls } = await fetchXml("/news-sitemap.xml");
const urlSet = new Set(urls);
const sitemapEntries = getEntries(sitemapXml);
const lastmodByUrl = new Map(sitemapEntries.map((entry) => [normalizeUrl(entry.loc), entry.lastmod]));

const missingLastmod = sitemapEntries.filter((entry) => !entry.lastmod).map((entry) => entry.loc);
if (missingLastmod.length) warnings.push(`${missingLastmod.length} sitemap URLs do not declare lastmod.`);

if (urls.length === 0) failures.push("The standard sitemap contains no URLs.");
if (urlSet.size !== urls.length) failures.push("The standard sitemap contains duplicate <loc> entries.");

for (const value of urls) {
  const url = new URL(value);
  if (url.origin !== expectedOrigin) failures.push(`${value} is not on ${expectedOrigin}.`);
  if (url.protocol !== "https:") failures.push(`${value} is not HTTPS.`);
  if (url.search || url.hash) failures.push(`${value} contains a query string or fragment.`);
  if (url.pathname.startsWith("/api/")) failures.push(`${value} exposes an API route.`);
}

for (const value of newsUrls) {
  if (!urlSet.has(value)) {
    failures.push(`${value} is in the Google News sitemap but missing from the standard sitemap.`);
  }
}

for (const match of sitemapXml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
  const timestamp = Date.parse(match[1]);
  if (Number.isNaN(timestamp)) failures.push(`Invalid lastmod value: ${match[1]}.`);
  if (timestamp > Date.now() + 5 * 60 * 1000) {
    failures.push(`Future lastmod value: ${match[1]}.`);
  }
}

try {
  const digestResponse = await fetchWithRetry(`${siteUrl}/api/digests`);
  const digests = await digestResponse.json();
  if (digestResponse.ok && Array.isArray(digests)) {
    for (const digest of digests) {
      const url = `${siteUrl}/digest/${digest.slug}`;
      if (!urlSet.has(url)) failures.push(`Published digest missing from sitemap: ${url}.`);
    }
  }
} catch (error) {
  failures.push(`Could not verify published digest coverage: ${error.message}`);
}

let cursor = 0;
async function validatePage() {
  while (cursor < urls.length) {
    const value = urls[cursor++];
    const response = await fetchWithRetry(value, {
      redirect: "manual",
      headers: { "user-agent": "AllAboutXRP-Sitemap-Audit/1.0" },
    });
    const html = await response.text();

    if (response.status !== 200) {
      failures.push(
        `${value} returned ${response.status}${response.headers.get("location") ? ` -> ${response.headers.get("location")}` : ""}.`,
      );
      continue;
    }

    if (/noindex/i.test(response.headers.get("x-robots-tag") ?? "") || hasMetaNoindex(html)) {
      failures.push(`${value} is noindex.`);
    }

    const canonical = getCanonical(html);
    if (!canonical) {
      failures.push(`${value} has no canonical URL.`);
    } else if (normalizeUrl(canonical) !== normalizeUrl(value)) {
      failures.push(`${value} canonicalizes to ${canonical}.`);
    }

    const schemaModified = html.match(/"dateModified"\s*:\s*"(\d{4}-\d{2}-\d{2}(?:T[^"]+)?)"/)?.[1];
    const sitemapModified = lastmodByUrl.get(normalizeUrl(value));
    if (schemaModified && sitemapModified && Date.parse(schemaModified) > Date.parse(sitemapModified) + 86400000) {
      failures.push(`${value} schema dateModified (${schemaModified}) is newer than sitemap lastmod (${sitemapModified}).`);
    }
  }
}

await Promise.all(Array.from({ length: 10 }, () => validatePage()));

const report = {
  siteUrl,
  sitemapUrls: urls.length,
  newsSitemapUrls: newsUrls.length,
  missingLastmod,
  warnings,
  failures,
};

console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
