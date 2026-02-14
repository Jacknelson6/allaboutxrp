import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const TWITTER_SEARCH_QUERY =
  "(from:TheCryptoBasic OR from:jungleincxrp OR from:XRPLLabs OR from:FlareNetworks OR from:s_alderoty OR from:BullrunnersHQ) -is:reply -is:retweet";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const X_BEARER_TOKEN = Deno.env.get("X_BEARER_TOKEN")!;

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

Deno.serve(async (_req) => {
  try {
    if (!X_BEARER_TOKEN) {
      return new Response(JSON.stringify({ error: "X_BEARER_TOKEN not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const searchUrl = new URL("https://api.twitter.com/2/tweets/search/recent");
    searchUrl.searchParams.set("query", TWITTER_SEARCH_QUERY);
    searchUrl.searchParams.set("max_results", "20");
    searchUrl.searchParams.set("tweet.fields", "created_at,public_metrics,author_id,attachments");
    searchUrl.searchParams.set("user.fields", "name,username,profile_image_url");
    searchUrl.searchParams.set("media.fields", "url,preview_image_url,type");
    searchUrl.searchParams.set("expansions", "author_id,attachments.media_keys");

    const res = await fetch(searchUrl.toString(), {
      headers: { Authorization: `Bearer ${X_BEARER_TOKEN}` },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Twitter API error:", res.status, errorText);
      return new Response(JSON.stringify({ error: "Twitter API error", status: res.status, details: errorText }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    const tweets: TwitterTweet[] = data.data || [];
    const users: TwitterUser[] = data.includes?.users || [];
    const media: TwitterMedia[] = data.includes?.media || [];

    if (tweets.length === 0) {
      return new Response(JSON.stringify({ message: "No tweets found", upserted: 0 }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const userMap = new Map<string, TwitterUser>();
    for (const user of users) userMap.set(user.id, user);

    const mediaMap = new Map<string, TwitterMedia>();
    for (const m of media) mediaMap.set(m.media_key, m);

    const rows = tweets.map((tweet) => {
      const author = userMap.get(tweet.author_id);
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

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { error } = await supabase.from("tweets").upsert(rows, { onConflict: "id" });

    if (error) {
      console.error("Supabase upsert error:", error);
      return new Response(JSON.stringify({ error: "Database error", details: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Tweets fetched and stored",
        upserted: rows.length,
        authors: [...new Set(rows.map((r) => r.author_username))],
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Fetch tweets error:", err);
    return new Response(JSON.stringify({ error: "Internal error", details: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
