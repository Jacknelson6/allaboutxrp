import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { DOMParser } from "https://esm.sh/linkedom@0.16.11";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const OPENROUTER_API_KEY = Deno.env.get("OPENROUTER_API_KEY") || "";

async function generateTakeaway(title: string, source: string): Promise<string> {
  if (!OPENROUTER_API_KEY) return "";

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://allaboutxrp.com",
        "X-Title": "AllAboutXRP News",
      },
      body: JSON.stringify({
        model: "minimax/minimax-m2.5",
        max_tokens: 150,
        messages: [
          {
            role: "system",
            content:
              "Write exactly 1-2 short sentences about how this news impacts XRP investors. Focus on price action, adoption, or regulatory implications. No fluff, no disclaimers, no emoji, no preamble. Write like a Bloomberg terminal alert.",
          },
          {
            role: "user",
            content: `Headline: "${title}" (Source: ${source})`,
          },
        ],
      }),
    });

    if (!res.ok) {
      console.error("OpenRouter error:", res.status, await res.text());
      return "";
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content?.trim() || "";
  } catch (err) {
    console.error("Takeaway generation error:", err);
    return "";
  }
}

Deno.serve(async (_req) => {
  try {
    const rssUrl =
      "https://news.google.com/rss/search?q=XRP+ripple+XRPL&hl=en-US&gl=US&ceid=US:en";
    const res = await fetch(rssUrl, {
      headers: { "User-Agent": "AllAboutXRP/1.0" },
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Google News RSS error", status: res.status }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    const xml = await res.text();
    const doc = new DOMParser().parseFromString(xml, "text/xml");
    const items = doc.querySelectorAll("item");

    if (!items || items.length === 0) {
      return new Response(
        JSON.stringify({ message: "No news found", upserted: 0 }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Check which articles already have summaries (skip re-generating)
    const { data: existing } = await supabase
      .from("news")
      .select("id, summary")
      .not("summary", "is", null);
    const existingIds = new Set((existing || []).filter((e) => e.summary).map((e) => e.id));

    // Parse all items first
    const parsed = await Promise.all(
      Array.from(items)
        .slice(0, 25)
        .map(async (item: any) => {
          const title = item.querySelector("title")?.textContent || "";
          const link = item.querySelector("link")?.textContent || "";
          const pubDate = item.querySelector("pubDate")?.textContent || "";
          const source = item.querySelector("source")?.textContent || "";
          const domain = source.toLowerCase().replace(/\s+/g, "");

          const hashBuffer = await crypto.subtle.digest(
            "SHA-256",
            new TextEncoder().encode(link)
          );
          const id = Array.from(new Uint8Array(hashBuffer))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");

          return { id, title: title.trim(), url: link.trim(), source: source.trim(), published_at: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(), domain, votes: {}, fetched_at: new Date().toISOString() };
        })
    );

    // Generate takeaways only for new articles (batch up to 10 at a time to stay fast)
    const needsSummary = parsed.filter((p) => !existingIds.has(p.id)).slice(0, 10);
    const summaryMap = new Map<string, string>();

    // Run takeaway generation in parallel (max 5 concurrent)
    const chunks = [];
    for (let i = 0; i < needsSummary.length; i += 5) {
      chunks.push(needsSummary.slice(i, i + 5));
    }
    for (const chunk of chunks) {
      const results = await Promise.all(
        chunk.map(async (item) => {
          const summary = await generateTakeaway(item.title, item.source);
          return { id: item.id, summary };
        })
      );
      for (const r of results) {
        if (r.summary) summaryMap.set(r.id, r.summary);
      }
    }

    // Build rows with summaries
    const rows = parsed.map((item) => ({
      ...item,
      summary: summaryMap.get(item.id) || null,
    }));

    const { error } = await supabase.from("news").upsert(rows, {
      onConflict: "id",
      ignoreDuplicates: false,
    });

    if (error) {
      console.error("Supabase upsert error:", error);
      return new Response(
        JSON.stringify({ error: "Database error", details: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Clean up old news (older than 7 days)
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    await supabase.from("news").delete().lt("published_at", sevenDaysAgo);

    return new Response(
      JSON.stringify({
        message: "News fetched and stored",
        upserted: rows.length,
        summariesGenerated: summaryMap.size,
        sources: [...new Set(rows.map((r) => r.source))],
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Fetch news error:", err);
    return new Response(
      JSON.stringify({ error: "Internal error", details: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
