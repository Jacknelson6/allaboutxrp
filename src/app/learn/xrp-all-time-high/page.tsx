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
  title: "XRP All-Time High: When Was It & Will It Return? | AllAboutXRP",
  description: "XRP's all-time high was $3.84 in January 2018. What caused it, why it crashed, and the path to a new ATH. Complete analysis.",
  keywords: ["XRP all time high","XRP ATH","XRP highest price","when did XRP peak","XRP record price"],
  openGraph: { title: "XRP All-Time High: When Was It & Will It Return?", description: "XRP's all-time high was $3.84 in January 2018. What caused it, why it crashed, and the path to a new ATH. Complete analysis.", url: "https://allaboutxrp.com/learn/xrp-all-time-high", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP All-Time High: When Was It & Will It Return?", description: "XRP's all-time high was $3.84 in January 2018. What caused it, why it crashed, and the path to a new ATH. Complete analysis." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-all-time-high" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP All-Time High: When Was It & Will It Return?", description: "XRP's all-time high was $3.84 in January 2018. What caused it, why it crashed, and the path to a new ATH. Complete analysis.", url: "https://allaboutxrp.com/learn/xrp-all-time-high", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP ATH" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-all-time-high" }),
  buildFAQSchema([
    { question: "What was XRP's all-time high?", answer: "$3.84 on January 4, 2018 (some exchanges recorded slightly higher due to spread differences)." },
    { question: "Why did XRP crash after ATH?", answer: "The entire crypto market crashed in 2018. XRP's retail-driven speculative bubble popped as FOMO reversed to panic selling." },
    { question: "Will XRP reach a new ATH?", answer: "Possible catalysts include ETF approval, institutional adoption, RLUSD growth, and a new crypto bull cycle. No guarantees." },
    { question: "What would XRP need to reach $3.84 again?", answer: "Significant institutional inflows, sustained utility growth, or speculative mania during a bull cycle." },
    { question: "Has XRP ever been higher than $3.84?", answer: "No. That remains the all-time high. The 2021 cycle peak was $1.96, suppressed by the SEC lawsuit." },
  ]),
];

const faqItems = [
  { q: "What was XRP's all-time high?", a: "$3.84 on January 4, 2018 (some exchanges recorded slightly higher due to spread differences)." },
  { q: "Why did XRP crash after ATH?", a: "The entire crypto market crashed in 2018. XRP's retail-driven speculative bubble popped as FOMO reversed to panic selling." },
  { q: "Will XRP reach a new ATH?", a: "Possible catalysts include ETF approval, institutional adoption, RLUSD growth, and a new crypto bull cycle. No guarantees." },
  { q: "What would XRP need to reach $3.84 again?", a: "Significant institutional inflows, sustained utility growth, or speculative mania during a bull cycle." },
  { q: "Has XRP ever been higher than $3.84?", a: "No. That remains the all-time high. The 2021 cycle peak was $1.96, suppressed by the SEC lawsuit." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP All-Time High" titleAccent="When Was It & Will It Return?" subtitle="XRP peaked at $3.84 in January 2018. What caused it, why it crashed, and the path to a new ATH." breadcrumbLabel="XRP ATH">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>XRP hit $3.84 on January 4, 2018 during the crypto mania. The surge was driven by retail FOMO, Coinbase listing rumors, and the broader altseason. It crashed 95% over the next year. A return to ATH requires sustained institutional adoption, ETF approval, or a new speculative cycle.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "ATH Price", value: "$3.84" },
          { label: "Date", value: "Jan 4, 2018" },
          { label: "Gain From Low", value: "60,000%+" },
          { label: "Crash After", value: "-95%" },
          { label: "Recovery?", value: "Not yet" },
          { label: "Key Catalyst", value: "ETF + Adoption" },
        ]} />

        <SectionNav items={[
          { id: "ath", label: "The ATH" },
          { id: "cause", label: "What Caused It" },
          { id: "crash", label: "Why It Crashed" },
          { id: "return", label: "Path to New ATH" },
          { id: "catalysts", label: "Catalysts" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="ATH" value="$3.84" delay={0.00} />
          <StatPill label="Date" value="Jan 2018" delay={0.06} />
          <StatPill label="Drop" value="-95%" delay={0.12} />
          <StatPill label="Recovery" value="Pending" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="ath">
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s All-Time High: $3.84</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">On <strong className="text-text-primary">January 4, 2018</strong>, XRP reached $3.84 — a gain of over 60,000% from its 2017 low of ~$0.006. It briefly made Ripple co-founder Chris Larsen one of the wealthiest people on Earth.</p>
          </RevealSection>

          <RevealSection id="cause" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Caused the ATH</h2>
            <div className="mt-6"><IconList items={[
              {title:"Crypto Mania",desc:"The entire market was in a speculative frenzy. Bitcoin had just hit $20K."},
              {title:"Altseason Rotation",desc:"Money rotated from BTC to alts. XRP was the biggest beneficiary."},
              {title:"Coinbase Rumors",desc:"Persistent rumors of Coinbase listing drove retail buying."},
              {title:"Retail FOMO",desc:"XRP's low unit price ($0.25 → $3) attracted new investors who thought it was 'cheap'."},
              {title:"Partnership Hype",desc:"Ripple bank partnerships were front-page crypto news."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="crash" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why It Crashed</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The 2018 crash was brutal. XRP fell from $3.84 to under $0.25 — a 95% decline. See <Link href="/learn/xrp-crash-history" className="text-xrp-accent underline decoration-xrp-accent/30">crash history</Link> for full details.</p>
            <div className="mt-6"><DataTable headers={["Date","Price","% From ATH"]} rows={[["Jan 2018","$3.84","ATH"],["Feb 2018","$0.90","-77%"],["Dec 2018","$0.25","-93%"],["Mar 2020","$0.12","-97%"]]} highlightCol={2} /></div>
          </RevealSection>

          <RevealSection id="return" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Path to New ATH</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">XRP reaching a new ATH requires fundamentally different catalysts than 2018&apos;s retail speculation.</p>
          </RevealSection>

          <RevealSection id="catalysts" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">2026 Catalysts</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"ETF Approval",desc:"Institutional inflows could drive sustained demand."},
              {title:"RLUSD Adoption",desc:"Stablecoin creating real utility demand for XRP."},
              {title:"Post-SEC Clarity",desc:"Regulatory clarity enabling new exchange listings."},
              {title:"Market Cycle",desc:"Bull cycle + altseason could trigger explosive move."},
            ]} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">ETF analysis: <Link href="/learn/xrp-etf-approval-odds" className="text-xrp-accent underline decoration-xrp-accent/30">approval odds</Link>. Cycle timing: <Link href="/learn/xrp-market-cycles" className="text-xrp-accent underline decoration-xrp-accent/30">market cycles</Link>.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-crash-history", label: "Crash History", desc: "Every major crash" },
              { href: "/learn/xrp-market-cycles", label: "Cycles", desc: "Timing patterns" },
              { href: "/learn/sec-lawsuit-impact-on-xrp-price", label: "SEC Impact", desc: "Lawsuit effect" },
              { href: "/learn/xrp-etf-price-impact", label: "ETF Impact", desc: "Price projection" },
              { href: "/learn/xrp-sell-or-hold", label: "Sell or Hold?", desc: "Decision help" },
              { href: "/learn/ripple-founding-story", label: "Ripple Story", desc: "Origin" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Understand XRP's History" description="Historical context helps you make better decisions." primaryHref="/learn/xrp-crash-history" primaryLabel="Crash History →" secondaryHref="/learn/xrp-market-cycles" secondaryLabel="Market Cycles" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
