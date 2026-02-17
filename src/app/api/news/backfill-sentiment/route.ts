import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

const PROMPT = `You are classifying XRP news articles by sentiment AND quality. For each article:

1. Is this MARKET-MOVING news that a serious XRP investor needs to know? (yes/no)
2. If yes, classify as "bullish" or "bearish" based on likely XRP price/ecosystem impact
3. If no (celebrity drama, clickbait, speculation, opinion, not directly XRP-related), mark as "reject"

REJECT these types:
- Celebrity/influencer crypto news
- Price prediction clickbait
- Op-eds, opinion pieces
- General crypto news that only mentions XRP in passing
- Speculation without new facts
- NFT/meme coin news

Return JSON array: [{"index": 0, "sentiment": "bullish"}, {"index": 1, "sentiment": "reject"}]`;

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServiceClient();

  const { data: articles, error } = await supabase
    .from("news_articles")
    .select("id, title, summary, sentiment")
    .order("published_at", { ascending: false })
    .limit(200);

  if (error || !articles) {
    return NextResponse.json({ error: error?.message ?? "No articles" }, { status: 500 });
  }

  const articlesText = articles
    .map((a, i) => `${i}. "${a.title}" — ${a.summary || "No summary"}`)
    .join("\n");

  const openrouterKey = process.env.OPENROUTER_API_KEY;
  if (!openrouterKey) {
    return NextResponse.json({ error: "No OpenRouter key" }, { status: 500 });
  }

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openrouterKey}`,
      "HTTP-Referer": "https://allaboutxrp.com",
      "X-Title": "AllAboutXRP Sentiment Backfill",
    },
    body: JSON.stringify({
      model: "moonshotai/kimi-k2.5",
      messages: [
        { role: "system", content: PROMPT },
        { role: "user", content: articlesText },
      ],
      temperature: 0.2,
      max_tokens: 4000,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: `OpenRouter: ${res.status}` }, { status: 500 });
  }

  const data = await res.json();
  const responseText = data.choices?.[0]?.message?.content ?? "[]";
  const jsonMatch = responseText.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    return NextResponse.json({ error: "Parse failed", raw: responseText.slice(0, 500) }, { status: 500 });
  }

  const scored: { index: number; sentiment: string }[] = JSON.parse(jsonMatch[0]);

  let updated = 0;
  let rejected = 0;

  for (const s of scored) {
    const article = articles[s.index];
    if (!article) continue;

    if (s.sentiment === "reject") {
      // Delete junk articles
      await supabase.from("news_articles").delete().eq("id", article.id);
      rejected++;
    } else if (s.sentiment === "bullish" || s.sentiment === "bearish") {
      await supabase
        .from("news_articles")
        .update({ sentiment: s.sentiment })
        .eq("id", article.id);
      updated++;
    }
  }

  return NextResponse.json({
    total: articles.length,
    updated,
    rejected,
    kept: articles.length - rejected,
  });
}
