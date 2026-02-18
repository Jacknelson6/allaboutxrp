import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function POST() {
  const supabase = createServiceClient();

  // Find articles with slug but no blog_content
  const { data: articles, error } = await supabase
    .from("news")
    .select("id")
    .not("slug", "is", null)
    .is("blog_content", null)
    .not("summary", "is", null)
    .gte("importance_score", 6)
    .order("published_at", { ascending: false })
    .limit(10);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!articles || articles.length === 0) {
    return NextResponse.json({ generated: 0, message: "No articles need blog content" });
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const results: { id: string; success: boolean; error?: string }[] = [];

  for (const article of articles) {
    try {
      const res = await fetch(`${baseUrl}/api/news/generate-blog`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: article.id }),
      });

      if (res.ok) {
        results.push({ id: article.id, success: true });
      } else {
        const err = await res.json();
        results.push({ id: article.id, success: false, error: err.error });
      }
    } catch (err) {
      results.push({
        id: article.id,
        success: false,
        error: err instanceof Error ? err.message : "Unknown",
      });
    }

    // Small delay between requests
    await new Promise((r) => setTimeout(r, 1000));
  }

  const succeeded = results.filter((r) => r.success).length;
  return NextResponse.json({
    generated: succeeded,
    total: articles.length,
    results,
  });
}
