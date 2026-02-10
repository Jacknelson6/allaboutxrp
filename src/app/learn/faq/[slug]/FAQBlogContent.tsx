"use client";

import { motion } from "framer-motion";

export default function FAQBlogContent({ content }: { content: string }) {
  // Simple markdown-ish rendering
  const sections = content.trim().split("\n\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mt-8 space-y-4"
    >
      {sections.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Headers
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="text-lg font-bold text-text-primary mt-8 mb-2">
              {trimmed.replace("### ", "")}
            </h3>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="text-xl font-bold text-text-primary mt-10 mb-3">
              {trimmed.replace("## ", "")}
            </h2>
          );
        }

        // Lists
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed.split("\n").filter((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "));
          return (
            <ul key={i} className="space-y-1.5 pl-1">
              {items.map((item, j) => (
                <li key={j} className="flex gap-2 text-text-secondary leading-relaxed">
                  <span className="text-xrp-accent mt-1.5 shrink-0">•</span>
                  <span dangerouslySetInnerHTML={{ __html: formatInline(item.replace(/^[-*]\s*/, "")) }} />
                </li>
              ))}
            </ul>
          );
        }

        // Numbered lists
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
          return (
            <ol key={i} className="space-y-1.5 pl-1 list-none">
              {items.map((item, j) => (
                <li key={j} className="flex gap-3 text-text-secondary leading-relaxed">
                  <span className="text-xrp-accent font-mono text-sm mt-0.5 shrink-0">{j + 1}.</span>
                  <span dangerouslySetInnerHTML={{ __html: formatInline(item.replace(/^\d+\.\s*/, "")) }} />
                </li>
              ))}
            </ol>
          );
        }

        // Tables
        if (trimmed.includes("|") && trimmed.split("\n").length > 2) {
          const rows = trimmed.split("\n").filter((r) => r.trim() && !r.trim().match(/^\|[-\s|]+\|$/));
          if (rows.length > 1) {
            const headers = rows[0].split("|").filter(Boolean).map((h) => h.trim());
            const dataRows = rows.slice(1).map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
            return (
              <div key={i} className="overflow-x-auto mt-4 mb-4 rounded-xl border border-white/[0.06]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06] bg-black">
                      {headers.map((h, hi) => (
                        <th key={hi} className="px-4 py-3 text-left font-semibold text-text-primary">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows.map((row, ri) => (
                      <tr key={ri} className="border-b border-white/[0.06]/30 last:border-0">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-2.5 text-text-secondary">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
        }

        // Regular paragraph
        return (
          <p key={i} className="text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
        );
      })}
    </motion.div>
  );
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-text-primary font-semibold">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="rounded bg-[#0A0A0B] px-1.5 py-0.5 text-xs font-mono text-xrp-accent">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright transition-colors">$1</a>');
}
