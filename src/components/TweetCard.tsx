"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Repeat2, BadgeCheck } from "lucide-react";

export interface TweetData {
  username: string;
  displayName: string;
  avatarUrl: string;
  text: string;
  tweetUrl: string;
  createdAt: string;
  likes: number;
  retweets: number;
  isVerified: boolean;
}

function timeAgo(ts: string): string {
  const diff = Date.now() - new Date(ts).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "now";
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h`;
  const days = Math.floor(hrs / 24);
  return `${days}d`;
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

// Strip t.co media links (Twitter's automatically appended media URLs)
function stripTCoLinks(text: string): string {
  return text.replace(/(?:https?:\/\/)?t\.co\/\w+/gi, "").trim();
}

export default function TweetCard({ tweet }: { tweet: TweetData }) {
  const [liked, setLiked] = useState(false);
  const cleanText = stripTCoLinks(tweet.text);

  return (
    <a href={tweet.tweetUrl} target="_blank" rel="noopener noreferrer" className="block">
      <article className="border-b border-[#2F3336] px-4 py-3.5 hover:bg-white/[0.015] transition-colors duration-200 cursor-pointer overflow-hidden">
        <div className="flex gap-3 min-w-0">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#111113]">
              <Image
                src={tweet.avatarUrl}
                alt={tweet.displayName}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            {/* Header row */}
            <div className="flex items-center gap-1 min-w-0">
              <span className="font-semibold text-[15px] text-text-primary truncate">
                {tweet.displayName}
              </span>
              {tweet.isVerified && (
                <BadgeCheck
                  className="h-[18px] w-[18px] shrink-0 text-xrp-accent fill-xrp-accent"
                  strokeWidth={0}
                />
              )}
              <span className="text-text-secondary text-[15px] truncate">
                @{tweet.username}
              </span>
              <span className="text-white/20 text-[15px] shrink-0">·</span>
              <span className="text-text-secondary text-[15px] shrink-0">
                {timeAgo(tweet.createdAt)}
              </span>
{/* Follow button removed */}
            </div>

            {/* Tweet text */}
            <div className="mt-0.5 text-[15px] text-text-primary leading-[1.4] whitespace-pre-wrap break-words">
              {tweet.text.split(/(https?:\/\/\S+)/g).map((segment, si) =>
                /^https?:\/\//.test(segment) ? (
                  <a
                    key={si}
                    href={segment}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xrp-accent hover:underline"
                  >
                    {segment.replace(/^https?:\/\//, "").substring(0, 30)}
                  </a>
                ) : (
                  segment.split(/(\$XRP|\$[A-Z]+|#\w+|@\w+)/g).map((part, pi) =>
                    /^[\$#@]/.test(part) ? (
                      <span key={`${si}-${pi}`} className="text-xrp-accent">
                        {part}
                      </span>
                    ) : (
                      <span key={`${si}-${pi}`}>{part}</span>
                    )
                  )
                )
              )}
            </div>
          </div>
        </div>
      </article>
    </a>
  );
}
