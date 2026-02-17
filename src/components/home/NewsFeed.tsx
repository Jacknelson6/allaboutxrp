"use client";

import { useState, useEffect, useCallback } from "react";

interface Article {
  title: string;
  url: string;
  source: string;
  summary: string | null;
  og_image: string | null;
  published_at: string;
  importance_score: number;
  sentiment: string | null;
}

const SENTIMENT_CONFIG = {
  bullish: { emoji: "🟢", label: "Bullish", color: "text-[#22c55e]", bg: "bg-[#22c55e]/10", border: "border-[#22c55e]/20" },
  bearish: { emoji: "🔴", label: "Bearish", color: "text-[#ef4444]", bg: "bg-[#ef4444]/10", border: "border-[#ef4444]/20" },
  neutral: { emoji: "🟡", label: "Neutral", color: "text-[#6b7280]", bg: "bg-[#6b7280]/10", border: "border-[#6b7280]/20" },
} as const;

function relativeTime(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = now - then;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

const PAGE_SIZE = 20;

export default function NewsFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchArticles = useCallback(async (offset: number) => {
    const res = await fetch(`/api/news?limit=${PAGE_SIZE}&offset=${offset}`);
    if (!res.ok) return [];
    const data: Article[] = await res.json();
    if (data.length < PAGE_SIZE) setHasMore(false);
    return data;
  }, []);

  useEffect(() => {
    fetchArticles(0).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [fetchArticles]);

  const loadMore = async () => {
    setLoadingMore(true);
    const data = await fetchArticles(articles.length);
    setArticles((prev) => [...prev, ...data]);
    setLoadingMore(false);
  };

  if (loading) {
    return (
      <div className="py-8 space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-24 rounded-2xl bg-[#16181C] animate-pulse" />
        ))}
      </div>
    );
  }

  if (articles.length === 0) return null;

  return (
    <div className="py-4">
      <h2 className="text-lg font-bold text-text-primary px-4 mb-4">Latest News</h2>
      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-[#2F3336]" />

        <div className="space-y-3">
          {articles.map((article, i) => {
            const s = SENTIMENT_CONFIG[(article.sentiment as keyof typeof SENTIMENT_CONFIG) ?? "neutral"] ?? SENTIMENT_CONFIG.neutral;
            return (
              <div key={article.url + i} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[21px] top-4 w-2.5 h-2.5 rounded-full bg-[#2F3336] border-2 border-[#16181C] group-hover:bg-[#0085FF] transition-colors" />

                <div className="rounded-2xl border border-[#2F3336] bg-[#16181C] p-4 hover:border-[#0085FF]/30 transition-colors">
                  <div className="flex gap-3">
                    <div className="flex-1 min-w-0">
                      {/* Sentiment + source + time */}
                      <div className="flex items-center gap-2 mb-1.5 text-xs">
                        <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full ${s.bg} ${s.border} border ${s.color} font-medium`}>
                          {s.emoji} {s.label}
                        </span>
                        <span className="text-text-secondary">{article.source}</span>
                        <span className="text-text-secondary/50">·</span>
                        <span className="text-text-secondary/70">{relativeTime(article.published_at)}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-semibold text-text-primary leading-snug line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Why it matters (our summary) */}
                      {article.summary && (
                        <p className="mt-1.5 text-[13px] text-text-secondary leading-relaxed">
                          {article.summary}
                        </p>
                      )}

                      {/* Source link */}
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-xs text-[#0085FF]/70 hover:text-[#0085FF] transition-colors"
                      >
                        Read source →
                      </a>
                    </div>

                    {/* Thumbnail */}
                    {article.og_image && (
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-[#2F3336]">
                        <img
                          src={article.og_image}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className="px-6 py-2 rounded-full border border-[#2F3336] text-sm text-text-secondary hover:text-text-primary hover:border-[#0085FF]/30 transition-colors disabled:opacity-50"
          >
            {loadingMore ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
