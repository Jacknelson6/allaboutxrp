import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=300, stale-while-revalidate=120",
};

export const dynamic = "force-dynamic";
export const revalidate = 300; // ISR: revalidate every 5 minutes

export async function GET() {
  try {
    const supabase = createServiceClient();
    const { data: tweets, error } = await supabase
      .from("tweets")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      console.error("Supabase query error:", error);
      return NextResponse.json(
        { tweets: [], lastUpdated: new Date().toISOString(), error: error.message },
        { status: 200, headers: CACHE_HEADERS }
      );
    }

    if (!tweets || tweets.length === 0) {
      return NextResponse.json(
        { tweets: [], lastUpdated: new Date().toISOString(), source: "empty" },
        { status: 200, headers: CACHE_HEADERS }
      );
    }

    // Filter out retweets, link-only tweets, and engagement bait
    const filtered = tweets.filter((t) => {
      if (t.text.startsWith("RT @")) return false;
      const stripped = t.text.replace(/https?:\/\/\S+/g, "").trim();
      if (stripped.length < 30) return false;
      // Engagement bait
      if (/^(who|what do you|do you|are you|will|would|should).{0,30}\?$/i.test(stripped)) return false;
      if (/who('s| is) (still )?(holding|buying|bullish|ready)/i.test(stripped)) return false;
      if (/(like if|rt if|retweet if|drop a .{0,10} if|comment .{0,10} below|tag (a |your ))/i.test(stripped)) return false;
      if (/^(gm|gn|lfg|wagmi|ngmi|iykyk)[\s!.]*$/i.test(stripped)) return false;
      if (/(to the moon|wen (moon|lambo)|last chance to|don'?t sleep on|you('re| are) not ready|imagine not)/i.test(stripped)) return false;
      // Short questions
      if (/\?\s*$/.test(stripped) && stripped.length < 80 && stripped.split(/[.!?]/).filter((s: string) => s.trim().length > 0).length <= 1) return false;
      return true;
    });

    // Deduplicate by similar content
    const seen = new Set<string>();
    const deduped = filtered.filter((t) => {
      const normalized = t.text.replace(/https?:\/\/\S+/g, "").replace(/[^a-zA-Z0-9\s]/g, "").toLowerCase().trim().substring(0, 60);
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    });

    // Transform to match the XFeed component's expected format
    const formatted = deduped.map((t) => ({
      id: t.id,
      displayName: t.author_name,
      handle: t.author_username,
      avatarUrl: t.author_avatar || `https://unavatar.io/twitter/${t.author_username}`,
      verified: true,
      timestamp: t.created_at,
      text: t.text,
      likes: t.likes || 0,
      retweets: t.retweets || 0,
      replies: t.replies || 0,
      views: Math.round((t.likes || 0) * 15 + (t.retweets || 0) * 25),
      media: t.media_url || null,
      quoteTweet: null,
      trending: (t.likes || 0) + (t.retweets || 0) > 100,
      url: t.url,
    }));

    return NextResponse.json(
      { tweets: formatted, lastUpdated: new Date().toISOString(), source: "supabase" },
      { status: 200, headers: CACHE_HEADERS }
    );
  } catch (err) {
    console.error("X feed error:", err);
    return NextResponse.json(
      { tweets: [], lastUpdated: new Date().toISOString(), error: "Internal error" },
      { status: 200, headers: CACHE_HEADERS }
    );
  }
}
