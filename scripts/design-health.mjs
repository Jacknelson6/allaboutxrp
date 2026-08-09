import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "src");

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

const sourceFiles = walk(sourceRoot).filter((file) => /\.(?:tsx|ts|css)$/.test(file));
const pageFiles = sourceFiles.filter((file) => file.endsWith(`${path.sep}page.tsx`));
const joined = sourceFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
const failures = [];

if (!fs.existsSync(path.join(root, "DESIGN.md"))) failures.push("DESIGN.md is missing.");
if (!fs.existsSync(path.join(root, ".impeccable", "design.json"))) failures.push(".impeccable/design.json is missing.");
if (/\brounded-(?:sm|md|lg|xl|2xl|3xl|full)\b/.test(joined)) failures.push("Rounded utility classes remain in source.");
if (/\bshadow-(?:sm|md|lg|xl|2xl|\[)/.test(joined)) failures.push("Shadow utility classes remain in source.");
if (/\/news\/recaps/.test(joined)) failures.push("A daily recap route or link remains in source.");

const css = fs.readFileSync(path.join(sourceRoot, "styles", "globals.css"), "utf8");
if (!css.includes("border-radius: 0 !important")) failures.push("The sharp-corner global invariant is missing.");
if (!css.includes('"Public Sans"') || !css.includes('"Libre Baskerville"')) failures.push("The approved type pairing is not configured.");

console.log(JSON.stringify({
  pagesAudited: pageFiles.length,
  sourceFilesAudited: sourceFiles.length,
  roundedUtilities: [...joined.matchAll(/\brounded-(?:sm|md|lg|xl|2xl|3xl|full)\b/g)].length,
  shadowUtilities: [...joined.matchAll(/\bshadow-(?:sm|md|lg|xl|2xl|\[)/g)].length,
  failures,
}, null, 2));

if (failures.length) process.exitCode = 1;
