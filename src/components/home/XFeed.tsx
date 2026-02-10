"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Repeat2, MessageCircle, Share, Eye, Plus, BadgeCheck, BarChart3 } from "lucide-react";
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4, ease: "easeOut" }}
      className="border-b border-[#2F3336] px-4 py-3 hover:bg-white/[0.03] transition-colors cursor-pointer"
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="shrink-0">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#2F3336]">
            <Image
              src={tweet.avatarUrl}
              alt={tweet.displayName}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 min-w-0">
              <span className="font-bold text-[15px] text-[#E7E9EA] truncate">
                {tweet.displayName}
              </span>
              {tweet.verified && (
                <BadgeCheck className="h-[18px] w-[18px] shrink-0 text-[#1D9BF0] fill-[#1D9BF0]" strokeWidth={0} />
              )}
              <span className="text-[#71767B] text-[15px] truncate">
                @{tweet.handle}
              </span>
              <span className="text-[#71767B] text-[15px] shrink-0">·</span>
              <span className="text-[#71767B] text-[15px] shrink-0 hover:underline">
                {timeAgo(tweet.timestamp)}
              </span>
            </div>
            <a
              href={`https://x.com/${tweet.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 flex items-center gap-1 rounded-full border border-[#536471] px-3 py-1 text-[13px] font-bold text-[#EFF3F4] hover:bg-[#EFF3F4]/10 transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
              Follow
            </a>
          </div>

          {/* Tweet text */}
          <div className="mt-0.5 text-[15px] text-[#E7E9EA] leading-5 whitespace-pre-wrap break-words">
            {tweet.text.split(/(\$XRP|\$[A-Z]+|#\w+|@\w+)/g).map((part, i) =>
              /^[\$#@]/.test(part) ? (
                <span key={i} className="text-[#1D9BF0] hover:underline cursor-pointer">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </div>

          {/* Media */}
          {tweet.media && (
            <div className="mt-3 overflow-hidden rounded-2xl border border-[#2F3336]">
              <div className="relative aspect-video bg-[#2F3336]">
                <Image
                  src={tweet.media}
                  alt="Tweet media"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          )}

          {/* Engagement stats */}
          <div className="mt-3 flex items-center justify-between max-w-[425px]">
            <button className="group flex items-center gap-1 text-[#71767B] hover:text-[#1D9BF0] transition-colors">
              <div className="rounded-full p-2 group-hover:bg-[#1D9BF0]/10 transition-colors">
                <MessageCircle className="h-[18px] w-[18px]" />
              </div>
              <span className="text-[13px]">{formatCount(tweet.replies)}</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setRetweeted(!retweeted); }}
              className={`group flex items-center gap-1 transition-colors ${retweeted ? "text-[#00BA7C]" : "text-[#71767B] hover:text-[#00BA7C]"}`}
            >
              <div className="rounded-full p-2 group-hover:bg-[#00BA7C]/10 transition-colors">
                <Repeat2 className="h-[18px] w-[18px]" />
              </div>
              <span className="text-[13px]">{formatCount(tweet.retweets + (retweeted ? 1 : 0))}</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
              className={`group flex items-center gap-1 transition-colors ${liked ? "text-[#F91880]" : "text-[#71767B] hover:text-[#F91880]"}`}
            >
              <div className="rounded-full p-2 group-hover:bg-[#F91880]/10 transition-colors">
                <Heart className={`h-[18px] w-[18px] ${liked ? "fill-current" : ""}`} />
              </div>
              <span className="text-[13px]">{formatCount(tweet.likes + (liked ? 1 : 0))}</span>
            </button>

            <div className="flex items-center gap-1 text-[#71767B]">
              <div className="rounded-full p-2">
                <BarChart3 className="h-[18px] w-[18px]" />
              </div>
              <span className="text-[13px]">{formatCount(tweet.views)}</span>
            </div>

            <button className="group text-[#71767B] hover:text-[#1D9BF0] transition-colors">
              <div className="rounded-full p-2 group-hover:bg-[#1D9BF0]/10 transition-colors">
                <Share className="h-[18px] w-[18px]" />
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

  // Reset visible count on tab change
  useEffect(() => {
    setVisibleCount(8);
  }, [activeTab]);

  return (
    <div className="mx-auto max-w-[600px] border-x border-[#2F3336] min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-[#0D1117]/80 border-b border-[#2F3336]">
        <h1 className="px-4 py-3 text-xl font-bold text-[#E7E9EA]">XRP Timeline</h1>
        <div className="flex">
          {(["trending", "recent"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 relative py-3 text-[15px] font-medium text-center transition-colors hover:bg-white/[0.03]"
            >
              <span className={activeTab === tab ? "text-[#E7E9EA] font-bold" : "text-[#71767B]"}>
                {tab === "trending" ? "Trending" : "Recent"}
              </span>
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-14 rounded-full bg-[#1D9BF0]"
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

      {/* Infinite scroll loader */}
      {visibleCount < allTweets.length && (
        <div ref={loaderRef} className="flex justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#2F3336] border-t-[#1D9BF0]" />
        </div>
      )}

      {visibleCount >= allTweets.length && (
        <div className="py-8 text-center text-[#71767B] text-sm">
          You&apos;re all caught up! More accounts coming soon.
        </div>
      )}
    </div>
  );
}
