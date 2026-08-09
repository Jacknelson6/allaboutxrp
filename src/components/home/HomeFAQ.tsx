import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { HOME_FAQ_ITEMS } from "@/data/home-faq";

export default function HomeFAQ() {
  return (
    <section className="site-container section-shell" aria-labelledby="home-faq-heading">
      <div className="ascii-faq-header">
        <div><p className="ascii-section-label">QUERY ARCHIVE / FUNDAMENTALS</p><h2 id="home-faq-heading" className="mt-4 max-w-2xl text-4xl text-text-primary sm:text-5xl">The questions XRP readers ask first.</h2></div>
        <div><p className="max-w-md text-base leading-7 text-text-secondary">Open a short answer, then follow its guide and primary source when you need the full record.</p><Link href="/learn/faq" className="text-link mt-4 text-sm">Browse every XRP question <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
      </div>
      <div className="ascii-faq-list mt-10">
        {HOME_FAQ_ITEMS.map((item, index) => (
          <details key={item.question} className="group">
            <summary><span className="ascii-faq-count">Q{String(index + 1).padStart(2, "0")}</span><span>{item.question}</span><Plus className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" /></summary>
            <div className="ascii-faq-answer"><p>{item.answer}</p><div><Link href={item.guideHref}>{item.guideLabel} ↗</Link><a href={item.sourceHref} rel="noopener noreferrer" data-source-link="true">{item.sourceLabel} ↗</a></div></div>
          </details>
        ))}
      </div>
    </section>
  );
}
