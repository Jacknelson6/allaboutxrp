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
  title: "XRP in Japan: SBI Holdings: Japan's XRP Champion | AllAboutXRP",
  description: "SBI Holdings and XRP in Japan. SBI's Ripple partnership, SBI VC Trade, and Japan's leading role in XRP adoption.",
  keywords: ["XRP Japan","SBI Holdings XRP","SBI Ripple","XRP Japan adoption","SBI VC Trade"],
  openGraph: {
    title: "XRP in Japan: SBI Holdings: Japan's XRP Champion",
    description: "SBI Holdings and XRP in Japan. SBI's Ripple partnership, SBI VC Trade, and Japan's leading role in XRP adoption.",
    url: "https://allaboutxrp.com/learn/xrp-japan-sbi",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP in Japan: SBI Holdings: Japan's XRP Champion", description: "SBI Holdings and XRP in Japan. SBI's Ripple partnership, SBI VC Trade, and Japan's leading role in XRP adoption." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-japan-sbi" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP in Japan: SBI Holdings: Japan's XRP Champion", description: "SBI Holdings and XRP in Japan. SBI's Ripple partnership, SBI VC Trade, and Japan's leading role in XRP adoption.", url: "https://allaboutxrp.com/learn/xrp-japan-sbi", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP in Japan: SBI Holdings" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-japan-sbi" }),
  buildFAQSchema([
    { question: "Why is Japan important for XRP?", answer: "Progressive regulation, XRP is legal and popular, SBI Holdings is Ripple's biggest institutional partner." },
    { question: "What is SBI Ripple Asia?", answer: "Joint venture expanding payment solutions and ODL across Asia-Pacific." },
    { question: "Is XRP most popular in Japan?", answer: "Consistently top 2-3 most traded. Often #1 on SBI VC Trade." },
    { question: "Does SBI use XRP for payments?", answer: "Yes. SBI Remit uses ODL for international remittances, especially Japan-Philippines." },
    { question: "Is SBI a Ripple investor?", answer: "Yes. Invested in 2016 and is one of Ripple's most consistent institutional backers." },
  ]),
];

