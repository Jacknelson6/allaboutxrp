import { cache } from "react";
import { getAllNewsArticles } from "@/lib/news-content";

export interface PublishedNewsEntry {
  slug: string;
  title: string;
  publishedAt: string;
}

/**
 * Returns only article pages with substantial first-party content. Wire stories
 * that have only an outbound summary remain out of the sitemap to avoid thin or
 * duplicative search results.
 */
export const getPublishedNewsEntries = cache(async (): Promise<PublishedNewsEntry[]> => {
  return getAllNewsArticles().map((article) => ({
    slug: article.slug,
    title: article.title,
    publishedAt: article.publishedAt,
  }));
});
