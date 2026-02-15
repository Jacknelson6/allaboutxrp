import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// Load the digest prompt at build time
const DIGEST_PROMPT_TEMPLATE = `# AllAboutXRP — Weekly Digest System Prompt

## Identity & Voice

You are the lead analyst at AllAboutXRP.com writing a weekly intelligence briefing for serious XRP holders. You are not a journalist summarizing headlines — you are an analyst connecting dots. Your readers are people who hold XRP and need to make decisions (hold, accumulate, reduce, hedge). Every sentence should serve that reader.

Voice rules:
- Opinionated but evidence-based. Never hedge with "only time will tell" or "it remains to be seen." If you're uncertain, say what specifically you're watching to break the tie.
- Write like a sharp analyst at a trading desk, not a crypto blogger. No hype language ("massive," "huge," "breaking"), no emojis, no exclamation marks.
- Assume the reader already knows what XRP is. Don't explain basics. Do explain *implications* they might miss.
- When you cite a source, do it inline and naturally: "per CoinDesk reporting on Tuesday" or "according to on-chain data." No footnote-style citations.
- Keep the total digest between 800-1,200 words. Dense, not padded.

---

## Data You'll Receive

You will be provided with structured data blocks. Use ALL of them to inform your analysis — don't just summarize each block sequentially. Cross-reference and synthesize.

### NEWS ARTICLES
{{NEWS_ARTICLES}}

### PRICE DATA (7-day)
{{PRICE_DATA}}

### ON-CHAIN DATA
{{ONCHAIN_DATA}}

### RICH LIST / WHALE DATA
{{RICH_LIST_CHANGES}}

### COMMUNITY DISCUSSION (X/Twitter)
{{TWEETS}}

### BTC & ETH CORRELATION
{{BTC_ETH_CORRELATION}}

### FEAR & GREED INDEX
{{FEAR_GREED_INDEX}}

### RLUSD DATA
{{RLUSD_DATA}}

---

## Digest Structure

Write the digest using exactly these sections in this order. Important: If a section has nothing meaningful to report, skip it entirely rather than filling space. A shorter, denser digest is always better than a padded one.

### HEADER
Week of [date range] | XRP [open] → [close] ([+/-]%)
One-sentence thesis for the week. What was the single most important thing that happened? If it was a quiet week, say so — "Quiet weeks are when positioning happens."

### 1. WHAT HAPPENED — Key Developments (only if noteworthy events occurred)
3-5 items maximum. For each:
- Bold headline (your framing, not the article's headline)
- 2-3 sentences: What happened → Why it matters for XRP holders specifically → What to watch next
- Inline source attribution

Selection criteria — Only include developments that meet at least one of these:
- Directly affects XRP's price, utility, or regulatory status
- Signals a meaningful shift in institutional adoption or sentiment
- Changes the competitive landscape (other L1s, stablecoins, CBDCs)
- Involves Ripple the company in a material way

### 2. PRICE & MARKET ACTION (only if there was meaningful movement or divergence)
- The week in numbers: Open, high, low, close, % change, avg daily volume vs. prior week. One line.
- What drove it: Connect price moves to specific catalysts. Was this XRP-specific or market-wide? Use BTC/ETH correlation data.
- Volume signal: Was volume confirming the move or diverging?
- Key levels: What support/resistance levels matter for the coming week?

### 3. ON-CHAIN & WHALE INTELLIGENCE (only if data reveals something meaningful)
- Escrow: Ripple escrow releases, re-locks, trends
- Whale movements: Large holder accumulation/distribution, exchange inflows
- Network health: Active accounts, transaction volume trends
- RLUSD adoption: TVL changes, integrations, volume trends

### 4. SENTIMENT CHECK (only if sentiment is meaningfully shifted or divergent)
- Fear & Greed Index level and trend
- Dominant narrative on X
- Contrarian flag if sentiment is extreme

### 5. WEEK AHEAD — Outlook & Watchlist
- Directional bias: Bullish / Bearish / Neutral with reasons
- Scenarios: "If [X happens], expect [Y]."
- Watchlist: 3-5 specific things to monitor

### SIGN-OFF
One sentence, forward-looking.

## Rules for Quality
1. Cross-reference, don't summarize sequentially.
2. Every claim needs evidence.
3. Distinguish XRP-specific from market-wide.
4. Be honest about uncertainty.
5. No filler.
6. No financial advice disclaimers mid-text. Single disclaimer at bottom.

IMPORTANT: Return your response as a JSON object matching this exact structure:
{
  "title": "one-sentence thesis for the week",
  "week_range": "Feb 9 - Feb 15, 2026",
  "xrp_open": 1.45,
  "xrp_close": 1.52,
  "xrp_change_pct": 4.83,
  "what_happened": [{"headline": "...", "body": "..."}] or null,
  "price_action": {"numbers_line": "Open $X, High $X, Low $X, Close $X, +X%", "analysis": "..."} or null,
  "onchain_intel": {"analysis": "..."} or null,
  "sentiment": {"analysis": "..."} or null,
  "week_ahead": {"bias": "bullish|bearish|neutral", "analysis": "...", "scenarios": "...", "watchlist": ["...", "..."]},
  "signoff": "..."
}

Write the content following the voice, structure, and quality rules in the prompt above. The body/analysis fields should contain the full written content in markdown format.`;

