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
  robots: { index: false, follow: true },
  title: "XRP ETF Filings Tracker: Every Application (2026) | AllAboutXRP",
  description: "Track every XRP ETF filing. Grayscale, 21Shares, and more — status, deadlines, and what each filing means.",
  keywords: ["XRP ETF filings","XRP ETF applications","who filed XRP ETF","XRP ETF tracker"],
  openGraph: { title: "XRP ETF Filings Tracker: Every Application (2026)", description: "Track every XRP ETF filing. Grayscale, 21Shares, and more — status, deadlines, and what each filing means.", url: "https://allaboutxrp.com/learn/xrp-etf-filings", type: "article" },
  twitter: { card: "summary_large_image", title: "XRP ETF Filings Tracker: Every Application (2026)", description: "Track every XRP ETF filing. Grayscale, 21Shares, and more — status, deadlines, and what each filing means." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-etf-filings" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP ETF Filings Tracker: Every Application (2026)", description: "Track every XRP ETF filing. Grayscale, 21Shares, and more — status, deadlines, and what each filing means.", url: "https://allaboutxrp.com/learn/xrp-etf-filings", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "ETF Filings" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-etf-filings" }),
  buildFAQSchema([
    { question: "How many?", answer: "5+ as of Feb 2026." },
    { question: "First approved?", answer: "Grayscale or 21Shares (furthest along)." },
    { question: "When?", answer: "Q2-Q3 2026. 240 days max." },
    { question: "Different from BTC?", answer: "Same process but benefits from precedents." },
    { question: "All at once?", answer: "Possibly. SEC did for BTC ETFs." },
  ]),
];

const faqItems = [
  { q: "How many?", a: "5+ as of Feb 2026." },
  { q: "First approved?", a: "Grayscale or 21Shares (furthest along)." },
  { q: "When?", a: "Q2-Q3 2026. 240 days max." },
  { q: "Different from BTC?", a: "Same process but benefits from precedents." },
  { q: "All at once?", a: "Possibly. SEC did for BTC ETFs." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP ETF Filings Tracker" titleAccent="Every Application (2026)" subtitle="Track every XRP ETF filing. Grayscale, 21Shares, and more — status, deadlines, and what each filing means." breadcrumbLabel="ETF Filings">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>5+ active filings: Grayscale (Trust→ETF), 21Shares, Bitwise, Franklin Templeton, Canary Capital. Key decisions Q2-Q3 2026.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Total", value: "5+" },
          { label: "Lead", value: "Grayscale" },
          { label: "Stage", value: "Various" },
          { label: "SEC Max", value: "240 days" },
          { label: "Updated", value: "Feb 2026" },
          { label: "Key", value: "Q2-Q3 2026" },
        ]} />

        <SectionNav items={[
          { id: "tracker", label: "Tracker" },
          { id: "details", label: "Details" },
          { id: "process", label: "Process" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Filed" value="5+" delay={0.00} />
          <StatPill label="Stage" value="Review" delay={0.06} />
          <StatPill label="Deadline" value="Q2-Q3" delay={0.12} />
          <StatPill label="Status" value="Active" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="tracker">
            <h2 className="text-2xl font-bold text-text-primary">Tracker</h2>
            <div className="mt-6"><DataTable headers={["Filer","Type","Status","Date"]} rows={[["Grayscale","Trust→ETF","Under Review","Q2 2026"],["21Shares","Spot","S-1 Amended","Q2 2026"],["Bitwise","Spot","Under Review","Q3 2026"],["Franklin T.","Spot","S-1 Filed","Q3 2026"],["Canary","Spot","S-1 Filed","Q3 2026"]]} highlightCol={2} /></div>
          </RevealSection>
          <RevealSection id="details" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Filer Details</h2>
            <div className="mt-6"><IconList items={[{title:"Grayscale",desc:"Trust conversion. Proven path (GBTC). Largest AUM."},{title:"21Shares",desc:"Experienced crypto ETF issuer."},{title:"Bitwise",desc:"Strong institutional distribution."},{title:"Franklin Templeton",desc:"$1.4T AUM. TradFi legitimacy."}]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="process" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Process</h2>
            <div className="mt-6"><IconList items={[{title:"S-1",desc:"Registration statement."},{title:"Comments",desc:"SEC feedback + amendments."},{title:"19b-4",desc:"240-day clock."},{title:"Public",desc:"Comment period."},{title:"Decision",desc:"Approve/deny."}]} variant="check" /></div>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/xrp-etf-approval-odds" className="text-xrp-accent underline decoration-xrp-accent/30">Odds</Link> | <Link href="/learn/xrp-etf-price-impact" className="text-xrp-accent underline decoration-xrp-accent/30">Price impact</Link></p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-etf-approval-odds", label: "Odds", desc: "Analysis" },
              { href: "/learn/xrp-etf-price-impact", label: "Impact", desc: "Price" },
              { href: "/learn/xrp-sec-settlement", label: "Settlement", desc: "Legal" },
              { href: "/learn/xrp-in-retirement-accounts", label: "IRAs", desc: "Access" },
              { href: "/learn/xrp-regulatory-clarity-impact", label: "Clarity", desc: "Adoption" },
              { href: "/learn/xrp-market-cycles", label: "Cycles", desc: "Timing" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Track Filings" description="Stay updated." primaryHref="/learn/xrp-etf-approval-odds" primaryLabel="Odds →" secondaryHref="/learn/xrp-etf-price-impact" secondaryLabel="Impact" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
