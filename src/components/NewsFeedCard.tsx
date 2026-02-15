"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";

export interface NewsFeedItem {
  title: string;
  source: string;
  url: string;
  imageUrl: string | null;
  summary: string;
  publishedAt: string;
}

function timeAgo(ts: string): string {
  const diff = Date.now() - new Date(ts).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export default function NewsFeedCard({ item }: { item: NewsFeedItem }) {
  return (
    <article className="group rounded-xl border border-[#2F3336] bg-[#0D1117]/60 backdrop-blur-sm overflow-hidden hover:border-[#0085FF]/30 transition-all duration-200">
      {/* OG Image */}
      <div className="relative aspect-[2/1] w-full bg-[#161B22] overflow-hidden">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-text-secondary/40">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span className="text-xs font-medium">{item.source}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2.5">
        {/* Source + time */}
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-[#0085FF]">{item.source}</span>
          <span className="text-text-secondary/50">•</span>
          <span className="text-text-secondary/60">{timeAgo(item.publishedAt)}</span>
        </div>

        {/* Title */}
        <h3 className="text-[15px] font-semibold leading-snug text-text-primary line-clamp-2 group-hover:text-[#0085FF] transition-colors">
          {item.title}
        </h3>

        {/* Summary */}
        {item.summary && (
          <div className="text-[13px] leading-relaxed text-text-secondary/80 line-clamp-3">
            <span className="font-medium text-text-secondary">Why it matters: </span>
            {item.summary}
          </div>
        )}

        {/* Read link */}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0085FF] hover:text-[#0085FF]/80 transition-colors pt-1"
        >
          Read full article
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}
