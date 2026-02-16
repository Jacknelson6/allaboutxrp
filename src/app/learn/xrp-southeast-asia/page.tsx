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
  title: "XRP in Southeast Asia: ASEAN Adoption | AllAboutXRP",
  description: "XRP in Southeast Asia. Philippines, Thailand, remittance corridors, and Ripple's ASEAN partnerships.",
  keywords: ["XRP Southeast Asia","XRP Philippines","XRP Thailand","XRP ASEAN"],
  openGraph: {
    title: "XRP in Southeast Asia: ASEAN Adoption",
    description: "XRP in Southeast Asia. Philippines, Thailand, remittance corridors, and Ripple's ASEAN partnerships.",
    url: "https://allaboutxrp.com/learn/xrp-southeast-asia",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP in Southeast Asia: ASEAN Adoption", description: "XRP in Southeast Asia. Philippines, Thailand, remittance corridors, and Ripple's ASEAN partnerships." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-southeast-asia" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP in Southeast Asia: ASEAN Adoption", description: "XRP in Southeast Asia. Philippines, Thailand, remittance corridors, and Ripple's ASEAN partnerships.", url: "https://allaboutxrp.com/learn/xrp-southeast-asia", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP in Southeast Asia" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-southeast-asia" }),
  buildFAQSchema([
    { question: "Is XRP popular in SE Asia?", answer: "Yes, especially Philippines and Thailand. High crypto adoption, large remittance markets." },
    { question: "What is Tranglo?", answer: "Major ASEAN payment hub. Ripple owns 40%. Key infrastructure for ODL in the region." },
    { question: "Is ODL active in SE Asia?", answer: "Yes. Japan-Philippines is one of ODL's most established corridors via SBI Remit." },
    { question: "Which countries lead?", answer: "Philippines (remittances), Thailand (regulation), Singapore (financial hub)." },
    { question: "How much can XRP save?", answer: "40-70% vs traditional remittance fees depending on corridor." },
  ]),
];

const faqItems = [
  { q: "Is XRP popular in SE Asia?", a: "Yes, especially Philippines and Thailand. High crypto adoption, large remittance markets." },
  { q: "What is Tranglo?", a: "Major ASEAN payment hub. Ripple owns 40%. Key infrastructure for ODL in the region." },
  { q: "Is ODL active in SE Asia?", a: "Yes. Japan-Philippines is one of ODL's most established corridors via SBI Remit." },
  { q: "Which countries lead?", a: "Philippines (remittances), Thailand (regulation), Singapore (financial hub)." },
  { q: "How much can XRP save?", a: "40-70% vs traditional remittance fees depending on corridor." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP in Southeast Asia" titleAccent="ASEAN Adoption" subtitle="Southeast Asia's massive remittance market and growing crypto adoption make it key for XRP." breadcrumbLabel="XRP in Southeast Asia">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>Southeast Asia is critical for XRP. The Philippines alone gets $38B+ in remittances. Ripple&apos;s <strong className="text-text-primary">Tranglo acquisition</strong> and <Link href="/learn/xrp-japan-sbi" className="text-xrp-accent underline decoration-xrp-accent/30">SBI partnership</Link> position XRP as backbone of Asia-Pacific <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">cross-border payments</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Region", value: "ASEAN (11 countries)" },
          { label: "Remittances", value: "$80B+ annually" },
          { label: "Partner", value: "SBI/Tranglo" },
          { label: "Top Corridor", value: "Japan → Philippines" },
          { label: "Adoption", value: "High and growing" },
          { label: "Population", value: "680 million" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "philippines", label: "Philippines" },
          { id: "thailand", label: "Thailand" },
          { id: "corridors", label: "Corridors" },
          { id: "partners", label: "Partners" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Market" value="$80B+" delay={0.00} />
          <StatPill label="Countries" value="11" delay={0.06} />
          <StatPill label="Growth" value="Rapid" delay={0.12} />
          <StatPill label="Partner" value="Tranglo" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">Why SE Asia Matters</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">680M people, <strong className="text-text-primary">$80B+ in remittances</strong> annually. High smartphone penetration and crypto adoption. Ideal for <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL-powered payments</Link>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Massive Remittances",desc:"Philippines ($38B), Vietnam ($18B), Indonesia ($12B)."},
              {title:"High Crypto Adoption",desc:"PH, VN, TH rank top 20 globally for crypto adoption."},
              {title:"Mobile-First",desc:"High smartphone penetration enables digital payments."},
              {title:"Ripple Infrastructure",desc:"Tranglo, SBI Ripple Asia, and local partners."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="philippines" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Philippines</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><strong className="text-text-primary">#1 XRP market in SE Asia</strong>. $38B+ remittances = 10% of GDP. Japan-Philippines one of ODL&apos;s most established corridors via <Link href="/learn/xrp-japan-sbi" className="text-xrp-accent underline decoration-xrp-accent/30">SBI Remit</Link>.</p>
            <div className="mt-6"><IconList items={[
              {title:"$38B+ annual remittances",desc:"OFWs send from US, Gulf, Japan, Europe."},
              {title:"ODL corridor active",desc:"Japan-Philippines established via SBI."},
              {title:"BSP regulated",desc:"Bangko Sentral provides framework."},
              {title:"Coins.ph",desc:"Leading platform. Millions of users."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="thailand" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Thailand</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Thailand&apos;s SEC provides clear crypto regulation. <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple partnerships</Link> with Thai banks and fintech companies are growing.</p>
            <div className="mt-6"><HighlightBox title="SCB & DeeMoney" variant="accent"><p>Siam Commercial Bank and DeeMoney have explored Ripple technology for cross-border payments, targeting the Japan-Thailand and ASEAN remittance corridors.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="corridors" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Corridors</h2>
            <div className="mt-6"><DataTable headers={["Corridor","Volume","Status","Savings"]} rows={[
              ["Japan → Philippines","$3B+","Active ODL","40-60%"],
              ["Gulf → Philippines","$5B+","Growing","50-70%"],
              ["Korea → Vietnam","$2B+","Developing","40-60%"],
              ["Singapore → ASEAN","$10B+","Potential","30-50%"],
            ]} highlightCol={2} /></div>
          </RevealSection>
          <RevealSection id="partners" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Partners</h2>
            <div className="mt-6"><IconList items={[
              {title:"Tranglo",desc:"ASEAN payment hub. Ripple acquired 40% stake. Key ODL infrastructure."},
              {title:"SBI Ripple Asia",desc:"Joint venture driving Japan-SE Asia corridors."},
              {title:"Coins.ph",desc:"Philippines' leading crypto platform with XRP support."},
              {title:"DeeMoney",desc:"Thai cross-border payment provider using Ripple tech."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
            { href: "/learn/xrp-japan-sbi", label: "Japan & SBI", desc: "Key partner" },
            { href: "/learn/on-demand-liquidity", label: "ODL", desc: "How it works" },
            { href: "/learn/cross-border-payments", label: "Payments", desc: "Global payments" },
            { href: "/learn/partnerships", label: "Partnerships", desc: "All partners" },
            { href: "/learn/xrp-middle-east-adoption", label: "Middle East", desc: "Gulf adoption" },
            { href: "/learn/xrp-africa-remittances", label: "Africa", desc: "African adoption" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore ASEAN Adoption" description="Southeast Asia is at the forefront of XRP-powered payments." primaryHref="/learn/on-demand-liquidity" primaryLabel="ODL Guide →" secondaryHref="/learn/partnerships" secondaryLabel="Partnerships" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
