import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const CRYPTOPANIC_API_KEY = Deno.env.get("CRYPTOPANIC_API_KEY") || "";

interface CryptoPanicPost {
  id: number;
  title: string;
  url: string;
  source: { title: string; domain: string };
  published_at: string;
  votes: { positive: number; negative: number; important: number; liked: number; lol: number };
}

Deno.serve(async (_req) => {
  try {
    if (!CRYPTOPANIC_API_KEY) {
      return new Response(JSON.stringify({ error: "CRYPTOPANIC_API_KEY not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiUrl = `https://cryptopanic.com/api/free/v1/posts/?auth_token=${CRYPTOPANIC_API_KEY}&currencies=XRP&filter=important&public=true`;
    const res = await fetch(apiUrl, {
      headers: { "User-Agent": "AllAboutXRP/1.0" },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("CryptoPanic API error:", res.status, errorText);
      return new Response(JSON.stringify({ error: "CryptoPanic API error", status: res.status }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    const posts: CryptoPanicPost[] = data.results || [];

    if (posts.length === 0) {
      return new Response(JSON.stringify({ message: "No news found", upserted: 0 }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const rows = posts.map((post) => ({
      id: String(post.id),
      title: post.title,
      url: post.url,
      source: post.source?.title || "Unknown",
      published_at: post.published_at,
      domain: post.source?.domain || "",
      votes: post.votes || {},
      fetched_at: new Date().toISOString(),
    }));

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { error } = await supabase.from("news").upsert(rows, { onConflict: "id" });

    if (error) {
      console.error("Supabase upsert error:", error);
      return new Response(JSON.stringify({ error: "Database error", details: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Clean up old news (older than 7 days)
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    await supabase.from("news").delete().lt("published_at", sevenDaysAgo);

    return new Response(
      JSON.stringify({ message: "News fetched and stored", upserted: rows.length }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Fetch news error:", err);
    return new Response(JSON.stringify({ error: "Internal error", details: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
