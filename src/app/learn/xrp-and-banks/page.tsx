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

const slug = "xrp-and-banks";
const title = "Why Banks Are Adopting XRP: The Institutional Thesis";
const description = "Why are banks adopting XRP? The full institutional thesis — cost savings, speed, regulatory clarity, and growing ODL volume.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const datePublished = "2026-02-15";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title,
  description,
  openGraph: { title: `${title} | AllAboutXRP`, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

const schemas = [
  buildArticleSchema({ headline: title, description, url, datePublished, dateModified: datePublished }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP & Banks" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "Why are banks adopting XRP?", answer: "Banks adopt XRP because it eliminates the need for pre-funded nostro/vostro accounts, settles cross-border payments in 3-5 seconds instead of 3-5 days, and reduces transaction costs by up to 60%." },
    { question: "How many banks use XRP?", answer: "Over 100 financial institutions across 55+ countries have partnered with Ripple's payment network. Many use On-Demand Liquidity (ODL) which relies on XRP as the bridge currency." },
    { question: "Is XRP approved for bank use?", answer: "Yes. Following the SEC vs Ripple settlement and growing regulatory clarity globally, XRP has become the most legally vetted digital asset for institutional use." },
    { question: "Do banks actually hold XRP?", answer: "Most banks use XRP as a bridge currency through ODL rather than holding it on their balance sheets. XRP is bought, transferred, and sold in seconds during a transaction." },
    { question: "What is the institutional thesis for XRP?", answer: "The institutional thesis is that XRP solves a $27 trillion problem in cross-border payments by replacing slow, expensive correspondent banking with instant, low-cost liquidity via the XRP Ledger." },
  ]),
];

const faqItems = [
  { q: "Why are banks adopting XRP?", a: "Banks adopt XRP because it eliminates pre-funded nostro/vostro accounts, settles cross-border payments in 3-5 seconds, and reduces costs by up to 60%. It solves real infrastructure problems that SWIFT can't." },
  { q: "How many banks use XRP?", a: "Over 100 financial institutions across 55+ countries have integrated with Ripple's network. Key partners include SBI Holdings (Japan), Santander, Standard Chartered, and National Bank of Egypt." },
  { q: "Is XRP approved for bank use?", a: "Yes. The SEC settlement confirmed XRP is not a security when sold on exchanges. Combined with ISO 20022 compliance and regulatory clarity, banks can adopt XRP with confidence." },
  { q: "Do banks actually hold XRP?", a: "Most use XRP as a bridge currency through ODL — it's bought, transferred, and sold in seconds during a transaction. Some institutions hold XRP as a strategic treasury asset." },
  { q: "What is the institutional thesis for XRP?", a: "XRP solves a $27 trillion problem in cross-border payments. It replaces slow, expensive correspondent banking with instant, low-cost settlement. As more corridors go live, XRP demand increases structurally." },
  { q: "How does XRP compare to SWIFT for banks?", a: "SWIFT takes 3-5 days and costs $25-65 per transaction. XRP settles in 3-5 seconds for fractions of a cent. XRP also eliminates the need for pre-funded accounts in destination currencies." },
];

