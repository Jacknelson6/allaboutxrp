import Link from "next/link";
import { BarChart3 } from "lucide-react";
import { getPublishedDigestEntries } from "@/lib/seo/published-content";

export const revalidate = 3600;

function formatDateRange(start: string, end: string) {
  const s = new Date(start + "T12:00:00");
  const e = new Date(end + "T12:00:00");
  const opts: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
  return `${s.toLocaleDateString("en-US", opts)} – ${e.toLocaleDateString("en-US", { ...opts, year: "numeric" })}`;
}

function getWeekNumber(dateStr: string): number {
  const d = new Date(dateStr + "T12:00:00");
  const start = new Date(d.getFullYear(), 0, 1);
  const diff = d.getTime() - start.getTime();
  return Math.ceil((diff / 86400000 + start.getDay() + 1) / 7);
}

export default async function DigestPage() {
  const digests = await getPublishedDigestEntries();

  return (
    <main id="main-content" className="min-h-screen bg-surface-primary px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <p className="editorial-kicker">Open research archive</p>
          <h1 className="mt-3 text-4xl text-text-primary sm:text-5xl">Weekly XRP Digest</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
            Source-led XRP ecosystem analysis, market context, and news recaps. Every published digest is free to read.
          </p>
        </div>

        {/* Empty */}
        {digests.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No digests published yet.</p>
            <p className="text-gray-600 text-sm mt-2">Check back soon.</p>
          </div>
        )}

        <div>
          <div className="space-y-3">
            {digests.map((d) => (
              <Link
                key={d.id}
                href={`/digest/${d.slug}`}
                className="group block overflow-hidden rounded-xl border border-surface-border bg-surface-card transition-colors hover:border-xrp-accent/40 hover:bg-surface-elevated"
              >
                <div className="flex">
                  <div className="w-1 bg-[#0085FF]/60 group-hover:bg-[#0085FF] transition-colors flex-shrink-0" />
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0085FF] mb-2">
                          <BarChart3 className="h-3.5 w-3.5" />
                          Week {getWeekNumber(d.weekStart)}
                        </div>
                        <h2 className="text-lg font-semibold text-white group-hover:text-[#0085FF] transition-colors leading-snug">
                          {d.title}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1.5">
                          {formatDateRange(d.weekStart, d.weekEnd)}
                        </p>
                      </div>
                      <span className="text-gray-600 group-hover:text-[#0085FF] transition-colors text-lg mt-1">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
