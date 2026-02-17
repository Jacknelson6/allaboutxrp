import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const limit = Math.min(Number(searchParams.get("limit") ?? 20), 50);
  const offset = Number(searchParams.get("offset") ?? 0);

  const supabase = createServiceClient();

  // Try with sentiment column, fall back without
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let data: any[] | null = null;
  let error: { message: string } | null = null;

  // Op-ed / opinion filter keywords applied at query level
  const OP_ED_KEYWORDS = ["opinion:", "op-ed:", "editorial:", "column:", "commentary:"];

  const r1 = await supabase
    .from("news_articles")
    .select("title, simple_title, url, source, summary, og_image, published_at, importance_score, sentiment")
    .gte("importance_score", 7)
    .order("published_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (r1.error?.code === "42703") {
    const r2 = await supabase
      .from("news_articles")
      .select("title, simple_title, url, source, summary, og_image, published_at, importance_score")
      .gte("importance_score", 7)
      .order("published_at", { ascending: false })
      .range(offset, offset + limit - 1);
    data = r2.data;
    error = r2.error;
  } else {
    data = r1.data;
    error = r1.error;
  }

  // Client-side op-ed filter (catches anything the AI missed)
  if (data) {
    data = data.filter((a: { title: string }) => {
      const t = a.title.toLowerCase();
      return !OP_ED_KEYWORDS.some((kw) => t.startsWith(kw)) &&
        !t.includes("opinion:") && !t.includes("editorial:");
    });
  }

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}