// --- Types ---

interface DigestContent {
  title: string;
  week_range: string;
  xrp_open: number;
  xrp_close: number;
  xrp_change_pct: number;
  what_happened: Array<{ headline: string; body: string }> | null;
  price_action: { numbers_line: string; analysis: string } | null;
  onchain_intel: { analysis: string } | null;
  sentiment: { analysis: string } | null;
  week_ahead: {
    bias: "bullish" | "bearish" | "neutral";
    analysis: string;
    scenarios: string;
    watchlist: string[];
  };
  signoff: string;
}

// --- Data Fetchers ---

async function fetchJson(url: string, label: string): Promise<unknown | null> {
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json", "User-Agent": "AllAboutXRP/1.0" },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      console.error(`${label} HTTP ${res.status}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error(`${label} fetch failed:`, err);
    return null;
  }
}

function formatPriceData(xrpData: Record<string, unknown> | null): { text: string; open: number; close: number; high: number; low: number; changePct: number } {
  if (!xrpData) return { text: "[Data source unavailable this week]", open: 0, close: 0, high: 0, low: 0, changePct: 0 };

  const prices = (xrpData.prices as [number, number][]) || [];
  const volumes = (xrpData.total_volumes as [number, number][]) || [];

  if (prices.length === 0) return { text: "[Data source unavailable this week]", open: 0, close: 0, high: 0, low: 0, changePct: 0 };

  const open = prices[0][1];
  const close = prices[prices.length - 1][1];
  const high = Math.max(...prices.map((p) => p[1]));
  const low = Math.min(...prices.map((p) => p[1]));
  const changePct = ((close - open) / open) * 100;

  // Daily volume summary
  const dailyVolumes: string[] = [];
  const msPerDay = 24 * 60 * 60 * 1000;
  if (volumes.length > 0) {
    const startDay = Math.floor(volumes[0][0] / msPerDay);
    const buckets = new Map<number, number[]>();
    for (const [ts, vol] of volumes) {
      const day = Math.floor(ts / msPerDay);
      if (!buckets.has(day)) buckets.set(day, []);
      buckets.get(day)!.push(vol);
    }
    for (const [day, vols] of buckets) {
      const avg = vols.reduce((a, b) => a + b, 0) / vols.length;
      const date = new Date(day * msPerDay).toISOString().slice(0, 10);
      dailyVolumes.push(`${date}: $${(avg / 1e6).toFixed(1)}M`);
    }
  }

  // Daily price points
  const dailyPrices = prices
    .filter((_, i) => i % 24 === 0)
    .map((p) => `${new Date(p[0]).toISOString().slice(0, 10)}: $${p[1].toFixed(4)}`)
    .join(", ");

  const text = `XRP 7-day: Open=$${open.toFixed(4)}, High=$${high.toFixed(4)}, Low=$${low.toFixed(4)}, Close=$${close.toFixed(4)}, Change=${changePct >= 0 ? "+" : ""}${changePct.toFixed(2)}%
Daily prices: ${dailyPrices}
Daily avg volumes: ${dailyVolumes.length > 0 ? dailyVolumes.join(", ") : "N/A"}`;

  return { text, open, close, high, low, changePct };
}

