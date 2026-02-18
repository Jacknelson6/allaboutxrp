import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// Secret to protect the endpoint (use any string as a simple auth)
const CRON_SECRET = process.env.CRON_SECRET || "xrp-daily-digest-2026";

export async function POST(request: NextRequest) {
  // Simple auth check
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = createServiceClient();

    // Get yesterday's date in CT
    const now = new Date();
    const ct = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
    const yesterday = new Date(ct);
    yesterday.setDate(yesterday.getDate() - 1);
    const dateStr = yesterday.toISOString().split("T")[0];

    // Check if digest already exists for this date
    const { data: existing } = await supabase
      .from("daily_digests")
      .select("id")
      .eq("date", dateStr)
      .single();

    if (existing) {
      return NextResponse.json({ message: "Digest already exists for " + dateStr });
    }

    // Fetch yesterday's news articles
    const startOfDay = dateStr + "T00:00:00Z";
    const endOfDay = dateStr + "T23:59:59Z";

    const { data: articles, error: newsError } = await supabase
      .from("news")
      .select("title, simple_title, summary, source, sentiment, importance_score, published_at")
      .gte("published_at", startOfDay)
      .lte("published_at", endOfDay)
      .order("importance_score", { ascending: false })
      .limit(30);

    if (newsError) {
      return NextResponse.json({ error: "Failed to fetch news: " + newsError.message }, { status: 500 });
    }

    if (!articles || articles.length === 0) {
      return NextResponse.json({ message: "No articles found for " + dateStr });
    }

    // Fetch XRP price data from CoinGecko
    let xrpOpen: number | null = null;
    let xrpClose: number | null = null;
    let xrpChangePct: number | null = null;

    try {
      // CoinGecko market_chart/range for the day
      const startUnix = Math.floor(new Date(startOfDay).getTime() / 1000);
      const endUnix = Math.floor(new Date(endOfDay).getTime() / 1000);
      const cgRes = await fetch(
        `https://api.coingecko.com/api/v3/coins/ripple/market_chart/range?vs_currency=usd&from=${startUnix}&to=${endUnix}`,
        { headers: { accept: "application/json" } }
      );
      if (cgRes.ok) {
        const cgData = await cgRes.json();
        if (cgData.prices && cgData.prices.length > 1) {
          xrpOpen = cgData.prices[0][1];
          xrpClose = cgData.prices[cgData.prices.length - 1][1];
          if (xrpOpen && xrpClose) {
            xrpChangePct = ((xrpClose - xrpOpen) / xrpOpen) * 100;
          }
        }
      }
    } catch {
      // Price data is optional
    }

    // Build prompt for daily summary
    const articleList = articles
      .slice(0, 15)
      .map((a, i) => `${i + 1}. [${a.sentiment || "neutral"}] ${a.simple_title || a.title}\n   ${a.summary || "No summary"}`)
      .join("\n");

    const priceContext = xrpOpen && xrpClose
      ? `XRP opened at $${xrpOpen.toFixed(4)} and closed at $${xrpClose.toFixed(4)} (${xrpChangePct! >= 0 ? "+" : ""}${xrpChangePct!.toFixed(2)}%).`
      : "XRP price data unavailable for this period.";

    const prompt = `You are a crypto news analyst writing for AllAboutXRP.com. Write a structured daily summary for ${dateStr}.

${priceContext}

Here are the top ${articles.length} XRP-related articles from yesterday:

${articleList}

Write a daily recap using this EXACT markdown structure:

TITLE: [short engaging title, max 80 chars]
SENTIMENT: [Bullish or Bearish or Neutral]
---
## Key Takeaways
- [Most important point 1]
- [Most important point 2]
- [Most important point 3]
- [Optional point 4]
- [Optional point 5]

## Summary
[3-5 paragraphs covering the day's news. Open with the biggest development. Cover price action if available. Group related stories. Professional tone, slightly bullish-leaning but honest. No hype. Under 400 words.]

## What to Watch
- [Thing to watch 1]
- [Thing to watch 2]
- [Thing to watch 3]

Rules:
- 3-5 key takeaways (short, punchy bullet points)
- 2-4 "what to watch" items
- Sentiment should reflect the overall tone of the day's news
- Keep the summary paragraphs flowing and readable`;

    // Call OpenRouter (Claude Sonnet)
    const openrouterKey = process.env.OPENROUTER_API_KEY;
    if (!openrouterKey) {
      return NextResponse.json({ error: "Missing OPENROUTER_API_KEY" }, { status: 500 });
    }

    const aiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openrouterKey}`,
        "HTTP-Referer": "https://allaboutxrp.com",
        "X-Title": "AllAboutXRP Daily Digest",
      },
      body: JSON.stringify({
        model: "anthropic/claude-sonnet-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      return NextResponse.json({ error: "AI generation failed: " + errText }, { status: 500 });
    }

    const aiData = await aiRes.json();
    const aiText = aiData.choices?.[0]?.message?.content || "";

    // Parse title, sentiment, and summary
    let title = `XRP Daily Recap — ${new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
    let summary = aiText;

    const titleMatch = aiText.match(/^TITLE:\s*(.+)/m);
    if (titleMatch) {
      title = titleMatch[1].trim();
    }

    // Extract sentiment from the SENTIMENT: line (before the ---)
    const sentimentMatch = aiText.match(/^SENTIMENT:\s*(Bullish|Bearish|Neutral)/mi);
    const digestSentiment = sentimentMatch ? sentimentMatch[1].toLowerCase() : "neutral";

    // Strip header lines (TITLE/SENTIMENT) and separator, keep structured markdown body
    const separatorIdx = aiText.indexOf("---");
    if (separatorIdx !== -1) {
      summary = aiText.slice(separatorIdx + 3).trim();
    } else {
      summary = aiText.replace(/^TITLE:.*\n*/m, "").replace(/^SENTIMENT:.*\n*/m, "").trim();
    }

    // Prepend sentiment as a hidden metadata line in the summary
    const summaryWithMeta = `<!-- sentiment:${digestSentiment} -->\n${summary}`;

    // Store in Supabase
    const { error: insertError } = await supabase.from("daily_digests").insert({
      date: dateStr,
      title,
      summary: summaryWithMeta,
      xrp_open: xrpOpen,
      xrp_close: xrpClose,
      xrp_change_pct: xrpChangePct,
      article_count: articles.length,
    });

    if (insertError) {
      return NextResponse.json({
        error: "Failed to store digest: " + insertError.message,
        hint: "You may need to create the daily_digests table. See supabase/migrations/20260217_daily_digests.sql",
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      date: dateStr,
      title,
      article_count: articles.length,
      has_price: !!xrpOpen,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// Also support GET for testing (returns latest digests)
export async function GET() {
  const supabase = createServiceClient();

  const { data, error } = await supabase
    .from("daily_digests")
    .select("*")
    .order("date", { ascending: false })
    .limit(10);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}
