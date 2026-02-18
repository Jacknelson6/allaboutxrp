import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { generateBlogForArticle } from "@/lib/generate-blog-content";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function POST() {
  const supabase = createServiceClient();

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

  const results: { id: string; success: boolean; error?: string }[] = [];

  for (const article of articles) {
    const result = await generateBlogForArticle(article.id);
    results.push({ id: article.id, ...result });

    // Small delay between requests to avoid rate limiting
    await new Promise((r) => setTimeout(r, 1000));
  }

  const succeeded = results.filter((r) => r.success).length;
  return NextResponse.json({
    generated: succeeded,
    total: articles.length,
    results,
  });
}
