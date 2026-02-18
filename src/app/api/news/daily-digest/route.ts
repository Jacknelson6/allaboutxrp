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

    // --- TA Helper Functions ---
    function calcEMA(data: number[], period: number): number[] {
      const k = 2 / (period + 1);
      const ema: number[] = [];
      // Seed with SMA
      const sma = data.slice(0, period).reduce((a, b) => a + b, 0) / period;
      ema.push(sma);
      for (let i = period; i < data.length; i++) {
        ema.push(data[i] * k + ema[ema.length - 1] * (1 - k));
      }
      return ema;
    }

    function calcSMA(data: number[], period: number): number {
      const slice = data.slice(-period);
      return slice.reduce((a, b) => a + b, 0) / slice.length;
    }

    function calcStdDev(data: number[], period: number): number {
      const slice = data.slice(-period);
      const mean = slice.reduce((a, b) => a + b, 0) / slice.length;
      const variance = slice.reduce((sum, val) => sum + (val - mean) ** 2, 0) / slice.length;
      return Math.sqrt(variance);
    }

    // Fetch TA data: 30-day OHLC + market_chart for volume
    let taContext = "";
    try {
      const [ohlcRes, marketChartRes] = await Promise.all([
        fetch("https://api.coingecko.com/api/v3/coins/ripple/ohlc?vs_currency=usd&days=30", { headers: { accept: "application/json" } }),
        fetch("https://api.coingecko.com/api/v3/coins/ripple/market_chart?vs_currency=usd&days=30", { headers: { accept: "application/json" } }),
      ]);

      const ohlcData: number[][] = ohlcRes.ok ? await ohlcRes.json() : [];
      const marketData = marketChartRes.ok ? await marketChartRes.json() : null;

      if (ohlcData.length >= 26) {
        const closes = ohlcData.map((c) => c[4]);
        const latestClose = closes[closes.length - 1];

        // --- RSI (14) ---
        const changes = closes.slice(1).map((c, i) => c - closes[i]);
        const gains = changes.map((c) => (c > 0 ? c : 0));
        const losses = changes.map((c) => (c < 0 ? -c : 0));
        const avgGain = gains.slice(-14).reduce((a, b) => a + b, 0) / 14;
        const avgLoss = losses.slice(-14).reduce((a, b) => a + b, 0) / 14;
        const rsi = avgLoss === 0 ? 100 : 100 - 100 / (1 + avgGain / avgLoss);

        // --- SMAs ---
        const sma7 = calcSMA(closes, 7);
        const sma14 = calcSMA(closes, 14);
        const sma20 = calcSMA(closes, 20);

        // --- Support / Resistance ---
        const recentHighs = ohlcData.slice(-14).map((c) => c[2]);
        const recentLows = ohlcData.slice(-14).map((c) => c[3]);
        const resistance = Math.max(...recentHighs);
        const support = Math.min(...recentLows);

        // --- MACD (12/26/9) ---
        const ema12 = calcEMA(closes, 12);
        const ema26 = calcEMA(closes, 26);
        // Align: ema12 starts at index 12, ema26 at index 26. We need overlap.
        const macdLineArr: number[] = [];
        const offset12 = closes.length - ema12.length;
        const offset26 = closes.length - ema26.length;
        for (let i = offset26; i < closes.length; i++) {
          macdLineArr.push(ema12[i - offset12] - ema26[i - offset26]);
        }
        const signalArr = calcEMA(macdLineArr, 9);
        const macdLine = macdLineArr[macdLineArr.length - 1];
        const signalLine = signalArr[signalArr.length - 1];
        const histogram = macdLine - signalLine;
        const macdCrossover = macdLine > signalLine ? "Bullish (MACD above Signal)" : "Bearish (MACD below Signal)";

        // --- Bollinger Bands (20, 2) ---
        const bbMiddle = sma20;
        const bbStdDev = calcStdDev(closes, 20);
        const bbUpper = bbMiddle + 2 * bbStdDev;
        const bbLower = bbMiddle - 2 * bbStdDev;
        const bbPosition = latestClose > bbUpper - bbStdDev * 0.5 ? "Near upper band (overbought pressure)" :
          latestClose < bbLower + bbStdDev * 0.5 ? "Near lower band (oversold zone)" : "Mid-range";

        // --- Fibonacci Retracement (30-day swing) ---
        const allHighs = ohlcData.map((c) => c[2]);
        const allLows = ohlcData.map((c) => c[3]);
        const swingHigh = Math.max(...allHighs);
        const swingLow = Math.min(...allLows);
        const fibRange = swingHigh - swingLow;
        const fib236 = swingHigh - fibRange * 0.236;
        const fib382 = swingHigh - fibRange * 0.382;
        const fib500 = swingHigh - fibRange * 0.5;
        const fib618 = swingHigh - fibRange * 0.618;
        const fib786 = swingHigh - fibRange * 0.786;
        const fibLevels = [
          { level: "23.6%", price: fib236 },
          { level: "38.2%", price: fib382 },
          { level: "50.0%", price: fib500 },
          { level: "61.8%", price: fib618 },
          { level: "78.6%", price: fib786 },
        ];
        const nearestFib = fibLevels.reduce((best, f) =>
          Math.abs(f.price - latestClose) < Math.abs(best.price - latestClose) ? f : best
        );

        // --- Volume Analysis ---
        let volumeContext = "";
        if (marketData?.total_volumes?.length > 0) {
          const volumes: [number, number][] = marketData.total_volumes;
          // Aggregate to daily volumes
          const msPerDay = 24 * 60 * 60 * 1000;
          const dailyVols: number[] = [];
          const buckets = new Map<number, number[]>();
          for (const [ts, vol] of volumes) {
            const day = Math.floor(ts / msPerDay);
            if (!buckets.has(day)) buckets.set(day, []);
            buckets.get(day)!.push(vol);
          }
          const sortedDays = [...buckets.keys()].sort((a, b) => a - b);
          for (const day of sortedDays) {
            dailyVols.push(Math.max(...buckets.get(day)!));
          }
          const todayVol = dailyVols[dailyVols.length - 1];
          const avg14Vol = dailyVols.slice(-14).reduce((a, b) => a + b, 0) / Math.min(14, dailyVols.length);
          const avg30Vol = dailyVols.reduce((a, b) => a + b, 0) / dailyVols.length;
          const volVsAvg14 = ((todayVol - avg14Vol) / avg14Vol) * 100;
          const volVsAvg30 = ((todayVol - avg30Vol) / avg30Vol) * 100;
          volumeContext = `
- Latest Daily Volume: $${(todayVol / 1e9).toFixed(2)}B
- 14-day Avg Volume: $${(avg14Vol / 1e9).toFixed(2)}B (today ${volVsAvg14 >= 0 ? "+" : ""}${volVsAvg14.toFixed(1)}% vs avg)
- 30-day Avg Volume: $${(avg30Vol / 1e9).toFixed(2)}B (today ${volVsAvg30 >= 0 ? "+" : ""}${volVsAvg30.toFixed(1)}% vs avg)`;
        }

        taContext = `
Technical Indicators:
- RSI(14): ${rsi.toFixed(1)}
- 7-day SMA: $${sma7.toFixed(4)}
- 14-day SMA: $${sma14.toFixed(4)}
- 20-day SMA: $${sma20.toFixed(4)}
- 14-day Support: $${support.toFixed(4)}
- 14-day Resistance: $${resistance.toFixed(4)}
- Latest Close: $${latestClose.toFixed(4)}
- Price vs 7-SMA: ${latestClose > sma7 ? "Above" : "Below"}
- Price vs 14-SMA: ${latestClose > sma14 ? "Above" : "Below"}

MACD (12/26/9):
- MACD Line: ${macdLine.toFixed(6)}
- Signal Line: ${signalLine.toFixed(6)}
- Histogram: ${histogram.toFixed(6)}
- Crossover: ${macdCrossover}

Bollinger Bands (20, 2σ):
- Upper: $${bbUpper.toFixed(4)}
- Middle: $${bbMiddle.toFixed(4)}
- Lower: $${bbLower.toFixed(4)}
- Price Position: ${bbPosition}

Fibonacci Retracement (30-day):
- Swing High: $${swingHigh.toFixed(4)}, Swing Low: $${swingLow.toFixed(4)}
- 23.6%: $${fib236.toFixed(4)}, 38.2%: $${fib382.toFixed(4)}, 50%: $${fib500.toFixed(4)}, 61.8%: $${fib618.toFixed(4)}, 78.6%: $${fib786.toFixed(4)}
- Nearest Fib Level: ${nearestFib.level} ($${nearestFib.price.toFixed(4)})

Volume Analysis:${volumeContext || "\n- Volume data unavailable"}`;
      }
    } catch {
      // TA data is optional
    }

    // Build prompt for daily summary
    const articleList = articles
      .slice(0, 15)
      .map((a, i) => `${i + 1}. [${a.sentiment || "neutral"}] ${a.simple_title || a.title}\n   ${a.summary || "No summary"}`)
      .join("\n");

    const priceContext = xrpOpen && xrpClose
      ? `XRP opened at $${xrpOpen.toFixed(4)} and closed at $${xrpClose.toFixed(4)} (${xrpChangePct! >= 0 ? "+" : ""}${xrpChangePct!.toFixed(2)}%).`
      : "XRP price data unavailable for this period.";

    const prompt = `You are a crypto analyst writing for AllAboutXRP.com. Write a structured daily analysis for ${dateStr}.

${priceContext}
${taContext}

Here are the top ${articles.length} XRP-related articles from yesterday:

${articleList}

Write a daily analysis using this EXACT markdown structure:

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

## Technical Snapshot
[3-5 sentences. Mention RSI reading and whether it's overbought/oversold/neutral. Note MACD crossover direction (bullish/bearish). State Bollinger Band position (overbought pressure, oversold, or mid-range). Mention the nearest Fibonacci retracement level. Comment on volume relative to averages (above/below, confirming or diverging from price action). State nearest support and resistance. Keep it concise and actionable. If no TA data was provided, skip this section entirely.]

## What to Watch
- [Thing to watch 1]
- [Thing to watch 2]
- [Thing to watch 3]

Rules:
- 3-5 key takeaways (short, punchy bullet points)
- 2-4 "what to watch" items
- Technical Snapshot should be brief (2-3 sentences), not a full analysis
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
