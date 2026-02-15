import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const DIGEST_PROMPT = `You are the lead analyst at AllAboutXRP.com. Write a weekly digest for XRP holders.

Based on the following news articles and price data from this week, create a digest with these sections:
1. KEY NEWS — The 3-5 most important developments. Skip this section entirely if nothing significant happened. For each item: headline + 2-3 sentence explanation of why it matters for XRP holders. Include source attribution.
2. PRICE ACTION — Weekly open, high, low, close, % change. Notable intraday moves. Skip if price was flat/boring.
3. PRICE OUTLOOK — Your expected direction (bullish/bearish/neutral) for the coming week with specific reasoning. Be opinionated, not wishy-washy.
4. MACRO WATCH — 2-4 broader market/regulatory/geopolitical factors XRP holders should monitor over the next few weeks.

Return as JSON:
{
  "title": "catchy digest title for this week",
  "key_news": [{"headline": "...", "summary": "...", "source": "...", "url": "..."}] | null,
  "price_action": {"open": number, "high": number, "low": number, "close": number, "change_pct": number, "notable_moves": "..."} | null,
  "price_outlook": {"direction": "bullish|bearish|neutral", "analysis": "..."},
  "macro_watch": [{"topic": "...", "detail": "..."}]
}`;

interface DigestContent {
  title: string;
  key_news: { headline: string; summary: string; source: string; url: string }[] | null;
  price_action: { open: number; high: number; low: number; close: number; change_pct: number; notable_moves: string } | null;
  price_outlook: { direction: string; analysis: string };
  macro_watch: { topic: string; detail: string }[];
}

function generateHtml(content: DigestContent): string {
  const sections: string[] = [];

  if (content.key_news && content.key_news.length > 0) {
    const items = content.key_news
      .map(
        (n) =>
          `<li style="margin-bottom:12px;">
            <strong><a href="${n.url}" style="color:#0085FF;text-decoration:none;">${n.headline}</a></strong>
            <br><span style="color:#e0e0e0;">${n.summary}</span>
            <br><span style="color:#888;font-size:13px;">Source: ${n.source}</span>
          </li>`
      )
      .join("");
    sections.push(`<h2 style="color:#0085FF;font-size:18px;text-transform:uppercase;letter-spacing:1px;">Key News</h2><ul style="padding-left:20px;color:#e0e0e0;">${items}</ul>`);
  }

  if (content.price_action) {
    const p = content.price_action;
    const changeColor = p.change_pct >= 0 ? "#00c853" : "#ff1744";
    sections.push(
      `<h2 style="color:#0085FF;font-size:18px;text-transform:uppercase;letter-spacing:1px;">Price Action</h2>
      <table style="width:100%;border-collapse:collapse;color:#e0e0e0;font-size:15px;">
        <tr><td style="padding:4px 8px;">Open</td><td style="padding:4px 8px;">$${p.open.toFixed(4)}</td></tr>
        <tr><td style="padding:4px 8px;">High</td><td style="padding:4px 8px;">$${p.high.toFixed(4)}</td></tr>
        <tr><td style="padding:4px 8px;">Low</td><td style="padding:4px 8px;">$${p.low.toFixed(4)}</td></tr>
        <tr><td style="padding:4px 8px;">Close</td><td style="padding:4px 8px;">$${p.close.toFixed(4)}</td></tr>
        <tr><td style="padding:4px 8px;">Change</td><td style="padding:4px 8px;color:${changeColor};font-weight:700;">${p.change_pct >= 0 ? "+" : ""}${p.change_pct.toFixed(2)}%</td></tr>
      </table>
      <p style="color:#e0e0e0;font-size:15px;line-height:1.6;">${p.notable_moves}</p>`
    );
  }

  if (content.price_outlook) {
    const dirColors: Record<string, string> = { bullish: "#00c853", bearish: "#ff1744", neutral: "#ffd600" };
    const color = dirColors[content.price_outlook.direction] || "#e0e0e0";
    sections.push(
      `<h2 style="color:#0085FF;font-size:18px;text-transform:uppercase;letter-spacing:1px;">Price Outlook</h2>
      <p style="font-size:15px;line-height:1.6;color:#e0e0e0;">
        <strong style="color:${color};text-transform:uppercase;">${content.price_outlook.direction}</strong> — ${content.price_outlook.analysis}
      </p>`
    );
  }

  if (content.macro_watch && content.macro_watch.length > 0) {
    const items = content.macro_watch
      .map((m) => `<li style="margin-bottom:8px;"><strong>${m.topic}</strong> — ${m.detail}</li>`)
      .join("");
    sections.push(
      `<h2 style="color:#0085FF;font-size:18px;text-transform:uppercase;letter-spacing:1px;">Macro Watch</h2>
      <ul style="padding-left:20px;color:#e0e0e0;font-size:15px;line-height:1.6;">${items}</ul>`
    );
  }

  return sections.join("");
}

