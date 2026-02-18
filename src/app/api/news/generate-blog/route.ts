import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;

const INTERNAL_PAGES = [
  { path: "/learn/what-is-xrp", label: "What is XRP?" },
  { path: "/learn/xrp-vs-bitcoin", label: "XRP vs Bitcoin" },
  { path: "/learn/xrp-vs-solana", label: "XRP vs Solana" },
  { path: "/learn/xrp-vs-dogecoin", label: "XRP vs Dogecoin" },
  { path: "/learn/xrp-staking", label: "XRP Staking" },
  { path: "/learn/xrp-energy-consumption", label: "XRP Energy Consumption" },
  { path: "/learn/xrp-phishing-protection", label: "XRP Phishing Protection" },
  { path: "/escrow", label: "XRP Escrow Tracker" },
  { path: "/richlist", label: "XRP Rich List" },
  { path: "/acquisitions", label: "Ripple Acquisitions" },
  { path: "/charts", label: "XRP Charts" },
  { path: "/digest", label: "Daily Digest" },
  { path: "/learn/what-is-ripple", label: "What is Ripple?" },
  { path: "/learn/how-does-xrp-work", label: "How Does XRP Work?" },
  { path: "/learn/xrp-price-prediction", label: "XRP Price Prediction" },
  { path: "/learn/sec-lawsuit-impact-on-xrp-price", label: "SEC Lawsuit Impact on XRP" },
  { path: "/learn/xrp-wallets", label: "XRP Wallets" },
  { path: "/learn/xrpl-defi", label: "XRPL DeFi" },
  { path: "/learn/cbdcs-and-xrp", label: "CBDCs and XRP" },
  { path: "/learn/xrp-escrow-explained", label: "XRP Escrow Explained" },
  { path: "/learn/xrp-all-time-high", label: "XRP All-Time High" },
  { path: "/learn/xrp-legal-status-by-country", label: "XRP Legal Status by Country" },
];

export async function POST(request: NextRequest) {
  if (!OPENROUTER_KEY) {
    return NextResponse.json({ error: "No API key" }, { status: 500 });
  }

  const { id } = await request.json();
  if (!id) return NextResponse.json({ error: "Missing article id" }, { status: 400 });

  const supabase = createServiceClient();

  // Fetch the target article
  const { data: article, error: artErr } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (artErr || !article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  if (article.blog_content) {
    return NextResponse.json({ message: "Already has blog content", id });
  }

  // Fetch recent articles for context (past 7 days, excluding self)
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const { data: recentArticles } = await supabase
    .from("news")
    .select("id, simple_title, title, summary, slug, sentiment, published_at")
    .neq("id", id)
    .not("summary", "is", null)
    .not("slug", "is", null)
    .gte("published_at", weekAgo)
    .gte("importance_score", 6)
    .order("published_at", { ascending: false })
    .limit(15);

  const relatedList = (recentArticles || [])
    .map((a, i) => `[${i}] "${a.simple_title || a.title}" (slug: ${a.slug}) — ${a.summary}`)
    .join("\n");

  const internalPagesList = INTERNAL_PAGES
    .map((p) => `- ${p.path} — ${p.label}`)
    .join("\n");

  const prompt = `You are a senior crypto analyst writing for AllAboutXRP.com. Write a blog post about this news story.

ARTICLE:
Title: ${article.simple_title || article.title}
Source: ${article.source}
Summary: ${article.summary || "No summary available"}
Published: ${article.published_at}

RECENT XRP ARTICLES (pick the most relevant one for your analysis paragraph):
${relatedList || "No recent articles available"}

INTERNAL PAGES ON OUR SITE (weave 2-3 relevant links naturally):
${internalPagesList}

INSTRUCTIONS:
Write exactly 3 paragraphs in HTML format.

**Paragraphs 1-2:** Expand on the news story. What happened? Why does it matter for XRP holders and the broader ecosystem? Be specific, cite details from the summary. Write like an informed analyst, not a hype machine. No fluff.

**Paragraph 3 (Analysis):** Connect this story to ONE specific related article from the list above. Pick the most contextually relevant one. Explain how these two developments relate and what the bigger picture looks like for XRP. Reference the related article naturally with an <a> tag linking to /news/[slug]. This paragraph should feel like a human analyst connecting dots—not summarizing.

Throughout all 3 paragraphs, naturally weave in 2-3 <a> links to relevant internal pages from the list. Don't force them—only include links that genuinely add context. Use descriptive anchor text.

FORMAT: Return valid HTML (just the 3 <p> tags, no wrapper). No markdown. No headings.

Also return JSON metadata on a separate line after the HTML:
METADATA: {"related_index": 0, "related_context": "one sentence explaining the connection"}

Where related_index is the [index] of the related article you referenced in paragraph 3.`;

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "anthropic/claude-sonnet-4",
        messages: [
          { role: "user", content: prompt },
        ],
        temperature: 0.6,
        max_tokens: 2000,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`OpenRouter: ${res.status} ${err}`);
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content ?? "";

    // Parse HTML and metadata
    const metadataMatch = content.match(/METADATA:\s*(\{[\s\S]*?\})/);
    let relatedArticleId: string | null = null;
    let relatedContext: string | null = null;

    if (metadataMatch) {
      try {
        const meta = JSON.parse(metadataMatch[1]);
        const idx = meta.related_index;
        if (recentArticles && recentArticles[idx]) {
          relatedArticleId = recentArticles[idx].id;
          relatedContext = meta.related_context;
        }
      } catch { /* ignore parse errors */ }
    }

    // Extract just the HTML (everything before METADATA line)
    const blogContent = content
      .replace(/METADATA:[\s\S]*$/, "")
      .trim();

    // Save to Supabase
    const { error: updateErr } = await supabase
      .from("news")
      .update({
        blog_content: blogContent,
        related_article_id: relatedArticleId,
        related_article_context: relatedContext,
      })
      .eq("id", id);

    if (updateErr) throw new Error(updateErr.message);

    return NextResponse.json({ success: true, id, hasRelated: !!relatedArticleId });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
