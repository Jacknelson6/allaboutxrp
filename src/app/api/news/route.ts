import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

// Simple keyword-based sentiment classification
function classifySentiment(title: string, summary: string): "bullish" | "bearish" | "neutral" {
  const text = `${title} ${summary}`.toLowerCase();

  const bullishTerms = [
    "surge", "soar", "rally", "breakout", "bullish", "pump", "gain", "rise",
    "approval", "approved", "partnership", "adoption", "launch", "milestone",
    "record high", "all-time high", "ath", "etf approval", "institutional",
    "accumulate", "buy", "upgrade", "positive", "growth", "breakthrough",
    "integration", "listing", "support", "momentum", "uptrend", "bull",
    "optimistic", "confident", "victory", "win", "settlement", "clarity",
    "green light", "endorsement", "embrace",
  ];

  const bearishTerms = [
    "crash", "plunge", "dump", "bearish", "decline", "drop", "fall", "sell",
    "lawsuit", "sued", "sec action", "fine", "penalty", "hack", "exploit",
    "ban", "restrict", "warning", "risk", "fear", "concern", "negative",
    "downtrend", "bear", "rejection", "delay", "postpone", "loss", "delist",
    "fraud", "scam", "investigation", "subpoena", "enforcement",
  ];

  let bullScore = 0;
  let bearScore = 0;

  for (const term of bullishTerms) {
    if (text.includes(term)) bullScore++;
  }
  for (const term of bearishTerms) {
    if (text.includes(term)) bearScore++;
  }

  if (bullScore > bearScore && bullScore >= 1) return "bullish";
  if (bearScore > bullScore && bearScore >= 1) return "bearish";
  return "neutral";
}

export async function GET() {
  try {
    const supabase = createServiceClient();

    const { data, error } = await supabase
      .from("news_articles")
      .select("title, url, source, summary, og_image, published_at, importance_score, sentiment")
      .order("published_at", { ascending: false })
      .limit(30);

    if (error) {
      console.error("News query error:", error);
      return NextResponse.json([], { status: 500 });
    }

    const articles = (data ?? []).map((row) => ({
      title: row.title,
      source: row.source,
      url: row.url,
      imageUrl: row.og_image,
      summary: row.summary ?? "",
      publishedAt: row.published_at,
      sentiment: row.sentiment || classifySentiment(row.title, row.summary ?? ""),
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
