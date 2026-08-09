import { NextRequest, NextResponse } from "next/server";
import { getAllNewsArticles } from "@/lib/news-content";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const limit = Math.min(Math.max(Number(request.nextUrl.searchParams.get("limit") || 20), 1), 50);
  const offset = Math.max(Number(request.nextUrl.searchParams.get("offset") || 0), 0);
  const articles = getAllNewsArticles().slice(offset, offset + limit).map((article) => ({
    title: article.title,
    simple_title: article.title,
    url: `/news/${article.slug}`,
    source: "AllAboutXRP Research Desk",
    summary: article.description,
    og_image: article.image || `/news/${article.slug}/opengraph-image`,
    published_at: article.publishedAt,
    importance_score: 10,
    sentiment: "neutral",
    slug: article.slug,
    has_blog_content: true,
  }));
  return NextResponse.json(articles);
}
