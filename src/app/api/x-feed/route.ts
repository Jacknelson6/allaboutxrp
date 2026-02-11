import { NextResponse } from "next/server";
import { xCreators } from "@/data/x-creators";

// ---------------------------------------------------------------------------
// In-memory cache — ensures only 1 Twitter API call per 5 minutes regardless
// of how many concurrent visitors hit this route. On Vercel, each serverless
// instance keeps its own cache, but combined with the CDN s-maxage header the
// vast majority of requests never even reach the function.
// ---------------------------------------------------------------------------
interface CacheEntry {
  data: { tweets: FormattedTweet[]; lastUpdated: string };
  expiresAt: number;
}

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
let memoryCache: CacheEntry | null = null;

// Allow Vercel's edge/CDN to cache; revalidate via stale-while-revalidate.
export const dynamic = "force-dynamic"; // still needed so the route isn't fully static

interface TwitterUser {
  id: string;
  name: string;
  username: string;
  profile_image_url?: string;
  verified?: boolean;
}

interface TwitterTweet {
  id: string;
  text: string;
  created_at: string;
  author_id: string;
  public_metrics: {
    like_count: number;
    retweet_count: number;
    reply_count: number;
    impression_count: number;
  };
  entities?: {
    urls?: { expanded_url: string; display_url: string }[];
    mentions?: { username: string }[];
    hashtags?: { tag: string }[];
  };
}

interface TwitterResponse {
  data?: TwitterTweet[];
  includes?: {
    users?: TwitterUser[];
  };
  meta?: {
    result_count: number;
  };
}

interface FormattedTweet {
  id: string;
  text: string;
  displayName: string;
  handle: string;
  avatarUrl: string;
  verified: boolean;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  views: number;
  entities: TwitterTweet["entities"] | null;
}

// Shared cache headers — 5 min CDN cache + 2 min stale-while-revalidate
const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=300, stale-while-revalidate=120",
};

export async function GET() {
  // --- Serve from memory cache if fresh ---
  if (memoryCache && Date.now() < memoryCache.expiresAt) {
    return NextResponse.json(memoryCache.data, {
      status: 200,
      headers: CACHE_HEADERS,
    });
  }

  const bearerToken = process.env.X_BEARER_TOKEN;

  if (!bearerToken) {
    return NextResponse.json(
      { error: "X_BEARER_TOKEN not configured", tweets: [], lastUpdated: new Date().toISOString() },
      { status: 500 }
    );
  }

  const usernames = xCreators.map((c) => c.username).filter(Boolean);

  if (usernames.length === 0) {
    const empty = { tweets: [], lastUpdated: new Date().toISOString(), message: "No creators configured" };
    return NextResponse.json(empty, { status: 200, headers: CACHE_HEADERS });
  }

  // --- Single batched query: from:user1 OR from:user2 ... ---
  const query = usernames.map((u) => `from:${u}`).join(" OR ");

  // Twitter Basic tier: search/recent allows 10 requests / month on free,
  // 60 req/15 min on Basic ($100/mo). With 5-min caching that's ~8,640
  // calls/month max — well within Basic. Reduce max_results to 30 to stay
  // lean on read quota (Basic = 10k tweets/month read).
  const params = new URLSearchParams({
    query,
    max_results: "30",
    "tweet.fields": "created_at,public_metrics,author_id,entities",
    "user.fields": "name,username,profile_image_url,verified",
    expansions: "author_id",
    sort_order: "recency",
  });

  try {
    const res = await fetch(
      `https://api.twitter.com/2/tweets/search/recent?${params.toString()}`,
      {
        headers: { Authorization: `Bearer ${bearerToken}` },
        cache: "no-store", // we handle caching ourselves
      }
    );

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("Twitter API error:", res.status, errorBody);

      // If we have stale cache, serve it rather than failing
      if (memoryCache) {
        return NextResponse.json(memoryCache.data, { status: 200, headers: CACHE_HEADERS });
      }

      return NextResponse.json(
        { error: `Twitter API returned ${res.status}`, tweets: [], lastUpdated: new Date().toISOString() },
        { status: 502 }
      );
    }

    const data: TwitterResponse = await res.json();

    const usersMap = new Map<string, TwitterUser>();
    if (data.includes?.users) {
      for (const user of data.includes.users) {
        usersMap.set(user.id, user);
      }
    }

    const tweets: FormattedTweet[] = (data.data ?? []).map((tweet) => {
      const author = usersMap.get(tweet.author_id);
      return {
        id: tweet.id,
        text: tweet.text,
        displayName: author?.name ?? "Unknown",
        handle: author?.username ?? "unknown",
        avatarUrl: author?.profile_image_url?.replace("_normal", "_bigger") ?? "",
        verified: author?.verified ?? false,
        timestamp: tweet.created_at,
        likes: tweet.public_metrics.like_count,
        retweets: tweet.public_metrics.retweet_count,
        replies: tweet.public_metrics.reply_count,
        views: tweet.public_metrics.impression_count,
        entities: tweet.entities ?? null,
      };
    });

    const payload = { tweets, lastUpdated: new Date().toISOString() };

    // --- Store in memory cache ---
    memoryCache = { data: payload, expiresAt: Date.now() + CACHE_TTL_MS };

    return NextResponse.json(payload, { status: 200, headers: CACHE_HEADERS });
  } catch (err) {
    console.error("Failed to fetch from Twitter API:", err);

    // Serve stale cache on error
    if (memoryCache) {
      return NextResponse.json(memoryCache.data, { status: 200, headers: CACHE_HEADERS });
    }

    return NextResponse.json(
      { error: "Failed to fetch tweets", tweets: [], lastUpdated: new Date().toISOString() },
      { status: 500 }
    );
  }
}