const faqItems = [
  { q: "Why is Japan important for XRP?", a: "Progressive regulation, XRP is legal and popular, SBI Holdings is Ripple's biggest institutional partner." },
  { q: "What is SBI Ripple Asia?", a: "Joint venture expanding payment solutions and ODL across Asia-Pacific." },
  { q: "Is XRP most popular in Japan?", a: "Consistently top 2-3 most traded. Often #1 on SBI VC Trade." },
  { q: "Does SBI use XRP for payments?", a: "Yes. SBI Remit uses ODL for international remittances, especially Japan-Philippines." },
  { q: "Is SBI a Ripple investor?", a: "Yes. Invested in 2016 and is one of Ripple's most consistent institutional backers." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP in Japan: SBI Holdings" titleAccent="Japan's XRP Champion" subtitle="SBI Holdings is Ripple's biggest partner. How this Japanese financial giant drives XRP adoption across Asia." breadcrumbLabel="XRP in Japan: SBI Holdings">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">SBI Holdings</strong> — one of Japan&apos;s largest financial groups — has been Ripple&apos;s most important partner since 2016. They run <strong className="text-text-primary">SBI VC Trade</strong> (Japan&apos;s leading XRP exchange), use <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL for remittances</Link>, and champion XRP adoption. Japan is the world&apos;s most XRP-friendly major economy.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Partner Since", value: "2016" },
          { label: "Exchange", value: "SBI VC Trade" },
          { label: "Use Case", value: "Cross-border payments" },
          { label: "Regulation", value: "FSA regulated" },
          { label: "XRP Status", value: "Legal in Japan" },
          { label: "JV", value: "SBI Ripple Asia" },
        ]} />

        <SectionNav items={[
          { id: "sbi", label: "SBI Overview" },
          { id: "partnership", label: "Partnership" },
          { id: "exchange", label: "SBI VC Trade" },
          { id: "remittances", label: "Remittances" },
          { id: "future", label: "Future" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Since" value="2016" delay={0.00} />
          <StatPill label="Exchange" value="SBI VC" delay={0.06} />
          <StatPill label="Status" value="Legal" delay={0.12} />
          <StatPill label="Market" value="#1 XRP" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="sbi">
            <h2 className="text-2xl font-bold text-text-primary">SBI Holdings</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">SBI is a <strong className="text-text-primary">$6B+ financial conglomerate</strong> with banking, securities, insurance, and crypto divisions. CEO Yoshitaka Kitao is one of XRP&apos;s most vocal institutional supporters.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"SBI VC Trade",desc:"Regulated exchange. XRP is most traded asset. One of Japan's largest."},
              {title:"SBI Remit",desc:"International remittances using XRP/ODL for real-time settlement."},
              {title:"SBI Ripple Asia",desc:"Joint venture for payment solutions across Asia-Pacific."},
              {title:"SBI Digital Asset",desc:"Broader digital asset strategy including custody and tokenization."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="partnership" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Ripple-SBI Partnership</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">SBI invested in Ripple in 2016 and created <strong className="text-text-primary">SBI Ripple Asia</strong> to expand <Link href="/learn/ripplenet" className="text-xrp-accent underline decoration-xrp-accent/30">RippleNet</Link> and ODL across Asia. SBI has financial skin in the game as a Ripple investor.</p>
            <div className="mt-6"><HighlightBox title="Why SBI Matters" variant="accent"><p>SBI provides deep institutional credibility in Asia&apos;s largest crypto market. Japan&apos;s regulation + SBI&apos;s infrastructure = ideal for <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">XRP adoption</Link>.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="exchange" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">SBI VC Trade</h2>
            <div className="mt-6"><IconList items={[
              {title:"FSA regulated",desc:"Licensed under Japan's Payment Services Act. Among most regulated globally."},
              {title:"XRP #1",desc:"XRP consistently the most traded asset, reflecting Japan's XRP enthusiasm."},
              {title:"Staking & lending",desc:"XRP lending products leveraging Japan's favorable framework."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="remittances" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Remittance Corridors</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link> through SBI Remit enables real-time transfers from Japan to <Link href="/learn/xrp-southeast-asia" className="text-xrp-accent underline decoration-xrp-accent/30">Southeast Asia</Link>.</p>
            <div className="mt-6"><DataTable headers={["Corridor","Status","Speed","Savings"]} rows={[
              ["Japan → Philippines","Active","Real-time","40-60%"],
              ["Japan → Vietnam","Active","Real-time","30-50%"],
              ["Japan → Thailand","Growing","Real-time","35-55%"],
            ]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Future Plans</h2>
            <div className="mt-6"><IconList items={[
              {title:"NFT marketplace",desc:"XRPL-based NFT initiatives in Japan."},
              {title:"CBDC collaboration",desc:"Involved in Japan's digital yen discussions."},
              {title:"More corridors",desc:"New remittance corridors across Asia."},
              {title:"Institutional custody",desc:"Expanding custody for institutional XRP holders."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
            { href: "/learn/on-demand-liquidity", label: "ODL", desc: "How ODL works" },
            { href: "/learn/partnerships", label: "Partnerships", desc: "All Ripple partners" },
            { href: "/learn/cross-border-payments", label: "Payments", desc: "Global payments" },
            { href: "/learn/xrp-southeast-asia", label: "SE Asia", desc: "Regional adoption" },
            { href: "/learn/xrp-institutional-custody", label: "Custody", desc: "Enterprise storage" },
            { href: "/learn/ripplenet", label: "RippleNet", desc: "Payment network" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore XRP Adoption" description="Japan leads in XRP adoption. See how others follow." primaryHref="/learn/partnerships" primaryLabel="Partnerships →" secondaryHref="/learn/on-demand-liquidity" secondaryLabel="ODL" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
