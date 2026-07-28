import fs from "node:fs";
import path from "node:path";

const appDir = path.join(process.cwd(), "src", "app");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

const pages = walk(appDir).filter((file) => file.endsWith(`${path.sep}page.tsx`));
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

const count = (key) => records.filter((record) => record[key]).length;
const report = {
  pages: records.length,
  withMetadata: count("metadata"),
  withCanonical: count("canonical"),
  withSchema: count("schema"),
  withVisibleSources: count("visibleSources"),
  staleReserveFiles,
};

console.log(JSON.stringify(report, null, 2));

if (staleReserveFiles.length) {
  console.error("\nOutdated XRPL reserve language detected. Current Mainnet values are 1 XRP base and 0.2 XRP owner reserve.");
  process.exitCode = 1;
}
