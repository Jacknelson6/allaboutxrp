"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineEvent {
  date: string;
  year: number;
  title: string;
  description: string;
  category: string;
  significance?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const categories = ["all", "technology", "company", "regulation", "partnership", "market"];
const categoryStyles: Record<string, { bg: string; dot: string; text: string }> = {
  technology: { bg: "bg-xrp-accent/10 border-xrp-accent/20", dot: "bg-xrp-accent", text: "text-xrp-accent" },
  company: { bg: "bg-success/10 border-success/20", dot: "bg-success", text: "text-success" },
  regulation: { bg: "bg-warning/10 border-warning/20", dot: "bg-warning", text: "text-warning" },
  partnership: { bg: "bg-purple-500/10 border-purple-500/20", dot: "bg-purple-400", text: "text-purple-400" },
  market: { bg: "bg-danger/10 border-danger/20", dot: "bg-danger", text: "text-danger" },
};

export default function Timeline({ events }: TimelineProps) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? events : events.filter((e) => e.category === filter);

  return (
    <section className="py-16" aria-label="XRP Timeline">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-text-primary md:text-3xl">
          XRP Timeline
        </h2>
        <p className="mt-2 text-text-secondary/70">Key milestones in XRP and Ripple history</p>
      </motion.div>

      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter timeline by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={`relative rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-all ${
              filter === cat
                ? "text-white"
                : "bg-surface-card text-text-secondary hover:bg-surface-elevated hover:text-text-primary"
            }`}
          >
            {filter === cat && (
              <motion.div
                layoutId="timeline-filter"
                className="absolute inset-0 rounded-full bg-xrp-accent"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      <div className="relative mt-10 ml-4 pl-8" role="tabpanel">
        {/* Gradient line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-xrp-accent/40 via-surface-border/50 to-transparent" />

        <AnimatePresence mode="popLayout">
          {filtered.map((event, i) => {
            const style = categoryStyles[event.category] || categoryStyles.technology;
            return (
              <motion.div
                key={`${event.date}-${event.title}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ delay: i * 0.03, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-8 last:mb-0"
              >
                {/* Dot with glow */}
                <div className="absolute -left-[2.15rem] top-2 flex items-center justify-center">
                  <div className={`h-3 w-3 rounded-full ${style.dot} ring-4 ring-surface-primary`} />
                  <div className={`absolute h-3 w-3 rounded-full ${style.dot} opacity-40 blur-sm`} />
                </div>

                <div className={`rounded-xl border ${style.bg} p-4 transition-all hover:translate-x-1`}>
                  <div className="flex items-center gap-3 flex-wrap">
                    <time className="font-mono text-xs text-text-secondary tracking-wider">{event.date}</time>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${style.bg} ${style.text}`}>
                      {event.category}
                    </span>
                  </div>
                  <h3 className="mt-2 font-semibold text-text-primary">{event.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
