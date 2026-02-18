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

  // Primary: read from "news" table (populated by N8N, enriched by /api/news/enrich)
  const { data, error } = await supabase
    .from("news")
    .select("title, simple_title, url, source, summary, og_image, published_at, importance_score, sentiment")
    .gte("importance_score", 6)
    .order("published_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    // Fallback if columns don't exist yet
    const { data: fallback, error: fbErr } = await supabase
      .from("news")
      .select("title, url, source, summary, published_at")
      .order("published_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (fbErr) return NextResponse.json({ error: fbErr.message }, { status: 500 });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const normalized = (fallback ?? []).map((a: any) => ({
      ...a, simple_title: null, og_image: null, importance_score: 8, sentiment: null,
    }));
    return NextResponse.json(normalized);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let articles = (data ?? []).map((a: any) => ({ ...a }));

  // Client-side op-ed filter
  articles = articles.filter((a: { title: string }) => {
    const t = a.title.toLowerCase();
    return !OP_ED_KEYWORDS.some((kw) => t.startsWith(kw)) &&
      !t.includes("opinion:") && !t.includes("editorial:");
  });

  return NextResponse.json(articles);
}
