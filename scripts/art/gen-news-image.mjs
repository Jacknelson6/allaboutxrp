#!/usr/bin/env node
// Generate one AAXRP editorial news image with Gemini and write it as WebP at 1672x941.
//
// Usage:
//   node scripts/art/gen-news-image.mjs <prompt-file> <output-name>
// Example:
//   node scripts/art/gen-news-image.mjs \
//     scripts/art/quantum-readiness-bolt.prompt.txt \
//     xrp-quantum-readiness-bolt-editorial
//
// Requires GEMINI_API_KEY in the environment. Uses the homepage hero as a
// palette and finish reference only, per docs/EDITORIAL_IMAGE_SYSTEM.md.

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const [promptFile, outputName] = process.argv.slice(2);
if (!promptFile || !outputName) {
  console.error("usage: node scripts/art/gen-news-image.mjs <prompt-file> <output-name>");
  process.exit(1);
}

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is not set in this shell.");
  process.exit(1);
}

const MODEL = process.env.IMG_MODEL || "gemini-3-pro-image-preview";
const REFERENCE = path.join(process.cwd(), "public", "images", "xrp-ascii-bank-hero.webp");
const OUT_DIR = path.join(process.cwd(), "public", "news");
const OUT_PATH = path.join(OUT_DIR, `${outputName}.webp`);

const prompt = fs.readFileSync(promptFile, "utf8");
const parts = [{ text: prompt }];

if (fs.existsSync(REFERENCE)) {
  parts.push({
    inline_data: {
      mime_type: "image/webp",
      data: fs.readFileSync(REFERENCE).toString("base64"),
    },
  });
  parts.push({
    text: "Use the attached image only as a reference for palette, light quality, surface finish, and ASCII density. Do not copy its setting, subject, or composition.",
  });
}

const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
    body: JSON.stringify({
      contents: [{ parts }],
      generationConfig: { imageConfig: { aspectRatio: "16:9" } },
    }),
  },
);

if (!response.ok) {
  console.error(`Gemini returned ${response.status}: ${(await response.text()).slice(0, 800)}`);
  process.exit(1);
}

const payload = await response.json();
const imagePart = payload.candidates
  ?.flatMap((candidate) => candidate.content?.parts ?? [])
  .find((part) => part.inlineData || part.inline_data);

if (!imagePart) {
  const text = payload.candidates?.flatMap((c) => c.content?.parts ?? []).map((p) => p.text).filter(Boolean).join("\n");
  console.error(`No image returned.${text ? ` Model said: ${text.slice(0, 500)}` : ""}`);
  process.exit(1);
}

const raw = Buffer.from((imagePart.inlineData || imagePart.inline_data).data, "base64");
fs.mkdirSync(OUT_DIR, { recursive: true });
await sharp(raw).resize(1672, 941, { fit: "cover" }).webp({ quality: 88 }).toFile(OUT_PATH);

const metadata = await sharp(OUT_PATH).metadata();
console.log(`wrote ${OUT_PATH} (${metadata.width}x${metadata.height})`);
