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
  title: "XRP Dollar Cost Averaging: DCA Strategy Guide | AllAboutXRP",
  description: "Complete guide to dollar cost averaging XRP. How DCA works, best platforms, schedules, and historical performance.",
  keywords: ["XRP DCA","dollar cost averaging XRP","XRP investment strategy","XRP recurring buy"],
  openGraph: {
    title: "XRP Dollar Cost Averaging: DCA Strategy Guide",
    description: "Complete guide to dollar cost averaging XRP. How DCA works, best platforms, schedules, and historical performance.",
    url: "https://allaboutxrp.com/learn/xrp-dollar-cost-averaging",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP Dollar Cost Averaging: DCA Strategy Guide", description: "Complete guide to dollar cost averaging XRP. How DCA works, best platforms, schedules, and historical performance." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-dollar-cost-averaging" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Dollar Cost Averaging: DCA Strategy Guide", description: "Complete guide to dollar cost averaging XRP. How DCA works, best platforms, schedules, and historical performance.", url: "https://allaboutxrp.com/learn/xrp-dollar-cost-averaging", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Dollar Cost Averaging" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-dollar-cost-averaging" }),
  buildFAQSchema([
    { question: "How much should I DCA?", answer: "Only what you can afford to lose. Common: 5-15% of crypto allocation." },
    { question: "DCA vs lump sum?", answer: "Lump sum wins ~66% historically but DCA significantly reduces risk and stress for volatile assets like XRP." },
    { question: "How often?", answer: "Weekly most popular for crypto. Monthly works too." },
    { question: "DCA in bear market?", answer: "Yes! Bear markets are when DCA shines. Accumulating at lower prices sets up better returns." },
    { question: "When to stop?", answer: "When you've reached target allocation or need to rebalance." },
  ]),
];

