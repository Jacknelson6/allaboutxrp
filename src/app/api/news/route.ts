import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

// ── Route handler — reads pre-curated articles from Supabase ───────────
export async function GET() {
  try {
    const supabase = createServiceClient();

    const { data, error } = await supabase
      .from("news_articles")
      .select("title, url, source, summary, og_image, published_at, importance_score")
      .order("published_at", { ascending: false })
      .limit(20);

    if (error) {
      console.error("News query error:", error);
      return NextResponse.json([], { status: 500 });
    }

    // Map to frontend shape
    const articles = (data ?? []).map((row) => ({
      title: row.title,
      source: row.source,
      url: row.url,
      imageUrl: row.og_image,
      summary: row.summary ?? "",
      publishedAt: row.published_at,
    }));

    return NextResponse.json(articles, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (err) {
    console.error("News route error:", err);
    return NextResponse.json([], { status: 500 });
  }
}
