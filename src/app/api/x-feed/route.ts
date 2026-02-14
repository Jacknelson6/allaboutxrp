import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=300, stale-while-revalidate=120",
};

export const dynamic = "force-dynamic";

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

    // Filter out retweets and tweets that are just links
    const filtered = tweets.filter((t) => {
      if (t.text.startsWith("RT @")) return false;
      const stripped = t.text.replace(/https?:\/\/\S+/g, "").trim();
      if (stripped.length < 10) return false; // skip tweets that are basically just a link/emoji
      return true;
    });

    // Transform to match the XFeed component's expected format
    const formatted = filtered.map((t) => ({
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
