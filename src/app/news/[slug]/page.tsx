import { createServiceClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  simple_title: string | null;
  url: string;
  source: string;
  summary: string | null;
  blog_content: string | null;
  og_image: string | null;
  published_at: string;
  sentiment: string | null;
  slug: string;
  related_article_id: string | null;
  related_article_context: string | null;
}

interface RelatedArticle {
  id: string;
  simple_title: string | null;
  title: string;
  slug: string;
  summary: string | null;
  published_at: string;
  sentiment: string | null;
  source: string;
}

async function getArticle(slug: string): Promise<Article | null> {
  const supabase = createServiceClient();
  const { data } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .single();
  return data;
}

async function getRelatedArticles(articleId: string, relatedId: string | null): Promise<RelatedArticle[]> {
  const supabase = createServiceClient();
  const { data } = await supabase
    .from("news")
    .select("id, simple_title, title, slug, summary, published_at, sentiment, source")
    .neq("id", articleId)
    .not("slug", "is", null)
    .not("summary", "is", null)
    .gte("importance_score", 6)
    .order("published_at", { ascending: false })
    .limit(5);
  return (data || []).filter((a) => a.id !== relatedId);
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article Not Found" };

  const title = article.simple_title || article.title;
  const description = article.summary || `Read about ${title} on AllAboutXRP`;

  return {
    title: `${title} | AllAboutXRP`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: article.published_at,
      siteName: "AllAboutXRP",
      ...(article.og_image ? { images: [{ url: article.og_image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const SENTIMENT_STYLES = {
  bullish: { label: "Bullish", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  bearish: { label: "Bearish", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
  neutral: { label: "Neutral", color: "text-gray-400", bg: "bg-gray-500/10", border: "border-gray-500/20" },
} as const;

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) notFound();

  const relatedArticles = await getRelatedArticles(article.id, article.related_article_id);
  const title = article.simple_title || article.title;
  const sentiment = SENTIMENT_STYLES[(article.sentiment as keyof typeof SENTIMENT_STYLES) || "neutral"] || SENTIMENT_STYLES.neutral;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: article.summary,
    datePublished: article.published_at,
    publisher: {
      "@type": "Organization",
      name: "AllAboutXRP",
      url: "https://allaboutxrp.com",
    },
    mainEntityOfPage: `https://allaboutxrp.com/news/${article.slug}`,
    ...(article.og_image ? { image: article.og_image } : {}),
  };

  return (
    <div className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-[720px] mx-auto px-4 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#0085FF] transition-colors mb-6"
        >
          ← Back to news
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>

          <div className="flex items-center gap-3 text-sm flex-wrap">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${sentiment.bg} border ${sentiment.border} ${sentiment.color} font-medium text-xs`}>
              {sentiment.label}
            </span>
            <span className="text-gray-500">{article.source}</span>
            <span className="text-gray-600">·</span>
            <time className="text-gray-500" dateTime={article.published_at}>
              {formatDate(article.published_at)}
            </time>
          </div>
        </header>

        {/* Content */}
        {article.blog_content ? (
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#0085FF] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: article.blog_content }}
          />
        ) : (
          <div className="text-gray-300 text-lg leading-relaxed">
            {article.summary && <p>{article.summary}</p>}
          </div>
        )}

        {/* Original source */}
        <div className="mt-10 pt-6 border-t border-[#2F3336]">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            Read original source at {article.source} →
          </a>
        </div>

        {/* CTAs */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/digest"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#0085FF]/20 bg-[#0085FF]/5 text-[#0085FF] text-sm font-medium hover:bg-[#0085FF]/10 transition-colors"
          >
            📊 Daily Analysis
          </Link>
          <Link
            href="/learn/what-is-xrp"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#2F3336] bg-[#16181C] text-gray-300 text-sm font-medium hover:border-[#0085FF]/30 transition-colors"
          >
            📚 Learn About XRP
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#2F3336] bg-[#16181C] text-gray-300 text-sm font-medium hover:border-[#0085FF]/30 transition-colors"
          >
            📰 More XRP News
          </Link>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-bold text-white mb-4">Related Articles</h2>
            <div className="space-y-3">
              {relatedArticles.slice(0, 4).map((related) => {
                const rs = SENTIMENT_STYLES[(related.sentiment as keyof typeof SENTIMENT_STYLES) || "neutral"] || SENTIMENT_STYLES.neutral;
                return (
                  <Link
                    key={related.id}
                    href={`/news/${related.slug}`}
                    className="block rounded-xl border border-[#2F3336] bg-[#16181C] p-4 hover:border-[#0085FF]/30 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-1 text-xs">
                      <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full ${rs.bg} border ${rs.border} ${rs.color} font-medium`}>
                        {rs.label}
                      </span>
                      <span className="text-gray-500">{related.source}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#0085FF] transition-colors">
                      {related.simple_title || related.title}
                    </h3>
                    {related.summary && (
                      <p className="mt-1 text-xs text-gray-500 line-clamp-2">{related.summary}</p>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
