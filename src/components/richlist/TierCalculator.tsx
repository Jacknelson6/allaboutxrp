"use client";

import { useState, useEffect, useRef } from "react";
import { TIERS } from "./TierChart";

function getTier(balance: number) {
  for (let i = TIERS.length - 1; i >= 0; i--) {
    if (balance >= TIERS[i].min) return { tier: TIERS[i], index: i };
  }
  return { tier: TIERS[0], index: 0 };
}

export default function TierCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ tier: (typeof TIERS)[number]; index: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("xrp-tier-balance");
    if (saved) {
      setInput(saved);
      const balance = parseFloat(saved);
      if (!isNaN(balance) && balance >= 0) setResult(getTier(balance));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const balance = parseFloat(input.replace(/,/g, ""));
    if (isNaN(balance) || balance < 0) return;
    localStorage.setItem("xrp-tier-balance", input);
    setResult(getTier(balance));
  };

  const balance = parseFloat(input.replace(/,/g, "")) || 0;
  const nextTier = result && result.index < TIERS.length - 1 ? TIERS[result.index + 1] : null;
  const xrpNeeded = nextTier ? nextTier.min - balance : 0;

  return (
    <section className="mt-6 rounded-xl border border-white/[0.06] p-6" aria-label="XRP Tier Calculator">
      <h2 className="text-xl font-bold text-text-primary mb-1">Find Your Rank</h2>
      <p className="text-sm text-text-secondary mb-5">Enter your XRP balance to discover your tier</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row max-w-md">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            inputMode="decimal"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter XRP balance"
            aria-label="XRP balance amount"
            className="w-full rounded-full border border-white/[0.06] bg-black px-4 py-2.5 text-base text-text-primary placeholder:text-text-secondary/40 font-mono focus:outline-none focus:border-xrp-accent transition-colors"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-xrp-accent px-5 py-2.5 text-sm font-bold text-white hover:bg-xrp-accent-bright transition-colors shrink-0"
        >
          Check
        </button>
      </form>

      {result && (
        <div className="mt-5 rounded-lg border border-white/[0.06] p-5">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{result.tier.emoji}</span>
            <div>
              <h3 className="text-xl font-bold text-text-primary">{result.tier.name}</h3>
              {nextTier ? (
                <p className="text-sm text-text-secondary">
                  <span className="font-mono text-xrp-accent">{xrpNeeded.toLocaleString()} XRP</span> more to reach {nextTier.emoji} {nextTier.name}
                </p>
              ) : (
                <p className="text-sm text-text-secondary">Maximum tier reached 🏆</p>
              )}
            </div>
          </div>
          {nextTier && (
            <div className="mt-3 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full bg-xrp-accent"
                style={{ width: `${Math.min(((balance - result.tier.min) / (nextTier.min - result.tier.min)) * 100, 100)}%` }}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
