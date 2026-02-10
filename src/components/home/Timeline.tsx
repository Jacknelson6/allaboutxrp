"use client";

import { useState } from "react";

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
const categoryColors: Record<string, string> = {
  technology: "bg-xrp-accent/20 text-xrp-accent",
  company: "bg-success/20 text-success",
  regulation: "bg-warning/20 text-warning",
  partnership: "bg-purple-500/20 text-purple-400",
  market: "bg-danger/20 text-danger",
};

export default function Timeline({ events }: TimelineProps) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? events : events.filter((e) => e.category === filter);

  return (
    <section className="py-12" aria-label="XRP Timeline">
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">XRP Timeline</h2>
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter timeline by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
              filter === cat
                ? "bg-xrp-accent text-white"
                : "bg-surface-card text-text-secondary hover:bg-surface-elevated"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="relative mt-8 ml-4 border-l-2 border-surface-border pl-8" role="tabpanel">
        {filtered.map((event, i) => (
          <div key={i} className="relative mb-8 last:mb-0">
            <div className="absolute -left-[2.55rem] top-1 h-3 w-3 rounded-full border-2 border-xrp-accent bg-surface-primary" />
            <div className="flex items-center gap-3">
              <time className="font-mono text-sm text-text-secondary">
                {event.date}
              </time>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${categoryColors[event.category] || "bg-surface-card text-text-secondary"}`}>
                {event.category}
              </span>
            </div>
            <h3 className="mt-1 font-semibold text-text-primary">{event.title}</h3>
            <p className="mt-1 text-sm text-text-secondary">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
