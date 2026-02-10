"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What are XRP holder tiers?", a: "XRP holder tiers are community-created categories that classify XRP holders based on their balance. From Plankton (<10 XRP) to Kraken (50,000+ XRP)." },
  { q: "How many XRP do I need to be a Megalodon?", a: "You need at least 10,000 XRP to be classified as a Megalodon. The next level, Kraken, requires 50,000+ XRP." },
  { q: "How is XRP distributed among holders?", a: "Over 70% of funded accounts hold less than 1,000 XRP, while less than 1% hold over 100,000 XRP." },
  { q: "Are XRP holder tiers official?", a: "No, these are community-created categories used for fun and to understand relative holdings." },
  { q: "What percentage of XRP holders are Megalodons?", a: "Approximately 0.1-0.3% of all XRP accounts qualify as Megalodons (10,000+ XRP)." },
];

export default function TierFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mt-6 rounded-xl border border-surface-border p-5" aria-label="FAQ">
      <h2 className="text-lg font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-surface-border last:border-0">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-3 text-left text-sm text-text-primary hover:text-xrp-accent transition-colors"
            >
              <span className="font-medium">{faq.q}</span>
              <ChevronDown className={`h-4 w-4 text-text-secondary transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <p className="pb-3 text-xs text-text-secondary leading-relaxed">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
