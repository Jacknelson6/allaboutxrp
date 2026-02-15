import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

// ── RSS feeds (same as /api/news) ──────────────────────────────────────
const FEEDS = [
  { name: "CoinDesk", url: "https://www.coindesk.com/arc/outboundfeeds/rss/" },
  { name: "CoinTelegraph", url: "https://cointelegraph.com/rss" },
  { name: "The Block", url: "https://www.theblock.co/rss.xml" },
  { name: "CryptoSlate", url: "https://cryptoslate.com/feed/" },
  { name: "Decrypt", url: "https://decrypt.co/feed" },
  { name: "U.Today", url: "https://u.today/rss" },
  { name: "CryptoPotato", url: "https://cryptopotato.com/feed/" },
  { name: "NewsBTC", url: "https://www.newsbtc.com/feed/" },
];

const XRP_KEYWORDS = /\bxrp\b|\bripple\b|\brlusd\b|\bxrpl\b/i;

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

function extractSummary(text: string): string {
  const plain = stripHtml(text);
  if (!plain) return "";
  const sentences = plain.match(/[^.!?]+[.!?]+/g);
  if (!sentences) return plain.slice(0, 280);
  return sentences.slice(0, 3).join(" ").trim().slice(0, 400);
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

interface ArticleRow {
  title: string;
  url: string;
  source: string;
  summary: string | null;
  og_image: string | null;
  published_at: string;
}

async function fetchFeed(feed: { name: string; url: string }): Promise<ArticleRow[]> {
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

    const results: ArticleRow[] = [];
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
        summary: extractSummary(description || title) || null,
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

export async function GET(request: NextRequest) {
  // Auth check
  const secret = request.headers.get("authorization")?.replace("Bearer ", "") 
    ?? request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServiceClient();

  // Fetch all feeds
  const allResults = await Promise.all(FEEDS.map(fetchFeed));
  const articles = allResults.flat();

  if (articles.length === 0) {
    return NextResponse.json({ new_articles: 0, message: "No articles found" });
  }

  // Deduplicate: check existing URLs
  const urls = articles.map((a) => a.url);
  const { data: existing } = await supabase
    .from("news_articles")
    .select("url")
    .in("url", urls);

  const existingUrls = new Set((existing ?? []).map((e: { url: string }) => e.url));
  const newArticles = articles.filter((a) => !existingUrls.has(a.url));

  if (newArticles.length === 0) {
    return NextResponse.json({ new_articles: 0, message: "All articles already stored" });
  }

  // Insert new articles
  const { error } = await supabase
    .from("news_articles")
    .upsert(newArticles, { onConflict: "url", ignoreDuplicates: true });

  if (error) {
    console.error("Insert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ new_articles: newArticles.length });
}
