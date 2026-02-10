"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What are XRP holder tiers?",
    a: "XRP holder tiers are community-created categories that classify XRP holders based on their balance. From Shrimp (<10 XRP) to Humpback (50,000+ XRP), these tiers use ocean creatures to represent different levels of XRP ownership.",
  },
  {
    q: "How many XRP do I need to be a Whale?",
    a: "You need at least 10,000 XRP to be classified as a Whale. The next level, Humpback, requires 50,000+ XRP. These thresholds are based on community consensus and may evolve over time.",
  },
  {
    q: "How is XRP distributed among holders?",
    a: "The vast majority of XRP accounts hold relatively small amounts. According to on-chain data, over 70% of funded accounts hold less than 1,000 XRP, while less than 1% hold over 100,000 XRP.",
  },
  {
    q: "Are XRP holder tiers official?",
    a: "No, these tiers are not official designations from Ripple or the XRP Ledger. They are community-created categories used for fun and to help people understand where they stand relative to other holders.",
  },
  {
    q: "What percentage of XRP holders are Whales?",
    a: "Approximately 0.1-0.3% of all XRP accounts qualify as Whales (10,000+ XRP). The exact percentage fluctuates as the number of funded accounts grows and balances change.",
  },
];

export default function TierFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8 rounded-2xl border border-surface-border bg-surface-card/50 p-6 backdrop-blur-sm"
      aria-label="FAQ"
    >
      <h2 className="font-display text-lg font-bold text-text-primary mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-xl border border-surface-border/50 overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-sm text-text-primary hover:bg-white/[0.02] transition-colors"
            >
              <span className="font-medium">{faq.q}</span>
              <ChevronDown
                className={`h-4 w-4 text-text-secondary transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-3 text-xs text-text-secondary leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
