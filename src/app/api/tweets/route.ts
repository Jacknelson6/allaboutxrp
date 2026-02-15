import { NextResponse } from "next/server";

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN || "";
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

interface FormattedTweet {
  username: string;
  displayName: string;
  avatarUrl: string;
  text: string;
  tweetUrl: string;
  createdAt: string;
  likes: number;
  retweets: number;
  isVerified: boolean;
}

let cache: { data: FormattedTweet[]; ts: number } | null = null;

export const dynamic = "force-dynamic";

export async function GET() {
  // Return cache if fresh
  if (cache && Date.now() - cache.ts < CACHE_TTL_MS) {
    return NextResponse.json(
      { tweets: cache.data, cached: true, lastUpdated: new Date(cache.ts).toISOString() },
      { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=120" } }
    );
  }

  if (!BEARER_TOKEN) {
    return NextResponse.json(
      { tweets: [], error: "TWITTER_BEARER_TOKEN not configured" },
      { status: 500 }
    );
  }

  try {
    const query = encodeURIComponent(
      '("$XRP" OR #XRP OR Ripple OR RLUSD OR XRPL) -is:retweet lang:en'
    );
    const fields = [
      "tweet.fields=created_at,public_metrics,author_id",
      "user.fields=name,username,profile_image_url,verified",
      "expansions=author_id",
      "max_results=50",
      "sort_order=relevancy",
    ].join("&");

    const res = await fetch(
      `https://api.x.com/2/tweets/search/recent?query=${query}&${fields}`,
      {
        headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        signal: AbortSignal.timeout(15_000),
      }
    );

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("X API error:", res.status, errText);
      if (cache) {
        return NextResponse.json(
          { tweets: cache.data, cached: true, stale: true, lastUpdated: new Date(cache.ts).toISOString() },
          { status: 200 }
        );
      }
      return NextResponse.json({ tweets: [], error: `X API ${res.status}` }, { status: 502 });
    }

    const json = await res.json();
    const tweetData = json.data || [];
    const users: Record<string, { name: string; username: string; profile_image_url?: string; verified?: boolean }> = {};
    for (const u of json.includes?.users || []) {
      users[u.id] = u;
    }

    // Deduplicate by normalized text
    const seen = new Set<string>();
    const tweets: FormattedTweet[] = [];

    for (const t of tweetData) {
      const text: string = t.text || "";
      const normKey = text.replace(/https?:\/\/\S+/g, "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase().slice(0, 80);
      if (seen.has(normKey)) continue;
      seen.add(normKey);

      const stripped = text.replace(/https?:\/\/\S+/g, "").trim();
      if (stripped.length < 30) continue;
      // Skip engagement bait
      if (/(like if|rt if|retweet if|drop a .{0,10} if)/i.test(stripped)) continue;
      if (/^(gm|gn|lfg|wagmi|ngmi)[\s!.]*$/i.test(stripped)) continue;

      const metrics = t.public_metrics || {};
      const likes = metrics.like_count || 0;
      const retweets = metrics.retweet_count || 0;
      if (likes + retweets < 5) continue;

      const author = users[t.author_id] || {};
      const username = author.username || "";

      tweets.push({
        username,
        displayName: author.name || username,
        avatarUrl: author.profile_image_url || `https://unavatar.io/twitter/${username}`,
        text,
        tweetUrl: `https://x.com/${username}/status/${t.id}`,
        createdAt: t.created_at || new Date().toISOString(),
        likes,
        retweets,
        isVerified: author.verified || false,
      });
    }

    // Sort by engagement descending
    tweets.sort((a, b) => (b.likes + b.retweets) - (a.likes + a.retweets));
    const result = tweets.slice(0, 20);

    cache = { data: result, ts: Date.now() };

    return NextResponse.json(
      { tweets: result, cached: false, lastUpdated: new Date().toISOString() },
      { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=120" } }
    );
  } catch (err) {
    console.error("Tweets API error:", err);
    if (cache) {
      return NextResponse.json(
        { tweets: cache.data, cached: true, stale: true, lastUpdated: new Date(cache.ts).toISOString() },
        { status: 200 }
      );
    }
    return NextResponse.json({ tweets: [], error: "Internal error" }, { status: 500 });
  }
}
