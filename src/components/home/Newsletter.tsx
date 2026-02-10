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
    <section className="mx-auto max-w-[600px] border-x border-surface-border px-4 py-8">
      <div className="rounded-2xl border border-surface-border p-6">
        <p className="text-xs font-mono uppercase tracking-wider text-xrp-accent mb-2">Free Newsletter</p>
        <h2 className="text-xl font-bold text-text-primary">
          Get the daily XRP briefing.
        </h2>
        <p className="text-sm text-text-secondary mt-1">
          Join thousands of XRP holders getting the signal, not the noise.
        </p>

        {subscribed ? (
          <div className="mt-4 rounded-lg border border-success/20 bg-success/[0.05] px-4 py-3">
            <p className="text-sm font-semibold text-success">You&apos;re in!</p>
            <p className="text-xs text-text-secondary mt-0.5">We&apos;ll send your first briefing soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                placeholder="you@email.com"
                className="flex-1 rounded-full border border-surface-border bg-black px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-xrp-accent transition-colors"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-xrp-accent px-5 py-2.5 text-sm font-bold text-white hover:bg-xrp-accent-bright transition-colors"
              >
                Subscribe
              </button>
            </div>
            {error && <p className="mt-2 text-xs text-danger">{error}</p>}
            <p className="mt-2 text-[11px] text-text-secondary/40">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
