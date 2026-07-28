"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { HOME_FAQ_ITEMS } from "@/data/home-faq";

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
        {HOME_FAQ_ITEMS.map((item, i) => {
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
                aria-controls={`home-faq-answer-${i}`}
              >
                <span className={`text-[15px] font-medium ${isOpen ? "text-text-primary" : "text-text-secondary"}`}>
                  {item.question}
                </span>
                <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-xrp-accent" : "text-white/20"}`} />
              </button>
              <div
                id={`home-faq-answer-${i}`}
                hidden={!isOpen}
                className="border-t border-white/[0.04] px-5 py-4"
              >
                <p className="text-[14px] text-text-secondary leading-relaxed">{item.answer}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                  <Link href={item.guideHref} className="font-medium text-xrp-accent hover:underline">
                    {item.guideLabel}
                  </Link>
                  <a href={item.sourceHref} rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary hover:underline">
                    {item.sourceLabel}
                  </a>
                </div>
              </div>
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
