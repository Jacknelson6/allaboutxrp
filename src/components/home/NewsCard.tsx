"use client";

import { ExternalLink, Newspaper } from "lucide-react";

export interface NewsItem {
  id: string;
  title: string;
  summary?: string;
  url: string;
  source: string;
  published_at: string;
  domain: string;
  votes: { positive?: number; negative?: number; important?: number; liked?: number };
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

export default function NewsCardComponent({ item }: { item: NewsItem }) {
  return (
    <article className="border-b border-[#2F3336] px-4 py-3.5 hover:bg-white/[0.015] transition-colors duration-200">
      <div className="flex gap-3">
        <div className="shrink-0">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-xrp-accent/10">
            <Newspaper className="h-5 w-5 text-xrp-accent" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-xrp-accent/15 text-xrp-accent uppercase tracking-wide">
              News
            </span>
            <span className="text-text-secondary text-[13px] truncate">{item.source}</span>
            <span className="text-white/20 text-[13px]">·</span>
            <span className="text-text-secondary text-[13px]">{timeAgo(item.published_at)}</span>
          </div>
          <p className="mt-1 text-[15px] text-text-primary leading-snug">
            {item.title}
          </p>
          {item.summary && (
            <p className="mt-1.5 text-[15px] text-text-secondary leading-snug">
              {item.summary}
            </p>
          )}
          <div className="mt-3">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] px-3.5 py-1.5 text-[13px] font-medium text-xrp-accent hover:bg-xrp-accent/10 transition-colors duration-200"
            >
              Read full article
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
