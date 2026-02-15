import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// ── Curated RSS feeds (reputable sources only) ─────────────────────────
// NOTE: Bloomberg, WSJ, and Washington Post do not offer public RSS feeds
// for crypto/finance content. They are omitted for now.
const FEEDS = [
  { name: "CoinDesk", url: "https://www.coindesk.com/arc/outboundfeeds/rss/" },
  { name: "The Block", url: "https://www.theblock.co/rss.xml" },
  { name: "Decrypt", url: "https://decrypt.co/feed" },
  { name: "Reuters", url: "https://www.reutersagency.com/feed/?taxonomy=best-sectors&post_type=best" },
];

const XRP_KEYWORDS = /\bxrp\b|\bripple\b|\brlusd\b|\bxrpl\b|\bsec\b.*\bripple\b|\bripple\b.*\bsec\b/i;

// ── XML helpers ────────────────────────────────────────────────────────
function extractTag(xml: string, tag: string): string {
  const open = `<${tag}`;
  const close = `</${tag}>`;
  const i = xml.indexOf(open);
  if (i === -1) return "";
  const contentStart = xml.indexOf(">", i) + 1;
  const j = xml.indexOf(close, contentStart);
  if (j === -1) return "";
  let val = xml.slice(contentStart, j).trim();
  if (val.startsWith("<![CDATA[")) val = val.slice(9, val.lastIndexOf("]]>")).trim();
  return val;
}

function extractItems(xml: string): string[] {
  const items: string[] = [];
  let idx = 0;
  while (true) {
    const start = xml.indexOf("<item", idx);
    if (start === -1) break;
    const end = xml.indexOf("</item>", start);
    if (end === -1) break;
    items.push(xml.slice(start, end + 7));
    idx = end + 7;
  }
  return items;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractImage(itemXml: string): string | null {
  const mediaMatch = itemXml.match(/(?:media:content|media:thumbnail)[^>]*url=["']([^"']+)["']/);
  if (mediaMatch) return mediaMatch[1];
  const encMatch = itemXml.match(/<enclosure[^>]*url=["']([^"']+)["']/);
  if (encMatch) return encMatch[1];
  const imgMatch = itemXml.match(/<img[^>]*src=["']([^"']+)["']/);
  if (imgMatch) return imgMatch[1];
  return null;
}

interface RawArticle {
  title: string;
  url: string;
  source: string;
  description: string;
  og_image: string | null;
  published_at: string;
}

interface ArticleRow {
  title: string;
  url: string;
  source: string;
  summary: string | null;
  og_image: string | null;
  published_at: string;
  importance_score: number;
}

async function fetchFeed(feed: { name: string; url: string }): Promise<RawArticle[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(feed.url, {
      signal: controller.signal,
      headers: { "User-Agent": "AllAboutXRP-Bot/1.0", Accept: "application/rss+xml, application/xml, text/xml" },
    });
    clearTimeout(timeout);
    if (!res.ok) return [];
    const xml = await res.text();
    const items = extractItems(xml);

    const results: RawArticle[] = [];
    for (const itemXml of items) {
      const title = extractTag(itemXml, "title");
      const link = extractTag(itemXml, "link") || extractTag(itemXml, "guid");
      const description = extractTag(itemXml, "description") || extractTag(itemXml, "content:encoded") || "";
      const pubDate = extractTag(itemXml, "pubDate");

      if (!XRP_KEYWORDS.test(`${title} ${description}`)) continue;

      results.push({
        title: stripHtml(title),
        url: link,
        source: feed.name,
        description: stripHtml(description).slice(0, 500),
        og_image: extractImage(itemXml),
        published_at: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
      });

      if (results.length >= 10) break;
    }
    return results;
  } catch (err) {
    console.error(`Failed to fetch ${feed.name}:`, err);
    return [];
  }
}

