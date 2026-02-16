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
  title: "Ripple's Founding Story: How XRP Was Created | AllAboutXRP",
  description: "The origin story of Ripple and XRP — from OpenCoin to Ripple Labs. Chris Larsen, Jed McCaleb, David Schwartz, and the early days.",
  keywords: ["Ripple founding story","who created XRP","XRP origin","Ripple history origin","Chris Larsen David Schwartz"],
  openGraph: { title: "Ripple's Founding Story: How XRP Was Created", description: "The origin story of Ripple and XRP — from OpenCoin to Ripple Labs. Chris Larsen, Jed McCaleb, David Schwartz, and the early days.", url: "https://allaboutxrp.com/learn/ripple-founding-story", type: "article" },
  twitter: { card: "summary_large_image", title: "Ripple's Founding Story: How XRP Was Created", description: "The origin story of Ripple and XRP — from OpenCoin to Ripple Labs. Chris Larsen, Jed McCaleb, David Schwartz, and the early days." },
  alternates: { canonical: "https://allaboutxrp.com/learn/ripple-founding-story" },
};

const schemas = [
  buildArticleSchema({ headline: "Ripple's Founding Story: How XRP Was Created", description: "The origin story of Ripple and XRP — from OpenCoin to Ripple Labs. Chris Larsen, Jed McCaleb, David Schwartz, and the early days.", url: "https://allaboutxrp.com/learn/ripple-founding-story", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "Ripple Founding" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/ripple-founding-story" }),
  buildFAQSchema([
    { question: "Who created XRP?", answer: "David Schwartz (CTO), Jed McCaleb, and Arthur Britto created the XRP Ledger and XRP in 2012." },
    { question: "Is Ripple the same as XRP?", answer: "No. Ripple is a private company. XRP is an independent digital asset on the XRP Ledger. Ripple uses XRP but doesn't control it." },
    { question: "Why was XRP created?", answer: "As a faster, more efficient alternative to Bitcoin for payments. XRP settles in 3-5 seconds vs Bitcoin's 10+ minutes." },
    { question: "What happened to Jed McCaleb?", answer: "He left Ripple in 2013 and founded Stellar (XLM). He sold his XRP allocation over several years per agreement." },
    { question: "How was the 100 billion XRP distributed?", answer: "80 billion to Ripple (later locked in escrow), 20 billion to the three founders." },
  ]),
];

const faqItems = [
  { q: "Who created XRP?", a: "David Schwartz (CTO), Jed McCaleb, and Arthur Britto created the XRP Ledger and XRP in 2012." },
  { q: "Is Ripple the same as XRP?", a: "No. Ripple is a private company. XRP is an independent digital asset on the XRP Ledger. Ripple uses XRP but doesn't control it." },
  { q: "Why was XRP created?", a: "As a faster, more efficient alternative to Bitcoin for payments. XRP settles in 3-5 seconds vs Bitcoin's 10+ minutes." },
  { q: "What happened to Jed McCaleb?", a: "He left Ripple in 2013 and founded Stellar (XLM). He sold his XRP allocation over several years per agreement." },
  { q: "How was the 100 billion XRP distributed?", a: "80 billion to Ripple (later locked in escrow), 20 billion to the three founders." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="Ripple's Founding Story" titleAccent="How XRP Was Created" subtitle="The origin story of Ripple and XRP — from OpenCoin to Ripple Labs, and the early days." breadcrumbLabel="Ripple Founding">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>XRP was created in 2012 by David Schwartz, Jed McCaleb, and Arthur Britto. They built a faster alternative to Bitcoin. The company (initially OpenCoin, then Ripple Labs) was co-founded with Chris Larsen. 80 billion XRP was given to Ripple; 20 billion to founders.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Created", value: "2012" },
          { label: "Founders", value: "Schwartz, McCaleb, Britto" },
          { label: "CEO", value: "Chris Larsen (orig)" },
          { label: "Company", value: "OpenCoin → Ripple" },
          { label: "Total Supply", value: "100 billion" },
          { label: "To Ripple", value: "80 billion" },
        ]} />

        <SectionNav items={[
          { id: "origin", label: "Origin" },
          { id: "founders", label: "Founders" },
          { id: "company", label: "OpenCoin to Ripple" },
          { id: "xrp-creation", label: "XRP Creation" },
          { id: "timeline", label: "Timeline" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Year" value="2012" delay={0.00} />
          <StatPill label="Founders" value="3" delay={0.06} />
          <StatPill label="Supply" value="100B" delay={0.12} />
          <StatPill label="Company" value="Ripple Labs" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="origin">
            <h2 className="text-2xl font-bold text-text-primary">The Origin of XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">In 2011, David Schwartz, Jed McCaleb, and Arthur Britto began building an alternative to Bitcoin — faster, more energy-efficient, and designed for payments. By 2012, the <Link href="/learn/what-is-xrp-ledger" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> was live.</p>
          </RevealSection>

          <RevealSection id="founders" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Founders</h2>
            <div className="mt-6"><IconList items={[
              {title:"David Schwartz",desc:"Chief architect. Still CTO of Ripple. 'JoelKatz' online. Cryptography veteran."},
              {title:"Jed McCaleb",desc:"Co-creator. Previously founded Mt. Gox. Left in 2013 to create Stellar."},
              {title:"Arthur Britto",desc:"Co-architect. Low-profile. Helped design XRPL consensus and XRP economics."},
              {title:"Chris Larsen",desc:"Joined as CEO. Serial fintech entrepreneur. Provided business direction."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="company" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">OpenCoin to Ripple</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The company was incorporated as <strong className="text-text-primary">OpenCoin</strong> in 2012, then renamed to <strong className="text-text-primary">Ripple Labs</strong> in 2013 (later just &quot;Ripple&quot;). The focus: using XRP to power cross-border payments.</p>
          </RevealSection>

          <RevealSection id="xrp-creation" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Creation</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">100 billion XRP were created at genesis — all at once. No mining. 80 billion given to the company (now largely in escrow). 20 billion split among the three creators.</p>
            <div className="mt-6"><DataTable headers={["Allocation","Amount","Notes"]} rows={[["Ripple Labs","80 billion","55B locked in monthly escrow"],["David Schwartz","~7 billion","Estimated"],["Jed McCaleb","~9 billion","Sold over time per agreement"],["Arthur Britto","~4 billion","Estimated"]]} highlightCol={1} /></div>
          </RevealSection>

          <RevealSection id="timeline" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Timeline</h2>
            <div className="mt-6"><IconList items={[
              {title:"2011",desc:"Schwartz, McCaleb, Britto begin building the XRP Ledger."},
              {title:"2012",desc:"XRP Ledger launches. OpenCoin incorporated."},
              {title:"2013",desc:"Renamed Ripple Labs. McCaleb departs, founds Stellar."},
              {title:"2015",desc:"Ripple signs first bank partnerships."},
              {title:"2017-18",desc:"XRP reaches $3.84 ATH during crypto mania."},
              {title:"2020",desc:"SEC sues Ripple. Industry-defining legal battle begins."},
              {title:"2023",desc:"Judge Torres rules XRP not a security on exchanges."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-all-time-high", label: "ATH", desc: "Price history" },
              { href: "/learn/sec-lawsuit-impact-on-xrp-price", label: "SEC Impact", desc: "Lawsuit story" },
              { href: "/learn/what-is-xrp-ledger", label: "XRP Ledger", desc: "How it works" },
              { href: "/learn/xrp-crash-history", label: "Crashes", desc: "Price drops" },
              { href: "/learn/xrp-community-explained", label: "Community", desc: "XRP Army" },
              { href: "/learn/xrp-developer-resources", label: "Dev Resources", desc: "Build on XRPL" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Learn XRP's History" description="Understanding the origin helps you understand the mission." primaryHref="/learn/what-is-xrp-ledger" primaryLabel="XRP Ledger →" secondaryHref="/learn/xrp-community-explained" secondaryLabel="XRP Community" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
