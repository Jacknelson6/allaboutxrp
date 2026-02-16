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
  title: "XRP for Africa Remittances: Transforming African Payments | AllAboutXRP",
  description: "XRP transforming African remittances. Corridors, mobile money integration, cost savings, and challenges.",
  keywords: ["XRP Africa","XRP remittances Africa","XRP African payments","Ripple Africa"],
  openGraph: {
    title: "XRP for Africa Remittances: Transforming African Payments",
    description: "XRP transforming African remittances. Corridors, mobile money integration, cost savings, and challenges.",
    url: "https://allaboutxrp.com/learn/xrp-africa-remittances",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP for Africa Remittances: Transforming African Payments", description: "XRP transforming African remittances. Corridors, mobile money integration, cost savings, and challenges." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-africa-remittances" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP for Africa Remittances: Transforming African Payments", description: "XRP transforming African remittances. Corridors, mobile money integration, cost savings, and challenges.", url: "https://allaboutxrp.com/learn/xrp-africa-remittances", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP for Africa Remittances" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-africa-remittances" }),
  buildFAQSchema([
    { question: "Is XRP used in Africa?", answer: "Ripple building ODL corridors into Africa. Early but growing. Potential impact enormous." },
    { question: "Savings?", answer: "Current fees 8-12%. XRP reduces to <1%. Billions saved annually for families." },
    { question: "Mobile money integration?", answer: "562M accounts. Backend XRP settlement could provide seamless cross-border without crypto knowledge." },
    { question: "Most likely countries?", answer: "Nigeria (largest economy), Kenya (mobile money leader), South Africa (developed finance), Morocco (EU corridor)." },
    { question: "Biggest challenges?", answer: "Regulatory fragmentation, local currency liquidity, last-mile cash delivery, infrastructure gaps." },
  ]),
];

