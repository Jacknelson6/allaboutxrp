"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Newspaper, TrendingUp, TrendingDown, Calendar } from "lucide-react";
import Link from "next/link";

interface DailyDigestData {
  id: string;
  date: string;
  title: string;
  summary: string;
  xrp_open: number | null;
  xrp_close: number | null;
  xrp_change_pct: number | null;
  article_count: number;
}

interface WeeklyDigestMeta {
  id: string;
  title: string;
  slug: string;
  week_start: string;
  week_end: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateShort(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function formatDateRange(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  return `${s.toLocaleDateString("en-US", opts)} – ${e.toLocaleDateString("en-US", { ...opts, year: "numeric" })}`;
}

export default function DailyDigest() {
  const [dailyDigests, setDailyDigests] = useState<DailyDigestData[]>([]);
  const [weeklyDigest, setWeeklyDigest] = useState<WeeklyDigestMeta | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetch("/api/news/daily-digest").then((r) => r.json()).catch(() => []),
      fetch("/api/digests").then((r) => r.json()).catch(() => []),
    ]).then(([daily, weekly]) => {
      if (Array.isArray(daily)) setDailyDigests(daily.slice(0, 7));
      if (Array.isArray(weekly) && weekly.length > 0) setWeeklyDigest(weekly[0]);
      setLoaded(true);
    });
  }, []);

  if (!loaded) return null;

  return (
    <section className="px-3 pt-3 pb-1 lg:px-0 lg:mt-2 space-y-3" aria-label="Digests">
      {/* Weekly Digest CTA */}
      {weeklyDigest && (
        <Link
          href={`/digest/${weeklyDigest.slug}`}
          className="block rounded-2xl border border-[#2F3336] bg-[#16181C] relative overflow-hidden hover:border-[#0085FF]/30 transition-colors group"
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#0085FF]/[0.06] rounded-full blur-3xl pointer-events-none" />
          <div className="relative px-5 py-6 sm:px-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="inline-flex items-center justify-center w-7 h-7 rounded-lg border border-[#0085FF]/20 bg-[#0085FF]/[0.06] text-[#0085FF]">
                <Newspaper className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0085FF]">Weekly Digest</span>
              <span className="text-xs text-white/30 ml-auto">{formatDateRange(weeklyDigest.week_start, weeklyDigest.week_end)}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-[-0.02em] text-white leading-tight mb-2 group-hover:text-[#0085FF] transition-colors">
              {weeklyDigest.title}
            </h2>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0085FF]">
              Read Full Analysis <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </Link>
      )}

      {/* Daily Digests */}
      {dailyDigests.length > 0 && (
        <div className="space-y-2">
          {dailyDigests.map((digest) => {
            const isExpanded = expandedId === digest.id;
            const changePct = digest.xrp_change_pct;
            const positive = changePct != null && changePct >= 0;
            const TrendIcon = positive ? TrendingUp : TrendingDown;

            return (
              <div
                key={digest.id}
                className="rounded-2xl border border-[#2F3336] bg-[#16181C] overflow-hidden relative group"
              >
                {/* Accent stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#0085FF] to-[#0085FF]/30" />

                <div className="pl-5 pr-4 py-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Calendar className="h-3 w-3 text-[#0085FF]/60" />
                        <span className="text-xs text-white/40">{formatDateShort(digest.date)}</span>
                        <span className="text-xs text-white/20">·</span>
                        <span className="text-xs text-white/40">{digest.article_count} articles</span>
                        {changePct != null && changePct !== 0 && (
                          <>
                            <span className="text-xs text-white/20">·</span>
                            <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${positive ? "text-[#22c55e]" : "text-[#ef4444]"}`}>
                              <TrendIcon className="h-3 w-3" />
                              {positive ? "+" : ""}{changePct.toFixed(2)}%
                            </span>
                          </>
                        )}
                      </div>
                      <h3 className="text-sm font-semibold text-white leading-snug">{digest.title}</h3>
                    </div>
                  </div>

                  {/* Summary - collapsible */}
                  <div className={`text-[13px] text-[#888] leading-relaxed ${isExpanded ? "" : "line-clamp-3"}`}>
                    {digest.summary.split("\n\n").map((para, i) => (
                      <p key={i} className={i > 0 ? "mt-2" : ""}>
                        {para}
                      </p>
                    ))}
                  </div>

                  {digest.summary.length > 300 && (
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : digest.id)}
                      className="mt-2 text-xs text-[#0085FF] hover:text-[#0085FF]/80 transition-colors"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
