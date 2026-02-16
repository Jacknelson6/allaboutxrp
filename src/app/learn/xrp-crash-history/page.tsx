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
  title: "XRP Crash History: Every Major XRP Crash Explained | AllAboutXRP",
  description: "Every major XRP crash explained — 2018 bear market, SEC lawsuit drop, and COVID crash. What caused them and how XRP recovered.",
  keywords: ["XRP crash","XRP crash history","why did XRP crash","XRP price drops","XRP bear market"],
  openGraph: { title: "XRP Crash History: Every Major XRP Crash Explained", description: "Every major XRP crash explained — 2018 bear market, SEC lawsuit drop, and COVID crash. What caused them and how XRP recovered.", url: "https://allaboutxrp.com/learn/xrp-crash-history", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP Crash History: Every Major XRP Crash Explained", description: "Every major XRP crash explained — 2018 bear market, SEC lawsuit drop, and COVID crash. What caused them and how XRP recovered." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-crash-history" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Crash History: Every Major XRP Crash Explained", description: "Every major XRP crash explained — 2018 bear market, SEC lawsuit drop, and COVID crash. What caused them and how XRP recovered.", url: "https://allaboutxrp.com/learn/xrp-crash-history", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Crash History" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-crash-history" }),
  buildFAQSchema([
    { question: "Why does XRP crash so hard?", answer: "XRP is a high-beta asset — it amplifies market moves. In bull markets it pumps harder; in bears it crashes harder. Plus, XRP-specific events (SEC lawsuit) add extra downside." },
    { question: "Has XRP always recovered?", answer: "Yes, eventually. Every major crash was followed by a recovery, though timelines varied from months to years." },
    { question: "Should I sell during a crash?", answer: "Historically, panic selling at the bottom has been the worst strategy. Having a pre-set plan is better than reacting emotionally." },
    { question: "What caused the biggest crash?", answer: "The 2018 bear market combined with the SEC lawsuit in Dec 2020 took XRP from $3.84 ATH to $0.12 (-97%)." },
    { question: "Could XRP crash again?", answer: "Absolutely. Crypto is volatile. Expect 50-80%+ drawdowns during bear markets. Only invest what you can afford to lose." },
  ]),
];

const faqItems = [
  { q: "Why does XRP crash so hard?", a: "XRP is a high-beta asset — it amplifies market moves. In bull markets it pumps harder; in bears it crashes harder. Plus, XRP-specific events (SEC lawsuit) add extra downside." },
  { q: "Has XRP always recovered?", a: "Yes, eventually. Every major crash was followed by a recovery, though timelines varied from months to years." },
  { q: "Should I sell during a crash?", a: "Historically, panic selling at the bottom has been the worst strategy. Having a pre-set plan is better than reacting emotionally." },
  { q: "What caused the biggest crash?", a: "The 2018 bear market combined with the SEC lawsuit in Dec 2020 took XRP from $3.84 ATH to $0.12 (-97%)." },
  { q: "Could XRP crash again?", a: "Absolutely. Crypto is volatile. Expect 50-80%+ drawdowns during bear markets. Only invest what you can afford to lose." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Crash History" titleAccent="Every Major Crash Explained" subtitle="Every major XRP crash — what caused them and how XRP recovered." breadcrumbLabel="Crash History">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>XRP has crashed 80-97% multiple times: 2018 bear market (-95%), COVID crash (-65%), SEC lawsuit (-75%). Each time it recovered. Understanding crash history helps set expectations and avoid panic selling.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Worst Crash", value: "-97% (2020)" },
          { label: "2018 Bear", value: "-95%" },
          { label: "SEC Lawsuit", value: "-75%" },
          { label: "COVID", value: "-65%" },
          { label: "Recoveries", value: "Every time" },
          { label: "Lesson", value: "Don't panic sell" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "2018", label: "2018 Bear" },
          { id: "covid", label: "COVID 2020" },
          { id: "sec", label: "SEC Lawsuit" },
          { id: "lessons", label: "Lessons" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Crashes" value="4 major" delay={0.00} />
          <StatPill label="Worst" value="-97%" delay={0.06} />
          <StatPill label="Recoveries" value="100%" delay={0.12} />
          <StatPill label="Lesson" value="Patience" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">XRP Crash Timeline</h2>
            <div className="mt-6"><DataTable headers={["Crash","Date","Drop","Cause","Recovery"]} rows={[["Bear Market","Jan-Dec 2018","-95%","Market cycle end","2020-21 bull"],["COVID","Mar 2020","-65%","Pandemic panic","2 months"],["SEC Lawsuit","Dec 2020","-75%","Regulatory action","2023 ruling"],["2022 Bear","2022","-70%","Market cycle","2023-24"]]} highlightCol={2} /></div>
          </RevealSection>

          <RevealSection id="2018" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">2018 Bear Market (-95%)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">From $3.84 to $0.25. The entire crypto market collapsed. XRP fell harder than most due to its retail-heavy holder base and speculative premium.</p>
          </RevealSection>

          <RevealSection id="covid" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">COVID Crash (-65%)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">March 2020 pandemic panic. All markets crashed. XRP dropped to $0.12 — its lowest since 2017. Recovered within months as stimulus money flooded markets.</p>
          </RevealSection>

          <RevealSection id="sec" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">SEC Lawsuit Crash (-75%)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">December 2020: SEC sued Ripple. XRP was delisted from major US exchanges. Price crashed from $0.60 to $0.17. See <Link href="/learn/sec-lawsuit-impact-on-xrp-price" className="text-xrp-accent underline decoration-xrp-accent/30">full SEC impact analysis</Link>.</p>
            <div className="mt-6"><HighlightBox title="The Impact" variant="warning"><p>The SEC lawsuit suppressed XRP during the biggest crypto bull run in history. Without it, the 2021 peak could have been much higher than $1.96.</p></HighlightBox></div>
          </RevealSection>

          <RevealSection id="lessons" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Lessons Learned</h2>
            <div className="mt-6"><IconList items={[
              {title:"Crashes Are Normal",desc:"80%+ crashes happen in every cycle. Expect them."},
              {title:"Don't Panic Sell",desc:"Selling at the bottom is historically the worst move."},
              {title:"Have a Plan",desc:"Pre-set buy/sell targets remove emotion."},
              {title:"Only Risk What You Can Lose",desc:"If a 95% crash would ruin you, you have too much in XRP."},
              {title:"Patience Rewards",desc:"Every crash was eventually followed by recovery."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-all-time-high", label: "ATH", desc: "Price records" },
              { href: "/learn/sec-lawsuit-impact-on-xrp-price", label: "SEC Impact", desc: "Lawsuit analysis" },
              { href: "/learn/xrp-market-cycles", label: "Cycles", desc: "Bull/bear patterns" },
              { href: "/learn/xrp-sell-or-hold", label: "Sell or Hold?", desc: "Decision help" },
              { href: "/learn/xrp-technical-analysis-guide", label: "TA Guide", desc: "Chart analysis" },
              { href: "/learn/ripple-founding-story", label: "Ripple Story", desc: "History" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Learn From History" description="Understanding past crashes helps you survive future ones." primaryHref="/learn/xrp-market-cycles" primaryLabel="Market Cycles →" secondaryHref="/learn/xrp-sell-or-hold" secondaryLabel="Sell or Hold?" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
