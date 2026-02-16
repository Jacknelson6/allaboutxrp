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
  title: "XRP Institutional Custody: Enterprise-Grade Storage | AllAboutXRP",
  description: "XRP institutional custody solutions. Enterprise storage, security frameworks, regulatory requirements, and leading providers.",
  keywords: ["XRP institutional custody","XRP custody solutions","XRP enterprise storage","institutional XRP"],
  openGraph: {
    title: "XRP Institutional Custody: Enterprise-Grade Storage",
    description: "XRP institutional custody solutions. Enterprise storage, security frameworks, regulatory requirements, and leading providers.",
    url: "https://allaboutxrp.com/learn/xrp-institutional-custody",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP Institutional Custody: Enterprise-Grade Storage", description: "XRP institutional custody solutions. Enterprise storage, security frameworks, regulatory requirements, and leading providers." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-institutional-custody" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Institutional Custody: Enterprise-Grade Storage", description: "XRP institutional custody solutions. Enterprise storage, security frameworks, regulatory requirements, and leading providers.", url: "https://allaboutxrp.com/learn/xrp-institutional-custody", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Institutional Custody" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-institutional-custody" }),
  buildFAQSchema([
    { question: "What is institutional custody?", answer: "Enterprise-grade storage for digital assets with insurance, compliance, multi-party security, and regulatory approval." },
    { question: "Does Ripple offer custody?", answer: "Yes. Ripple Custody (formerly Metaco) provides enterprise custody used by banks including HSBC." },
    { question: "Why can't institutions use normal wallets?", answer: "Regulatory requirements, fiduciary duty, insurance needs, and operational security standards." },
    { question: "Is custody needed for XRP ETF?", answer: "Yes. Any XRP ETF requires qualified custody from regulated providers." },
    { question: "Which provider is best for XRP?", answer: "Ripple Custody for native XRPL integration. BitGo and Fireblocks for multi-asset portfolios." },
  ]),
];

