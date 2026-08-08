import Link from "next/link";
import { CheckCircle2, ExternalLink, Scale } from "lucide-react";
import { getEditorialProfile, shouldShowEditorialReview } from "@/lib/editorial";

export default function EditorialReviewPanel({ pathname }: { pathname: string }) {
  if (!shouldShowEditorialReview(pathname)) return null;

  const profile = getEditorialProfile(pathname);

  return (
    <aside className="border-t border-surface-border bg-[#070b10]" aria-labelledby="editorial-review-heading" data-editorial-review="true">
      <div className="reading-container py-10 sm:py-12">
        <div className="rounded-2xl border border-surface-border bg-surface-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.24)] sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="editorial-kicker">Research transparency</p>
              <h2 id="editorial-review-heading" className="mt-2 text-2xl font-bold text-text-primary">
                How this page is reviewed
              </h2>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.reviewType}
            </span>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">Methodology</h3>
              <p className="mt-2 text-sm leading-7 text-text-secondary">{profile.method}</p>

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-300/15 bg-amber-300/[0.05] p-4">
                <Scale className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">Limitations and disclosure</h3>
                  <p className="mt-1 text-sm leading-6 text-text-secondary">{profile.limitation}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">Primary verification links</h3>
              <ul className="mt-3 space-y-3">
                {profile.sources.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} rel="noopener noreferrer" data-source-link="true" className="group block rounded-xl border border-surface-border bg-black/20 p-3 transition-colors hover:border-xrp-accent/30">
                      <span className="flex items-center gap-2 text-sm font-semibold text-xrp-accent-bright">
                        {source.label}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-text-secondary">{source.note}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-surface-border pt-5 text-xs leading-6 text-text-secondary sm:flex-row sm:items-center sm:justify-between">
            <p>
              Accountable publisher: <Link href="/authors/jack-nelson" rel="author" className="font-semibold text-text-primary hover:text-xrp-accent-bright">Jack Nelson</Link>. Editorial questions go to team@allaboutxrp.com.
            </p>
            <div className="flex gap-4">
              <Link href="/editorial" className="text-link">Standards</Link>
              <Link href="/corrections" className="text-link">Corrections</Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
