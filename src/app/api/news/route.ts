import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const limit = Math.min(Number(searchParams.get("limit") ?? 20), 50);
  const offset = Number(searchParams.get("offset") ?? 0);

  const supabase = createServiceClient();

  // Op-ed / opinion filter keywords applied at query level
  const OP_ED_KEYWORDS = ["opinion:", "op-ed:", "editorial:", "column:", "commentary:"];

  // Primary: read from "news" table (populated by N8N workflow)
  const { data, error } = await supabase
    .from("news")
    .select("title, url, source, summary, published_at")
    .order("published_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Normalize to match frontend Article interface (fill missing fields)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let articles = (data ?? []).map((a: any) => ({
    title: a.title,
    simple_title: null,
    url: a.url,
    source: a.source,
    summary: a.summary,
    og_image: null,
    published_at: a.published_at,
    importance_score: 8,
    sentiment: null,
  }));

  // Client-side op-ed filter
  articles = articles.filter((a: { title: string }) => {
    const t = a.title.toLowerCase();
    return !OP_ED_KEYWORDS.some((kw) => t.startsWith(kw)) &&
      !t.includes("opinion:") && !t.includes("editorial:");
  });

  return NextResponse.json(articles);
}
