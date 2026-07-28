import type { ReactNode } from "react";
import { ChartNoAxesCombined } from "lucide-react";

interface UniqueInsightProps {
  title?: string;
  children: ReactNode;
  verifiedDate: string;
}

/**
 * Editorial analysis box — renders an opinionated, data-backed insight
 * that signals unique value to search engines (and readers).
 */
export default function UniqueInsight({
  title = "AllAboutXRP Analysis",
  children,
  verifiedDate,
}: UniqueInsightProps) {
  return (
    <aside className="my-10 overflow-hidden rounded-xl border border-xrp-accent/20 bg-[#07111a]">
      <div className="px-6 py-5">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <ChartNoAxesCombined className="h-5 w-5 text-xrp-accent" strokeWidth={1.8} aria-hidden="true" />
            <h3 className="text-lg font-semibold text-text-primary">
              {title}
            </h3>
          </div>

          {/* Body */}
          <div className="space-y-3 text-[15px] leading-7 text-text-secondary [&>p]:mb-0">
            {children}
          </div>

          {/* Footer */}
          <p className="mt-4 border-t border-surface-border pt-3 font-mono text-xs text-text-secondary">
            Last verified: {verifiedDate}
          </p>
      </div>
    </aside>
  );
}
