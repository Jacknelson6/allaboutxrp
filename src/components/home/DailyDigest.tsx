"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";

const STORAGE_KEY = "xrp_subscriber_email";

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
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if already subscribed
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setSubscribed(true);

    // Fetch latest digest
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

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      localStorage.setItem(STORAGE_KEY, email);
      setSubscribed(true);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!loaded) return null;

  // If a digest exists, show the weekly digest card
  if (digest) {
    return (
      <section className="px-3 pt-3 pb-3 lg:px-0 lg:mt-6" aria-label="Weekly Digest">
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
              <span className="text-xs text-white/30 ml-auto">
                {formatDateRange(digest.week_start, digest.week_end)}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-white leading-tight mb-3">
              {digest.title}
            </h2>

            {/* Preview text from key_news if available */}
            {digest.content?.key_news && (
              <p className="text-sm text-[#888] leading-relaxed mb-6 line-clamp-3">
                {digest.content.key_news.slice(0, 200)}…
              </p>
            )}

            {/* CTA */}
            <Link
              href={`/digest/${digest.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0085FF] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0085FF]/90 transition-colors"
            >
              Read Full Digest <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // No digest yet — show email capture card
  return (
    <section className="px-3 pt-3 pb-3 lg:px-0 lg:mt-6" aria-label="Weekly Digest">
      <div className="rounded-2xl border border-[#2F3336] bg-[#16181C] relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#0085FF]/[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="relative px-5 py-8 sm:px-8 sm:py-10">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#0085FF]/20 bg-[#0085FF]/[0.06] text-[#0085FF]">
              <Newspaper className="h-4 w-4" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0085FF]">
              Weekly Intelligence
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-white leading-tight mb-3">
            Weekly XRP Intelligence Digest
          </h2>

          <p className="text-sm text-[#888] leading-relaxed mb-6">
            The signal, not the noise. Key developments, price analysis, and macro outlook — delivered weekly.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 rounded-xl bg-[#0085FF]/10 border border-[#0085FF]/20 px-5 py-3 text-sm font-semibold text-[#0085FF]">
              ✓ You&apos;re in! First digest drops Monday.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-sm">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="flex-1 rounded-xl border border-white/[0.08] bg-black px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#0085FF]/40 transition-colors"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="shrink-0 rounded-xl bg-[#0085FF] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0085FF]/90 transition-colors disabled:opacity-50"
                >
                  {submitting ? "..." : "Get Access"}
                </button>
              </div>
              {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
              <p className="mt-2 text-[11px] text-white/20">Free. No spam. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
