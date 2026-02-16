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
  title: "XRP in the Middle East: Gulf Region Adoption | AllAboutXRP",
  description: "XRP adoption in the Middle East. UAE, Saudi Arabia, Gulf partnerships with Ripple, and institutional interest.",
  keywords: ["XRP Middle East","XRP UAE","XRP Dubai","Ripple Middle East","XRP Saudi Arabia"],
  openGraph: {
    title: "XRP in the Middle East: Gulf Region Adoption",
    description: "XRP adoption in the Middle East. UAE, Saudi Arabia, Gulf partnerships with Ripple, and institutional interest.",
    url: "https://allaboutxrp.com/learn/xrp-middle-east-adoption",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP in the Middle East: Gulf Region Adoption", description: "XRP adoption in the Middle East. UAE, Saudi Arabia, Gulf partnerships with Ripple, and institutional interest." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-middle-east-adoption" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP in the Middle East: Gulf Region Adoption", description: "XRP adoption in the Middle East. UAE, Saudi Arabia, Gulf partnerships with Ripple, and institutional interest.", url: "https://allaboutxrp.com/learn/xrp-middle-east-adoption", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP in the Middle East" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-middle-east-adoption" }),
  buildFAQSchema([
    { question: "Is XRP legal in UAE?", answer: "Yes. VARA and ADGM provide comprehensive regulation. XRP legally traded and used." },
    { question: "Ripple partnerships?", answer: "Yes — multiple banks and payment providers across the Gulf. Regional office in Dubai." },
    { question: "Why Middle East matters?", answer: "Massive remittances, progressive regulation, government fintech support, trade finance needs." },
    { question: "Saudi Arabia using XRP?", answer: "SAMA has piloted Ripple tech. Full ODL next step as regulation evolves." },
    { question: "How does XRP help?", answer: "Near-instant settlement at 60-80% lower cost than traditional remittances." },
  ]),
];

const faqItems = [
  { q: "Is XRP legal in UAE?", a: "Yes. VARA and ADGM provide comprehensive regulation. XRP legally traded and used." },
  { q: "Ripple partnerships?", a: "Yes — multiple banks and payment providers across the Gulf. Regional office in Dubai." },
  { q: "Why Middle East matters?", a: "Massive remittances, progressive regulation, government fintech support, trade finance needs." },
  { q: "Saudi Arabia using XRP?", a: "SAMA has piloted Ripple tech. Full ODL next step as regulation evolves." },
  { q: "How does XRP help?", a: "Near-instant settlement at 60-80% lower cost than traditional remittances." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP in the Middle East" titleAccent="Gulf Region Adoption" subtitle="XRP and Ripple are expanding across the UAE, Saudi Arabia, and the Gulf through partnerships and regulatory clarity." breadcrumbLabel="XRP in the Middle East">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>The Middle East is a <strong className="text-text-primary">major hub for XRP adoption</strong>. UAE and Saudi Arabia have progressive crypto regulation, massive remittance corridors, and growing institutional interest. Ripple has <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">partnerships</Link> with regional banks. Dubai is positioning as a global crypto capital.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Key Market", value: "UAE / Dubai" },
          { label: "Regulation", value: "VARA, ADGM" },
          { label: "Use Case", value: "Remittances & trade" },
          { label: "CBDC", value: "Digital Dirham" },
          { label: "Growth", value: "Rapidly expanding" },
          { label: "Partners", value: "Multiple banks" },
        ]} />

        <SectionNav items={[
          { id: "opportunity", label: "Opportunity" },
          { id: "uae", label: "UAE" },
          { id: "saudi", label: "Saudi Arabia" },
          { id: "corridors", label: "Corridors" },
          { id: "future", label: "Future" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Hub" value="Dubai" delay={0.00} />
          <StatPill label="Regulation" value="Progressive" delay={0.06} />
          <StatPill label="Growth" value="Rapid" delay={0.12} />
          <StatPill label="Focus" value="Payments" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="opportunity">
            <h2 className="text-2xl font-bold text-text-primary">The Middle East Opportunity</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The Middle East handles <strong className="text-text-primary">$100B+ in annual remittances</strong> with heavy fintech investment. Progressive regulation and massive expatriate workforce create ideal conditions for <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">XRP-powered payments</Link>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"$100B+ Remittances",desc:"Millions of expat workers sending money home. Traditional methods slow and expensive."},
              {title:"Progressive Regulation",desc:"VARA (Dubai), ADGM (Abu Dhabi), CBB (Bahrain) offer clear frameworks."},
              {title:"Government Support",desc:"Gulf states actively court crypto firms. Dubai DMCC hosts hundreds."},
              {title:"Trade Finance",desc:"Oil and commodity trade creates huge demand for efficient settlement."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="uae" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">UAE &amp; Dubai</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Dubai = <strong className="text-text-primary">crypto capital of the Middle East</strong>. Ripple has regional office and <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">multiple partnerships</Link>.</p>
            <div className="mt-6"><IconList items={[
              {title:"VARA regulation",desc:"World's most comprehensive crypto framework from Dubai."},
              {title:"Ripple office",desc:"Middle East operations run from Dubai, serving MENA region."},
              {title:"Banking partners",desc:"UAE and Gulf banks exploring/using RippleNet for payments."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="saudi" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Saudi Arabia</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Vision 2030 includes fintech modernization. SAMA has worked with Ripple on cross-border payment pilots. Massive remittance corridors prime for <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link>.</p>
            <div className="mt-6"><HighlightBox title="SAMA Partnership" variant="accent"><p>Saudi Arabian Monetary Authority partnered with Ripple for instant cross-border payment testing. Saudi Arabia is one of world&apos;s largest remittance senders.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="corridors" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Remittance Corridors</h2>
            <div className="mt-6"><DataTable headers={["Corridor","Annual","Traditional Cost","XRP Savings"]} rows={[
              ["UAE → India","$15B+","3-5%","60-80%"],
              ["Saudi → Pakistan","$8B+","4-6%","60-80%"],
              ["UAE → Philippines","$5B+","3-5%","60-80%"],
              ["Kuwait → Egypt","$3B+","4-7%","60-80%"],
            ]} highlightCol={3} /></div>
          </RevealSection>
          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Future Outlook</h2>
            <div className="mt-6"><IconList items={[
              {title:"CBDC integration",desc:"Gulf CBDCs could integrate with XRPL for cross-border settlement."},
              {title:"Trade finance",desc:"Oil/commodity settlement via XRP could transform infrastructure."},
              {title:"Islamic finance",desc:"XRP's utility-based nature may align with Sharia-compliant principles."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-japan-sbi", label: "XRP in Japan (SBI)", desc: "Japan's XRP champion" },
              { href: "/learn/xrp-africa-remittances", label: "Africa Remittances", desc: "African payment revolution" },
              { href: "/learn/xrp-southeast-asia", label: "Southeast Asia", desc: "ASEAN adoption" },
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Institutional adoption" },
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Complete institution list" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Why XRP changes everything" },
              { href: "/learn/partnerships", label: "Ripple Partnerships", desc: "Banks & institutions" },
              { href: "/learn/xrp-institutional-custody", label: "Institutional Custody", desc: "Enterprise storage" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore Global Adoption" description="The Middle East is one piece of XRP's global story." primaryHref="/learn/partnerships" primaryLabel="Partnerships →" secondaryHref="/learn/cross-border-payments" secondaryLabel="Payments" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
