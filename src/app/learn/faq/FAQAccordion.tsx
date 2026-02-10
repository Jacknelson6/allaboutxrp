"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  slug: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-8 space-y-2">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
              isOpen
                ? "border-xrp-accent/30 bg-xrp-accent/[0.03]"
                : "border-white/[0.06] bg-black hover:bg-[#0A0A0B]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className={`font-medium pr-4 transition-colors ${isOpen ? "text-xrp-accent" : "text-text-primary"}`}>
                {item.question}
              </span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? "text-xrp-accent" : "text-text-secondary"}`} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="border-t border-white/[0.06]/50 px-5 py-4">
                    <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                    <Link
                      href={`/learn/faq/${item.slug}`}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-xrp-accent hover:text-xrp-accent-bright transition-colors"
                    >
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
