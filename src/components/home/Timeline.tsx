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
  technology: "bg-xrp-accent",
  company: "bg-success",
  regulation: "bg-warning",
  partnership: "bg-purple-400",
  market: "bg-danger",
};

export default function Timeline({ events }: TimelineProps) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? events : events.filter((e) => e.category === filter);

  return (
    <section className="py-12" aria-label="XRP Timeline">
      <h2 className="text-2xl font-bold text-text-primary">XRP Timeline</h2>
      <p className="mt-1 text-text-secondary text-sm">Key milestones in XRP and Ripple history</p>

      <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Filter timeline">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-3 py-1 text-sm capitalize transition-colors ${
              filter === cat
                ? "bg-xrp-accent text-white"
                : "border border-surface-border text-text-secondary hover:text-text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative mt-8 ml-3 pl-6 border-l border-surface-border" role="tabpanel">
        {filtered.map((event) => {
          const dotColor = categoryColors[event.category] || "bg-xrp-accent";
          return (
            <div key={`${event.date}-${event.title}`} className="relative mb-6 last:mb-0">
              <div className={`absolute -left-[1.6rem] top-2 h-2.5 w-2.5 rounded-full ${dotColor}`} />
              <div className="rounded-lg border border-surface-border p-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <time className="font-mono text-xs text-text-secondary">{event.date}</time>
                  <span className="rounded-full border border-surface-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-text-secondary">
                    {event.category}
                  </span>
                </div>
                <h3 className="mt-1.5 font-semibold text-text-primary">{event.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
