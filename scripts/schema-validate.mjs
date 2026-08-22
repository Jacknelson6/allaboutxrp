#!/usr/bin/env node
/**
 * Validates JSON-LD structured data on a representative sample of pages.
 *
 * Starts a `next start` server against the existing production build (run
 * `npm run build` first), fetches each sampled page, extracts every
 * `<script type="application/ld+json">` block, confirms it parses as JSON,
 * and confirms the set of "@type" values on the page covers what that page
 * is expected to emit. Dependency-free: Node 22 built-ins only.
 */

import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const PORT = Number(process.env.SCHEMA_VALIDATE_PORT || 4174);
const BASE_URL = `http://localhost:${PORT}`;
const START_TIMEOUT_MS = 60_000;
const ROOT = process.cwd();

function pickNewsSlug() {
  const newsDir = path.join(ROOT, "content", "news");
  if (!fs.existsSync(newsDir)) return null;
  const file = fs
    .readdirSync(newsDir)
    .find((name) => name.endsWith(".json") && !name.startsWith("_"));
  if (!file) return null;
  try {
    const article = JSON.parse(fs.readFileSync(path.join(newsDir, file), "utf8"));
    return article.slug || null;
  } catch {
    return null;
  }
}

const newsSlug = pickNewsSlug();

/** @type {{ path: string; label: string; expectedTypes: string[] }[]} */
const PAGES = [
  { path: "/", label: "Homepage", expectedTypes: ["Organization", "WebSite", "FAQPage"] },
  { path: "/about", label: "About page", expectedTypes: ["Organization", "BreadcrumbList"] },
  {
    path: "/contact",
    label: "Contact page",
    expectedTypes: ["ContactPage", "BreadcrumbList", "Organization", "ContactPoint", "PostalAddress"],
  },
  { path: "/authors/jack-nelson", label: "Author page", expectedTypes: ["Person"] },
  { path: "/learn/what-is-xrp", label: "Learn guide", expectedTypes: ["Article", "BreadcrumbList"] },
  { path: "/learn/basics", label: "Learn hub", expectedTypes: ["CollectionPage", "BreadcrumbList"] },
  { path: "/answers/is-xrp-a-security", label: "Answer page", expectedTypes: ["Article", "BreadcrumbList", "FAQPage", "WebPage"] },
  { path: "/tools", label: "Tools index", expectedTypes: ["CollectionPage", "BreadcrumbList"] },
  ...(newsSlug
    ? [{ path: `/news/${newsSlug}`, label: "News article", expectedTypes: ["NewsArticle", "BreadcrumbList"] }]
    : []),
];

function extractJsonLdBlocks(html) {
  const blocks = [];
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let match;
  while ((match = re.exec(html)) !== null) {
    blocks.push(match[1]);
  }
  return blocks;
}

function collectTypes(value, out) {
  if (Array.isArray(value)) {
    for (const item of value) collectTypes(item, out);
    return;
  }
  if (value && typeof value === "object") {
    if (typeof value["@type"] === "string") out.add(value["@type"]);
    for (const key of Object.keys(value)) collectTypes(value[key], out);
  }
}

async function waitForServer() {
  const start = Date.now();
  while (Date.now() - start < START_TIMEOUT_MS) {
    try {
      const res = await fetch(BASE_URL, { signal: AbortSignal.timeout(2000) });
      if (res.ok || res.status < 500) return true;
    } catch {
      // not ready yet
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  return false;
}

async function validatePage({ path: pagePath, label, expectedTypes }) {
  const url = `${BASE_URL}${pagePath}`;
  const failures = [];
  let html;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15_000) });
    if (!res.ok) {
      failures.push(`HTTP ${res.status} fetching ${url}`);
      return { label, path: pagePath, failures, blockCount: 0 };
    }
    html = await res.text();
  } catch (error) {
    failures.push(`Fetch failed for ${url}: ${(error && error.message) || error}`);
    return { label, path: pagePath, failures, blockCount: 0 };
  }

  const blocks = extractJsonLdBlocks(html);
  if (blocks.length === 0) {
    failures.push("No application/ld+json blocks found");
    return { label, path: pagePath, failures, blockCount: 0 };
  }

  const foundTypes = new Set();
  blocks.forEach((raw, index) => {
    try {
      const parsed = JSON.parse(raw);
      collectTypes(parsed, foundTypes);
    } catch (error) {
      failures.push(`Block ${index + 1} is not valid JSON: ${(error && error.message) || error}`);
    }
  });

  for (const expected of expectedTypes) {
    if (!foundTypes.has(expected)) {
      failures.push(`Missing expected @type "${expected}" (found: ${[...foundTypes].join(", ") || "none"})`);
    }
  }

  return { label, path: pagePath, failures, blockCount: blocks.length };
}

async function main() {
  if (!fs.existsSync(path.join(ROOT, ".next"))) {
    console.error("No .next build found. Run `npm run build` before `npm run seo:schema`.");
    process.exit(1);
  }

  console.log(`Starting production server on port ${PORT}...`);
  const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: ROOT,
    stdio: ["ignore", "pipe", "pipe"],
  });

  let serverOutput = "";
  server.stdout.on("data", (chunk) => (serverOutput += chunk));
  server.stderr.on("data", (chunk) => (serverOutput += chunk));

  const cleanup = () => {
    if (!server.killed) server.kill("SIGTERM");
  };
  process.on("exit", cleanup);

  try {
    const ready = await waitForServer();
    if (!ready) {
      console.error("Server did not become ready in time. Output so far:\n" + serverOutput);
      process.exitCode = 1;
      return;
    }

    console.log(`Validating structured data on ${PAGES.length} page(s)...\n`);
    const results = [];
    for (const page of PAGES) {
      results.push(await validatePage(page));
    }

    let hasFailures = false;
    for (const result of results) {
      const status = result.failures.length === 0 ? "PASS" : "FAIL";
      if (result.failures.length > 0) hasFailures = true;
      console.log(`[${status}] ${result.label} (${result.path}) — ${result.blockCount} JSON-LD block(s)`);
      for (const failure of result.failures) {
        console.log(`    - ${failure}`);
      }
    }

    console.log("");
    if (hasFailures) {
      console.error("Schema validation failed.");
      process.exitCode = 1;
    } else {
      console.log(`Schema validation passed for all ${results.length} sampled pages.`);
    }
  } finally {
    cleanup();
  }
}

main();
