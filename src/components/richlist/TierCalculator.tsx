"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("xrp-tier-balance");
    if (saved) {
      setInput(saved);
      const balance = parseFloat(saved);
      if (!isNaN(balance) && balance >= 0) {
        setResult(getTier(balance));
        setShowResult(true);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const balance = parseFloat(input.replace(/,/g, ""));
    if (isNaN(balance) || balance < 0) return;
    localStorage.setItem("xrp-tier-balance", input);
    setShowResult(false);
    setTimeout(() => {
      setResult(getTier(balance));
      setShowResult(true);
    }, 100);
  };

  const balance = parseFloat(input.replace(/,/g, "")) || 0;
  const nextTier = result && result.index < TIERS.length - 1 ? TIERS[result.index + 1] : null;
  const xrpNeeded = nextTier ? nextTier.min - balance : 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8 relative rounded-3xl overflow-hidden"
      aria-label="XRP Tier Calculator"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #061220 50%, #020c1a 100%)",
        }}
      />

      <div className="relative z-10 px-4 py-10 sm:px-8">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            🔍 Find Your Rank
          </h2>
          <p className="text-sm text-blue-300/60 mt-2">
            Enter your XRP balance to discover your ocean tier
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              inputMode="decimal"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your XRP balance"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/25 font-mono text-sm focus:outline-none focus:border-[#00A3FF]/50 focus:ring-1 focus:ring-[#00A3FF]/30 backdrop-blur-sm transition-all"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/20 font-mono">XRP</span>
          </div>
          <button
            type="submit"
            className="rounded-xl bg-[#00A3FF] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#00A3FF]/80 hover:scale-105 active:scale-95 flex-shrink-0"
          >
            Dive In
          </button>
        </form>

        <AnimatePresence mode="wait">
          {showResult && result && (
            <motion.div
              key={result.tier.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-md mx-auto mt-8"
            >
              <div
                className="relative rounded-2xl border border-white/[0.08] p-6 text-center backdrop-blur-sm overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${result.tier.color}15 0%, transparent 70%)`,
                }}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${result.tier.color}40, transparent 60%)`,
                  }}
                />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                  className="text-6xl mb-3 relative z-10"
                >
                  {result.tier.emoji}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="relative z-10"
                >
                  <h3 className="font-display text-2xl font-bold text-white">{result.tier.name}</h3>
                  <p className="text-xs uppercase tracking-widest font-mono mt-1" style={{ color: `${result.tier.color}cc` }}>
                    {result.tier.depth}
                  </p>
                  <p className="text-sm text-white/50 mt-2">{result.tier.message}</p>

                  {nextTier && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-4 pt-4 border-t border-white/[0.06]"
                    >
                      <p className="text-xs text-white/40">
                        <span className="text-white/60 font-mono">{xrpNeeded.toLocaleString()} XRP</span> more to reach{" "}
                        <span className="text-white/70">
                          {nextTier.emoji} {nextTier.name}
                        </span>
                      </p>
                      {/* Progress bar */}
                      <div className="mt-2 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: `${Math.min(((balance - result.tier.min) / (nextTier.min - result.tier.min)) * 100, 100)}%`,
                          }}
                          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${result.tier.color}, ${nextTier.color})` }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {!nextTier && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-4 text-xs text-yellow-400/60 font-mono"
                    >
                      🏆 Maximum tier reached — You are a legend
                    </motion.p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
