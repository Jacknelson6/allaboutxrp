"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";

interface DigestMeta {
  id: string;
  title: string;
  slug: string;
  week_start: string;
  week_end: string;
  published_at: string;
  content?: {
    key_news?: string;
    [key: string]: unknown;
  };
}

function formatDateRange(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  const endOpts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
  return `${s.toLocaleDateString("en-US", opts)} – ${e.toLocaleDateString("en-US", endOpts)}`;
}

export default function DailyDigest() {
  const [digest, setDigest] = useState<DigestMeta | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/digests")
      .then((r) => r.json())
      .then((data: DigestMeta[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setDigest(data[0]);
        }
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) return null;

  return (
    <section className="px-3 pt-3 pb-3 lg:px-0 lg:mt-2" aria-label="Weekly Digest">
      <div className="rounded-2xl border border-[#2F3336] bg-[#16181C] relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#0085FF]/[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="relative px-5 py-8 sm:px-8 sm:py-10">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#0085FF]/20 bg-[#0085FF]/[0.06] text-[#0085FF]">
              <Newspaper className="h-4 w-4" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0085FF]">
              Weekly Digest
            </span>
            {digest && (
              <span className="text-xs text-white/30 ml-auto">
                {formatDateRange(digest.week_start, digest.week_end)}
              </span>
            )}
          </div>

          {digest ? (
            <>
              <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-white leading-tight mb-3">
                {digest.title}
              </h2>

              {digest.content?.key_news && (
                <p className="text-sm text-[#888] leading-relaxed mb-6 line-clamp-3">
                  {String(digest.content.key_news).slice(0, 200)}…
                </p>
              )}
            </>
          ) : (
            <>
              <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-white leading-tight mb-3">
                Weekly XRP Intelligence Digest
              </h2>
              <p className="text-sm text-[#888] leading-relaxed mb-6">
                The signal, not the noise. Key developments, price analysis, and macro outlook — delivered weekly.
              </p>
            </>
          )}

          <Link
            href={digest ? `/digest/${digest.slug}` : "/digest"}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0085FF] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0085FF]/90 transition-colors"
          >
            Read Full Digest <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
