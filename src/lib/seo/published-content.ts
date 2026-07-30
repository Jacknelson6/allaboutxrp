import { cache } from "react";
import {
  createServiceClient,
  isSupabaseServiceConfigured,
} from "@/lib/supabase/server";

const SAFE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const PUBLIC_SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://allaboutxrp.com"
).replace(/\/$/, "");

export interface PublishedNewsEntry {
  slug: string;
  title: string;
  publishedAt: string;
}

export interface PublishedDigestEntry {
  id: string;
  title: string;
  slug: string;
  weekStart: string;
  weekEnd: string;
  publishedAt: string;
}

function isValidPublishedEntry(slug: unknown, publishedAt: unknown): slug is string {
  return (
    typeof slug === "string" &&
    SAFE_SLUG.test(slug) &&
    typeof publishedAt === "string" &&
    !Number.isNaN(Date.parse(publishedAt))
  );
}

async function getPublicNewsEntries(): Promise<PublishedNewsEntry[]> {
  try {
    const response = await fetch(`${PUBLIC_SITE_URL}/api/news?limit=50`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];

    const rows: unknown = await response.json();
    if (!Array.isArray(rows)) return [];

    return rows
      .filter(
        (row): row is Record<string, unknown> =>
          Boolean(row) &&
          typeof row === "object" &&
          row.has_blog_content === true &&
          isValidPublishedEntry(row.slug, row.published_at),
      )
      .map((row) => ({
        slug: row.slug as string,
        title: String(row.simple_title || row.title || "XRP News Update"),
        publishedAt: row.published_at as string,
      }));
  } catch {
    return [];
  }
}

async function getPublicDigestEntries(): Promise<PublishedDigestEntry[]> {
  try {
    const response = await fetch(`${PUBLIC_SITE_URL}/api/digests`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];

    const rows: unknown = await response.json();
    if (!Array.isArray(rows)) return [];

    return rows
      .filter(
        (row): row is Record<string, unknown> =>
          Boolean(row) &&
          typeof row === "object" &&
          isValidPublishedEntry(row.slug, row.published_at),
      )
      .map((row) => ({
        id: String(row.id),
        title: String(row.title || "Weekly XRP Digest"),
        slug: row.slug as string,
        weekStart: String(row.week_start),
        weekEnd: String(row.week_end),
        publishedAt: row.published_at as string,
      }));
  } catch {
    return [];
  }
}

/**
 * Returns only article pages with substantial first-party content. Wire stories
 * that have only an outbound summary remain out of the sitemap to avoid thin or
 * duplicative search results.
 */
export const getPublishedNewsEntries = cache(async (): Promise<PublishedNewsEntry[]> => {
  if (!isSupabaseServiceConfigured()) return getPublicNewsEntries();

  try {
    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from("news")
      .select("slug, title, simple_title, published_at")
      .not("slug", "is", null)
      .not("blog_content", "is", null)
      .neq("blog_content", "")
      .gte("importance_score", 6)
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false })
      .limit(1000);

    if (error) {
      console.error("Unable to load published news for sitemap:", error.message);
      return [];
    }

    return (data ?? [])
      .filter((row) => isValidPublishedEntry(row.slug, row.published_at))
      .map((row) => ({
        slug: row.slug as string,
        title: row.simple_title || row.title,
        publishedAt: row.published_at as string,
      }));
  } catch (error) {
    console.error(
      "Unable to load published news for sitemap:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return [];
  }
});

export const getPublishedDigestEntries = cache(async (): Promise<PublishedDigestEntry[]> => {
  if (!isSupabaseServiceConfigured()) return getPublicDigestEntries();

  try {
    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from("digests")
      .select("id, title, slug, week_start, week_end, published_at")
      .not("published_at", "is", null)
      .lte("published_at", new Date().toISOString())
      .order("week_end", { ascending: false });

    if (error) {
      console.error("Unable to load published digests for sitemap:", error.message);
      return [];
    }

    return (data ?? [])
      .filter((row) => isValidPublishedEntry(row.slug, row.published_at))
      .map((row) => ({
        id: row.id,
        title: row.title,
        slug: row.slug as string,
        weekStart: row.week_start,
        weekEnd: row.week_end,
        publishedAt: row.published_at as string,
      }));
  } catch (error) {
    console.error(
      "Unable to load published digests for sitemap:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return [];
  }
});

export const getPublishedDigestEntry = cache(
  async (slug: string): Promise<PublishedDigestEntry | null> => {
    if (!SAFE_SLUG.test(slug)) return null;
    if (!isSupabaseServiceConfigured()) {
      const digests = await getPublicDigestEntries();
      return digests.find((digest) => digest.slug === slug) ?? null;
    }

    try {
      const supabase = createServiceClient();
      const { data, error } = await supabase
        .from("digests")
        .select("id, title, slug, week_start, week_end, published_at")
        .eq("slug", slug)
        .not("published_at", "is", null)
        .lte("published_at", new Date().toISOString())
        .single();

      if (error || !data || !isValidPublishedEntry(data.slug, data.published_at)) {
        return null;
      }

      return {
        id: data.id,
        title: data.title,
        slug: data.slug,
        weekStart: data.week_start,
        weekEnd: data.week_end,
        publishedAt: data.published_at,
      };
    } catch {
      return null;
    }
  },
);
