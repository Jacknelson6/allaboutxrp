import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

const NEWS_DIR = path.join(process.cwd(), "content", "news");
const SAFE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export interface NewsSource {
  name: string;
  url: string;
  type: "primary" | "supporting";
  publishedAt?: string;
}

export interface NewsTable {
  caption: string;
  headers: string[];
  rows: string[][];
  sourceNote: string;
}

export interface NewsSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: NewsTable;
  sourceUrls: string[];
}

export interface NewsArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  modifiedAt: string;
  author: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageStyle: string;
  imageSceneKey: string;
  imageSetting: string;
  imageMetaphor: string;
  imagePrompt?: string;
  keywords: string[];
  keyTakeaways: string[];
  sections: NewsSection[];
  whatToWatch: string[];
  sources: NewsSource[];
  relatedLinks: { href: string; label: string; topic?: string; description?: string }[];
}

function isArticle(value: unknown): value is NewsArticle {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<NewsArticle>;
  return Boolean(
    typeof item.slug === "string" &&
      SAFE_SLUG.test(item.slug) &&
      typeof item.title === "string" &&
      typeof item.description === "string" &&
      typeof item.publishedAt === "string" &&
      !Number.isNaN(Date.parse(item.publishedAt)) &&
      typeof item.modifiedAt === "string" &&
      !Number.isNaN(Date.parse(item.modifiedAt)) &&
      typeof item.imageStyle === "string" &&
      typeof item.imageSceneKey === "string" &&
      typeof item.imageSetting === "string" &&
      typeof item.imageMetaphor === "string" &&
      Array.isArray(item.sections) &&
      Array.isArray(item.sources) &&
      item.sources.length >= 2,
  );
}

export const getAllNewsArticles = cache((): NewsArticle[] => {
  if (!fs.existsSync(NEWS_DIR)) return [];

  return fs
    .readdirSync(NEWS_DIR)
    .filter((file) => file.endsWith(".json") && !file.startsWith("_"))
    .map((file) => {
      try {
        const value: unknown = JSON.parse(fs.readFileSync(path.join(NEWS_DIR, file), "utf8"));
        return isArticle(value) ? value : null;
      } catch {
        return null;
      }
    })
    .filter((article): article is NewsArticle => article !== null)
    .filter((article) => Date.parse(article.publishedAt) <= Date.now())
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
});

export const getNewsArticle = cache((slug: string): NewsArticle | null => {
  if (!SAFE_SLUG.test(slug)) return null;
  return getAllNewsArticles().find((article) => article.slug === slug) ?? null;
});