export default function XRPAndBanksPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Why Banks Are"
          titleAccent="Adopting XRP"
          subtitle="Over 100 financial institutions across 55+ countries have joined Ripple's network. Here's the full institutional thesis for XRP — and why traditional banking is finally embracing crypto."
          breadcrumbLabel="XRP & Banks"
        >
          <div className="mt-5">
            <AuthorByline date={datePublished} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Banks are adopting XRP because it solves a <strong className="text-text-primary">$27 trillion problem</strong> in cross-border payments. Traditional correspondent banking requires pre-funded accounts, takes days, and costs a fortune. XRP settles in 3-5 seconds for fractions of a cent, freeing up trapped capital and slashing costs by up to 60%. With <Link href="/learn/sec-vs-ripple-explained" className="text-xrp-accent underline decoration-xrp-accent/30">regulatory clarity post-SEC settlement</Link>, institutional adoption is accelerating faster than ever.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Financial Partners", value: "100+ institutions in 55+ countries" },
          { label: "Settlement Speed", value: "3-5 seconds (vs 3-5 days SWIFT)" },
          { label: "Cost Reduction", value: "Up to 60% cheaper than traditional rails" },
          { label: "Pre-Funding Savings", value: "Eliminates nostro/vostro requirements" },
          { label: "ISO 20022", value: "Native compliance for bank messaging" },
          { label: "Key Partners", value: "SBI Holdings, Santander, Standard Chartered" },
        ]} />

        <SectionNav items={[
          { id: "problem", label: "The Problem" },
          { id: "solution", label: "XRP Solution" },
          { id: "adoption", label: "Bank Adoption" },
          { id: "economics", label: "Economics" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Partners" value="100+" delay={0} />
          <StatPill label="Countries" value="55+" delay={0.06} />
          <StatPill label="Cost Savings" value="60%" delay={0.12} />
          <StatPill label="Settlement" value="3-5s" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="problem">
            <h2 className="text-2xl font-bold text-text-primary">The $27 Trillion Problem in Banking</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Every day, banks move approximately $150 billion across borders. The infrastructure they use — correspondent banking — was designed in the 1970s. It&apos;s slow, expensive, and incredibly capital-intensive.
            </p>
            <div className="mt-5">
              <HighlightBox title="The Correspondent Banking Problem" variant="info">
                <p>Banks must maintain pre-funded accounts (nostro/vostro) in every currency corridor they serve. Globally, an estimated <strong>$27 trillion</strong> is locked up in these accounts — capital that earns nothing while sitting idle. A single bank may have hundreds of these accounts across dozens of countries.</p>
              </HighlightBox>
            </div>
            <div className="mt-5">
              <IconList items={[
                { title: "3-5 day settlement", desc: "Cross-border transfers take days through multiple intermediary banks" },
                { title: "$25-65 per transaction", desc: "Each transfer accumulates fees from every bank in the chain" },
                { title: "$27T in trapped capital", desc: "Pre-funded nostro/vostro accounts lock up enormous amounts of liquidity" },
                { title: "Limited corridor coverage", desc: "Smaller currency corridors are underserved or unavailable" },
                { title: "No transparency", desc: "Senders can't track payments in real-time through the chain" },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="solution" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How XRP Solves It</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP serves as a <strong className="text-text-primary">universal bridge currency</strong>. Instead of maintaining pre-funded accounts in every corridor, banks can use XRP to provide instant liquidity on demand. Through <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">On-Demand Liquidity (ODL)</Link>, the sending currency is converted to XRP, transferred in 3-5 seconds, and converted to the destination currency — all in a single transaction.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Instant Settlement", desc: "3-5 second cross-border settlement vs 3-5 days through correspondent banking." },
                { title: "No Pre-Funding", desc: "XRP eliminates the need for nostro/vostro accounts, freeing billions in trapped capital." },
                { title: "60% Cost Reduction", desc: "Dramatically lower fees by removing intermediary banks from the payment chain." },
                { title: "24/7 Operation", desc: "The XRP Ledger never closes — settlements happen anytime, including weekends and holidays." },
                { title: "ISO 20022 Native", desc: "XRP Ledger natively supports ISO 20022 messaging, the new global banking standard." },
                { title: "Any Currency Pair", desc: "XRP bridges any two currencies, including exotic corridors traditional banks can't serve profitably." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="adoption" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Banks and Institutions Using XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Adoption has accelerated dramatically since the <Link href="/learn/sec-vs-ripple-explained" className="text-xrp-accent underline decoration-xrp-accent/30">SEC vs Ripple settlement</Link>. Here are some of the key institutional partners:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Institution", "Country", "Use Case"]}
                rows={[
                  ["SBI Holdings", "Japan", "ODL payments, strategic XRP investment"],
                  ["Santander", "Spain/Global", "One Pay FX cross-border transfers"],
                  ["Standard Chartered", "UK/Global", "Institutional custody & trading"],
                  ["National Bank of Egypt", "Egypt", "Inbound remittance corridors"],
                  ["SCB (Siam Commercial)", "Thailand", "Southeast Asia payment corridors"],
                  ["Tranglo", "Malaysia", "ODL hub for Asia-Pacific"],
                ]}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              For the complete list, see our <Link href="/learn/banks-using-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">Banks Using XRP</Link> page.
            </p>
          </RevealSection>

          <RevealSection id="economics" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The Economics: Why It Makes Sense</h2>
            <div className="mt-5">
              <HighlightBox title="Network Effect" variant="accent" large>
                <p>Every new bank that joins the XRP network increases its value for all existing participants. More corridors mean more liquidity, tighter spreads, and lower costs. This network effect is the core of the <Link href="/learn/xrp-price-potential" className="text-xrp-accent underline decoration-xrp-accent/30">institutional bull case for XRP</Link>.</p>
              </HighlightBox>
            </div>
            <div className="mt-5">
              <IconList items={[
                { title: "Capital Efficiency", desc: "Banks free up billions in trapped nostro/vostro capital that can be redeployed profitably" },
                { title: "New Revenue Streams", desc: "Banks can offer instant cross-border transfers as a premium product" },
                { title: "Competitive Advantage", desc: "Early adopters gain an edge in speed, cost, and customer experience" },
                { title: "Compliance Ready", desc: "Built-in compliance features and regulatory clarity reduce legal risk" },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Detailed bank use cases" },
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Complete institution list" },
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "XRP bridge payments" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "The bigger picture" },
              { href: "/learn/xrp-vs-swift", label: "XRP vs SWIFT", desc: "Head-to-head comparison" },
              { href: "/learn/xrp-iso-20022", label: "XRP & ISO 20022", desc: "Banking standard compliance" },
              { href: "/learn/ripplenet", label: "RippleNet", desc: "Global payment network" },
              { href: "/learn/xrp-institutional-custody", label: "Institutional Custody", desc: "Enterprise-grade storage" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="The Institutional Era Has Begun"
          description="Banks are adopting XRP for cross-border payments. Learn how to position yourself."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/banks-using-xrp"
          secondaryLabel="See All Bank Partners"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial advice.</em>
        </p>
      </div>
    </>
  );
}
