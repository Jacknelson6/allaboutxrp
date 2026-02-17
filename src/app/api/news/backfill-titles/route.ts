import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const PROMPT = `You are rewriting news headlines for an XRP-focused site. For each article, write a "simple_title": a very short, plain-language headline that tells the reader exactly what happened. No clickbait, no colons, no jargon. Write it like you're explaining to a friend.

Examples:
- "One Day to Go: XRP Ledger Set to Welcome DEX Upgrade" → "XRP Ledger getting a DEX upgrade tomorrow"
- "Ripple CEO Sees Major Legal Victory Likely This Spring" → "Ripple's CEO expects to win the SEC case this spring"
- "XRP Network Activity Down 26% as Active Addresses Fall to 40,778" → "XRP network activity dropped 26% this week"

Return a JSON array: [{"index": 0, "simple_title": "..."}]`;

export async function GET(request: NextRequest) {
  const secret =
    request.headers.get("authorization")?.replace("Bearer ", "") ??
    request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServiceClient();
  const { data: articles, error } = await supabase
    .from("news_articles")
    .select("id, title, summary")
    .is("simple_title", null)
    .order("published_at", { ascending: false });

  if (error || !articles?.length) {
    return NextResponse.json({ updated: 0, message: error?.message || "No articles need titles" });
  }

  const articlesText = articles
    .map((a: { title: string; summary: string | null }, i: number) => `${i}. "${a.title}" — ${a.summary || ""}`)
    .join("\n");

  const openrouterKey = process.env.OPENROUTER_API_KEY;
  if (!openrouterKey) return NextResponse.json({ error: "No API key" }, { status: 500 });

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openrouterKey}`,
    },
    body: JSON.stringify({
      model: "moonshotai/kimi-k2.5",
      messages: [
        { role: "system", content: PROMPT },
        { role: "user", content: articlesText },
      ],
      temperature: 0.3,
      max_tokens: 2000,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "AI failed" }, { status: 500 });

  const data = await res.json();
  const text = data.choices?.[0]?.message?.content ?? "[]";
  const jsonMatch = text.match(/\[[\s\S]*\]/);
  if (!jsonMatch) return NextResponse.json({ error: "Parse failed" }, { status: 500 });

  const results: { index: number; simple_title: string }[] = JSON.parse(jsonMatch[0]);

  let updated = 0;
  for (const r of results) {
    const article = articles[r.index] as { id: string };
    if (!article || !r.simple_title) continue;
    const { error: updateErr } = await supabase
      .from("news_articles")
      .update({ simple_title: r.simple_title })
      .eq("id", article.id);
    if (!updateErr) updated++;
  }

  return NextResponse.json({ updated, total: articles.length });
}
