import fs from "node:fs";
import path from "node:path";

const newsDir = path.join(process.cwd(), "content", "news");
const files = fs.existsSync(newsDir)
  ? fs.readdirSync(newsDir).filter((file) => file.endsWith(".json") && !file.startsWith("_"))
  : [];
const failures = [];
const slugs = new Set();

for (const file of files) {
  let article;
  try {
    article = JSON.parse(fs.readFileSync(path.join(newsDir, file), "utf8"));
  } catch (error) {
    failures.push(`${file}: invalid JSON (${error.message})`);
    continue;
  }

  const prefix = `${file}:`;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug || "")) failures.push(`${prefix} invalid slug`);
  if (slugs.has(article.slug)) failures.push(`${prefix} duplicate slug ${article.slug}`);
  slugs.add(article.slug);
  if (file !== `${article.slug}.json`) failures.push(`${prefix} filename must match slug`);
  if ((article.title || "").length < 35 || article.title.length > 110) failures.push(`${prefix} title must be 35 to 110 characters`);
  if ((article.description || "").length < 120 || article.description.length > 220) failures.push(`${prefix} description must be 120 to 220 characters`);
  if (!Array.isArray(article.keyTakeaways) || article.keyTakeaways.length < 3) failures.push(`${prefix} at least 3 key takeaways required`);
  if (!Array.isArray(article.sections) || article.sections.length < 3) failures.push(`${prefix} at least 3 substantive sections required`);
  const bodyWords = (article.sections || []).flatMap((section) => section.paragraphs || []).join(" ").trim().split(/\s+/).filter(Boolean).length;
  if (bodyWords < 650) failures.push(`${prefix} body must contain at least 650 words, found ${bodyWords}`);
  if (!Array.isArray(article.sources) || article.sources.length < 2) failures.push(`${prefix} at least 2 sources required`);
  if (!(article.sources || []).some((source) => source.type === "primary")) failures.push(`${prefix} at least 1 primary source required`);
  for (const source of article.sources || []) {
    try { new URL(source.url); } catch { failures.push(`${prefix} invalid source URL ${source.url}`); }
  }
  if (!Array.isArray(article.relatedLinks) || article.relatedLinks.length < 2) failures.push(`${prefix} at least 2 relevant internal links required`);
  if (Number.isNaN(Date.parse(article.publishedAt)) || Number.isNaN(Date.parse(article.modifiedAt))) failures.push(`${prefix} invalid publication dates`);
}

console.log(JSON.stringify({ articles: files.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
