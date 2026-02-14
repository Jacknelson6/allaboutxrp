import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { DOMParser } from "https://esm.sh/linkedom@0.16.11";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

Deno.serve(async (_req) => {
  try {
    // Fetch XRP news from Google News RSS
    const rssUrl = "https://news.google.com/rss/search?q=XRP+ripple+XRPL&hl=en-US&gl=US&ceid=US:en";
    const res = await fetch(rssUrl, {
      headers: { "User-Agent": "AllAboutXRP/1.0" },
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Google News RSS error", status: res.status }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const xml = await res.text();
    const doc = new DOMParser().parseFromString(xml, "text/xml");
    const items = doc.querySelectorAll("item");

    if (!items || items.length === 0) {
      return new Response(JSON.stringify({ message: "No news found", upserted: 0 }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const rows = await Promise.all(
      Array.from(items).slice(0, 30).map(async (item: any) => {
        const title = item.querySelector("title")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";
        const pubDate = item.querySelector("pubDate")?.textContent || "";
        const source = item.querySelector("source")?.textContent || "";
        const domain = source.toLowerCase().replace(/\s+/g, "");

        const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(link));
        const id = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, "0")).join("");

        return {
          id,
          title: title.trim(),
          url: link.trim(),
          source: source.trim(),
          published_at: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
          domain,
          votes: {},
          fetched_at: new Date().toISOString(),
        };
      })
    );

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
      JSON.stringify({
        message: "News fetched and stored",
        upserted: rows.length,
        sources: [...new Set(rows.map((r) => r.source))],
      }),
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