const faqItems = [
  { q: "How much should I DCA?", a: "Only what you can afford to lose. Common: 5-15% of crypto allocation." },
  { q: "DCA vs lump sum?", a: "Lump sum wins ~66% historically but DCA significantly reduces risk and stress for volatile assets like XRP." },
  { q: "How often?", a: "Weekly most popular for crypto. Monthly works too." },
  { q: "DCA in bear market?", a: "Yes! Bear markets are when DCA shines. Accumulating at lower prices sets up better returns." },
  { q: "When to stop?", a: "When you've reached target allocation or need to rebalance." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Dollar Cost Averaging" titleAccent="DCA Strategy Guide" subtitle="Reduce risk and remove emotion from XRP investing with dollar cost averaging — the simplest long-term strategy." breadcrumbLabel="XRP Dollar Cost Averaging">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>Dollar cost averaging means investing a <strong className="text-text-primary">fixed dollar amount</strong> into XRP at <strong className="text-text-primary">regular intervals</strong> regardless of price. Buy more when cheap, less when expensive. Over time this lowers your average cost and removes emotional decisions. The simplest strategy for <Link href="/learn/xrp-portfolio-allocation" className="text-xrp-accent underline decoration-xrp-accent/30">long-term investors</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Strategy", value: "Fixed $ at regular intervals" },
          { label: "Best For", value: "Long-term investors" },
          { label: "Emotion", value: "Removes anxiety" },
          { label: "Platforms", value: "Coinbase, Uphold, Binance" },
          { label: "Frequency", value: "Weekly or monthly" },
          { label: "Risk", value: "Lower than lump sum" },
        ]} />

        <SectionNav items={[
          { id: "what-is", label: "What Is DCA" },
          { id: "why-xrp", label: "Why DCA XRP" },
          { id: "setup", label: "How to Set Up" },
          { id: "historical", label: "Historical" },
          { id: "tips", label: "Tips" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Strategy" value="DCA" delay={0.00} />
          <StatPill label="Best" value="Long-term" delay={0.06} />
          <StatPill label="Freq" value="Weekly" delay={0.12} />
          <StatPill label="Emotion" value="Removed" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what-is">
            <h2 className="text-2xl font-bold text-text-primary">What Is Dollar Cost Averaging?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">DCA means investing a <strong className="text-text-primary">fixed amount at regular intervals</strong>. Instead of timing the <Link href="/learn/xrp-price-prediction" className="text-xrp-accent underline decoration-xrp-accent/30">market</Link>, buy consistently — $50 weekly, $200 monthly.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Buy Regularly",desc:"Same dollar amount, same schedule. Weekly or monthly."},
              {title:"Ignore Price",desc:"Don't check before buying. Consistency is the point."},
              {title:"Lower Average",desc:"Naturally buy more when cheap, less when expensive."},
              {title:"Reduce Risk",desc:"Spreads investment over time, avoiding worst-case entries."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="why-xrp" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why DCA Works for XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRP is <Link href="/learn/xrp-price-history" className="text-xrp-accent underline decoration-xrp-accent/30">notoriously volatile</Link> — 20-50% swings in a week. Timing is nearly impossible. DCA eliminates this problem. Sharp dips become buying opportunities, not panic moments.</p>
            <div className="mt-6"><HighlightBox title="Volatility Is Your Friend" variant="accent"><p>With DCA, volatility helps. Dips mean your regular buy gets more XRP. Over a full cycle, DCA investors often beat market timers.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="setup" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Set Up XRP DCA</h2>
            <div className="mt-6"><DataTable headers={["Platform","Recurring Buys","Min","Fees"]} rows={[
              ["Coinbase","Daily/Weekly/Monthly","$1","~1.5%"],
              ["Uphold","Scheduled","$1","Spread"],
              ["Binance","Auto-invest","$1","~0.1%"],
              ["Kraken","Manual","$10","~0.26%"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="historical" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Historical Performance</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">DCA&apos;ing $100/month into XRP from Jan 2020 through Dec 2024 ($6,000 total) would have built a position with an average cost well below bull market peaks — despite the <Link href="/learn/sec-vs-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">SEC lawsuit</Link> and bear markets.</p>
            <div className="mt-6"><HighlightBox title="Key Insight" variant="accent"><p>The worst time to start DCA is never. Even investors who started at XRP&apos;s $3.84 ATH recovered and profited through disciplined DCA in the bear market.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="tips" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">DCA Tips</h2>
            <div className="mt-6"><IconList items={[
              {title:"Automate it",desc:"Set up recurring buys. Remove yourself from the equation."},
              {title:"Use low-fee platforms",desc:"Fees compound over time. Choose the cheapest option."},
              {title:"Don't check daily",desc:"Defeats the purpose. Check quarterly at most."},
              {title:"Value averaging variant",desc:"Invest more when low, less when high. More complex but can improve returns."},
              {title:"Move to cold storage",desc:"Periodically move accumulated XRP to a <Link href='/learn/how-to-store-xrp-safely' className='text-xrp-accent underline decoration-xrp-accent/30'>hardware wallet</Link>."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
            { href: "/learn/xrp-portfolio-allocation", label: "Portfolio Allocation", desc: "How much XRP" },
            { href: "/learn/xrp-accumulation-zones", label: "Accumulation Zones", desc: "Best buy zones" },
            { href: "/learn/xrp-exit-strategy", label: "Exit Strategy", desc: "When to sell" },
            { href: "/learn/xrp-common-mistakes", label: "Common Mistakes", desc: "Avoid errors" },
            { href: "/learn/xrp-price-history", label: "Price History", desc: "Historical prices" },
            { href: "/learn/how-to-buy-xrp", label: "How to Buy", desc: "Purchase guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Start DCA Into XRP" description="Set up automatic buys and remove the stress from crypto investing." primaryHref="/learn/how-to-buy-xrp" primaryLabel="Buy XRP →" secondaryHref="/learn/xrp-portfolio-allocation" secondaryLabel="Portfolio Guide" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
