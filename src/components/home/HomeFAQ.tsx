import Link from "next/link";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { HOME_FAQ_ITEMS } from "@/data/home-faq";

/**
 * The homepage FAQ. HOME_FAQ_ITEMS remains the single source shared with the
 * FAQPage JSON-LD emitted by src/app/page.tsx — the visible answers and the
 * structured data must never be allowed to fork.
 */
export default function HomeFAQ() {
  return (
    <section className="bg-paper" aria-labelledby="home-faq-heading">
      <div className="site-container py-12 sm:py-16">
        <SectionHeader
          eyebrow="Query archive / fundamentals"
          title={<span id="home-faq-heading">The questions XRP readers ask first.</span>}
          href="/learn/faq"
          linkLabel="Browse every XRP question"
        />

        <p className="mt-6 max-w-2xl text-sm leading-6 text-text-secondary">
          Open a short answer, then follow its guide and primary source when you need the full
          record.
        </p>

        <div className="mt-6 divide-y divide-hairline border-y border-hairline">
          {HOME_FAQ_ITEMS.map((item, index) => (
            <details key={item.question} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center gap-4 py-4 text-ink [&::-webkit-details-marker]:hidden">
                <span className="w-8 shrink-0 font-sans text-xs font-[650] tabular-nums text-text-secondary">
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="min-w-0 flex-1 font-display text-base leading-snug font-normal transition-colors duration-150 group-hover:text-cobalt sm:text-lg">
                  {item.question}
                </h3>
                <Plus
                  className="h-4 w-4 shrink-0 text-text-secondary transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </summary>
              <div className="max-w-[68ch] pb-6 pl-12">
                <p className="text-sm leading-7 text-text-secondary">{item.answer}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  <Link
                    href={item.guideHref}
                    className="inline-flex min-h-11 items-center gap-1.5 font-sans text-sm font-[650] text-ink underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-150 hover:text-cobalt hover:decoration-current"
                  >
                    {item.guideLabel} <span aria-hidden="true">↗</span>
                  </Link>
                  <a
                    href={item.sourceHref}
                    rel="noopener noreferrer"
                    data-source-link="true"
                    className="inline-flex min-h-11 items-center gap-1.5 font-sans text-sm font-[650] text-text-secondary underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-150 hover:text-cobalt hover:decoration-current"
                  >
                    {item.sourceLabel} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