// ── AI Importance Scoring ──────────────────────────────────────────────
// Uses OpenRouter API (supports many models, pay-per-use)
const SCORING_PROMPT = `You are a crypto news editor for an XRP-focused site. Score each article 1-10 on importance to XRP/Ripple/crypto holders. Only articles scoring 7+ should be published. For each article scoring 7+, write a 1-2 sentence summary explaining why this matters for XRP holders specifically. Return JSON array: [{index, score, summary}]`;

interface ScoredArticle {
  index: number;
  score: number;
  summary: string;
}

async function scoreArticles(articles: RawArticle[]): Promise<ScoredArticle[]> {
  if (articles.length === 0) return [];

  const articlesText = articles
    .map((a, i) => `${i}. [${a.source}] "${a.title}" — ${a.description}`)
    .join("\n");

  const messages = [
    { role: "system" as const, content: SCORING_PROMPT },
    { role: "user" as const, content: articlesText },
  ];

  try {
    const openrouterKey = process.env.OPENROUTER_API_KEY;

    if (!openrouterKey) {
      console.error("OPENROUTER_API_KEY not set, passing all articles through unscored");
      return articles.map((_, i) => ({ index: i, score: 7, summary: "" }));
    }

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openrouterKey}`,
        "HTTP-Referer": "https://allaboutxrp.com",
        "X-Title": "AllAboutXRP News Curator",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages,
        temperature: 0.3,
        max_tokens: 2000,
      }),
    });

    if (!res.ok) {
      console.error("OpenRouter API error:", res.status, await res.text());
      return articles.map((_, i) => ({ index: i, score: 7, summary: "" }));
    }

    const data = await res.json();
    const responseText = data.choices?.[0]?.message?.content ?? "[]";

    // Parse JSON from response (handle markdown code blocks)
    const jsonMatch = responseText.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      console.error("Could not parse AI scoring response:", responseText.slice(0, 200));
      return articles.map((_, i) => ({ index: i, score: 7, summary: "" }));
    }

    const scored: ScoredArticle[] = JSON.parse(jsonMatch[0]);
    return scored.filter((s) => s.score >= 7);
  } catch (err) {
    console.error("AI scoring failed:", err);
    return articles.map((_, i) => ({ index: i, score: 7, summary: "" }));
  }
}

export async function GET(request: NextRequest) {
  // Auth check
  const secret =
    request.headers.get("authorization")?.replace("Bearer ", "") ??
    request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServiceClient();

  // Fetch all feeds
  const allResults = await Promise.all(FEEDS.map(fetchFeed));
  const rawArticles = allResults.flat();

  if (rawArticles.length === 0) {
    return NextResponse.json({ new_articles: 0, message: "No XRP-related articles found" });
  }

  // Deduplicate: check existing URLs
  const urls = rawArticles.map((a) => a.url);
  const { data: existing } = await supabase.from("news_articles").select("url").in("url", urls);

  const existingUrls = new Set((existing ?? []).map((e: { url: string }) => e.url));
  const newRawArticles = rawArticles.filter((a) => !existingUrls.has(a.url));

  if (newRawArticles.length === 0) {
    return NextResponse.json({ new_articles: 0, message: "All articles already stored" });
  }

  // AI importance scoring — only articles scoring 7+ get inserted
  const scored = await scoreArticles(newRawArticles);

  const articlesToInsert: ArticleRow[] = scored.map((s) => {
    const raw = newRawArticles[s.index];
    return {
      title: raw.title,
      url: raw.url,
      source: raw.source,
      summary: s.summary || null,
      og_image: raw.og_image,
      published_at: raw.published_at,
      importance_score: s.score,
    };
  });

  if (articlesToInsert.length === 0) {
    return NextResponse.json({
      new_articles: 0,
      total_fetched: newRawArticles.length,
      message: "No articles scored 7+ importance",
    });
  }

  // Insert new articles
  const { error } = await supabase
    .from("news_articles")
    .upsert(articlesToInsert, { onConflict: "url", ignoreDuplicates: true });

  if (error) {
    console.error("Insert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    new_articles: articlesToInsert.length,
    total_fetched: newRawArticles.length,
    ai_provider: "openrouter/gpt-4o-mini",
  });
}