function formatCorrelation(btcData: Record<string, unknown> | null, ethData: Record<string, unknown> | null): string {
  const parts: string[] = [];

  for (const [name, data] of [["BTC", btcData], ["ETH", ethData]] as const) {
    if (!data) {
      parts.push(`${name}: [Data unavailable]`);
      continue;
    }
    const prices = (data.prices as [number, number][]) || [];
    if (prices.length < 2) {
      parts.push(`${name}: [Insufficient data]`);
      continue;
    }
    const open = prices[0][1];
    const close = prices[prices.length - 1][1];
    const changePct = ((close - open) / open) * 100;
    parts.push(`${name}: $${open.toFixed(2)} → $${close.toFixed(2)} (${changePct >= 0 ? "+" : ""}${changePct.toFixed(2)}%)`);
  }

  return parts.join("\n");
}

function formatFearGreed(data: Record<string, unknown> | null): string {
  if (!data) return "[Data source unavailable this week]";
  const fngData = (data as { data?: Array<{ value: string; value_classification: string; timestamp: string }> }).data;
  if (!fngData || fngData.length === 0) return "[Data source unavailable this week]";

  const current = fngData[0];
  const values = fngData.map((d) => parseInt(d.value));
  const trend = values[0] > values[values.length - 1] ? "rising" : values[0] < values[values.length - 1] ? "falling" : "flat";

  return `Current: ${current.value} (${current.value_classification}), 7-day trend: ${trend}
Daily values: ${fngData.map((d) => `${new Date(parseInt(d.timestamp) * 1000).toISOString().slice(0, 10)}: ${d.value} (${d.value_classification})`).join(", ")}`;
}

function formatOnchain(metrics: unknown, escrows: unknown): string {
  const parts: string[] = [];

  if (metrics && typeof metrics === "object") {
    const m = metrics as Record<string, unknown>;
    const fields = ["accounts", "transactions", "ledger_count", "avg_fee", "total_xrp"];
    for (const f of fields) {
      if (m[f] !== undefined) parts.push(`${f}: ${m[f]}`);
    }
  }

  if (escrows && typeof escrows === "object") {
    if (Array.isArray(escrows)) {
      parts.push(`Escrow entries: ${escrows.length}`);
      // Summarize first few
      for (const e of escrows.slice(0, 5)) {
        const esc = e as Record<string, unknown>;
        parts.push(`  - Amount: ${esc.amount || "N/A"}, Destination: ${esc.destination || "N/A"}`);
      }
    } else {
      parts.push(`Escrow data: ${JSON.stringify(escrows).slice(0, 500)}`);
    }
  }

  return parts.length > 0 ? parts.join("\n") : "[Data source unavailable this week]";
}

function formatRichList(data: unknown): string {
  if (!data) return "[Data source unavailable this week]";
  if (Array.isArray(data)) {
    return data
      .slice(0, 20)
      .map((entry: Record<string, unknown>, i: number) => `${i + 1}. ${entry.account || entry.address || "Unknown"}: ${entry.balance || entry.xrp || "N/A"} XRP`)
      .join("\n");
  }
  return JSON.stringify(data).slice(0, 1000);
}

function formatTweets(tweets: Array<Record<string, unknown>> | null): string {
  if (!tweets || tweets.length === 0) return "[No tweet data available this week]";
  return tweets
    .slice(0, 20)
    .map((t) => `@${t.author_username || t.username || "unknown"} (${String(t.created_at || t.tweeted_at || "").slice(0, 10)}): ${String(t.text || t.content || "").slice(0, 280)}`)
    .join("\n\n");
}

