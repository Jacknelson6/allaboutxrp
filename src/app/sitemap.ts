import type { MetadataRoute } from "next";
import { getAllRecaps } from "@/lib/utils/news";
import fs from "fs";
import path from "path";
import { LEARN_HUBS } from "@/data/learn-hubs";

/**
 * Dynamically discover all learn page slugs by scanning the filesystem.
 * Any directory under src/app/learn/ that contains a page.tsx is included.
 */
function getAllLearnSlugs(): string[] {
  const learnDir = path.join(process.cwd(), "src/app/learn");
  if (!fs.existsSync(learnDir)) return [];

  return fs
    .readdirSync(learnDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith("[") &&
        entry.name !== "faq" &&
        fs.existsSync(path.join(learnDir, entry.name, "page.tsx"))
    )
    .map((entry) => entry.name);
}

/**
 * Dynamically discover all answer page slugs.
 */
function getAllAnswerSlugs(): string[] {
  const answersDir = path.join(process.cwd(), "src/app/answers");
  if (!fs.existsSync(answersDir)) return [];

  return fs
    .readdirSync(answersDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(answersDir, entry.name, "page.tsx"))
    )
    .map((entry) => entry.name);
}

import {
  CANONICAL_ALIAS_PATHS,
  NOINDEX_LEARN_SLUGS,
  NOINDEX_PATHS,
} from "@/lib/seo/noindex-pages";

const JULY_29_REVIEW = new Date("2026-07-29T12:00:00Z");

const reviewedStaticPaths = new Set([
  "",
  "/learn",
  "/answers",
  ...LEARN_HUBS.map((hub) => `/learn/${hub.slug}`),
]);

const reviewedLearnSlugs = new Set(["what-is-xrp", "how-to-buy-xrp"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allaboutxrp.com";

  // ── Core / static pages ──────────────────────────────────────────────
  const staticPages: string[] = [
    "",
    "/live-chart",
    "/news",
    "/holders",
    "/digest",
    "/how-to-start",

    // Learn hub
    "/learn",
    "/learn/faq",
    ...LEARN_HUBS.map((hub) => `/learn/${hub.slug}`),

    // Best / recommendations (noindexed — excluded from sitemap)

    // Trust / E-E-A-T pages
    "/about",
    "/editorial",

    // Answers hub
    "/answers",

    // Tools
    "/tools",
    "/tools/price-alerts",
    "/tools/xrp-profit-calculator",
    "/tools/xrp-fee-calculator",

  ];

  // ── Dynamic: learn pages (filesystem-discovered) ─────────────────────
  const learnSlugs = getAllLearnSlugs();
  const answerSlugs = getAllAnswerSlugs();
  const recaps = getAllRecaps();

  return [
    // Static pages
    ...staticPages
      .filter((pagePath) => !NOINDEX_PATHS.has(pagePath))
      .map((pagePath) => ({
        url: `${baseUrl}${pagePath}`,
        ...(reviewedStaticPaths.has(pagePath) && { lastModified: JULY_29_REVIEW }),
      })),

    // All learn pages (auto-discovered, excluding noindexed)
    ...learnSlugs
      .filter(
        (slug) =>
          !NOINDEX_LEARN_SLUGS.has(slug) &&
          !CANONICAL_ALIAS_PATHS.has(`/learn/${slug}`),
      )
      .map((slug) => ({
        url: `${baseUrl}/learn/${slug}`,
        ...(reviewedLearnSlugs.has(slug) && { lastModified: JULY_29_REVIEW }),
      })),

    // All answer pages (auto-discovered)
    ...answerSlugs
      .filter((slug) => !CANONICAL_ALIAS_PATHS.has(`/answers/${slug}`))
      .map((slug) => ({
        url: `${baseUrl}/answers/${slug}`,
      })),

    // News recaps
    {
      url: `${baseUrl}/news/recaps`,
    },
    ...recaps.map((r) => ({
      url: `${baseUrl}/news/recaps/${r.date}`,
      lastModified: new Date(r.date + "T12:00:00Z"),
    })),

    // FAQ individual pages excluded — thin content, FAQ hub is canonical
  ];
}
