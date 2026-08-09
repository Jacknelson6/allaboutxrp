"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

interface Article {
  title: string;
  simple_title: string | null;
  url: string;
  source: string;
  summary: string | null;
  published_at: string;
  sentiment: string | null;
  slug: string | null;
}

const PAGE_SIZE = 20;

function relativeTime(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
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

export default function NewsFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchArticles = useCallback(async (offset: number) => {
    const response = await fetch(`/api/news?limit=${PAGE_SIZE}&offset=${offset}`);
    if (!response.ok) return [];
    return response.json() as Promise<Article[]>;
  }, []);

  useEffect(() => {
    fetchArticles(0).then((data) => {
      setArticles(data);
      setHasMore(data.length === PAGE_SIZE);
      setLoading(false);
    });
  }, [fetchArticles]);

  const loadMore = async () => {
    setLoadingMore(true);
    const data = await fetchArticles(articles.length);
    setArticles((current) => [...current, ...data]);
    setHasMore(data.length === PAGE_SIZE);
    setLoadingMore(false);
  };

  if (loading) {
    return (
      <div className="divide-y divide-surface-border border-y border-surface-border" aria-label="Loading latest news">
        {[...Array(5)].map((_, index) => <div key={index} className="h-28 animate-pulse bg-surface-elevated" />)}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="border-y border-surface-border py-8">
        <p className="font-mono text-xs font-semibold text-xrp-accent">WIRE STATUS / AWAITING NEXT REPORT</p>
        <p className="mt-3 text-sm text-text-secondary">Browse the learning center while the next dated report is prepared.</p>
        <Link href="/learn" className="text-link mt-4 text-sm">Open the learning center</Link>
      </div>
    );
  }

  return (
    <div>
      <ol className="divide-y divide-surface-border border-y border-surface-border">
        {articles.map((article, index) => {
          const href = article.slug ? `/news/${article.slug}` : article.url;
          const external = !article.slug;
          return (
            <li key={`${article.url}-${index}`}>
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group grid min-h-28 gap-3 py-5 transition-colors hover:bg-surface-elevated sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:items-start sm:px-3"
              >
                <span className="font-mono text-[11px] text-text-secondary">{relativeTime(article.published_at)}</span>
                <span>
                  <span className="block text-base font-semibold leading-snug text-text-primary group-hover:text-xrp-accent">
                    {article.simple_title || article.title}
                  </span>
                  {article.summary ? <span className="mt-1.5 line-clamp-2 block text-sm leading-6 text-text-secondary">{article.summary}</span> : null}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wide text-text-secondary">{article.source} ↗</span>
              </Link>
            </li>
          );
        })}
      </ol>

      {hasMore ? (
        <button type="button" onClick={loadMore} disabled={loadingMore} className="btn-secondary mt-6">
          {loadingMore ? "Loading reports..." : "Load more reports"}
        </button>
      ) : null}
    </div>
  );
}