function formatRlusd(data: unknown): string {
  if (!data) return "[RLUSD data unavailable this week]";
  const d = data as Record<string, unknown>;
  const md = d.market_data as Record<string, unknown> | undefined;
  if (!md) return "[RLUSD market data unavailable]";

  const parts: string[] = [];
  const price = md.current_price as Record<string, number> | undefined;
  if (price?.usd) parts.push(`Price: $${price.usd}`);
  const mcap = md.market_cap as Record<string, number> | undefined;
  if (mcap?.usd) parts.push(`Market Cap: $${(mcap.usd / 1e6).toFixed(2)}M`);
  const vol = md.total_volume as Record<string, number> | undefined;
  if (vol?.usd) parts.push(`24h Volume: $${(vol.usd / 1e6).toFixed(2)}M`);
  const tvl = md.total_value_locked as Record<string, number> | undefined;
  if (tvl?.usd) parts.push(`TVL: $${(tvl.usd / 1e6).toFixed(2)}M`);

  return parts.length > 0 ? parts.join("\n") : "[RLUSD metrics unavailable]";
}

// --- HTML Generator ---

function generateHtml(content: DigestContent): string {
  const s: string[] = [];
  const blue = "#0085FF";
  const green = "#00c853";
  const red = "#ff1744";
  const yellow = "#ffd600";

  // Header
  const changeColor = content.xrp_change_pct >= 0 ? green : red;
  const changeSign = content.xrp_change_pct >= 0 ? "+" : "";
  s.push(`
    <div style="border-bottom:2px solid ${blue};padding-bottom:16px;margin-bottom:24px;">
      <p style="color:#888;font-size:14px;margin:0 0 4px 0;text-transform:uppercase;letter-spacing:1px;">Week of ${content.week_range}</p>
      <p style="color:#e0e0e0;font-size:16px;margin:0 0 8px 0;">XRP $${content.xrp_open.toFixed(4)} → $${content.xrp_close.toFixed(4)} (<span style="color:${changeColor};font-weight:700;">${changeSign}${content.xrp_change_pct.toFixed(2)}%</span>)</p>
      <h1 style="color:#fff;font-size:22px;margin:0;line-height:1.3;">${content.title}</h1>
    </div>
  `);

  // What Happened
  if (content.what_happened && content.what_happened.length > 0) {
    const items = content.what_happened
      .map((item) => `
        <div style="margin-bottom:16px;">
          <h3 style="color:#fff;font-size:16px;margin:0 0 6px 0;">${item.headline}</h3>
          <p style="color:#ccc;font-size:15px;line-height:1.6;margin:0;">${item.body}</p>
        </div>
      `)
      .join("");
    s.push(`<h2 style="color:${blue};font-size:16px;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">What Happened</h2>${items}<div style="height:24px;"></div>`);
  }

  // Price Action
  if (content.price_action) {
    s.push(`
      <h2 style="color:${blue};font-size:16px;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">Price &amp; Market Action</h2>
      <p style="color:#fff;font-size:15px;font-weight:600;margin:0 0 8px 0;font-family:monospace;">${content.price_action.numbers_line}</p>
      <div style="color:#ccc;font-size:15px;line-height:1.7;">${content.price_action.analysis.split("\n").map((p) => `<p style="margin:0 0 8px 0;">${p}</p>`).join("")}</div>
      <div style="height:24px;"></div>
    `);
  }

  // On-Chain Intel
  if (content.onchain_intel) {
    s.push(`
      <h2 style="color:${blue};font-size:16px;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">On-Chain &amp; Whale Intelligence</h2>
      <div style="color:#ccc;font-size:15px;line-height:1.7;">${content.onchain_intel.analysis.split("\n").map((p) => `<p style="margin:0 0 8px 0;">${p}</p>`).join("")}</div>
      <div style="height:24px;"></div>
    `);
  }

  // Sentiment
  if (content.sentiment) {
    s.push(`
      <h2 style="color:${blue};font-size:16px;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">Sentiment Check</h2>
      <div style="color:#ccc;font-size:15px;line-height:1.7;">${content.sentiment.analysis.split("\n").map((p) => `<p style="margin:0 0 8px 0;">${p}</p>`).join("")}</div>
      <div style="height:24px;"></div>
    `);
  }

  // Week Ahead
  if (content.week_ahead) {
    const biasColors: Record<string, string> = { bullish: green, bearish: red, neutral: yellow };
    const biasColor = biasColors[content.week_ahead.bias] || "#e0e0e0";
    const watchlistHtml = content.week_ahead.watchlist
      .map((item) => `<li style="margin-bottom:6px;">${item}</li>`)
      .join("");

    s.push(`
      <h2 style="color:${blue};font-size:16px;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">Week Ahead</h2>
      <p style="margin:0 0 12px 0;font-size:15px;color:#ccc;">
        Bias: <strong style="color:${biasColor};text-transform:uppercase;font-size:16px;">${content.week_ahead.bias}</strong>
      </p>
      <div style="color:#ccc;font-size:15px;line-height:1.7;">${content.week_ahead.analysis.split("\n").map((p) => `<p style="margin:0 0 8px 0;">${p}</p>`).join("")}</div>
      <div style="color:#ccc;font-size:15px;line-height:1.7;margin-top:8px;">${content.week_ahead.scenarios.split("\n").map((p) => `<p style="margin:0 0 8px 0;">${p}</p>`).join("")}</div>
      <h3 style="color:#fff;font-size:14px;text-transform:uppercase;letter-spacing:1px;margin:16px 0 8px 0;">Watchlist</h3>
      <ul style="padding-left:20px;color:#ccc;font-size:15px;line-height:1.6;">${watchlistHtml}</ul>
      <div style="height:24px;"></div>
    `);
  }

  // Sign-off
  if (content.signoff) {
    s.push(`
      <div style="border-top:1px solid #333;padding-top:16px;margin-top:8px;">
        <p style="color:#e0e0e0;font-size:15px;font-style:italic;line-height:1.6;">${content.signoff}</p>
      </div>
    `);
  }

  // Disclaimer
  s.push(`
    <div style="margin-top:32px;padding-top:16px;border-top:1px solid #222;">
      <p style="color:#666;font-size:12px;line-height:1.5;margin:0;"><em>This digest is for informational purposes only and is not financial advice. Always do your own research.</em></p>
    </div>
  `);

  return s.join("");
}