const faqItems = [
  { q: "Is XRP used in Africa?", a: "Ripple building ODL corridors into Africa. Early but growing. Potential impact enormous." },
  { q: "Savings?", a: "Current fees 8-12%. XRP reduces to <1%. Billions saved annually for families." },
  { q: "Mobile money integration?", a: "562M accounts. Backend XRP settlement could provide seamless cross-border without crypto knowledge." },
  { q: "Most likely countries?", a: "Nigeria (largest economy), Kenya (mobile money leader), South Africa (developed finance), Morocco (EU corridor)." },
  { q: "Biggest challenges?", a: "Regulatory fragmentation, local currency liquidity, last-mile cash delivery, infrastructure gaps." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP for Africa Remittances" titleAccent="Transforming African Payments" subtitle="Africa receives $100B+ annually at the world's highest fees. XRP can cut costs by 90%." breadcrumbLabel="XRP for Africa Remittances">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>Africa has the <strong className="text-text-primary">highest remittance fees globally</strong> — 8-12%. Costs families <strong className="text-text-primary">billions annually</strong>. XRP reduces fees to under 1% via <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link>, settling in seconds. Integration with mobile money (M-Pesa, 562M accounts) could bring XRP to hundreds of millions.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Annual", value: "$100B+ to Africa" },
          { label: "Average Fee", value: "8-12% (highest)" },
          { label: "XRP Fee", value: "<1%" },
          { label: "Speed", value: "Seconds vs days" },
          { label: "Corridors", value: "UK/EU/US → Africa" },
          { label: "Mobile Money", value: "562M accounts" },
        ]} />

        <SectionNav items={[
          { id: "problem", label: "The Problem" },
          { id: "solution", label: "XRP Solution" },
          { id: "corridors", label: "Corridors" },
          { id: "mobile", label: "Mobile Money" },
          { id: "challenges", label: "Challenges" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Fees Now" value="8-12%" delay={0.00} />
          <StatPill label="With XRP" value="<1%" delay={0.06} />
          <StatPill label="Speed" value="Seconds" delay={0.12} />
          <StatPill label="Market" value="$100B+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="problem">
            <h2 className="text-2xl font-bold text-text-primary">Africa&apos;s Remittance Problem</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><strong className="text-text-primary">$100B+ annual remittances</strong> at <strong className="text-text-primary">8-12% average fees</strong> — the highest globally. Sending $200 from London to Lagos costs $16-24. A tax on the world&apos;s poorest.</p>
            <div className="mt-6"><DataTable headers={["Corridor","Fee","Volume","Potential Savings"]} rows={[
              ["UK → Nigeria","8-10%","$25B","$2-2.5B/yr"],
              ["US → Kenya","7-9%","$4B","$280-360M/yr"],
              ["EU → Morocco","5-7%","$10B","$400-600M/yr"],
              ["Intra-Africa","12-15%","$20B","$2.4-3B/yr"],
            ]} highlightCol={1} /></div>
          </RevealSection>
          <RevealSection id="solution" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How XRP Solves This</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link> uses XRP as <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">bridge currency</Link>, eliminating pre-funded accounts.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"90%+ Fee Reduction",desc:"8-12% → under 1%. Saves $14-22 per $200 remittance."},
              {title:"Instant Settlement",desc:"Seconds vs days. Families get money when needed."},
              {title:"24/7 Operation",desc:"No banking hours. Send anytime from anywhere."},
              {title:"No Pre-Funding",desc:"Eliminates nostro accounts in African currencies."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="corridors" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Corridors</h2>
            <div className="mt-6"><IconList items={[
              {title:"UK → Nigeria",desc:"Largest corridor. $25B+ annually from UK, US, and EU."},
              {title:"Gulf → East Africa",desc:"Kenya, Ethiopia, Somalia. Billions from Gulf workers."},
              {title:"EU → North Africa",desc:"Morocco, Egypt, Tunisia. Large European diaspora."},
              {title:"Intra-Africa",desc:"Most expensive at 12-15%. Moving between countries is absurdly costly."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="mobile" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Mobile Money Integration</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Africa has <strong className="text-text-primary">562M mobile money accounts</strong>. M-Pesa, MTN, Airtel serve as primary financial infrastructure. XRP settling the backend brings <Link href="/learn/xrp-use-cases" className="text-xrp-accent underline decoration-xrp-accent/30">real utility</Link> without requiring crypto knowledge.</p>
            <div className="mt-6"><HighlightBox title="The Opportunity" variant="accent"><p>Most Africans have mobile money, not bank accounts. If XRP settles mobile-to-mobile remittances, users benefit without knowing they&apos;re using crypto.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="challenges" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Challenges</h2>
            <div className="mt-6"><IconList items={[
              {title:"Regulatory fragmentation",desc:"54 countries with different frameworks. No unified crypto approach."},
              {title:"Local currency liquidity",desc:"Building XRP pairs for African currencies takes time."},
              {title:"Last-mile delivery",desc:"Converting to local currency and delivering cash in rural areas."},
              {title:"Infrastructure",desc:"Internet and smartphone access varies widely."},
            ]} variant="warn" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-japan-sbi", label: "XRP in Japan (SBI)", desc: "Japan's XRP champion" },
              { href: "/learn/xrp-middle-east-adoption", label: "Middle East Adoption", desc: "Gulf region adoption" },
              { href: "/learn/xrp-southeast-asia", label: "Southeast Asia", desc: "ASEAN adoption" },
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Institutional adoption" },
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Complete institution list" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Why XRP changes everything" },
              { href: "/learn/partnerships", label: "Ripple Partnerships", desc: "Banks & institutions" },
              { href: "/learn/xrp-institutional-custody", label: "Institutional Custody", desc: "Enterprise storage" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="XRP Changes Global Payments" description="From Africa to Asia, XRP makes cross-border payments faster and cheaper." primaryHref="/learn/cross-border-payments" primaryLabel="Payments →" secondaryHref="/learn/on-demand-liquidity" secondaryLabel="ODL" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
