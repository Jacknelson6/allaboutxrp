import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const manifestPath = path.join(root, "content", "editorial-art.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const failures = [];
const routes = new Set();
const labels = new Set();
const sceneKeys = new Set();

if (manifest.styleVersion !== "aaxrp-classical-ascii-v2") {
  failures.push("editorial-art.json must use aaxrp-classical-ascii-v2");
}

for (const artwork of manifest.guides || []) {
  if (routes.has(artwork.route)) failures.push(`duplicate guide route: ${artwork.route}`);
  if (labels.has(artwork.breadcrumbLabel)) failures.push(`duplicate guide label: ${artwork.breadcrumbLabel}`);
  routes.add(artwork.route);
  labels.add(artwork.breadcrumbLabel);

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(artwork.sceneKey || "")) failures.push(`${artwork.route}: sceneKey must be a stable slug`);
  if (sceneKeys.has(artwork.sceneKey)) failures.push(`${artwork.route}: sceneKey must be unique: ${artwork.sceneKey}`);
  sceneKeys.add(artwork.sceneKey);
  if ((artwork.setting || "").length < 24) failures.push(`${artwork.route}: setting must describe a distinct environment`);
  if ((artwork.primarySymbol || "").length < 24) failures.push(`${artwork.route}: primarySymbol must describe the topic metaphor`);

  if (!artwork.src?.startsWith("/guides/") || !artwork.src.endsWith(".webp")) {
    failures.push(`${artwork.route}: guide art must be a WebP under /guides`);
    continue;
  }
  if ((artwork.alt || "").length < 60) failures.push(`${artwork.route}: alt text is too short`);
  if ((artwork.promptConcept || "").length < 40) failures.push(`${artwork.route}: promptConcept is too short`);

  const assetPath = path.join(root, "public", artwork.src.replace(/^\//, ""));
  if (!fs.existsSync(assetPath)) {
    failures.push(`${artwork.route}: missing ${artwork.src}`);
    continue;
  }
  const metadata = await sharp(assetPath).metadata();
  if (metadata.width !== artwork.width || metadata.height !== artwork.height) {
    failures.push(`${artwork.route}: manifest dimensions do not match ${artwork.src}`);
  }
  const ratio = metadata.width && metadata.height ? metadata.width / metadata.height : 0;
  if (ratio < 1.7 || ratio > 1.9) failures.push(`${artwork.route}: artwork must use a 16:9 editorial ratio`);
}

console.log(JSON.stringify({
  styleVersion: manifest.styleVersion,
  guideImages: manifest.guides?.length || 0,
  uniqueGuideScenes: sceneKeys.size,
  failures,
}, null, 2));

if (failures.length) process.exitCode = 1;