export async function GET(request: NextRequest) {
  const secret =
    request.headers.get("authorization")?.replace("Bearer ", "") ??
    request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServiceClient();

  // Calculate week boundaries (Monday to Sunday)
  const now = new Date();
  const dayOfWeek = now.getUTCDay(); // 0=Sun, 1=Mon
  const mondayOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const weekStart = new Date(now);
  weekStart.setUTCDate(now.getUTCDate() - mondayOffset - 7); // Last Monday
  weekStart.setUTCHours(0, 0, 0, 0);
  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekStart.getUTCDate() + 6); // Last Sunday
  weekEnd.setUTCHours(23, 59, 59, 999);

  const slug = weekStart.toISOString().slice(0, 10); // e.g. "2026-02-09"

  // Check if digest already exists for this week
  const { data: existing } = await supabase
    .from("digests")
    .select("id")
    .eq("slug", slug)
    .limit(1);

  if (existing && existing.length > 0) {
    return NextResponse.json({ error: "Digest already exists for this week", slug }, { status: 409 });
  }

  // Pull news articles from the past 7 days
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const { data: articles } = await supabase
    .from("news_articles")
    .select("title, url, source, summary, importance_score, published_at")
    .gte("published_at", sevenDaysAgo)
    .order("importance_score", { ascending: false })
    .limit(50);

  // Pull XRP price data from CoinGecko
  let priceDataText = "No price data available.";
  try {
    const priceRes = await fetch(
      "https://api.coingecko.com/api/v3/coins/xrp/market_chart?vs_currency=usd&days=7",
      { headers: { Accept: "application/json" } }
    );
    if (priceRes.ok) {
      const priceData = await priceRes.json();
      const prices: [number, number][] = priceData.prices || [];
      if (prices.length > 0) {
        const opens = prices[0][1];
        const closes = prices[prices.length - 1][1];
        const highs = Math.max(...prices.map((p: [number, number]) => p[1]));
        const lows = Math.min(...prices.map((p: [number, number]) => p[1]));
        const changePct = ((closes - opens) / opens) * 100;
        priceDataText = `XRP 7-day price data: Open=$${opens.toFixed(4)}, High=$${highs.toFixed(4)}, Low=$${lows.toFixed(4)}, Close=$${closes.toFixed(4)}, Change=${changePct.toFixed(2)}%. Daily prices: ${prices.filter((_: [number, number], i: number) => i % 24 === 0).map((p: [number, number]) => `${new Date(p[0]).toISOString().slice(0, 10)}: $${p[1].toFixed(4)}`).join(", ")}`;
      }
    }
  } catch (err) {
    console.error("CoinGecko fetch failed:", err);
  }

  // Format articles for the prompt
  const articlesText =
    articles && articles.length > 0
      ? articles
          .map(
            (a: { title: string; url: string; source: string; summary: string | null; importance_score: number }) =>
              `[${a.source}] "${a.title}" (score: ${a.importance_score}) — ${a.summary || "No summary"} — ${a.url}`
          )
          .join("\n")
      : "No significant XRP news this week.";

  // Call OpenRouter with Kimi K2.5
  const openrouterKey = process.env.OPENROUTER_API_KEY;
  if (!openrouterKey) {
    return NextResponse.json({ error: "OPENROUTER_API_KEY not set" }, { status: 500 });
  }

  const aiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openrouterKey}`,
      "HTTP-Referer": "https://allaboutxrp.com",
      "X-Title": "AllAboutXRP Digest Generator",
    },
    body: JSON.stringify({
      model: "moonshotai/kimi-k2.5",
      messages: [
        { role: "system", content: DIGEST_PROMPT },
        {
          role: "user",
          content: `NEWS ARTICLES THIS WEEK:\n${articlesText}\n\nPRICE DATA:\n${priceDataText}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 4000,
    }),
  });

  if (!aiRes.ok) {
    const errText = await aiRes.text();
    console.error("OpenRouter error:", aiRes.status, errText);
    return NextResponse.json({ error: "AI generation failed" }, { status: 500 });
  }

  const aiData = await aiRes.json();
  const responseText = aiData.choices?.[0]?.message?.content ?? "";

  // Parse JSON from response
  const jsonMatch = responseText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    console.error("Could not parse digest JSON:", responseText.slice(0, 500));
    return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
  }

  let digestContent: DigestContent;
  try {
    digestContent = JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.error("JSON parse error:", err);
    return NextResponse.json({ error: "Invalid JSON from AI" }, { status: 500 });
  }

  const htmlContent = generateHtml(digestContent);

  // Store in Supabase
  const { error: insertError } = await supabase.from("digests").insert({
    slug,
    title: digestContent.title,
    content: digestContent,
    html_content: htmlContent,
    week_start: weekStart.toISOString().slice(0, 10),
    week_end: weekEnd.toISOString().slice(0, 10),
  });

  if (insertError) {
    console.error("Insert digest error:", insertError);
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    slug,
    title: digestContent.title,
    articles_used: articles?.length ?? 0,
  });
}
