"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Heart, Repeat2, MessageCircle, Share, BadgeCheck, BarChart3 } from "lucide-react";
import tweetsData from "@/data/demo-tweets.json";

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
  media: string | null;
  quoteTweet: null;
  trending: boolean;
}

const allTweets = tweetsData as Tweet[];

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

function TweetCard({ tweet }: { tweet: Tweet }) {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);

  return (
    <article className="border-b border-surface-border px-4 py-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
      <div className="flex gap-3">
        <div className="shrink-0">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-surface-elevated">
            <Image src={tweet.avatarUrl} alt={tweet.displayName} fill className="object-cover" unoptimized />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 min-w-0">
            <span className="font-bold text-[15px] text-text-primary truncate">{tweet.displayName}</span>
            {tweet.verified && (
              <BadgeCheck className="h-[18px] w-[18px] shrink-0 text-xrp-accent fill-xrp-accent" strokeWidth={0} />
            )}
            <span className="text-text-secondary text-[15px] truncate">@{tweet.handle}</span>
            <span className="text-text-secondary text-[15px] shrink-0">·</span>
            <span className="text-text-secondary text-[15px] shrink-0 hover:underline">{timeAgo(tweet.timestamp)}</span>
            <a
              href={`https://x.com/${tweet.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="ml-auto shrink-0 rounded-full border border-surface-border px-3 py-1 text-xs font-bold text-text-primary hover:bg-white/[0.05] transition-colors"
            >
              Follow
            </a>
          </div>

          <div className="mt-0.5 text-[15px] text-text-primary leading-5 whitespace-pre-wrap break-words">
            {tweet.text.split(/(\$XRP|\$[A-Z]+|#\w+|@\w+)/g).map((part, i) =>
              /^[\$#@]/.test(part) ? (
                <span key={i} className="text-xrp-accent">{part}</span>
              ) : (
                part
              )
            )}
          </div>

          {tweet.media && (
            <div className="mt-3 overflow-hidden rounded-2xl border border-surface-border">
              <div className="relative aspect-video">
                <Image src={tweet.media} alt="Tweet media" fill className="object-cover" unoptimized />
              </div>
            </div>
          )}

          <div className="mt-2 flex items-center justify-between max-w-[425px]">
            <button className="group flex items-center gap-1 text-text-secondary hover:text-xrp-accent transition-colors">
              <div className="rounded-full p-1.5 group-hover:bg-xrp-accent/10 transition-colors">
                <MessageCircle className="h-4 w-4" />
              </div>
              <span className="text-xs">{formatCount(tweet.replies)}</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setRetweeted(!retweeted); }}
              className={`group flex items-center gap-1 transition-colors ${retweeted ? "text-success" : "text-text-secondary hover:text-success"}`}
            >
              <div className="rounded-full p-1.5 group-hover:bg-success/10 transition-colors">
                <Repeat2 className="h-4 w-4" />
              </div>
              <span className="text-xs">{formatCount(tweet.retweets + (retweeted ? 1 : 0))}</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
              className={`group flex items-center gap-1 transition-colors ${liked ? "text-danger" : "text-text-secondary hover:text-danger"}`}
            >
              <div className="rounded-full p-1.5 group-hover:bg-danger/10 transition-colors">
                <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              </div>
              <span className="text-xs">{formatCount(tweet.likes + (liked ? 1 : 0))}</span>
            </button>

            <div className="flex items-center gap-1 text-text-secondary">
              <BarChart3 className="h-4 w-4" />
              <span className="text-xs">{formatCount(tweet.views)}</span>
            </div>

            <button className="text-text-secondary hover:text-xrp-accent transition-colors">
              <div className="rounded-full p-1.5 hover:bg-xrp-accent/10 transition-colors">
                <Share className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function XFeed() {
  const [activeTab, setActiveTab] = useState<"trending" | "recent">("trending");
  const [visibleCount, setVisibleCount] = useState(8);
  const loaderRef = useRef<HTMLDivElement>(null);

  const sortedTweets =
    activeTab === "trending"
      ? [...allTweets].sort((a, b) => {
          if (a.trending !== b.trending) return a.trending ? -1 : 1;
          return b.likes + b.retweets - (a.likes + a.retweets);
        })
      : [...allTweets].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const visibleTweets = sortedTweets.slice(0, visibleCount);

  const loadMore = useCallback(() => {
    setVisibleCount((c) => Math.min(c + 6, allTweets.length));
  }, []);

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

  useEffect(() => {
    setVisibleCount(8);
  }, [activeTab]);

  return (
    <div className="mx-auto max-w-[600px] min-h-screen border-x border-surface-border">
      {/* Header */}
      <div className="sticky top-[53px] z-10 bg-black/80  border-b border-surface-border">
        <h1 className="px-4 py-3 text-xl font-bold text-text-primary">XRP Timeline</h1>
        <div className="flex">
          {(["trending", "recent"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 relative py-3 text-sm font-medium text-center hover:bg-white/[0.03] transition-colors"
            >
              <span className={activeTab === tab ? "text-text-primary font-bold" : "text-text-secondary"}>
                {tab === "trending" ? "Trending" : "Recent"}
              </span>
              {activeTab === tab && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-14 rounded-full bg-xrp-accent" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        {visibleTweets.map((tweet) => (
          <TweetCard key={`${activeTab}-${tweet.id}`} tweet={tweet} />
        ))}
      </div>

      {visibleCount < allTweets.length && (
        <div ref={loaderRef} className="flex justify-center py-8">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-surface-border border-t-xrp-accent" />
        </div>
      )}

      {visibleCount >= allTweets.length && (
        <div className="py-8 text-center text-text-secondary text-sm">
          You&apos;re all caught up.
        </div>
      )}
    </div>
  );
}
