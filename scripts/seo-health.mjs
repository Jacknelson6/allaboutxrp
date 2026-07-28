import fs from "node:fs";
import path from "node:path";

const appDir = path.join(process.cwd(), "src", "app");
const srcDir = path.join(process.cwd(), "src");
const nextConfigFile = path.join(process.cwd(), "next.config.ts");
const sitemapFile = path.join(appDir, "sitemap.ts");
const noindexFile = path.join(srcDir, "lib", "seo", "noindex-pages.ts");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

const pages = walk(appDir).filter((file) => file.endsWith(`${path.sep}page.tsx`));
const routeHandlers = walk(appDir).filter((file) => file.endsWith(`${path.sep}route.ts`));
const records = pages.map((file) => {
  const source = fs.readFileSync(file, "utf8");
  return {
    file: path.relative(process.cwd(), file),
    metadata: /export\s+(?:const\s+metadata|async\s+function\s+generateMetadata|function\s+generateMetadata)/.test(source),
    canonical: /canonical\s*:/.test(source),
    schema: /<SEOSchema\b|application\/ld\+json|build(?:Article|Breadcrumb|HowTo|FAQ)Schema/.test(source),
    visibleSources: /<SourceList\b|<h2[^>]*>\s*(?:Primary sources|Sources)\s*<\/h2>/i.test(source),
  };
});

const staleReservePatterns = [
  /10 XRP (?:base |wallet |minimum |account )?reserve/i,
  /base reserve of 10 XRP/i,
  /(?<!\.)\b2 XRP owner reserve/i,
  /(?<!\.)\b2 XRP reserve per (?:object|trust line|line)/i,
  /reserve by (?<!\.)\b2 XRP/i,
  /(?:≥|at least )10 XRP[^\n]{0,50}(?:activate|account)/i,
];

const staleReserveFiles = pages
  .filter((file) => staleReservePatterns.some((pattern) => pattern.test(fs.readFileSync(file, "utf8"))))
  .map((file) => path.relative(process.cwd(), file));

function appFileToRoute(file) {
  const relative = path.relative(appDir, path.dirname(file));
  const segments = relative === "" ? [] : relative.split(path.sep);
  const publicSegments = segments.filter(
    (segment) => !segment.startsWith("(") && !segment.startsWith("@"),
  );

  return `/${publicSegments.join("/")}`.replace(/\/$/, "") || "/";
}

function routeToPattern(route) {
  if (route === "/") return /^\/$/;

  const pattern = route
    .split("/")
    .map((segment) => {
      if (/^\[\[\.\.\..+\]\]$/.test(segment)) return "(?:.+)?";
      if (/^\[\.\.\..+\]$/.test(segment)) return ".+";
      if (/^\[.+\]$/.test(segment)) return "[^/]+";
      return segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    })
    .join("/");

  return new RegExp(`^${pattern}/?$`);
}

const appRoutes = [...pages, ...routeHandlers].map(appFileToRoute);
const routePatterns = appRoutes.map(routeToPattern);
routePatterns.push(/^\/sitemap\.xml\/?$/, /^\/robots\.txt\/?$/);

const noindexSource = fs.readFileSync(noindexFile, "utf8");
const nextConfigSource = fs.readFileSync(nextConfigFile, "utf8");
const sitemapSource = fs.readFileSync(sitemapFile, "utf8");
const noindexSection = noindexSource.split("export const CANONICAL_ALIASES")[0];
const noindexPaths = [...noindexSection.matchAll(/^\s*"(\/[^"\n]+)",?$/gm)].map(
  (match) => match[1],
);
const canonicalAliases = [
  ...noindexSource.matchAll(/\["(\/[^"\n]+)",\s*"(\/[^"\n]+)"\]/g),
].map((match) => ({ source: match[1], destination: match[2] }));
const configuredRedirects = [
  ...nextConfigSource.matchAll(/source:\s*["'](\/[^"'\n]+)["']/g),
].map((match) => match[1]);
const redirectSources = new Set([
  ...canonicalAliases.map((alias) => alias.source),
  ...configuredRedirects,
]);

const sourceFiles = walk(srcDir).filter((file) => /\.(?:ts|tsx)$/.test(file));
const internalLinks = [];
const linkPattern = /(?:href|primaryHref|secondaryHref)\s*(?:=|:)\s*["'](\/[^"'#?\n]*)/g;

for (const file of sourceFiles) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(linkPattern)) {
    internalLinks.push({
      file: path.relative(process.cwd(), file),
      path: match[1].replace(/\/$/, "") || "/",
    });
  }
}

const linkIsRoutable = (href) =>
  redirectSources.has(href) || routePatterns.some((pattern) => pattern.test(href));
const brokenInternalLinks = internalLinks
  .filter((link) => !linkIsRoutable(link.path))
  .filter(
    (link, index, links) =>
      links.findIndex((candidate) => candidate.file === link.file && candidate.path === link.path) === index,
  );

const policyChecks = {
  noindexHeaderEnforced:
    nextConfigSource.includes("NOINDEX_PATHS") &&
    nextConfigSource.includes('X-Robots-Tag", value: "noindex, follow'),
  noindexExcludedFromSitemap:
    sitemapSource.includes("NOINDEX_PATHS") && sitemapSource.includes("NOINDEX_LEARN_SLUGS"),
  aliasesExcludedFromSitemap: sitemapSource.includes("CANONICAL_ALIAS_PATHS"),
};

const count = (key) => records.filter((record) => record[key]).length;
const report = {
  pages: records.length,
  withMetadata: count("metadata"),
  withCanonical: count("canonical"),
  withSchema: count("schema"),
  withVisibleSources: count("visibleSources"),
  noindexPaths: noindexPaths.length,
  canonicalAliases: canonicalAliases.length,
  internalLinksChecked: internalLinks.length,
  brokenInternalLinks,
  policyChecks,
  staleReserveFiles,
};

console.log(JSON.stringify(report, null, 2));

if (staleReserveFiles.length) {
  console.error("\nOutdated XRPL reserve language detected. Current Mainnet values are 1 XRP base and 0.2 XRP owner reserve.");
  process.exitCode = 1;
}

if (brokenInternalLinks.length) {
  console.error("\nBroken static internal links detected. Point links at an existing route or a declared redirect.");
  process.exitCode = 1;
}

if (Object.values(policyChecks).some((passed) => !passed)) {
  console.error("\nSEO policy wiring is incomplete. Noindex and canonical aliases must be enforced in headers and sitemap generation.");
  process.exitCode = 1;
}