const faqItems = [
  { q: "What is institutional custody?", a: "Enterprise-grade storage for digital assets with insurance, compliance, multi-party security, and regulatory approval." },
  { q: "Does Ripple offer custody?", a: "Yes. Ripple Custody (formerly Metaco) provides enterprise custody used by banks including HSBC." },
  { q: "Why can't institutions use normal wallets?", a: "Regulatory requirements, fiduciary duty, insurance needs, and operational security standards." },
  { q: "Is custody needed for XRP ETF?", a: "Yes. Any XRP ETF requires qualified custody from regulated providers." },
  { q: "Which provider is best for XRP?", a: "Ripple Custody for native XRPL integration. BitGo and Fireblocks for multi-asset portfolios." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Institutional Custody" titleAccent="Enterprise-Grade Storage" subtitle="How institutions store and manage large XRP holdings. Custody solutions, security, and regulatory requirements." breadcrumbLabel="XRP Institutional Custody">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Institutional custody</strong> is the foundation for enterprise XRP adoption. Banks, funds, and corporations need enterprise-grade storage with <strong className="text-text-primary">insurance, compliance, and multi-party security</strong>. Providers like Ripple Custody (from <Link href="/learn/acquisitions" className="text-xrp-accent underline decoration-xrp-accent/30">Metaco acquisition</Link>), BitGo, and Fireblocks offer institutional-grade XRP custody.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Key Providers", value: "Ripple Custody, BitGo, Fireblocks" },
          { label: "Insurance", value: "$100M+ coverage available" },
          { label: "Regulation", value: "Varies by jurisdiction" },
          { label: "Security", value: "HSMs, multi-sig, MPC" },
          { label: "Demand", value: "Growing with ETF interest" },
          { label: "Standards", value: "SOC 2, ISO 27001" },
        ]} />

        <SectionNav items={[
          { id: "why", label: "Why Custody" },
          { id: "providers", label: "Providers" },
          { id: "security", label: "Security" },
          { id: "regulation", label: "Regulation" },
          { id: "trends", label: "Trends" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Top" value="Ripple Custody" delay={0.00} />
          <StatPill label="Insurance" value="$100M+" delay={0.06} />
          <StatPill label="Security" value="MPC/HSM" delay={0.12} />
          <StatPill label="Demand" value="Growing" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="why">
            <h2 className="text-2xl font-bold text-text-primary">Why Institutional Custody Matters</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Institutions can&apos;t store crypto on a Ledger in a drawer. They need <strong className="text-text-primary">regulated, insured, audited custody</strong> that meets fiduciary requirements. This is the gateway to institutional XRP adoption and a prerequisite for <Link href="/learn/xrp-etf" className="text-xrp-accent underline decoration-xrp-accent/30">ETF products</Link>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Regulatory Requirement",desc:"Banks and funds legally required to use qualified custodians for digital assets."},
              {title:"Insurance Coverage",desc:"Custodians provide $100M+ insurance against theft, hacks, and internal fraud."},
              {title:"Fiduciary Duty",desc:"Fund managers must demonstrate proper asset safekeeping to clients and regulators."},
              {title:"Operational Security",desc:"Enterprise-grade key management, access controls, and audit trails."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="providers" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Leading XRP Custody Providers</h2>
            <div className="mt-6"><DataTable headers={["Provider","Type","XRP Support","Key Feature"]} rows={[
              ["Ripple Custody","Enterprise","Native","Built for XRPL"],
              ["BitGo","Multi-asset","Full","$250M insurance"],
              ["Fireblocks","MPC-based","Full","DeFi integration"],
              ["Coinbase Custody","Exchange","Full","Institutional grade"],
              ["Anchorage Digital","Bank","Full","Federally chartered"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="security" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Security Architecture</h2>
            <div className="mt-6"><IconList items={[
              {title:"Multi-Party Computation (MPC)",desc:"Key shares distributed across multiple parties. No single point of failure."},
              {title:"Hardware Security Modules",desc:"Tamper-proof hardware for key storage. FIPS 140-2 Level 3 certified."},
              {title:"Multi-signature",desc:"Multiple approvals required for transactions. Governance controls."},
              {title:"SOC 2 / ISO 27001",desc:"Industry-standard security audits and certifications."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="regulation" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Regulatory Landscape</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Custody regulation varies by jurisdiction. <Link href="/learn/xrp-european-regulation" className="text-xrp-accent underline decoration-xrp-accent/30">MiCA in Europe</Link> requires qualified custody. US SEC has proposed custody rules for investment advisers.</p>
            <div className="mt-6"><HighlightBox title="Ripple Custody (Metaco)" variant="accent"><p>Ripple acquired Metaco (now Ripple Custody) for $250M in 2023. This gives Ripple an enterprise-grade custody solution used by banks including HSBC and BBVA — direct integration with the XRPL ecosystem.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="trends" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Trends</h2>
            <div className="mt-6"><IconList items={[
              {title:"ETF-driven demand",desc:"XRP ETF applications require qualified custodians. Driving custody infrastructure."},
              {title:"Bank adoption",desc:"Traditional banks adding crypto custody. Ripple Custody targeting this market."},
              {title:"Tokenization",desc:"Real-world asset tokenization on XRPL needs institutional custody for underlying assets."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Institutional adoption" },
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Complete institution list" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Why XRP changes everything" },
              { href: "/learn/partnerships", label: "Ripple Partnerships", desc: "Banks & institutions" },
              { href: "/learn/xrp-iso-20022", label: "XRP & ISO 20022", desc: "Global payments standard" },
              { href: "/learn/ripplenet", label: "RippleNet", desc: "Global payment network" },
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "XRP bridge currency" },
              { href: "/learn/ripple-software-stack", label: "Ripple Software Stack", desc: "Complete product suite" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Institutional XRP is Growing" description="Custody solutions unlock enterprise adoption and ETF products." primaryHref="/learn/xrp-etf" primaryLabel="XRP ETF →" secondaryHref="/learn/partnerships" secondaryLabel="Partnerships" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
