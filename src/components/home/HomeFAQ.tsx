import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { HOME_FAQ_ITEMS } from "@/data/home-faq";

export default function HomeFAQ() {
  return (
    <section className="site-container section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]" aria-labelledby="home-faq-heading">
      <div>
        <p className="editorial-kicker">Popular questions</p>
        <h2 id="home-faq-heading" className="mt-4 text-4xl text-text-primary sm:text-5xl">
          Clear answers to XRP fundamentals
        </h2>
        <p className="mt-4 max-w-md text-base leading-7 text-text-secondary">
          Start with the short answer, then follow the guide and primary source when you need the full context.
        </p>
        <Link href="/learn/faq" className="text-link mt-5 text-sm">
          Browse every XRP question <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="divide-y divide-surface-border border-y border-surface-border">
        {HOME_FAQ_ITEMS.map((item, index) => (
          <details key={item.question} className="group py-1">
            <summary className="flex min-h-16 list-none items-center justify-between gap-5 py-3 text-left text-base font-semibold text-text-primary marker:content-none">
              <span className="flex items-start gap-4">
                <span className="pt-0.5 font-mono text-xs font-medium text-text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.question}</span>
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 text-text-secondary transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="pb-5 pl-10 pr-8">
              <p className="text-[15px] leading-7 text-text-secondary">{item.answer}</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                <Link href={item.guideHref} className="text-link text-sm">{item.guideLabel}</Link>
                <a href={item.sourceHref} rel="noopener noreferrer" className="text-link text-sm text-text-secondary">
                  {item.sourceLabel}
                </a>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
