import type { MetadataRoute } from "next";
import { getAllFAQSlugs } from "@/lib/utils/faq";
import { getAllRecaps } from "@/lib/utils/news";
import fs from "fs";
import path from "path";

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

import { NOINDEX_LEARN_SLUGS } from "@/lib/seo/noindex-pages";

/** Top learn pages get priority 0.9 instead of default 0.75 */
const TOP_LEARN_SLUGS = new Set([
  "what-is-xrp",
  "how-to-buy-xrp",
  "sec-vs-ripple",
  "partnerships",
  "escrow",
  "rlusd",
  "xrp-etf",
  "xrp-price-prediction",
  "history",
  "what-makes-xrp-different",
  "xrp-vs-bitcoin",
  "xrp-vs-ethereum",
  "how-does-xrp-work",
  "is-xrp-a-good-investment",
  "xrp-ledger-explained",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allaboutxrp.com";
  const now = new Date("2026-02-11T12:00:00Z");

  // ── Core / static pages ──────────────────────────────────────────────
  const staticPages: {
    path: string;
    changeFrequency: "hourly" | "daily" | "weekly" | "monthly";
    priority: number;
  }[] = [
    { path: "", changeFrequency: "hourly", priority: 1.0 },
    { path: "/live-chart", changeFrequency: "hourly", priority: 0.9 },
    { path: "/news", changeFrequency: "hourly", priority: 0.9 },
    { path: "/holders", changeFrequency: "daily", priority: 0.8 },
    { path: "/digest", changeFrequency: "daily", priority: 0.85 },
    { path: "/how-to-start", changeFrequency: "weekly", priority: 0.85 },

    // Learn hub
    { path: "/learn", changeFrequency: "weekly", priority: 0.85 },
    { path: "/learn/faq", changeFrequency: "weekly", priority: 0.8 },

    // Best / recommendations (noindexed — excluded from sitemap)

    // Trust / E-E-A-T pages
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/editorial", changeFrequency: "monthly", priority: 0.7 },

    // Answers hub
    { path: "/answers", changeFrequency: "weekly", priority: 0.8 },

    // Tools
    { path: "/tools", changeFrequency: "weekly", priority: 0.75 },
    { path: "/tools/xrp-profit-calculator", changeFrequency: "monthly", priority: 0.7 },
    { path: "/tools/xrp-fee-calculator", changeFrequency: "monthly", priority: 0.7 },

    // Extension
    { path: "/extension", changeFrequency: "monthly", priority: 0.7 },

    // Other
    { path: "/privacy-policy", changeFrequency: "monthly", priority: 0.3 },
    { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
  ];

  // ── Dynamic: learn pages (filesystem-discovered) ─────────────────────
  const learnSlugs = getAllLearnSlugs();
  const answerSlugs = getAllAnswerSlugs();
  const faqSlugs = getAllFAQSlugs();
  const recaps = getAllRecaps();

  return [
    // Static pages
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),

    // All learn pages (auto-discovered, excluding noindexed)
    ...learnSlugs
      .filter((slug) => !NOINDEX_LEARN_SLUGS.has(slug))
      .map((slug) => ({
        url: `${baseUrl}/learn/${slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: TOP_LEARN_SLUGS.has(slug) ? 0.9 : 0.75,
      })),

    // All answer pages (auto-discovered)
    ...answerSlugs.map((slug) => ({
      url: `${baseUrl}/answers/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // News recaps
    {
      url: `${baseUrl}/news/recaps`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    ...recaps.map((r) => ({
      url: `${baseUrl}/news/recaps/${r.date}`,
      lastModified: new Date(r.date + "T12:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // FAQ individual pages excluded — thin content, FAQ hub is canonical
  ];
}
