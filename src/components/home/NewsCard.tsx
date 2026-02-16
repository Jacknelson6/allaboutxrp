"use client";

import { ExternalLink, Newspaper, TrendingUp, TrendingDown, Minus } from "lucide-react";

export interface NewsItem {
  id: string;
  title: string;
  summary?: string;
  url: string;
  source: string;
  published_at: string;
  domain: string;
  sentiment?: "bullish" | "bearish" | "neutral";
}

function timeAgo(ts: string): string {
  const diff = Date.now() - new Date(ts).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function formatDate(ts: string): string {
  const d = new Date(ts);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

const sentimentConfig = {
  bullish: {
    label: "Bullish",
    bg: "bg-green-500/15",
    text: "text-green-400",
    border: "border-green-500/20",
    icon: TrendingUp,
  },
  bearish: {
    label: "Bearish",
    bg: "bg-red-500/15",
    text: "text-red-400",
    border: "border-red-500/20",
    icon: TrendingDown,
  },
  neutral: {
    label: "Neutral",
    bg: "bg-white/[0.06]",
    text: "text-[#888]",
    border: "border-white/[0.08]",
    icon: Minus,
  },
};

export default function NewsCardComponent({ item }: { item: NewsItem }) {
  const sentiment = sentimentConfig[item.sentiment || "neutral"];
  const SentimentIcon = sentiment.icon;

  return (
    <article className="border-b border-[#2F3336] px-4 py-4 hover:bg-white/[0.015] transition-colors duration-200">
      <div className="flex gap-3">
        <div className="shrink-0">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-xrp-accent/10">
            <Newspaper className="h-5 w-5 text-xrp-accent" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          {/* Meta row: sentiment badge + source + time */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[11px] font-bold uppercase tracking-wide ${sentiment.bg} ${sentiment.text} ${sentiment.border}`}>
              <SentimentIcon className="h-3 w-3" />
              {sentiment.label}
            </span>
            <span className="text-text-secondary text-[13px] truncate">{item.source}</span>
            <span className="text-white/20 text-[13px]">·</span>
            <span className="text-text-secondary text-[13px]">{timeAgo(item.published_at)}</span>
          </div>

          {/* Headline */}
          <h3 className="mt-2 text-[16px] font-bold text-text-primary leading-snug">
            {item.title}
          </h3>

          {/* Summary */}
          {item.summary && (
            <p className="mt-2 text-[14px] text-[#aaa] leading-[1.5]">
              {item.summary}
            </p>
          )}

          {/* Footer: date + read link */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[12px] text-text-secondary">{formatDate(item.published_at)}</span>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-xrp-accent/15 px-4 py-2 text-[13px] font-semibold text-xrp-accent hover:bg-xrp-accent/25 transition-colors duration-200"
            >
              Read full article
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
