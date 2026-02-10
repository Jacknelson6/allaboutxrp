"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "aaxrp-newsletter-email";
const SUBSCRIBED_KEY = "aaxrp-newsletter-subscribed";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
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
  };

  return (
    <section className="mx-auto max-w-[600px] border-x border-white/[0.04] px-4 py-10">
      <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
        <p className="text-[11px] font-medium uppercase tracking-widest text-xrp-accent/70 mb-2">Newsletter</p>
        <h2 className="text-lg font-semibold tracking-tight text-text-primary">
          Get the daily XRP briefing.
        </h2>
        <p className="text-[13px] text-text-secondary mt-1.5">
          Join thousands of XRP holders getting the signal, not the noise.
        </p>

        {subscribed ? (
          <div className="mt-5 rounded-lg border border-success/20 bg-success/[0.04] px-4 py-3">
            <p className="text-sm font-medium text-success">You&apos;re in!</p>
            <p className="text-xs text-text-secondary mt-0.5">We&apos;ll send your first briefing soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                placeholder="you@email.com"
                className="flex-1 rounded-lg border border-white/[0.08] bg-black px-4 py-2.5 text-sm text-text-primary placeholder:text-white/20 outline-none focus:border-xrp-accent/50 transition-colors duration-200"
              />
              <button
                type="submit"
                className="btn-primary shrink-0 py-2.5"
              >
                Subscribe
              </button>
            </div>
            {error && <p className="mt-2 text-xs text-danger">{error}</p>}
            <p className="mt-2.5 text-[11px] text-white/20">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
