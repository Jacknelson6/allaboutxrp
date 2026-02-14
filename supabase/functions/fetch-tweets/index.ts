import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// 4 quality crypto news sources, filtered to XRP-only content downstream
const TWITTER_SEARCH_QUERY =
  "(from:TheCryptoBasic OR from:WatcherGuru OR from:CoinDesk OR from:Cointelegraph) (XRP OR Ripple OR XRPL OR RLUSD) -is:reply -is:retweet";

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

    // Filter out engagement bait and shitposts
    const isEngagementBait = (text: string): boolean => {
      const clean = text.replace(/https?:\/\/\S+/g, "").trim();
      
      // Too short to be real news
      if (clean.length < 30) return true;
      
      // Engagement bait patterns
      const baitPatterns = [
        /^(who|what do you|do you|are you|will|would|should|can|how many).{0,30}\?$/i,  // Simple questions
        /who('s| is) (still |)?(holding|buying|bullish|ready)/i,
        /like if you/i,
        /rt if/i,
        /retweet if/i,
        /drop a .{0,10} if/i,
        /comment .{0,10} below/i,
        /tag (a |your )/i,
        /who else/i,
        /am i the only/i,
        /unpopular opinion/i,
        /hot take/i,
        /let that sink in/i,
        /this is (huge|massive|insane|wild|crazy)\.?$/i,
        /^(gm|gn|lfg|wagmi|ngmi|iykyk)[\s!.]*$/i,
        /not financial advice/i,
        /to the moon/i,
        /wen (moon|lambo|pump)/i,
        /trust me/i,
        /you('re| are) not ready/i,
        /imagine not (buying|holding|owning)/i,
        /still early/i,
        /last chance to/i,
        /don'?t sleep on/i,
      ];
      if (baitPatterns.some(p => p.test(clean))) return true;
      
      // Excessive emojis (more than 30% of content is emoji)
      const emojiCount = (clean.match(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu) || []).length;
      if (emojiCount > 5 && emojiCount / clean.length > 0.15) return true;

      // ALL CAPS hype (more than 60% uppercase, excluding tickers)
      const noTickers = clean.replace(/\$[A-Z]+/g, "").replace(/#[A-Z]+/g, "");
      const letters = noTickers.replace(/[^a-zA-Z]/g, "");
      if (letters.length > 20 && letters.replace(/[^A-Z]/g, "").length / letters.length > 0.6) return true;
      
      // Ends with just a question and nothing substantial before it
      if (/\?\s*$/.test(clean) && clean.split(/[.!?]/).filter(s => s.trim().length > 0).length <= 1 && clean.length < 80) return true;

      return false;
    };

    // XRP relevance check - must mention XRP/Ripple/XRPL/RLUSD/crypto-related terms
    const isXRPRelevant = (text: string): boolean => {
      const lower = text.toLowerCase();
      const terms = ["xrp", "ripple", "xrpl", "rlusd", "crypto", "blockchain", "token", "coin", "defi", "stablecoin", "sec", "etf", "exchange", "trading", "market", "price", "ledger", "wallet", "regulation"];
      return terms.some(t => lower.includes(t));
    };

    const filtered = tweets.filter(t => {
      if (t.text.startsWith("RT @")) return false;
      if (isEngagementBait(t.text)) return false;
      if (!isXRPRelevant(t.text)) return false;
      return true;
    });

    // Deduplicate by similar content (normalize text, check first 60 chars)
    const seen = new Set<string>();
    const deduped = filtered.filter(t => {
      const normalized = t.text.replace(/https?:\/\/\S+/g, "").replace(/[^a-zA-Z0-9\s]/g, "").toLowerCase().trim().substring(0, 60);
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    });

    const rows = deduped.map((tweet) => {
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
        filtered: tweets.length - deduped.length,
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
