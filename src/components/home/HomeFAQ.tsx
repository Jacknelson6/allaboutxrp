"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqItems = [
  { q: "What is XRP?", a: "XRP is a digital asset and cryptocurrency native to the XRP Ledger, an open-source blockchain launched in June 2012. It was designed for fast, low-cost cross-border payments, settling transactions in 3–5 seconds with fees under $0.01." },
  { q: "Is XRP the same as Ripple?", a: "No. Ripple is a private fintech company that builds payment solutions. XRP is an independent digital asset on the open-source XRP Ledger. While Ripple uses XRP in some products, the XRP Ledger operates independently." },
  { q: "Is XRP a security?", a: "In July 2023, Judge Analisa Torres ruled that XRP sold on public exchanges to retail investors is not a security. This was a landmark ruling for the entire crypto industry." },
  { q: "How fast are XRP transactions?", a: "XRP transactions settle in 3–5 seconds on the XRP Ledger, which can handle approximately 1,500 transactions per second — making it one of the fastest major cryptocurrencies." },
  { q: "How many XRP exist?", a: "100 billion XRP were created at genesis. No more can ever be minted. Approximately 60 billion are in circulation, ~33.9 billion are in Ripple's escrow, and over 14 million have been permanently burned." },
  { q: "What is XRP escrow?", a: "Ripple placed 55 billion XRP into cryptographically enforced escrow contracts in 2017. Up to 1 billion unlocks monthly, but 60-80% is typically re-escrowed immediately." },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-5 py-16" aria-label="Frequently Asked Questions">
      <div className="text-center mb-10">
        <p className="text-[11px] font-medium uppercase tracking-widest text-xrp-accent/70 mb-3">FAQ</p>
        <h2 className="text-[32px] font-bold tracking-[-0.03em] text-text-primary md:text-[38px]">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-[15px] text-text-secondary">
          Everything you need to know about XRP.
        </p>
      </div>

      <div className="space-y-2">
        {faqItems.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-200 ${
                isOpen ? "border-xrp-accent/20 bg-xrp-accent/[0.02]" : "border-white/[0.06] bg-[#0A0A0B]"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className={`text-[15px] font-medium ${isOpen ? "text-text-primary" : "text-text-secondary"}`}>
                  {item.q}
                </span>
                <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-xrp-accent" : "text-white/20"}`} />
              </button>
              {isOpen && (
                <div className="border-t border-white/[0.04] px-5 py-4">
                  <p className="text-[14px] text-text-secondary leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/learn/faq"
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-xrp-accent hover:text-xrp-accent-bright transition-colors"
        >
          View all FAQ <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
