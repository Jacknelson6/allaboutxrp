"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/lib/supabase/auth-context";
import AuthModal from "@/components/auth/AuthModal";

interface Article {
  title: string;
  simple_title: string | null;
  url: string;
  source: string;
  summary: string | null;
  og_image: string | null;
  published_at: string;
  importance_score: number;
  sentiment: string | null;
}

interface DailyDigest {
  id: string;
  date: string;
  title: string;
  summary: string;
  xrp_open: number | null;
  xrp_close: number | null;
  xrp_change_pct: number | null;
  article_count: number;
}

interface WeeklyDigest {
  id: string;
  title: string;
  slug: string;
  week_start: string;
  week_end: string;
}

const SENTIMENT_CONFIG = {
  bullish: { arrow: "↑", label: "Bullish", color: "text-[#22c55e]", bg: "bg-[#22c55e]/10", border: "border-[#22c55e]/20" },
  bearish: { arrow: "↓", label: "Bearish", color: "text-[#ef4444]", bg: "bg-[#ef4444]/10", border: "border-[#ef4444]/20" },
  neutral: { arrow: "↑", label: "Bullish", color: "text-[#22c55e]", bg: "bg-[#22c55e]/10", border: "border-[#22c55e]/20" },
} as const;

function relativeTime(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = now - then;
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

/** Parse structured markdown summary into sections */
function parseDigestSummary(raw: string) {
  // Extract sentiment from HTML comment
  const sentimentMatch = raw.match(/<!--\s*sentiment:(\w+)\s*-->/);
  const sentiment = (sentimentMatch?.[1] || "neutral") as "bullish" | "bearish" | "neutral";

  // Strip the comment and any raw TITLE:/--- artifacts
  const body = raw
    .replace(/<!--\s*sentiment:\w+\s*-->/, "")
    .replace(/^TITLE:.*$/gm, "")
    .replace(/^---+$/gm, "")
    .trim();

  // Parse sections
  const takeawaysMatch = body.match(/## Key Takeaways\n([\s\S]*?)(?=\n## |\n*$)/);
  const summaryMatch = body.match(/## Summary\n([\s\S]*?)(?=\n## |\n*$)/);
  const watchMatch = body.match(/## What to Watch\n([\s\S]*?)(?=\n## |\n*$)/);

  const parseBullets = (text?: string) =>
    text?.match(/^- .+/gm)?.map((l) => l.replace(/^- /, "").trim()) || [];

  return {
    sentiment,
    keyTakeaways: parseBullets(takeawaysMatch?.[1]),
    summary: summaryMatch?.[1]?.trim() || body,
    whatToWatch: parseBullets(watchMatch?.[1]),
  };
}

const DIGEST_SENTIMENT = {
  bullish: { label: "Bullish", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20", icon: "📈" },
  bearish: { label: "Bearish", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", icon: "📉" },
  neutral: { label: "Neutral", color: "text-gray-400", bg: "bg-gray-500/10", border: "border-gray-500/20", icon: "➡️" },
} as const;

function DailyDigestCard({ digest }: { digest: DailyDigest }) {
  const [expanded, setExpanded] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const { user, isPro, proLoading } = useAuth();

  const dateLabel = new Date(digest.date + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const hasPrice = digest.xrp_open && digest.xrp_open > 0 && digest.xrp_close && digest.xrp_close > 0;
  const changePositive = (digest.xrp_change_pct ?? 0) >= 0;

  const parsed = parseDigestSummary(digest.summary);
  const sentimentStyle = DIGEST_SENTIMENT[parsed.sentiment];

  return (
    <div className="relative group">
      {/* Timeline dot — special blue for daily digest */}
      <div className="absolute -left-[21px] top-4 w-3 h-3 rounded-full bg-[#0085FF] border-2 border-[#16181C] shadow-[0_0_6px_rgba(0,133,255,0.4)]" />

      <div className="relative rounded-2xl border border-[#0085FF]/15 bg-[#0A0F1A] overflow-hidden hover:border-[#0085FF]/40 hover:shadow-[0_0_30px_rgba(0,133,255,0.08)] hover:-translate-y-[1px] transition-all duration-200">
        {/* Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0085FF]/[0.04] rounded-full blur-3xl pointer-events-none group-hover:bg-[#0085FF]/[0.08] transition-all duration-300" />
        {/* Accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0085FF]/30 to-transparent" />

        <div className="relative p-4">
          {/* Badge row */}
          <div className="flex items-center gap-2 mb-2 text-xs flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0085FF]/15 border border-[#0085FF]/25 text-[#0085FF] font-semibold">
              📰 Daily Recap
            </span>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${sentimentStyle.bg} border ${sentimentStyle.border} ${sentimentStyle.color} font-medium`}>
              {sentimentStyle.icon} {sentimentStyle.label}
            </span>
            <span className="text-text-secondary">{dateLabel}</span>
            {digest.article_count > 0 && (
              <span className="text-text-secondary/50">· {digest.article_count} articles</span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-[15px] font-bold text-white mb-2">{digest.title}</h3>

          {/* Price bar */}
          {hasPrice && (
            <div className="flex items-center gap-3 mb-3 px-3 py-2 rounded-lg bg-black/30 text-xs">
              <span className="text-gray-400">XRP</span>
              <span className="text-white font-medium">${digest.xrp_open!.toFixed(4)}</span>
              <span className="text-gray-500">→</span>
              <span className="text-white font-medium">${digest.xrp_close!.toFixed(4)}</span>
              {digest.xrp_change_pct != null && (
                <span className={`font-medium ${changePositive ? "text-green-400" : "text-red-400"}`}>
                  {changePositive ? "+" : ""}{digest.xrp_change_pct.toFixed(2)}%
                </span>
              )}
            </div>
          )}

          {/* === PRO USERS: full content === */}
          {isPro ? (
            <>
              {/* Key Takeaways — full */}
              {parsed.keyTakeaways.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Key Takeaways</h4>
                  <ul className="space-y-1">
                    {parsed.keyTakeaways.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-gray-300">
                        <span className="text-[#0085FF] mt-0.5 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Summary preview / expanded */}
              {!expanded && parsed.summary.length > 0 && (
                <div className="text-[13px] text-gray-400 leading-relaxed">
                  {parsed.summary.slice(0, 200)}{parsed.summary.length > 200 ? "..." : ""}
                </div>
              )}

              {expanded && (
                <div className="space-y-3">
                  <div className="text-[13px] text-gray-300 leading-relaxed whitespace-pre-line">
                    {parsed.summary}
                  </div>
                  {parsed.whatToWatch.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">👀 What to Watch</h4>
                      <ul className="space-y-1">
                        {parsed.whatToWatch.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[13px] text-gray-300">
                            <span className="text-yellow-500 mt-0.5 flex-shrink-0">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {parsed.summary.length > 200 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-2 text-xs text-[#0085FF] hover:text-[#0085FF]/80 font-medium transition-colors"
                >
                  {expanded ? "Show less" : "Read full recap →"}
                </button>
              )}
            </>
          ) : (
            /* === FREE USERS: preview + paywall === */
            <>
              {/* Key Takeaways — first 2 only, rest blurred */}
              {parsed.keyTakeaways.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Key Takeaways</h4>
                  <ul className="space-y-1">
                    {parsed.keyTakeaways.slice(0, 2).map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-gray-300">
                        <span className="text-[#0085FF] mt-0.5 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                    {parsed.keyTakeaways.length > 2 && (
                      <li className="flex items-start gap-2 text-[13px] text-gray-300 blur-[6px] select-none pointer-events-none" aria-hidden="true">
                        <span className="text-[#0085FF] mt-0.5 flex-shrink-0">•</span>
                        <span>{parsed.keyTakeaways[2]}</span>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Summary — ~100 chars with fade */}
              {parsed.summary.length > 0 && (
                <div className="relative mb-3">
                  <div className="text-[13px] text-gray-400 leading-relaxed">
                    {parsed.summary.slice(0, 100)}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#0A0F1A] to-transparent" />
                </div>
              )}

              {/* Compact paywall CTA */}
              <div className="mt-2 flex items-center justify-between rounded-xl border border-[#0085FF]/20 bg-[#0085FF]/[0.04] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-base">🔒</span>
                  <div>
                    <p className="text-[13px] font-semibold text-white">Unlock with Use It plan</p>
                    <p className="text-[11px] text-gray-500">$9.99/mo · Full daily recaps</p>
                  </div>
                </div>
                {proLoading ? (
                  <div className="w-5 h-5 border-2 border-[#0085FF] border-t-transparent rounded-full animate-spin" />
                ) : user ? (
                  <a
                    href="/subscribe"
                    className="rounded-lg bg-[#0085FF] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0070DD] transition-colors"
                  >
                    Subscribe
                  </a>
                ) : (
                  <button
                    onClick={() => setShowAuth(true)}
                    className="rounded-lg bg-[#0085FF] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0070DD] transition-colors"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        redirectAfterAuth={`/`}
      />
    </div>
  );
}

function WeeklyDigestCard({ digest }: { digest: WeeklyDigest }) {
  const formatRange = (start: string, end: string) => {
    const s = new Date(start + "T12:00:00");
    const e = new Date(end + "T12:00:00");
    const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
    return `${s.toLocaleDateString("en-US", opts)} – ${e.toLocaleDateString("en-US", { ...opts, year: "numeric" })}`;
  };

  return (
    <div className="relative group">
      <div className="absolute -left-[21px] top-4 w-3 h-3 rounded-full bg-[#8b5cf6] border-2 border-[#16181C] shadow-[0_0_6px_rgba(139,92,246,0.4)]" />
      <a
        href={`/digest/${digest.slug}`}
        className="block relative rounded-2xl border border-[#8b5cf6]/20 bg-gradient-to-br from-[#8b5cf6]/[0.04] to-transparent overflow-hidden hover:border-[#8b5cf6]/40 transition-colors"
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8b5cf6] via-[#8b5cf6]/60 to-transparent" />
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2 text-xs">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/25 text-[#8b5cf6] font-semibold">
              📊 Weekly Digest
            </span>
            <span className="text-text-secondary">{formatRange(digest.week_start, digest.week_end)}</span>
          </div>
          <h3 className="text-[15px] font-bold text-white mb-1 group-hover:text-[#8b5cf6] transition-colors">
            {digest.title}
          </h3>
          <span className="text-xs text-[#8b5cf6] font-medium">Read full analysis →</span>
        </div>
      </a>
    </div>
  );
}

const PAGE_SIZE = 20;

export default function NewsFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [dailyDigests, setDailyDigests] = useState<DailyDigest[]>([]);
  const [weeklyDigests, setWeeklyDigests] = useState<WeeklyDigest[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchArticles = useCallback(async (offset: number) => {
    const res = await fetch(`/api/news?limit=${PAGE_SIZE}&offset=${offset}`);
    if (!res.ok) return [];
    const data: Article[] = await res.json();
    if (data.length < PAGE_SIZE) setHasMore(false);
    return data;
  }, []);

  useEffect(() => {
    Promise.all([
      fetchArticles(0),
      fetch("/api/news/daily-digest").then((r) => r.ok ? r.json() : []).catch(() => []),
      fetch("/api/digests").then((r) => r.ok ? r.json() : []).catch(() => []),
    ]).then(([newsData, digestData, weeklyData]) => {
      setArticles(newsData);
      setDailyDigests(Array.isArray(digestData) ? digestData : []);
      setWeeklyDigests(Array.isArray(weeklyData) ? weeklyData : []);
      setLoading(false);
    });
  }, [fetchArticles]);

  const loadMore = async () => {
    setLoadingMore(true);
    const data = await fetchArticles(articles.length);
    setArticles((prev) => [...prev, ...data]);
    setLoadingMore(false);
  };

  if (loading) {
    return (
      <div className="py-8 space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-24 rounded-2xl bg-[#16181C] animate-pulse" />
        ))}
      </div>
    );
  }

  if (articles.length === 0) return null;

  // Build combined timeline: articles + daily digests + weekly digests, sorted newest-first
  type TimelineItem =
    | { type: "article"; data: Article; index: number; sortDate: string }
    | { type: "digest"; data: DailyDigest; sortDate: string }
    | { type: "weekly"; data: WeeklyDigest; sortDate: string };

  const timeline: TimelineItem[] = [
    ...articles.map((a, i) => ({ type: "article" as const, data: a, index: i, sortDate: a.published_at })),
    ...dailyDigests.map((d) => ({ type: "digest" as const, data: d, sortDate: d.date + "T23:59:59" })),
  ];

  timeline.sort((a, b) => b.sortDate.localeCompare(a.sortDate));

  const pinnedWeekly = weeklyDigests.length > 0 ? weeklyDigests[0] : null;

  return (
    <div className="py-4">
      <h2 className="text-lg font-bold text-text-primary px-4 mb-4">Latest News</h2>

      {/* Pinned weekly digest */}
      {pinnedWeekly && (
        <div className="px-4 mb-6">
          <a
            href={`/digest/${pinnedWeekly.slug}`}
            className="block rounded-2xl border border-[#0085FF]/15 bg-[#0A0F1A] relative overflow-hidden hover:border-[#0085FF]/40 hover:shadow-[0_0_30px_rgba(0,133,255,0.08)] hover:-translate-y-[1px] transition-all duration-200 group"
          >
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0085FF]/[0.04] rounded-full blur-3xl pointer-events-none group-hover:bg-[#0085FF]/[0.08] transition-all duration-300" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0085FF]/30 to-transparent" />
            <div className="relative px-5 py-6 sm:px-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-lg border border-[#0085FF]/25 bg-[#0085FF]/[0.08] text-[#0085FF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0085FF]">Weekly Digest</span>
                <span className="text-xs text-white/30 ml-auto">
                  {(() => {
                    const s = new Date(pinnedWeekly.week_start + "T12:00:00");
                    const e = new Date(pinnedWeekly.week_end + "T12:00:00");
                    const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
                    return `${s.toLocaleDateString("en-US", opts)} – ${e.toLocaleDateString("en-US", { ...opts, year: "numeric" })}`;
                  })()}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold tracking-[-0.02em] text-white leading-tight mb-2 group-hover:text-[#0085FF] transition-colors">
                {pinnedWeekly.title}
              </h2>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0085FF] group-hover:gap-2.5 transition-all">
                Read Full Analysis <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </div>
          </a>
        </div>
      )}

      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-[#2F3336]" />

        <div className="space-y-3">
          {timeline.map((item, idx) => {
            if (item.type === "digest") {
              return <DailyDigestCard key={`digest-${item.data.date}`} digest={item.data} />;
            }
            if (item.type === "weekly") {
              return null; // Weekly digests are pinned above the timeline
            }

            const article = item.data;
            const s = SENTIMENT_CONFIG[(article.sentiment as keyof typeof SENTIMENT_CONFIG) ?? "neutral"] ?? SENTIMENT_CONFIG.neutral;
            return (
              <div key={article.url + idx} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[21px] top-4 w-2.5 h-2.5 rounded-full bg-[#2F3336] border-2 border-[#16181C] group-hover:bg-[#0085FF] transition-colors" />

                <div className="relative rounded-2xl border border-[#2F3336] bg-[#16181C] p-4 hover:border-[#0085FF]/30 transition-colors overflow-hidden">
                  <div className="absolute inset-0 z-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                  <div className="absolute -inset-px bg-gradient-to-br from-[#0085FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none z-0" />
                  <div className="relative z-10 flex gap-3">
                    <div className="flex-1 min-w-0">
                      {/* Sentiment + source + time */}
                      <div className="flex items-center gap-2 mb-1.5 text-xs">
                        <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full ${s.bg} ${s.border} border ${s.color} font-medium`}>
                          {s.arrow} {s.label}
                        </span>
                        <span className="text-text-secondary">{article.source}</span>
                        <span className="text-text-secondary/50">·</span>
                        <span className="text-text-secondary/70">{relativeTime(article.published_at)}</span>
                      </div>

                      {/* Simplified title */}
                      <h3 className="text-sm font-semibold text-text-primary leading-snug line-clamp-2">
                        {article.simple_title || article.title}
                      </h3>

                      {/* Why it matters */}
                      {article.summary && (
                        <p className="mt-1.5 text-[13px] text-text-secondary leading-relaxed line-clamp-3">
                          {article.summary}
                        </p>
                      )}

                      {/* Source link */}
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-xs text-[#0085FF]/70 hover:text-[#0085FF] transition-colors"
                      >
                        Read source →
                      </a>
                    </div>

                    {/* Thumbnail */}
                    {article.og_image && (
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-[#2F3336]">
                        <img
                          src={article.og_image}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className="px-6 py-2 rounded-full border border-[#2F3336] text-sm text-text-secondary hover:text-text-primary hover:border-[#0085FF]/30 transition-colors disabled:opacity-50"
          >
            {loadingMore ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}
