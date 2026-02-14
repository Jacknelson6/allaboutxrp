import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { DOMParser } from "https://esm.sh/linkedom@0.16.11";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

// Generate a clean 1-2 sentence summary from a news title
function generateSummary(title: string, source: string): string {
  // Google News titles often have " - Source" at the end, strip it
  let clean = title.replace(/\s*[-–—]\s*[^-–—]+$/, "").trim();
  
  // If the title is already a good sentence, use it
  if (clean.length > 40) {
    // Make it read like a summary, not a headline
    if (!clean.endsWith(".") && !clean.endsWith("!") && !clean.endsWith("?")) {
      clean += ".";
    }
    return clean;
  }
  
  return `${clean}. — ${source}`;
}

Deno.serve(async (_req) => {
  try {
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
          summary: generateSummary(title.trim(), source.trim()),
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
