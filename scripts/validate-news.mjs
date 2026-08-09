import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const newsDir = path.join(process.cwd(), "content", "news");
const files = fs.existsSync(newsDir)
  ? fs.readdirSync(newsDir).filter((file) => file.endsWith(".json") && !file.startsWith("_"))
  : [];
const failures = [];
const slugs = new Set();
const sceneKeys = new Set();
const REQUIRED_IMAGE_STYLE = "aaxrp-classical-ascii-v2";

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
  // News should answer the query quickly. Depth is also enforced through section,
  // source, takeaway, and internal-link requirements rather than padded word count.
  if (bodyWords < 450) failures.push(`${prefix} body must contain at least 450 words, found ${bodyWords}`);
  if (!Array.isArray(article.sources) || article.sources.length < 3) failures.push(`${prefix} at least 3 sources required`);
  if (!(article.sources || []).some((source) => source.type === "primary")) failures.push(`${prefix} at least 1 primary source required`);
  if (!(article.sources || []).some((source) => source.type === "supporting")) failures.push(`${prefix} at least 1 supporting source required`);
  for (const source of article.sources || []) {
    try { new URL(source.url); } catch { failures.push(`${prefix} invalid source URL ${source.url}`); }
  }
  const sourceUrls = new Set((article.sources || []).map((source) => source.url));
  for (const section of article.sections || []) {
    if (!Array.isArray(section.sourceUrls) || section.sourceUrls.length < 1) failures.push(`${prefix} section "${section.heading}" needs at least 1 claim-adjacent source`);
    for (const sourceUrl of section.sourceUrls || []) {
      if (!sourceUrls.has(sourceUrl)) failures.push(`${prefix} section source must match a listed source: ${sourceUrl}`);
    }
  }
  if (!/^\/news\/[a-z0-9-]+\.(?:avif|jpe?g|png|webp)$/.test(article.image || "")) failures.push(`${prefix} image must be a unique file under /news`);
  if ((article.imageAlt || "").length < 40 || article.imageAlt.length > 180) failures.push(`${prefix} imageAlt must be 40 to 180 characters`);
  if (article.imageStyle !== REQUIRED_IMAGE_STYLE) failures.push(`${prefix} imageStyle must be ${REQUIRED_IMAGE_STYLE}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.imageSceneKey || "")) failures.push(`${prefix} imageSceneKey must be a stable slug`);
  if (sceneKeys.has(article.imageSceneKey)) failures.push(`${prefix} imageSceneKey must be unique across news: ${article.imageSceneKey}`);
  sceneKeys.add(article.imageSceneKey);
  if ((article.imageSetting || "").length < 24) failures.push(`${prefix} imageSetting must describe a distinct environment`);
  if ((article.imageMetaphor || "").length < 24) failures.push(`${prefix} imageMetaphor must explain the story-specific symbol`);
  if ((article.imagePrompt || "").length < 100) failures.push(`${prefix} imagePrompt must describe the subject-specific classical ASCII art direction`);
  if (article.image) {
    const imagePath = path.join(process.cwd(), "public", article.image.replace(/^\//, ""));
    if (!fs.existsSync(imagePath)) {
      failures.push(`${prefix} image file does not exist: ${article.image}`);
    } else {
      const metadata = await sharp(imagePath).metadata();
      const aspectRatio = metadata.width && metadata.height ? metadata.width / metadata.height : 0;
      if (!metadata.width || metadata.width < 1200) failures.push(`${prefix} image must be at least 1200 pixels wide`);
      if (aspectRatio < 1.7 || aspectRatio > 2.0) failures.push(`${prefix} image aspect ratio must be between 1.7:1 and 2:1`);
      if (article.imageWidth !== metadata.width || article.imageHeight !== metadata.height) failures.push(`${prefix} imageWidth and imageHeight must match the image file`);
    }
  }
  if (!Array.isArray(article.relatedLinks) || article.relatedLinks.length < 2) failures.push(`${prefix} at least 2 relevant internal links required`);
  if (Number.isNaN(Date.parse(article.publishedAt)) || Number.isNaN(Date.parse(article.modifiedAt))) failures.push(`${prefix} invalid publication dates`);
}

console.log(JSON.stringify({ articles: files.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
