import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/slugify";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;
const BATCH_SIZE = 25;

interface RawArticle {
  id: string;
  title: string;
  source: string;
  url: string;
}

interface EnrichedArticle {
  simple_title: string;
  summary: string;
  importance_score: number;
  sentiment: "bullish" | "bearish" | "neutral";
}

async function enrichBatch(articles: RawArticle[]): Promise<Record<string, EnrichedArticle>> {
  const articleList = articles
    .map((a, i) => `[${i}] "${a.title}" (${a.source})`)
    .join("\n");

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "anthropic/claude-sonnet-4",
      messages: [
        {
          role: "system",
          content: `You are an XRP news editor for AllAboutXRP.com. For each article:

1. REWRITE the headline: Clear, concise, no source name, no clickbait. Max 80 chars.
2. SUMMARY: 1-2 sentences explaining why this matters for XRP holders. Be specific about the implication.
3. IMPORTANCE (1-10): Rate based on actual impact to XRP ecosystem.
   - 9-10: Major regulatory, partnership, or price-moving events
   - 7-8: Meaningful ecosystem developments, notable adoption
   - 5-6: Interesting but not urgent, minor updates
   - 1-4: Clickbait, recycled takes, speculation with no substance, price prediction fluff
4. SENTIMENT: bullish, bearish, or neutral

Filter aggressively. Most crypto "news" is garbage. Only score 7+ for genuinely important stories.

Respond as JSON array matching the index order:
[{"i":0,"title":"...","summary":"...","score":8,"sentiment":"bullish"}, ...]`,
        },
        {
          role: "user",
          content: articleList,
        },
      ],
      temperature: 0.3,
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenRouter error: ${res.status} ${err}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content ?? "";

  // Parse JSON from response (handle markdown code blocks)
  const jsonMatch = content.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error("No JSON array in response");

  const parsed = JSON.parse(jsonMatch[0]) as Array<{
    i: number;
    title: string;
    summary: string;
    score: number;
    sentiment: string;
  }>;

  const result: Record<string, EnrichedArticle> = {};
  for (const item of parsed) {
    const article = articles[item.i];
    if (!article) continue;
    result[article.id] = {
      simple_title: item.title,
      summary: item.summary,
      importance_score: item.score,
      sentiment: (item.sentiment as "bullish" | "bearish" | "neutral") || "neutral",
    };
  }
  return result;
}

export async function POST() {
  if (!OPENROUTER_KEY) {
    return NextResponse.json({ error: "No API key configured" }, { status: 500 });
  }

  const supabase = createServiceClient();

  // Fetch articles that haven't been fully enriched (missing simple_title OR summary)
  const { data: raw, error } = await supabase
    .from("news")
    .select("id, title, source, url")
    .or("simple_title.is.null,summary.is.null")
    .order("published_at", { ascending: false })
    .limit(BATCH_SIZE);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!raw || raw.length === 0) {
    return NextResponse.json({ enriched: 0, message: "All articles already enriched" });
  }

  try {
    const enriched = await enrichBatch(raw);
    let updated = 0;

    for (const [id, data] of Object.entries(enriched)) {
      const { error: updateErr } = await supabase
        .from("news")
        .update({
          simple_title: data.simple_title,
          summary: data.summary,
          importance_score: data.importance_score,
          sentiment: data.sentiment,
        })
        .eq("id", id);

      if (!updateErr) updated++;
    }

    // Generate slugs for newly enriched articles
    const enrichedIds = Object.keys(enriched);
    const slugResults: string[] = [];
    for (const id of enrichedIds) {
      const data = enriched[id];
      const baseSlug = slugify(data.simple_title || raw.find(a => a.id === id)?.title || id);
      
      // Check for collision
      const { data: existing } = await supabase
        .from("news")
        .select("id")
        .eq("slug", baseSlug)
        .neq("id", id)
        .limit(1);

      const finalSlug = existing && existing.length > 0
        ? `${baseSlug}-${id.slice(0, 8)}`
        : baseSlug;

      const { error: slugErr } = await supabase
        .from("news")
        .update({ slug: finalSlug })
        .eq("id", id)
        .is("slug", null);

      if (!slugErr) slugResults.push(id);
    }

    // Trigger blog generation in background (fire and forget)
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null);
    if (baseUrl) {
      fetch(`${baseUrl}/api/news/generate-blogs`, { method: "POST" }).catch(() => {});
    }

    return NextResponse.json({
      enriched: updated,
      total: raw.length,
      message: `Enriched ${updated}/${raw.length} articles`,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
