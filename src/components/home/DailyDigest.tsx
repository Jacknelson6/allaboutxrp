"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Newspaper } from "lucide-react";

const STORAGE_KEY = "aaxrp-newsletter-email";
const SUBSCRIBED_KEY = "aaxrp-newsletter-subscribed";

// Hardcoded sample — will be wired to API later
const SAMPLE_DIGEST = {
  headline: "XRP Surges Past $3.20 as SEC Case Nears Final Resolution",
  excerpt:
    "Ripple's XRP token rallied 12% overnight following reports that the SEC is preparing to drop its remaining claims. Meanwhile, major exchanges are listing new XRP trading pairs, and the RLUSD stablecoin crossed $1B in total value locked.",
  slug: "/news/daily-recap/2025-02-13-xrp-surges-sec-resolution",
  date: "February 13, 2025",
};

export default function DailyDigest() {
  const [subscribed, setSubscribed] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(SUBSCRIBED_KEY);
      if (saved === "true") setSubscribed(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }
    localStorage.setItem(SUBSCRIBED_KEY, "true");
    setSubscribed(true);
    setShowForm(false);
  };

  return (
    <section className="px-3 pt-6 pb-2 lg:px-0" aria-label="Daily Digest">
      <div className="rounded-2xl border border-[#0085FF]/20 bg-[#0A0A0B] relative overflow-hidden">
        {/* Subtle blue glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#0085FF]/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative px-5 py-8 sm:px-8 sm:py-10">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#0085FF]/20 bg-[#0085FF]/[0.06] text-[#0085FF]">
              <Newspaper className="h-4 w-4" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0085FF]">
              Daily Digest
            </span>
            <span className="text-xs text-white/30 ml-auto">{SAMPLE_DIGEST.date}</span>
          </div>

          {/* Headline */}
          <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-white leading-tight mb-3">
            {SAMPLE_DIGEST.headline}
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-[#888] leading-relaxed mb-6">
            {SAMPLE_DIGEST.excerpt}
          </p>

          {/* CTA */}
          {subscribed ? (
            <a
              href={SAMPLE_DIGEST.slug}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0085FF] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0085FF]/90 transition-colors"
            >
              Read Full Recap <ArrowRight className="h-4 w-4" />
            </a>
          ) : showForm ? (
            <form onSubmit={handleSubmit} className="max-w-sm">
              <p className="text-xs text-white/40 mb-3">
                Enter your email to unlock the full daily recap — free forever.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="flex-1 rounded-xl border border-white/[0.08] bg-black px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-[#0085FF]/40 transition-colors"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-[#0085FF] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0085FF]/90 transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
              <p className="mt-2 text-[11px] text-white/20">No spam. Unsubscribe anytime.</p>
            </form>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0085FF] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0085FF]/90 transition-colors"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
