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
  title: "XRP Market Cycles: When Does XRP Pump? | AllAboutXRP",
  description: "Understanding XRP's market cycles. Historical patterns, Bitcoin correlation, lagging altcoin behavior, and timing your entries.",
  keywords: ["XRP market cycles","when does XRP pump","XRP cycle analysis","XRP bull bear cycle"],
  openGraph: { title: "XRP Market Cycles: When Does XRP Pump?", description: "Understanding XRP's market cycles. Historical patterns, Bitcoin correlation, lagging altcoin behavior, and timing your entries.", url: "https://allaboutxrp.com/learn/xrp-market-cycles", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP Market Cycles: When Does XRP Pump?", description: "Understanding XRP's market cycles. Historical patterns, Bitcoin correlation, lagging altcoin behavior, and timing your entries." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-market-cycles" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Market Cycles: When Does XRP Pump?", description: "Understanding XRP's market cycles. Historical patterns, Bitcoin correlation, lagging altcoin behavior, and timing your entries.", url: "https://allaboutxrp.com/learn/xrp-market-cycles", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Market Cycles" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-market-cycles" }),
  buildFAQSchema([
    { question: "When does XRP pump?", answer: "During altseason, 1-3 months after BTC breakout." },
    { question: "Cycle length?", answer: "~4 years. Bull: 12-18mo. XRP's move: 1-3mo." },
    { question: "Why lag BTC?", answer: "Institutional money enters BTC first. Rotates to alts later." },
    { question: "Will it repeat?", answer: "Likely similar but not exact. New factors like ETFs." },
    { question: "Best buy time?", answer: "Accumulation phase (post-crash, max fear). DCA." },
  ]),
];

const faqItems = [
  { q: "When does XRP pump?", a: "During altseason, 1-3 months after BTC breakout." },
  { q: "Cycle length?", a: "~4 years. Bull: 12-18mo. XRP's move: 1-3mo." },
  { q: "Why lag BTC?", a: "Institutional money enters BTC first. Rotates to alts later." },
  { q: "Will it repeat?", a: "Likely similar but not exact. New factors like ETFs." },
  { q: "Best buy time?", a: "Accumulation phase (post-crash, max fear). DCA." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Market Cycles" titleAccent="When Does XRP Pump?" subtitle="Understanding XRP's market cycles. Historical patterns, Bitcoin correlation, lagging altcoin behavior, and timing your entries." breadcrumbLabel="Market Cycles">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>XRP lags BTC early, then explodes in altseason. 2017: 60,000%+ gain. Cycles ~4 years tied to BTC halvings. The lag is frustrating but precedes the biggest moves. No cycle repeats exactly.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Length", value: "~4 years" },
          { label: "BTC", value: "High, lagging" },
          { label: "Altseason", value: "Outperforms" },
          { label: "2017", value: "$3.84" },
          { label: "2021", value: "$1.96" },
          { label: "Driver", value: "BTC halving" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "phases", label: "Phases" },
          { id: "history", label: "History" },
          { id: "btc", label: "BTC Link" },
          { id: "timing", label: "Timing" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Cycles" value="3" delay={0.00} />
          <StatPill label="Bull" value="12-18mo" delay={0.06} />
          <StatPill label="Max" value="60,000%+" delay={0.12} />
          <StatPill label="Drop" value="-95%" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Cycles</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRP <strong className="text-text-primary">lags BTC</strong> early, then delivers <strong className="text-text-primary">explosive late-cycle gains</strong>.</p>
            <div className="mt-6"><HighlightBox title="Key" variant="accent"><p>BTC peaked Dec 2017 — XRP peaked Jan 2018 with 60,000%+ gain from low.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="phases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Four Phases</h2>
            <div className="mt-6"><IconList items={[{title:"1. Accumulation",desc:"Post-crash. Max fear. 12-18mo."},{title:"2. Markup",desc:"BTC leads. XRP lags. 6-12mo."},{title:"3. Altseason",desc:"XRP explodes. Weeks."},{title:"4. Distribution",desc:"Euphoria → crash. -80-95%."}]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="history" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">History</h2>
            <div className="mt-6"><DataTable headers={["Cycle","Low","High","Gain"]} rows={[["2013-14","$0.003","$0.06","1,900%"],["2017-18","$0.006","$3.84","63,900%"],["2020-21","$0.11","$1.96","1,680%"]]} highlightCol={3} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">2020-21 suppressed by <Link href="/learn/sec-lawsuit-impact-on-xrp-price" className="text-xrp-accent underline decoration-xrp-accent/30">SEC lawsuit</Link>.</p>
          </RevealSection>
          <RevealSection id="btc" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">BTC Correlation</h2>
            <div className="mt-6"><HighlightBox title="Signal" variant="accent"><p>Watch <Link href="/learn/best-xrp-trading-pairs" className="text-xrp-accent underline decoration-xrp-accent/30">XRP/BTC pair</Link>. Rising = altseason starting.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="timing" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Timing</h2>
            <div className="mt-6"><IconList items={[{title:"DCA in Accumulation",desc:"Max pain = max opportunity."},{title:"Add During Lag",desc:"Frustrating but setup for gains."},{title:"Profit in Euphoria",desc:"When everyone buys — sell."},{title:"Scale In/Out",desc:"Never all-in or all-out."}]} variant="check" /></div>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/xrp-sell-or-hold" className="text-xrp-accent underline decoration-xrp-accent/30">Sell or hold?</Link> | <Link href="/learn/xrp-crash-history" className="text-xrp-accent underline decoration-xrp-accent/30">Crash history</Link></p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-all-time-high", label: "ATH", desc: "Records" },
              { href: "/learn/xrp-crash-history", label: "Crashes", desc: "Every crash" },
              { href: "/learn/xrp-sell-or-hold", label: "Sell/Hold", desc: "Framework" },
              { href: "/learn/sec-lawsuit-impact-on-xrp-price", label: "SEC", desc: "Impact" },
              { href: "/learn/xrp-technical-analysis-guide", label: "TA", desc: "Charts" },
              { href: "/learn/xrp-on-chain-analysis", label: "On-Chain", desc: "Data" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Understand the Cycle" description="History guides strategy." primaryHref="/learn/xrp-sell-or-hold" primaryLabel="Sell or Hold? →" secondaryHref="/learn/xrp-all-time-high" secondaryLabel="ATH" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
