import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

const TWITTER_SEARCH_QUERY =
  "(from:Ripple OR from:bgarlinghouse OR from:JoelKatz OR from:TheCryptoBasic OR from:CoinDesk OR from:Cointelegraph OR from:XRPLedger OR from:RippleXDev) -is:reply -is:retweet";

interface TwitterUser {
  id: string;
  name: string;
  username: string;
  profile_image_url?: string;
}

interface TwitterMedia {
  media_key: string;
  type: string;
  url?: string;
  preview_image_url?: string;
}

interface TwitterTweet {
  id: string;
  text: string;
  created_at: string;
  author_id: string;
  attachments?: { media_keys?: string[] };
  public_metrics?: {
    like_count: number;
    retweet_count: number;
    reply_count: number;
  };
}

export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const bearerToken = process.env.X_BEARER_TOKEN;
  if (!bearerToken) {
    return NextResponse.json({ error: "X_BEARER_TOKEN not configured" }, { status: 500 });
  }

  try {
    // Fetch tweets from Twitter API v2
    const searchUrl = new URL("https://api.twitter.com/2/tweets/search/recent");
    searchUrl.searchParams.set("query", TWITTER_SEARCH_QUERY);
    searchUrl.searchParams.set("max_results", "20");
    searchUrl.searchParams.set("tweet.fields", "created_at,public_metrics,author_id,attachments");
    searchUrl.searchParams.set("user.fields", "name,username,profile_image_url");
    searchUrl.searchParams.set("media.fields", "url,preview_image_url,type");
    searchUrl.searchParams.set("expansions", "author_id,attachments.media_keys");

    const res = await fetch(searchUrl.toString(), {
      headers: { Authorization: `Bearer ${bearerToken}` },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Twitter API error:", res.status, errorText);
      return NextResponse.json(
        { error: "Twitter API error", status: res.status, details: errorText },
        { status: 502 }
      );
    }

    const data = await res.json();
    const tweets: TwitterTweet[] = data.data || [];
    const users: TwitterUser[] = data.includes?.users || [];
    const media: TwitterMedia[] = data.includes?.media || [];

    if (tweets.length === 0) {
      return NextResponse.json({ message: "No tweets found", upserted: 0 });
    }

    // Build user lookup
    const userMap = new Map<string, TwitterUser>();
    for (const user of users) {
      userMap.set(user.id, user);
    }

    // Build media lookup
    const mediaMap = new Map<string, TwitterMedia>();
    for (const m of media) {
      mediaMap.set(m.media_key, m);
    }

    // Transform to our schema
    const rows = tweets.map((tweet) => {
      const author = userMap.get(tweet.author_id);
      // Get first image/video preview from attachments
      const mediaKeys = tweet.attachments?.media_keys || [];
      let mediaUrl: string | null = null;
      for (const key of mediaKeys) {
        const m = mediaMap.get(key);
        if (m) {
          mediaUrl = m.url || m.preview_image_url || null;
          break;
        }
      }
      return {
        id: tweet.id,
        author_username: author?.username || "unknown",
        author_name: author?.name || "Unknown",
        author_avatar: author?.profile_image_url?.replace("_normal", "_bigger") || "",
        text: tweet.text,
        created_at: tweet.created_at,
        likes: tweet.public_metrics?.like_count || 0,
        retweets: tweet.public_metrics?.retweet_count || 0,
        replies: tweet.public_metrics?.reply_count || 0,
        url: `https://x.com/${author?.username || "i"}/status/${tweet.id}`,
        media_url: mediaUrl,
        fetched_at: new Date().toISOString(),
      };
    });

    // Upsert into Supabase
    const supabase = createServiceClient();
    const { error } = await supabase.from("tweets").upsert(rows, { onConflict: "id" });

    if (error) {
      console.error("Supabase upsert error:", error);
      return NextResponse.json({ error: "Database error", details: error.message }, { status: 500 });
    }

    return NextResponse.json({
      message: "Tweets fetched and stored",
      upserted: rows.length,
      authors: [...new Set(rows.map((r) => r.author_username))],
    });
  } catch (err) {
    console.error("Fetch tweets error:", err);
    return NextResponse.json(
      { error: "Internal error", details: String(err) },
      { status: 500 }
    );
  }
}
