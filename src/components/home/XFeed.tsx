"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Heart, Repeat2, MessageCircle, Share, BadgeCheck, BarChart3, ArrowUp } from "lucide-react";
// Link removed — no longer needed
import NewsCardComponent, { type NewsItem } from "./NewsCard";
interface Tweet {
  id: string;
  displayName: string;
  handle: string;
  avatarUrl: string;
  verified: boolean;
  timestamp: string;
  text: string;
  likes: number;
  retweets: number;
  replies: number;
  views: number;
  media?: string | null;
  quoteTweet?: null;
  trending?: boolean;
  url?: string;
}

const fallbackTweets: Tweet[] = [];

function formatCount(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

function timeAgo(ts: string): string {
  const diff = Date.now() - new Date(ts).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h`;
  const days = Math.floor(hrs / 24);
  return `${days}d`;
}

function TweetMedia({ src }: { src: string }) {
  const [ratio, setRatio] = useState<number | null>(null);

  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-white/[0.06]">
      <div
        className="relative w-full"
        style={ratio ? { aspectRatio: `${ratio}` } : { aspectRatio: "16/9" }}
      >
        <Image
          src={src}
          alt="Tweet media"
          fill
          className="object-cover"
          unoptimized
          onLoad={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (img.naturalWidth && img.naturalHeight) {
              const r = img.naturalWidth / img.naturalHeight;
              // Clamp to reasonable bounds: no wider than 2:1, no taller than 3:4
              setRatio(Math.max(0.75, Math.min(2, r)));
            }
          }}
        />
      </div>
    </div>
  );
}

function TweetCard({ tweet }: { tweet: Tweet }) {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);

  const tweetUrl = tweet.url || `https://x.com/${tweet.handle}/status/${tweet.id}`;

  return (
    <a href={tweetUrl} target="_blank" rel="noopener noreferrer" className="block">
    <article className="border-b border-[#2F3336] px-4 py-3.5 hover:bg-white/[0.015] transition-colors duration-200 cursor-pointer overflow-hidden">
      <div className="flex gap-3 min-w-0">
        <div className="shrink-0">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#111113]">
            <Image src={tweet.avatarUrl} alt={tweet.displayName} fill className="object-cover" unoptimized />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 min-w-0">
            <span className="font-semibold text-[15px] text-text-primary truncate">{tweet.displayName}</span>
            {tweet.verified && (
              <BadgeCheck className="h-[18px] w-[18px] shrink-0 text-xrp-accent fill-xrp-accent" strokeWidth={0} />
            )}
            <span className="text-text-secondary text-[15px] truncate">@{tweet.handle}</span>
            <span className="text-white/20 text-[15px] shrink-0">·</span>
            <span className="text-text-secondary text-[15px] shrink-0 hover:underline">{timeAgo(tweet.timestamp)}</span>
            <a
              href={`https://x.com/${tweet.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="ml-auto shrink-0 hidden sm:inline-flex rounded-lg border border-white/[0.1] px-3 py-1 text-xs font-medium text-text-primary hover:bg-white/[0.04] transition-colors duration-200"
            >
              Follow
            </a>
          </div>

          <div className="mt-0.5 text-[15px] text-text-primary leading-[1.4] whitespace-pre-wrap break-words">
            {tweet.text.split(/(https?:\/\/\S+)/g).map((segment, si) => {
              // If it's a URL, render as clickable link
              if (/^https?:\/\//.test(segment)) {
                // Skip t.co links that are just the tweet's own link
                if (segment.includes("t.co/")) {
                  const display = segment.replace(/^https?:\/\//, "").substring(0, 30);
                  return (
                    <a
                      key={si}
                      href={segment}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xrp-accent hover:underline"
                    >
                      {display}
                    </a>
                  );
                }
                return (
                  <a
                    key={si}
                    href={segment}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xrp-accent hover:underline"
                  >
                    {segment.replace(/^https?:\/\//, "").substring(0, 40)}
                  </a>
                );
              }
              // Text segment: highlight tickers, hashtags, mentions
              return segment.split(/(\$XRP|\$[A-Z]+|#\w+|@\w+)/g).map((part, pi) =>
                /^[\$#@]/.test(part) ? (
                  <span key={`${si}-${pi}`} className="text-xrp-accent">{part}</span>
                ) : (
                  <span key={`${si}-${pi}`}>{part}</span>
                )
              );
            })}
          </div>

          {tweet.media && (
            <TweetMedia src={tweet.media} />
          )}

          <div className="mt-2 flex items-center justify-between max-w-[425px]">
            <button className="group flex items-center gap-1 text-text-secondary hover:text-xrp-accent transition-colors duration-200">
              <div className="rounded-full p-1.5 group-hover:bg-xrp-accent/10 transition-colors duration-200">
                <MessageCircle className="h-4 w-4" />
              </div>
              <span className="text-xs">{formatCount(tweet.replies)}</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setRetweeted(!retweeted); }}
              className={`group flex items-center gap-1 transition-colors duration-200 ${retweeted ? "text-success" : "text-text-secondary hover:text-success"}`}
            >
              <div className="rounded-full p-1.5 group-hover:bg-success/10 transition-colors duration-200">
                <Repeat2 className="h-4 w-4" />
              </div>
              <span className="text-xs">{formatCount(tweet.retweets + (retweeted ? 1 : 0))}</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
              className={`group flex items-center gap-1 transition-colors duration-200 ${liked ? "text-danger" : "text-text-secondary hover:text-danger"}`}
            >
              <div className="rounded-full p-1.5 group-hover:bg-danger/10 transition-colors duration-200">
                <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              </div>
              <span className="text-xs">{formatCount(tweet.likes + (liked ? 1 : 0))}</span>
            </button>

            <div className="flex items-center gap-1 text-text-secondary">
              <BarChart3 className="h-4 w-4" />
              <span className="text-xs">{formatCount(tweet.views)}</span>
            </div>

            <button className="text-text-secondary hover:text-xrp-accent transition-colors duration-200">
              <div className="rounded-full p-1.5 hover:bg-xrp-accent/10 transition-colors duration-200">
                <Share className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
    </a>
  );
}

// Static NewsCard removed — news now rendered inline via NewsCardComponent

function useLiveTweets() {
  const [tweets, setTweets] = useState<Tweet[]>(fallbackTweets);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchTweets = useCallback(async () => {
    try {
      const res = await fetch("/api/x-feed");
      if (!res.ok) throw new Error(`API ${res.status}`);
      const data = await res.json();
      if (data.tweets && data.tweets.length > 0) {
        setTweets(data.tweets);
        setIsLive(true);
        // Cache in localStorage for instant loads
        try {
          localStorage.setItem("xrp-tweets-cache", JSON.stringify(data.tweets));
          localStorage.setItem("xrp-tweets-cache-ts", String(Date.now()));
        } catch {}
      }
    } catch {
      console.warn("X feed API unavailable, using cached data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Load from cache immediately
    try {
      const cached = localStorage.getItem("xrp-tweets-cache");
      const cacheTs = localStorage.getItem("xrp-tweets-cache-ts");
      if (cached && cacheTs) {
        const age = Date.now() - Number(cacheTs);
        // Use cache if less than 1 hour old
        if (age < 3600_000) {
          setTweets(JSON.parse(cached));
          setIsLive(true);
          setLoading(false);
        }
      }
    } catch {}
    // Then fetch fresh data
    fetchTweets();
    const interval = setInterval(fetchTweets, 300_000);
    return () => clearInterval(interval);
  }, [fetchTweets]);

  return { tweets, isLive, loading };
}

function useNews() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/x-news", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (data.news) setNews(data.news);
      } catch {
        // silently fail
      }
    }
    fetchNews();
    const interval = setInterval(fetchNews, 600_000); // 10 min
    return () => clearInterval(interval);
  }, []);

  return news;
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

type TimelineItem = 
  | { type: "tweet"; data: Tweet; sortDate: number }
  | { type: "news"; data: NewsItem; sortDate: number };

export default function XFeed() {
  const isMobile = useIsMobile();
  const [visibleCount, setVisibleCount] = useState(12);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const { tweets: allTweets, loading } = useLiveTweets();
  const newsItems = useNews();

  // Merge tweets and news into one chronological timeline
  const timeline: TimelineItem[] = [
    ...allTweets.map((t) => ({ type: "tweet" as const, data: t, sortDate: new Date(t.timestamp).getTime() })),
    ...newsItems.map((n) => ({ type: "news" as const, data: n, sortDate: new Date(n.published_at).getTime() })),
  ].sort((a, b) => b.sortDate - a.sortDate);

  const mobileLimit = mobileExpanded ? visibleCount : 5;
  const effectiveCount = isMobile ? mobileLimit : visibleCount;
  const visibleItems = timeline.slice(0, effectiveCount);

  const loadMore = useCallback(() => {
    setVisibleCount((c) => Math.min(c + 8, timeline.length));
  }, [timeline.length]);

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
          <h2 className="text-lg font-semibold tracking-tight text-text-primary">Today&apos;s XRP Newsfeed</h2>
        </div>
      </div>

      {/* Unified Timeline */}
      <div>
        {loading && allTweets.length === 0 && (
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
        {visibleItems.map((item) =>
          item.type === "tweet" ? (
            <TweetCard key={`t-${item.data.id}`} tweet={item.data} />
          ) : (
            <NewsCardComponent key={`n-${item.data.id}`} item={item.data} />
          )
        )}
      </div>

      {/* Mobile: Show more button */}
      {isMobile && !mobileExpanded && timeline.length > 5 && (
        <button
          onClick={() => setMobileExpanded(true)}
          className="w-full py-3 text-center text-[14px] font-medium text-xrp-accent hover:bg-white/[0.02] border-b border-[#2F3336] transition-colors"
        >
          Show more
        </button>
      )}

      {(!isMobile || mobileExpanded) && visibleCount < timeline.length && (
        <div ref={loaderRef} className="flex justify-center py-6">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/[0.08] border-t-xrp-accent" />
        </div>
      )}

      {(!isMobile || mobileExpanded) && visibleCount >= timeline.length && timeline.length > 0 && (
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
