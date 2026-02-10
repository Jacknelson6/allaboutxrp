"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

function TweetCard({ tweet, index }: { tweet: Tweet; index: number }) {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group border-b border-surface-border/30 px-5 py-4 transition-all duration-300 hover:bg-xrp-accent/[0.02] cursor-pointer"
    >
      <div className="flex gap-3">
        <div className="shrink-0">
          <div className="relative h-11 w-11 overflow-hidden rounded-full bg-surface-elevated ring-1 ring-surface-border/50">
            <Image src={tweet.avatarUrl} alt={tweet.displayName} fill className="object-cover" unoptimized />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 min-w-0">
              <span className="font-semibold text-[15px] text-text-primary truncate">{tweet.displayName}</span>
              {tweet.verified && (
                <BadgeCheck className="h-[17px] w-[17px] shrink-0 text-xrp-accent fill-xrp-accent" strokeWidth={0} />
              )}
              <span className="text-text-secondary/60 text-[14px] truncate">@{tweet.handle}</span>
              <span className="text-text-secondary/40 text-[14px] shrink-0">·</span>
              <span className="text-text-secondary/60 text-[14px] shrink-0 hover:underline">{timeAgo(tweet.timestamp)}</span>
            </div>
            <a
              href={`https://x.com/${tweet.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 flex items-center gap-1.5 rounded-full border border-surface-border/60 bg-surface-elevated/50 px-3.5 py-1 text-[12px] font-bold text-text-primary/80 hover:bg-xrp-accent/10 hover:border-xrp-accent/30 hover:text-xrp-accent transition-all duration-200"
            >
              Follow
            </a>
          </div>

          <div className="mt-1 text-[15px] text-text-primary/90 leading-[1.4] whitespace-pre-wrap break-words">
            {tweet.text.split(/(\$XRP|\$[A-Z]+|#\w+|@\w+)/g).map((part, i) =>
              /^[\$#@]/.test(part) ? (
                <span key={i} className="text-xrp-accent hover:underline cursor-pointer">{part}</span>
              ) : (
                part
              )
            )}
          </div>

          {tweet.media && (
            <div className="mt-3 overflow-hidden rounded-2xl border border-surface-border/40">
              <div className="relative aspect-video bg-surface-elevated">
                <Image src={tweet.media} alt="Tweet media" fill className="object-cover" unoptimized />
              </div>
            </div>
          )}

          <div className="mt-3 flex items-center justify-between max-w-[425px]">
            <button className="group/btn flex items-center gap-1 text-text-secondary/50 hover:text-xrp-accent transition-colors">
              <div className="rounded-full p-2 group-hover/btn:bg-xrp-accent/10 transition-colors">
                <MessageCircle className="h-[17px] w-[17px]" />
              </div>
              <span className="text-[12px]">{formatCount(tweet.replies)}</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setRetweeted(!retweeted); }}
              className={`group/btn flex items-center gap-1 transition-colors ${retweeted ? "text-success" : "text-text-secondary/50 hover:text-success"}`}
            >
              <div className="rounded-full p-2 group-hover/btn:bg-success/10 transition-colors">
                <Repeat2 className="h-[17px] w-[17px]" />
              </div>
              <span className="text-[12px]">{formatCount(tweet.retweets + (retweeted ? 1 : 0))}</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
              className={`group/btn flex items-center gap-1 transition-colors ${liked ? "text-danger" : "text-text-secondary/50 hover:text-danger"}`}
            >
              <div className="rounded-full p-2 group-hover/btn:bg-danger/10 transition-colors">
                <Heart className={`h-[17px] w-[17px] ${liked ? "fill-current" : ""}`} />
              </div>
              <span className="text-[12px]">{formatCount(tweet.likes + (liked ? 1 : 0))}</span>
            </button>

            <div className="flex items-center gap-1 text-text-secondary/40">
              <div className="rounded-full p-2">
                <BarChart3 className="h-[17px] w-[17px]" />
              </div>
              <span className="text-[12px]">{formatCount(tweet.views)}</span>
            </div>

            <button className="group/btn text-text-secondary/40 hover:text-xrp-accent transition-colors">
              <div className="rounded-full p-2 group-hover/btn:bg-xrp-accent/10 transition-colors">
                <Share className="h-[17px] w-[17px]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
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
    <div className="relative mx-auto max-w-[620px] min-h-screen">
      {/* Ambient side borders */}
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-surface-border/50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-surface-border/50 to-transparent" />

      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-2xl bg-surface-primary/70 border-b border-surface-border/30">
        <h1 className="px-5 py-4 font-display text-xl font-bold tracking-tight text-text-primary">XRP Timeline</h1>
        <div className="flex">
          {(["trending", "recent"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 relative py-3.5 text-[14px] font-medium text-center transition-colors hover:bg-xrp-accent/[0.03]"
            >
              <span className={activeTab === tab ? "text-text-primary font-bold" : "text-text-secondary/60"}>
                {tab === "trending" ? "Trending" : "Recent"}
              </span>
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-16 rounded-full bg-xrp-accent"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        {visibleTweets.map((tweet, i) => (
          <TweetCard key={`${activeTab}-${tweet.id}`} tweet={tweet} index={i} />
        ))}
      </div>

      {visibleCount < allTweets.length && (
        <div ref={loaderRef} className="flex justify-center py-10">
          <div className="h-7 w-7 animate-spin rounded-full border-2 border-surface-border border-t-xrp-accent" />
        </div>
      )}

      {visibleCount >= allTweets.length && (
        <div className="py-10 text-center text-text-secondary/40 text-sm font-medium">
          You&apos;re all caught up! More accounts coming soon.
        </div>
      )}
    </div>
  );
}
