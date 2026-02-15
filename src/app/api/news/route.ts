import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// ── Types ──────────────────────────────────────────────────────────────
interface NewsItem {
  title: string;
  source: string;
  url: string;
  imageUrl: string | null;
  summary: string;
  publishedAt: string;
}

// ── RSS feeds ──────────────────────────────────────────────────────────
const FEEDS: { name: string; url: string }[] = [
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

// ── In-memory cache ────────────────────────────────────────────────────
let cache: { data: NewsItem[]; ts: number } | null = null;
const CACHE_TTL = 15 * 60_000; // 15 minutes

// ── Helpers ────────────────────────────────────────────────────────────

/** Cheap XML tag extractor — no deps needed for RSS */
function extractTag(xml: string, tag: string): string {
  const open = `<${tag}`;
  const close = `</${tag}>`;
  const i = xml.indexOf(open);
  if (i === -1) return "";
  const contentStart = xml.indexOf(">", i) + 1;
  const j = xml.indexOf(close, contentStart);
  if (j === -1) return "";
  let val = xml.slice(contentStart, j).trim();
  // unwrap CDATA
  if (val.startsWith("<![CDATA[")) val = val.slice(9, val.lastIndexOf("]]>")).trim();
  return val;
}

/** Split RSS XML into individual <item> blocks */
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

/** Strip HTML tags for plain-text summary */
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

/** Extract first 2-3 sentences as summary */
function extractSummary(text: string): string {
  const plain = stripHtml(text);
  if (!plain) return "";
  // Split on sentence boundaries, take up to 3
  const sentences = plain.match(/[^.!?]+[.!?]+/g);
  if (!sentences) return plain.slice(0, 280);
  return sentences.slice(0, 3).join(" ").trim().slice(0, 400);
}

/** Try to pull image from RSS item (media:content, enclosure, or <img> in description) */
function extractImage(itemXml: string): string | null {
  // media:content or media:thumbnail
  const mediaMatch = itemXml.match(/(?:media:content|media:thumbnail)[^>]*url=["']([^"']+)["']/);
  if (mediaMatch) return mediaMatch[1];

  // enclosure
  const encMatch = itemXml.match(/<enclosure[^>]*url=["']([^"']+)["']/);
  if (encMatch) return encMatch[1];

  // <img> inside description/content
  const imgMatch = itemXml.match(/<img[^>]*src=["']([^"']+)["']/);
  if (imgMatch) return imgMatch[1];

  return null;
}

/** Fetch OG image from article URL (lightweight: fetch only first 16KB of HTML) */
async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "AllAboutXRP-Bot/1.0" },
      redirect: "follow",
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    // Read limited HTML
    const reader = res.body?.getReader();
    if (!reader) return null;
    let html = "";
    const decoder = new TextDecoder();
    while (html.length < 32_000) {
      const { done, value } = await reader.read();
      if (done) break;
      html += decoder.decode(value, { stream: true });
    }
    reader.cancel();
    const match = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

async function fetchFeed(feed: { name: string; url: string }): Promise<NewsItem[]> {
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

    const results: NewsItem[] = [];
    for (const itemXml of items) {
      const title = extractTag(itemXml, "title");
      const link = extractTag(itemXml, "link") || extractTag(itemXml, "guid");
      const description = extractTag(itemXml, "description") || extractTag(itemXml, "content:encoded") || "";
      const pubDate = extractTag(itemXml, "pubDate");

      // Filter: must be XRP-related
      const searchText = `${title} ${description}`;
      if (!XRP_KEYWORDS.test(searchText)) continue;

      const imageFromRss = extractImage(itemXml);
      const summary = extractSummary(description || title);

      results.push({
        title: stripHtml(title),
        source: feed.name,
        url: link,
        imageUrl: imageFromRss, // will try OG image later if null
        summary,
        publishedAt: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
      });

      if (results.length >= 10) break; // cap per feed
    }
    return results;
  } catch (err) {
    console.error(`Failed to fetch ${feed.name}:`, err);
    return [];
  }
}

async function fetchAllNews(): Promise<NewsItem[]> {
  const allResults = await Promise.all(FEEDS.map(fetchFeed));
  let items = allResults.flat();

  // Sort by date descending
  items.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  // Deduplicate by URL
  const seen = new Set<string>();
  items = items.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });

  // Cap total
  items = items.slice(0, 50);

  // Fetch OG images for items missing images (batch, max 10 concurrent)
  const needOg = items.filter((i) => !i.imageUrl);
  const ogBatch = needOg.slice(0, 15);
  if (ogBatch.length > 0) {
    const ogResults = await Promise.all(ogBatch.map((i) => fetchOgImage(i.url)));
    ogBatch.forEach((item, idx) => {
      if (ogResults[idx]) item.imageUrl = ogResults[idx];
    });
  }

  return items;
}

// ── Route handler ──────────────────────────────────────────────────────
export async function GET() {
  const now = Date.now();
  if (cache && now - cache.ts < CACHE_TTL) {
    return NextResponse.json(cache.data, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
    });
  }

  try {
    const data = await fetchAllNews();
    cache = { data, ts: now };
    return NextResponse.json(data, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
    });
  } catch (err) {
    console.error("News aggregation error:", err);
    // Return stale cache if available
    if (cache) {
      return NextResponse.json(cache.data, {
        headers: { "Cache-Control": "public, s-maxage=60" },
      });
    }
    return NextResponse.json([], { status: 500 });
  }
}
