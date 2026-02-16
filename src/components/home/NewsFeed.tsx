"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import NewsCardComponent, { type NewsItem } from "./NewsCard";

function useNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news", { cache: "no-store" });
        if (!res.ok) return;
        const data: Array<{
          title: string;
          source: string;
          url: string;
          imageUrl: string | null;
          summary: string;
          publishedAt: string;
          sentiment?: "bullish" | "bearish" | "neutral";
        }> = await res.json();
        if (Array.isArray(data)) {
          setNews(
            data.map((a, i) => ({
              id: `news-${i}-${a.url}`,
              title: a.title,
              summary: a.summary || undefined,
              url: a.url,
              source: a.source,
              published_at: a.publishedAt,
              domain: a.source,
              sentiment: a.sentiment || "neutral",
            }))
          );
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
    const interval = setInterval(fetchNews, 600_000); // 10 min
    return () => clearInterval(interval);
  }, []);

  return { news, loading };
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return mobile;
}

export default function NewsFeed() {
  const isMobile = useIsMobile();
  const [visibleCount, setVisibleCount] = useState(12);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const { news, loading } = useNews();

  const mobileLimit = mobileExpanded ? visibleCount : 5;
  const effectiveCount = isMobile ? mobileLimit : visibleCount;
  const visibleItems = news.slice(0, effectiveCount);

  const loadMore = useCallback(() => {
    setVisibleCount((c) => Math.min(c + 8, news.length));
  }, [news.length]);

  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [loadMore]);

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-xl border-b border-[#2F3336]">
        <div className="flex items-center px-4 py-3">
          <h2 className="text-lg font-semibold tracking-tight text-text-primary">Latest XRP News</h2>
        </div>
      </div>

      {/* News Feed */}
      <div>
        {loading && news.length === 0 && (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border-b border-[#2F3336] px-4 py-3.5 animate-pulse">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-white/[0.06]" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 rounded bg-white/[0.06]" />
                  <div className="h-4 w-full rounded bg-white/[0.06]" />
                  <div className="h-4 w-3/4 rounded bg-white/[0.06]" />
                </div>
              </div>
            </div>
          ))
        )}
        {visibleItems.map((item) => (
          <NewsCardComponent key={item.id} item={item} />
        ))}
      </div>

      {/* Mobile: Show more button */}
      {isMobile && !mobileExpanded && news.length > 5 && (
        <button
          onClick={() => setMobileExpanded(true)}
          className="w-full py-3 text-center text-[14px] font-medium text-xrp-accent hover:bg-white/[0.02] border-b border-[#2F3336] transition-colors"
        >
          Show more
        </button>
      )}

      {(!isMobile || mobileExpanded) && visibleCount < news.length && (
        <div ref={loaderRef} className="flex justify-center py-6">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/[0.08] border-t-xrp-accent" />
        </div>
      )}

      {(!isMobile || mobileExpanded) && visibleCount >= news.length && news.length > 0 && (
        <div className="py-6 flex flex-col items-center gap-3">
          <span className="text-text-secondary text-[13px]">You&apos;re all caught up.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-[13px] font-medium text-[#0085FF] hover:text-[#0085FF]/80 transition-colors"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </button>
        </div>
      )}
    </div>
  );
}
