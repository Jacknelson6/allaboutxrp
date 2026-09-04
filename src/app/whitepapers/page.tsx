import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import SEOSchema from "@/components/shared/SEOSchema";
import WhitepaperLibrary from "@/components/whitepapers/WhitepaperLibrary";
import { Button } from "@/components/ui";
import { WHITEPAPERS, WHITEPAPER_REVIEW_DATE, WHITEPAPER_URL } from "@/data/whitepapers";
import { WHITEPAPER_FAQS, buildWhitepaperCollectionSchema, formatPaperDate } from "@/lib/whitepapers";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";

const title = "XRP Whitepapers & Research Library | AllAboutXRP";
const description = "Read XRP, Ripple, RLUSD, and XRPL ecosystem whitepapers. Explore consensus research, tokenization, and technical standards with original sources and clear context.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: WHITEPAPER_URL },
  openGraph: {
    title, description, url: WHITEPAPER_URL, type: "website", siteName: "AllAboutXRP",
    images: [{ url: "/whitepapers/opengraph-image", width: 1200, height: 630, alt: "XRP whitepapers and research library from AllAboutXRP" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/whitepapers/opengraph-image"] },
};

export default function WhitepapersPage() {
  const paperCount = WHITEPAPERS.filter((paper) => paper.type === "whitepaper" || paper.type === "research-paper").length;
  return (
    <>
      <SEOSchema schema={[
        buildWhitepaperCollectionSchema(),
        buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Whitepapers", url: WHITEPAPER_URL }]),
        buildFAQSchema(WHITEPAPER_FAQS),
      ]} />
      <div className="bg-paper">
        <header className="border-b border-hairline">
          <div className="site-container pb-10 pt-6 sm:pb-14 sm:pt-8">
            <nav aria-label="Breadcrumb" className="flex min-h-11 items-center gap-2 text-sm text-secondary">
              <Link href="/" className="inline-flex min-h-11 items-center hover:text-cobalt">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Whitepapers</span>
            </nav>
            <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(240px,0.7fr)] lg:items-end lg:gap-16">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.04em] text-cobalt">The research library</p>
                <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.08] tracking-[-0.035em] text-ink">XRP whitepapers.<br /><span className="text-cobalt">Go to the source.</span></h1>
                <p className="mt-6 max-w-[65ch] text-base leading-7 text-secondary">Read the original papers behind XRP, Ripple, and the XRP Ledger ecosystem. This curated library brings together consensus research, RLUSD, tokenization, and technical standards, with author details, dates, and context that separates historical designs from current documentation. Every available document links to its original publisher or research repository.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="#library">Explore the library <ArrowDown className="h-4 w-4" aria-hidden="true" /></Button>
                  <Button href="#reading-guide" variant="quiet">Where to start <ArrowRight className="h-4 w-4" aria-hidden="true" /></Button>
                </div>
              </div>
              <aside className="border-y border-hairline py-5 text-sm" aria-label="About this collection">
                <div className="flex items-center gap-2 font-semibold text-ink"><FileText className="h-4 w-4 text-cobalt" aria-hidden="true" />An open reference collection</div>
                <p className="mt-3 leading-6 text-secondary">{paperCount} whitepapers and research papers, alongside {WHITEPAPERS.length - paperCount} specifications, reports, and documentation resources.</p>
                <div className="mt-5 border-t border-hairline pt-4 text-xs leading-6 text-secondary">
                  <p>Sources checked <time dateTime={WHITEPAPER_REVIEW_DATE} className="text-ink">{formatPaperDate(WHITEPAPER_REVIEW_DATE)}</time></p>
                  <p>Curated by <Link href="/authors/jack-nelson" rel="author" className="text-cobalt hover:underline">Jack Nelson, AllAboutXRP</Link></p>
                  <a href="#selection" className="inline-flex min-h-11 items-center text-cobalt hover:underline">How documents are selected <ArrowUpRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" /></a>
                </div>
              </aside>
            </div>
          </div>
        </header>

        <section aria-labelledby="foundational-papers" className="border-b border-hairline bg-paper-muted">
          <div className="site-container grid gap-6 py-7 sm:py-9 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
            <div><h2 id="foundational-papers" className="font-display text-xl leading-snug text-ink">Two papers.<br />A stronger foundation.</h2><p className="mt-2 max-w-sm text-sm leading-6 text-secondary">Read the original design with the later analysis.</p></div>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <a href="#paper-ripple-consensus-2014" className="group block border-t border-hairline pt-4">
                <p className="text-xs font-semibold text-secondary">2014 · The original paper</p><p className="mt-2 font-display text-lg leading-snug text-ink group-hover:text-cobalt">The Ripple Protocol Consensus Algorithm</p><p className="mt-2 flex items-center gap-2 text-sm text-cobalt">Schwartz, Youngs & Britto <ArrowRight className="h-4 w-4" aria-hidden="true" /></p>
              </a>
              <a href="#paper-xrpl-consensus-analysis" className="group block border-t border-hairline pt-4">
                <p className="text-xs font-semibold text-secondary">2018 · The deeper analysis</p><p className="mt-2 font-display text-lg leading-snug text-ink group-hover:text-cobalt">Analysis of the XRP Ledger Consensus Protocol</p><p className="mt-2 flex items-center gap-2 text-sm text-cobalt">Chase & MacBrough <ArrowRight className="h-4 w-4" aria-hidden="true" /></p>
              </a>
            </div>
          </div>
        </section>

        <WhitepaperLibrary papers={WHITEPAPERS} />

        <section id="reading-guide" aria-labelledby="reading-heading" className="scroll-mt-24 border-y border-hairline bg-paper-muted">
          <div className="site-container grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div><h2 id="reading-heading" className="font-display text-3xl leading-tight text-ink">Which XRP whitepaper should you read first?</h2><p className="mt-5 max-w-[65ch] text-base leading-7 text-secondary">Start with the 2014 consensus paper for the original design, then read the 2018 analysis for its safety and liveness assumptions. Choose an ecosystem paper only after identifying the network it describes. For implementation work, use current specifications and documentation alongside the historical research.</p><Link href="/learn/xrpl-consensus-mechanism" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cobalt hover:underline">New to consensus? Start with the guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
            <ol className="divide-y divide-hairline border-y border-hairline">
              {[
                { title: "Understand the original design", text: "Read RPCA, then compare its assumptions with the later analysis and independent security research.", href: "#paper-ripple-consensus-2014", link: "Start with the 2014 paper" },
                { title: "Follow the topic you are researching", text: "For tokenized assets, pair the MPT overview with XLS-33. For Ripple’s stablecoin, read the dedicated RLUSD paper.", href: "#paper-asset-tokenization-mpt", link: "Explore asset tokenization" },
                { title: "Check what applies today", text: "Reconcile the publication date with current documentation. A proposal or a Final specification is not proof of mainnet activation.", href: "https://xrpl.org/resources/known-amendments", link: "Check current XRPL amendments" },
              ].map((step, index) => <li key={step.title} className="flex gap-5 py-6"><span className="pt-1 text-sm font-semibold text-cobalt" aria-hidden="true">{index + 1}.</span><div><h3 className="font-sans text-base font-semibold text-ink">{step.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-secondary">{step.text}</p><a href={step.href} className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cobalt hover:underline">{step.link}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a></div></li>)}
            </ol>
          </div>
        </section>

        <section id="selection" aria-labelledby="selection-heading" className="site-container scroll-mt-24 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div><h2 id="selection-heading" className="font-display text-3xl leading-tight text-ink">How are documents selected?</h2><p className="mt-5 max-w-xl text-base leading-7 text-secondary">We prioritize original publishers, official project repositories, and author-submitted research. Each record identifies the document type, the date available from its source, and its relationship to XRP or the wider ecosystem. Historical and unavailable sources remain labeled, and inclusion is not a recommendation to buy or use a project.</p></div>
            <div className="space-y-6 text-sm leading-7 text-secondary">
              <p><strong className="text-ink">Source checks, not a protocol audit.</strong> We checked links and bibliographic information on {formatPaperDate(WHITEPAPER_REVIEW_DATE)}. A reachable PDF is not evidence that its claims remain current. This is a curated collection, not every paper ever published about an XRPL token.</p>
              <p><strong className="text-ink">Dates retain their meaning.</strong> “Published” and “Updated” refer to the recorded paper date. XLS entries show their creation date. Flare entries use the developer library’s listing dates, which may differ from dates in filenames. Unknown dates remain unstated.</p>
              <p><strong className="text-ink">Read from the original source.</strong> Available documents open at their publisher or research repository. We do not claim authorship of third-party papers. The historical Coreum record is retained with its moved download clearly marked.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-3"><Link href="/editorial" className="inline-flex min-h-11 items-center font-semibold text-cobalt hover:underline">Editorial standards</Link><Link href="/learn/trusted-sources" className="inline-flex min-h-11 items-center font-semibold text-cobalt hover:underline">Trusted sources</Link><Link href="/contact" className="inline-flex min-h-11 items-center font-semibold text-cobalt hover:underline">Suggest a paper or correction</Link></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="border-t border-hairline bg-paper-muted">
          <div className="site-container grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div><h2 id="faq-heading" className="font-display text-3xl leading-tight text-ink">Questions about XRP whitepapers</h2><p className="mt-4 text-sm leading-6 text-secondary">A few distinctions that make the reading easier.</p></div>
            <div className="divide-y divide-hairline border-t border-hairline">
              {WHITEPAPER_FAQS.map((faq) => <article key={faq.question} className="py-6"><h3 className="font-sans text-base font-semibold leading-7 text-ink">{faq.question}</h3><p className="mt-3 max-w-[72ch] text-sm leading-7 text-secondary">{faq.answer}</p><a href={faq.source} className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm text-cobalt hover:underline" data-source-link="true">{faq.sourceLabel}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a></article>)}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
