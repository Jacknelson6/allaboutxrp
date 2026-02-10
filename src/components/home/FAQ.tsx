"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { slugify } from "@/lib/utils/faq";

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
      <h2 className="text-2xl font-bold text-text-primary">
        Frequently Asked Questions
      </h2>
      <p className="mt-1 text-text-secondary text-sm">
        Everything you need to know about XRP.{" "}
        <Link href="/learn/faq" className="text-xrp-accent hover:underline">
          View all FAQ →
        </Link>
      </p>

      <div className="mt-6 space-y-2">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          const slug = slugify(item.question);
          return (
            <div
              key={i}
              className={`overflow-hidden rounded-lg border transition-colors ${
                isOpen ? "border-xrp-accent/30" : "border-surface-border"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-4 py-3 text-left"
                aria-expanded={isOpen}
              >
                <span className={`font-medium text-sm ${isOpen ? "text-xrp-accent" : "text-text-primary"}`}>
                  {item.question}
                </span>
                <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180 text-xrp-accent" : "text-text-secondary"}`} />
              </button>
              {isOpen && (
                <div className="border-t border-surface-border px-4 py-3">
                  <p className="text-sm text-text-secondary leading-relaxed">{item.answer}</p>
                  <Link
                    href={`/learn/faq/${slug}`}
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-xrp-accent hover:underline"
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
