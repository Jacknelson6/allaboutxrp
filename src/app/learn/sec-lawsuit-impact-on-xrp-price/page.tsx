import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How the SEC Lawsuit Affected XRP's Price: Full Analysis | AllAboutXRP",
  description: "The SEC lawsuit cut XRP's price by 70% in weeks. Full analysis of the price impact from filing to settlement, and the recovery.",
  keywords: ["SEC lawsuit XRP price","XRP price SEC","how SEC case affected XRP","XRP delisting price impact"],
  openGraph: { title: "How the SEC Lawsuit Affected XRP's Price: Full Analysis", description: "The SEC lawsuit cut XRP's price by 70% in weeks. Full analysis of the price impact from filing to settlement, and the recovery.", url: "https://allaboutxrp.com/learn/sec-lawsuit-impact-on-xrp-price", type: "article" },
  twitter: { card: "summary_large_image", title: "How the SEC Lawsuit Affected XRP's Price: Full Analysis", description: "The SEC lawsuit cut XRP's price by 70% in weeks. Full analysis of the price impact from filing to settlement, and the recovery." },
  alternates: { canonical: "https://allaboutxrp.com/learn/sec-lawsuit-impact-on-xrp-price" },
};

const schemas = [
  buildArticleSchema({ headline: "How the SEC Lawsuit Affected XRP's Price: Full Analysis", description: "The SEC lawsuit cut XRP's price by 70% in weeks. Full analysis of the price impact from filing to settlement, and the recovery.", url: "https://allaboutxrp.com/learn/sec-lawsuit-impact-on-xrp-price", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "SEC Lawsuit Impact" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/sec-lawsuit-impact-on-xrp-price" }),
  buildFAQSchema([
    { question: "How much did XRP drop from the SEC lawsuit?", answer: "About 72% — from $0.60 to $0.17 within a few weeks of the filing in December 2020." },
    { question: "Why did exchanges delist XRP?", answer: "Fear of regulatory liability. Coinbase, Kraken, and others suspended US XRP trading to avoid potential SEC enforcement." },
    { question: "What happened after the ruling?", answer: "Judge Torres ruled secondary XRP sales are not securities. XRP rallied 75% and exchanges re-listed." },
    { question: "How much did the lawsuit suppress XRP?", answer: "During the biggest crypto bull run in history (2021), XRP only reached $1.96 vs $3.84 ATH. Without the lawsuit, gains would likely have been much larger." },
    { question: "Is the overhang gone now?", answer: "Largely yes. The settlement removed uncertainty, exchanges re-listed, and ETF filings are proceeding." },
  ]),
];

const faqItems = [
  { q: "How much did XRP drop from the SEC lawsuit?", a: "About 72% — from $0.60 to $0.17 within a few weeks of the filing in December 2020." },
  { q: "Why did exchanges delist XRP?", a: "Fear of regulatory liability. Coinbase, Kraken, and others suspended US XRP trading to avoid potential SEC enforcement." },
  { q: "What happened after the ruling?", a: "Judge Torres ruled secondary XRP sales are not securities. XRP rallied 75% and exchanges re-listed." },
  { q: "How much did the lawsuit suppress XRP?", a: "During the biggest crypto bull run in history (2021), XRP only reached $1.96 vs $3.84 ATH. Without the lawsuit, gains would likely have been much larger." },
  { q: "Is the overhang gone now?", a: "Largely yes. The settlement removed uncertainty, exchanges re-listed, and ETF filings are proceeding." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="How the SEC Lawsuit Affected XRP's Price" titleAccent="Full Analysis" subtitle="The SEC lawsuit cut XRP's price by 70% in weeks. Full analysis from filing to settlement and recovery." breadcrumbLabel="SEC Lawsuit Impact">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>The SEC lawsuit filed December 22, 2020 caused XRP to drop from $0.60 to $0.17 (-72%) within weeks as exchanges delisted. The July 2023 partial ruling sparked a 75% rally. The final settlement removed the overhang and enabled ETF filings.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Filing Date", value: "Dec 22, 2020" },
          { label: "Price Drop", value: "-72%" },
          { label: "Delistings", value: "Major US exchanges" },
          { label: "Ruling", value: "July 2023" },
          { label: "Ruling Rally", value: "+75%" },
          { label: "Settlement", value: "2024" },
        ]} />

        <SectionNav items={[
          { id: "timeline", label: "Timeline" },
          { id: "impact", label: "Price Impact" },
          { id: "delistings", label: "Delistings" },
          { id: "ruling", label: "The Ruling" },
          { id: "recovery", label: "Recovery" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Drop" value="-72%" delay={0.00} />
          <StatPill label="Duration" value="3+ years" delay={0.06} />
          <StatPill label="Ruling" value="July 2023" delay={0.12} />
          <StatPill label="Recovery" value="Ongoing" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="timeline">
            <h2 className="text-2xl font-bold text-text-primary">Lawsuit Timeline</h2>
            <div className="mt-6"><DataTable headers={["Date","Event","Price Impact"]} rows={[["Dec 22, 2020","SEC files lawsuit","Drop begins"],["Jan 2021","US exchange delistings","-72% from pre-suit"],["Apr 2021","Bull market lifts all","Rally to $1.96"],["July 13, 2023","Torres ruling","Instant +75%"],["2024","Settlement reached","Sustained recovery"]]} highlightCol={2} /></div>
          </RevealSection>

          <RevealSection id="impact" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Price Impact</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRP went from $0.60 to $0.17 in weeks — a <strong className="text-text-primary">72% crash</strong>. But the deeper impact was suppression: XRP missed most of the 2021 bull run while other alts hit new highs.</p>
            <div className="mt-6"><HighlightBox title="Opportunity Cost" variant="accent"><p>Solana did 100x in 2021. Most major alts hit new ATHs. XRP reached only 51% of its 2018 ATH — the lawsuit was the difference.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="delistings" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Exchange Delistings</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Coinbase, Kraken, Gemini, and others suspended XRP trading for US customers. This removed liquidity, reduced access, and signaled fear — amplifying the crash.</p>
          </RevealSection>

          <RevealSection id="ruling" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Torres Ruling (July 2023)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Judge Torres ruled that XRP sales on exchanges to retail buyers are <strong className="text-text-primary">not securities transactions</strong>. XRP rallied 75% instantly. Exchanges began re-listing.</p>
          </RevealSection>

          <RevealSection id="recovery" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Recovery & Beyond</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The <Link href="/learn/xrp-sec-settlement" className="text-xrp-accent underline decoration-xrp-accent/30">final settlement</Link> removed remaining uncertainty. ETF filings followed. XRP is now positioned for potential institutional adoption free of regulatory overhang. See <Link href="/learn/xrp-etf-approval-odds" className="text-xrp-accent underline decoration-xrp-accent/30">ETF odds</Link>.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-crash-history", label: "Crash History", desc: "All crashes" },
              { href: "/learn/xrp-sec-settlement", label: "SEC Settlement", desc: "Final outcome" },
              { href: "/learn/xrp-all-time-high", label: "ATH", desc: "Price records" },
              { href: "/learn/xrp-etf-approval-odds", label: "ETF Odds", desc: "Post-settlement" },
              { href: "/learn/xrp-market-cycles", label: "Cycles", desc: "Market patterns" },
              { href: "/learn/ripple-founding-story", label: "Ripple Story", desc: "Company history" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Understand the Impact" description="The lawsuit shaped XRP's trajectory for years." primaryHref="/learn/xrp-sec-settlement" primaryLabel="SEC Settlement →" secondaryHref="/learn/xrp-etf-approval-odds" secondaryLabel="ETF Odds" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
