import type { ReactNode } from "react";

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
    <aside className="my-10 rounded-xl border border-white/[0.06] bg-gradient-to-br from-[#0a0a1a] to-[#111128] overflow-hidden">
      {/* Left accent border via gradient */}
      <div className="flex">
        <div className="w-1.5 shrink-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-600" />
        <div className="flex-1 px-6 py-5">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg" role="img" aria-label="chart">📊</span>
            <h3 className="text-base font-semibold text-white tracking-tight">
              {title}
            </h3>
          </div>

          {/* Body */}
          <div className="text-sm leading-relaxed text-[#c0c0d0] space-y-3 [&>p]:mb-0">
            {children}
          </div>

          {/* Footer */}
          <p className="mt-4 text-xs text-[#666680] border-t border-white/[0.06] pt-3">
            Last verified: {verifiedDate}
          </p>
        </div>
      </div>
    </aside>
  );
}
