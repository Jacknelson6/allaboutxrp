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
  title: "XRP ETF Approval Odds: Will It Get Approved? (2026) | AllAboutXRP",
  description: "What are the chances an XRP ETF gets approved in 2026? Filing status, SEC posture, and comparison to Bitcoin/Ethereum ETF timelines.",
  keywords: ["XRP ETF approval odds","will XRP ETF be approved","XRP ETF probability","XRP ETF 2026"],
  openGraph: { title: "XRP ETF Approval Odds: Will It Get Approved? (2026)", description: "What are the chances an XRP ETF gets approved in 2026? Filing status, SEC posture, and comparison to Bitcoin/Ethereum ETF timelines.", url: "https://allaboutxrp.com/learn/xrp-etf-approval-odds", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP ETF Approval Odds: Will It Get Approved? (2026)", description: "What are the chances an XRP ETF gets approved in 2026? Filing status, SEC posture, and comparison to Bitcoin/Ethereum ETF timelines." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-etf-approval-odds" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP ETF Approval Odds: Will It Get Approved? (2026)", description: "What are the chances an XRP ETF gets approved in 2026? Filing status, SEC posture, and comparison to Bitcoin/Ethereum ETF timelines.", url: "https://allaboutxrp.com/learn/xrp-etf-approval-odds", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "ETF Odds" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-etf-approval-odds" }),
  buildFAQSchema([
    { question: "Approved in 2026?", answer: "65-80% probability per Bloomberg." },
    { question: "Who filed?", answer: "Grayscale, 21Shares, Bitwise, Franklin Templeton, Canary." },
    { question: "Price impact?", answer: "BTC rose ~60%. XRP smaller cap = potentially bigger %." },
    { question: "Settlement helps?", answer: "Yes. Key legal hurdle cleared." },
    { question: "What could delay?", answer: "Political, legal, timeline extensions." },
  ]),
];

const faqItems = [
  { q: "Approved in 2026?", a: "65-80% probability per Bloomberg." },
  { q: "Who filed?", a: "Grayscale, 21Shares, Bitwise, Franklin Templeton, Canary." },
  { q: "Price impact?", a: "BTC rose ~60%. XRP smaller cap = potentially bigger %." },
  { q: "Settlement helps?", a: "Yes. Key legal hurdle cleared." },
  { q: "What could delay?", a: "Political, legal, timeline extensions." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP ETF Approval Odds" titleAccent="Will It Get Approved? (2026)" subtitle="What are the chances an XRP ETF gets approved in 2026? Filing status, SEC posture, and comparison to Bitcoin/Ethereum ETF timelines." breadcrumbLabel="ETF Odds">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>Bloomberg: <strong className="text-text-primary">65-80%</strong> probability in 2026. Multiple filings, SEC posture shifted post-settlement, BTC/ETH precedents cleared the path.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Odds", value: "65-80%" },
          { label: "Filings", value: "5+" },
          { label: "SEC", value: "Favorable" },
          { label: "BTC ETF", value: "Jan 2024" },
          { label: "ETH ETF", value: "May 2024" },
          { label: "Risk", value: "Delay" },
        ]} />

        <SectionNav items={[
          { id: "odds", label: "Odds" },
          { id: "filings", label: "Filings" },
          { id: "sec", label: "SEC" },
          { id: "precedent", label: "Precedents" },
          { id: "timeline", label: "Timeline" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Odds" value="65-80%" delay={0.00} />
          <StatPill label="Filed" value="5+" delay={0.06} />
          <StatPill label="Decision" value="2026" delay={0.12} />
          <StatPill label="Impact" value="Massive" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="odds">
            <h2 className="text-2xl font-bold text-text-primary">Approval Probability</h2>
            <div className="mt-6"><DataTable headers={["Factor","Impact","Dir"]} rows={[["BTC/ETH Precedent","Strong +","↑"],["Settlement","Legal cleared","↑"],["Filers","Demand shown","↑"],["New SEC Chair","Pro-crypto","↑"],["Political","Uncertainty","↓"],["Delays","Extensions","↓"]]} highlightCol={2} /></div>
          </RevealSection>
          <RevealSection id="filings" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Filings</h2>
            <div className="mt-6"><IconList items={[{title:"Grayscale",desc:"Trust → ETF. Largest AUM."},{title:"21Shares",desc:"S-1 filed."},{title:"Bitwise",desc:"Strong institutional."},{title:"Franklin Templeton",desc:"Major TradFi."}]} variant="check" /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">Full tracker: <Link href="/learn/xrp-etf-filings" className="text-xrp-accent underline decoration-xrp-accent/30">ETF filings</Link>.</p>
          </RevealSection>
          <RevealSection id="sec" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">SEC Shift</h2>
            <div className="mt-6"><HighlightBox title="Legal Clarity" variant="accent"><p>XRP has <strong>judicial clarity</strong> that secondary sales ≠ securities. Unlike SOL and others.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="precedent" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Precedents</h2>
            <div className="mt-6"><DataTable headers={["ETF","Filed","Approved","Time"]} rows={[["BTC","2013","Jan 2024","~10yr"],["ETH","2023","May 2024","~1yr"],["XRP","2024","Pending","TBD"]]} highlightCol={3} /></div>
            <p className="mt-4 text-text-secondary leading-relaxed">Price impact: <Link href="/learn/xrp-etf-price-impact" className="text-xrp-accent underline decoration-xrp-accent/30">analysis</Link>.</p>
          </RevealSection>
          <RevealSection id="timeline" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Timeline</h2>
            <div className="mt-6"><IconList items={[{title:"S-1 Review",desc:"SEC reviews registration."},{title:"19b-4",desc:"240-day clock starts."},{title:"Comments",desc:"30-60 day public period."},{title:"Decision",desc:"Approve or deny."}]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-etf-filings", label: "Filings", desc: "Tracker" },
              { href: "/learn/xrp-etf-price-impact", label: "Impact", desc: "Price" },
              { href: "/learn/xrp-in-retirement-accounts", label: "IRAs", desc: "Tax-free" },
              { href: "/learn/xrp-sec-settlement", label: "Settlement", desc: "Legal" },
              { href: "/learn/xrp-market-cycles", label: "Cycles", desc: "Timing" },
              { href: "/learn/xrp-sell-or-hold", label: "Sell/Hold", desc: "Decision" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Stay Updated" description="Track ETF progress." primaryHref="/learn/xrp-etf-filings" primaryLabel="Filings →" secondaryHref="/learn/xrp-etf-price-impact" secondaryLabel="Price Impact" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
