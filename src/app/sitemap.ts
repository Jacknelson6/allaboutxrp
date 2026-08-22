import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { LEARN_HUBS } from "@/data/learn-hubs";
import { getPublishedNewsEntries } from "@/lib/seo/published-content";
import {
  CANONICAL_ALIAS_PATHS,
  NOINDEX_LEARN_SLUGS,
  NOINDEX_PATHS,
} from "@/lib/seo/noindex-pages";

export const revalidate = 3600;

const BASE_URL = "https://allaboutxrp.com";
const JULY_29_REVIEW = new Date("2026-07-29T12:00:00Z");
const AUGUST_8_REVIEW = new Date("2026-08-08T12:00:00Z");
const AUGUST_11_RECOVERY = new Date("2026-08-11T00:00:00Z");
type SitemapEntry = MetadataRoute.Sitemap[number];

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
    .map((entry) => entry.name)
    .sort();
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
    .map((entry) => entry.name)
    .sort();
}

function getSourceLastModified(relativeFile: string): Date | undefined {
  const absoluteFile = path.join(process.cwd(), relativeFile);
  if (!fs.existsSync(absoluteFile)) return undefined;

  const source = fs.readFileSync(absoluteFile, "utf8");
  const literalDate = source.match(
    /dateModified\s*:\s*["'](\d{4}-\d{2}-\d{2})["']/,
  )?.[1];

  if (literalDate) return new Date(`${literalDate}T00:00:00Z`);

  const variableName = source.match(/dateModified\s*:\s*([A-Za-z_$][\w$]*)/)?.[1];
  if (variableName) {
    const escapedName = variableName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const variableDate = source.match(
      new RegExp(`(?:const|let)\\s+${escapedName}\\s*=\\s*["'](\\d{4}-\\d{2}-\\d{2})["']`),
    )?.[1];
    if (variableDate) return new Date(`${variableDate}T00:00:00Z`);
  }

  return undefined;
}

function getLatestDate(values: string[]): Date | undefined {
  const timestamps = values.map(Date.parse).filter((value) => !Number.isNaN(value));
  return timestamps.length ? new Date(Math.max(...timestamps)) : undefined;
}

const reviewedStaticPaths = new Set([
  "",
  "/holders",
  "/how-to-start",
  "/live-chart",
  "/learn",
  "/answers",
  "/tools",
  "/tools/price-alerts",
  "/tools/xrp-fee-calculator",
  "/tools/xrp-profit-calculator",
  ...LEARN_HUBS.map((hub) => `/learn/${hub.slug}`),
]);

const augustTrustReviewPaths = new Set([
  "/about",
  "/editorial",
  "/authors/jack-nelson",
  "/corrections",
  "/learn/faq",
  "/learn/trusted-sources",
]);

const indexingRecoveryPaths = new Set([
  "/live-chart",
  "/tools/escrow-tracker",
]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ── Core / static pages ──────────────────────────────────────────────
  const staticPages: string[] = [
    "",
    "/live-chart",
    "/news",
    "/holders",
    "/how-to-start",

    // Learn hub
    "/learn",
    "/learn/faq",
    ...LEARN_HUBS.map((hub) => `/learn/${hub.slug}`),

    // Best / recommendations (noindexed — excluded from sitemap)

    // Trust / E-E-A-T pages
    "/about",
    "/contact",
    "/editorial",
    "/authors/jack-nelson",
    "/corrections",

    // Answers hub
    "/answers",

    // Tools
    "/tools",
    "/tools/price-alerts",
    "/tools/escrow-tracker",
    "/tools/xrp-profit-calculator",
    "/tools/xrp-fee-calculator",

  ];

  // ── Dynamic: learn pages (filesystem-discovered) ─────────────────────
  const learnSlugs = getAllLearnSlugs();
  const answerSlugs = getAllAnswerSlugs();
  const publishedNews = await getPublishedNewsEntries();
  const latestNewsHub = getLatestDate(publishedNews.map((article) => article.publishedAt));
  const contentHubDates = new Map<string, Date | undefined>([
    ["/news", latestNewsHub],
  ]);

  const entries: SitemapEntry[] = [
    // Static pages
    ...staticPages
      .filter((pagePath) => !NOINDEX_PATHS.has(pagePath))
      .map((pagePath) => ({
        url: `${BASE_URL}${pagePath}`,
        lastModified:
          contentHubDates.get(pagePath) ||
          (indexingRecoveryPaths.has(pagePath) && AUGUST_11_RECOVERY) ||
          (augustTrustReviewPaths.has(pagePath) && AUGUST_8_REVIEW) ||
          (reviewedStaticPaths.has(pagePath) && JULY_29_REVIEW) ||
          getSourceLastModified(
            pagePath === "" ? "src/app/page.tsx" : `src/app${pagePath}/page.tsx`,
          ),
      })),

    // All learn pages (auto-discovered, excluding noindexed)
    ...learnSlugs
      .filter(
        (slug) =>
          !NOINDEX_LEARN_SLUGS.has(slug) &&
          !CANONICAL_ALIAS_PATHS.has(`/learn/${slug}`),
      )
      .map((slug) => ({
        url: `${BASE_URL}/learn/${slug}`,
        lastModified:
          (augustTrustReviewPaths.has(`/learn/${slug}`) && AUGUST_8_REVIEW) ||
          getSourceLastModified(`src/app/learn/${slug}/page.tsx`),
      })),

    // All answer pages (auto-discovered)
    ...answerSlugs
      .filter((slug) => !CANONICAL_ALIAS_PATHS.has(`/answers/${slug}`))
      .map((slug) => ({
        url: `${BASE_URL}/answers/${slug}`,
        lastModified: getSourceLastModified(`src/app/answers/${slug}/page.tsx`),
      })),

    // Substantial first-party news articles remain in the standard sitemap
    // after they age out of the two-day Google News sitemap window. Use the
    // article's modified date (not published date) so lastmod reflects the
    // most recent edit, matching Google's crawl-freshness signal.
    ...publishedNews.map((article) => ({
      url: `${BASE_URL}/news/${article.slug}`,
      lastModified: new Date(article.modifiedAt || article.publishedAt),
    })),

    // FAQ individual pages excluded — thin content, FAQ hub is canonical
  ];

  // Keep output stable and guarantee that accidental overlaps never create
  // duplicate <loc> entries.
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()].sort(
    (a, b) => a.url.localeCompare(b.url),
  );
}
