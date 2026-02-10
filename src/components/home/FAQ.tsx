"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12" aria-label="Frequently Asked Questions">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-surface-border bg-surface-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-surface-elevated"
              aria-expanded={openIndex === i}
            >
              <span className="font-medium text-text-primary pr-4">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-text-secondary transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="border-t border-surface-border px-5 py-4">
                <p className="text-text-secondary leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