// --- Main Route ---

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
  weekStart.setUTCDate(now.getUTCDate() - mondayOffset - 7);
  weekStart.setUTCHours(0, 0, 0, 0);
  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekStart.getUTCDate() + 6);
  weekEnd.setUTCHours(23, 59, 59, 999);

  const slug = weekStart.toISOString().slice(0, 10);

  // Check if digest already exists
  const { data: existing } = await supabase
    .from("digests")
    .select("id")
    .eq("slug", slug)
    .limit(1);

  if (existing && existing.length > 0) {
    return NextResponse.json({ error: "Digest already exists for this week", slug }, { status: 409 });
  }

  // Format week range for display
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weekRangeStr = `${monthNames[weekStart.getUTCMonth()]} ${weekStart.getUTCDate()} - ${monthNames[weekEnd.getUTCMonth()]} ${weekEnd.getUTCDate()}, ${weekEnd.getUTCFullYear()}`;

  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();

  // Fetch ALL data sources in parallel
  const [
    articlesResult,
    xrpPriceResult,
    btcPriceResult,
    ethPriceResult,
    fngResult,
    metricsResult,
    escrowsResult,
    richlistResult,
    tweetsResult,
    rlusdResult,
  ] = await Promise.allSettled([
    // 1. News articles
    supabase
      .from("news_articles")
      .select("title, url, source, summary, importance_score, published_at")
      .gte("published_at", sevenDaysAgo)
      .order("importance_score", { ascending: false })
      .limit(50),
    // 2. XRP price
    fetchJson("https://api.coingecko.com/api/v3/coins/xrp/market_chart?vs_currency=usd&days=7", "XRP price"),
    // 3. BTC price
    fetchJson("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7", "BTC price"),
    // 4. ETH price
    fetchJson("https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7", "ETH price"),
    // 5. Fear & Greed
    fetchJson("https://api.alternative.me/fng/?limit=7", "Fear & Greed"),
    // 6. XRPScan metrics
    fetchJson("https://api.xrpscan.com/api/v1/metrics", "XRPScan metrics"),
    // 7. XRPScan escrows
    fetchJson("https://api.xrpscan.com/api/v1/escrows", "XRPScan escrows"),
    // 8. Rich list
    fetchJson("https://api.xrpscan.com/api/v1/richlist", "XRPScan richlist"),
    // 9. Tweets
    supabase
      .from("tweets")
      .select("*")
      .gte("created_at", sevenDaysAgo)
      .order("created_at", { ascending: false })
      .limit(30),
    // 10. RLUSD
    fetchJson("https://api.coingecko.com/api/v3/coins/rlusd", "RLUSD"),
  ]);

  // Extract results safely
  const getValue = <T>(result: PromiseSettledResult<T>): T | null =>
    result.status === "fulfilled" ? result.value : null;

  const articlesData = getValue(articlesResult);
  const articles = articlesData && "data" in (articlesData as object) ? (articlesData as { data: Array<Record<string, unknown>> | null }).data : null;

  const xrpPrice = getValue(xrpPriceResult) as Record<string, unknown> | null;
  const btcPrice = getValue(btcPriceResult) as Record<string, unknown> | null;
  const ethPrice = getValue(ethPriceResult) as Record<string, unknown> | null;
  const fngData = getValue(fngResult) as Record<string, unknown> | null;
  const metricsData = getValue(metricsResult);
  const escrowsData = getValue(escrowsResult);
  const richlistData = getValue(richlistResult);
  const tweetsData = getValue(tweetsResult);
  const tweets = tweetsData && "data" in (tweetsData as object) ? (tweetsData as { data: Array<Record<string, unknown>> | null }).data : null;
  const rlusdData = getValue(rlusdResult);

  // Format all data blocks
  const priceInfo = formatPriceData(xrpPrice);

  const articlesText = articles && articles.length > 0
    ? articles
        .map((a) => `[${a.source}] "${a.title}" (score: ${a.importance_score}) — ${a.summary || "No summary"} — ${a.url}`)
        .join("\n")
    : "[No significant XRP news articles this week]";

  const correlationText = formatCorrelation(btcPrice, ethPrice);
  const fngText = formatFearGreed(fngData);
  const onchainText = formatOnchain(metricsData, escrowsData);
  const richlistText = formatRichList(richlistData);
  const tweetsText = formatTweets(tweets);
  const rlusdText = formatRlusd(rlusdData);

  // Assemble prompt
  const prompt = DIGEST_PROMPT_TEMPLATE
    .replace("{{NEWS_ARTICLES}}", articlesText)
    .replace("{{PRICE_DATA}}", priceInfo.text)
    .replace("{{ONCHAIN_DATA}}", onchainText)
    .replace("{{RICH_LIST_CHANGES}}", richlistText)
    .replace("{{TWEETS}}", tweetsText)
    .replace("{{BTC_ETH_CORRELATION}}", correlationText)
    .replace("{{FEAR_GREED_INDEX}}", fngText)
    .replace("{{RLUSD_DATA}}", rlusdText);

  // Call OpenRouter
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
      model: "openai/gpt-4o-mini",
      messages: [
        { role: "system", content: prompt },
        {
          role: "user",
          content: `Generate the weekly XRP digest for the week of ${weekRangeStr}. Analyze all the data provided and return the JSON response.`,
        },
      ],
      temperature: 0.7,
      max_tokens: 6000,
    }),
  });

  if (!aiRes.ok) {
    const errText = await aiRes.text();
    console.error("OpenRouter error:", aiRes.status, errText);
    return NextResponse.json({ error: "AI generation failed", detail: errText.slice(0, 500) }, { status: 500 });
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

  // Ensure numeric fields from AI or fallback to our calculated values
  if (!digestContent.xrp_open && priceInfo.open) digestContent.xrp_open = priceInfo.open;
  if (!digestContent.xrp_close && priceInfo.close) digestContent.xrp_close = priceInfo.close;
  if (!digestContent.xrp_change_pct && priceInfo.changePct) digestContent.xrp_change_pct = priceInfo.changePct;
  if (!digestContent.week_range) digestContent.week_range = weekRangeStr;

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
    week_range: weekRangeStr,
    articles_used: articles?.length ?? 0,
    data_sources: {
      news: !!articles?.length,
      xrp_price: !!xrpPrice,
      btc_price: !!btcPrice,
      eth_price: !!ethPrice,
      fear_greed: !!fngData,
      onchain_metrics: !!metricsData,
      escrows: !!escrowsData,
      richlist: !!richlistData,
      tweets: !!tweets?.length,
      rlusd: !!rlusdData,
    },
  });
}
