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
  title: "XRP Energy Consumption: How Green Is XRP? | AllAboutXRP",
  description:
    "XRP uses 250,000x less energy than Bitcoin per transaction. Learn about XRP's carbon footprint, energy efficiency, and why it's one of the greenest cryptocurrencies.",
  keywords: ["XRP energy consumption", "XRP carbon footprint", "is XRP green", "XRP vs Bitcoin energy", "XRP environmental impact", "green cryptocurrency"],
  openGraph: {
    title: "XRP Energy Consumption: The Greenest Major Crypto?",
    description: "XRP uses 0.0079 kWh per transaction vs Bitcoin's 707 kWh. Here's why XRP is 250,000x more efficient.",
    url: "https://allaboutxrp.com/learn/xrp-energy-consumption",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Energy Usage: 250,000x More Efficient Than Bitcoin",
    description: "How XRP's consensus mechanism makes it one of the greenest cryptocurrencies.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-energy-consumption" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Energy Consumption: How Green Is XRP?",
    description: "An analysis of XRP's energy consumption and carbon footprint compared to Bitcoin, Ethereum, and traditional payment systems.",
    url: "https://allaboutxrp.com/learn/xrp-energy-consumption",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Energy Consumption" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-energy-consumption" }),
  buildFAQSchema([
    { question: "How much energy does XRP use per transaction?", answer: "XRP uses approximately 0.0079 kWh per transaction, making it one of the most energy-efficient cryptocurrencies. For comparison, Bitcoin uses approximately 707 kWh per transaction — making XRP roughly 250,000 times more energy-efficient." },
    { question: "Is XRP environmentally friendly?", answer: "Yes. XRP is one of the most environmentally friendly cryptocurrencies due to its consensus mechanism that doesn't require energy-intensive mining. The entire XRP Ledger network's annual energy consumption is comparable to a small office building." },
    { question: "Why does XRP use so much less energy than Bitcoin?", answer: "XRP doesn't use mining (proof-of-work). While Bitcoin miners burn massive electricity solving cryptographic puzzles, XRP validators simply verify transactions and vote on consensus. This cooperative approach requires minimal computational power." },
    { question: "What is XRP's carbon footprint?", answer: "The XRP Ledger is carbon-neutral. Ripple has partnered with organizations like EW Zero to purchase renewable energy certificates that offset the XRPL's minimal energy consumption. The entire network's annual carbon output is negligible compared to Bitcoin or traditional banking." },
    { question: "How does XRP compare to Visa's energy usage?", answer: "XRP uses roughly the same amount of energy per transaction as Visa (both in the range of 0.001-0.01 kWh per transaction). However, XRP offers decentralization, transparency, and 24/7 operation that centralized systems like Visa cannot match." },
  ]),
];

const faqItems = [
  { q: "How much energy does XRP use per transaction?", a: "Approximately 0.0079 kWh — making it roughly 250,000x more efficient than Bitcoin's 707 kWh per transaction." },
  { q: "Is XRP environmentally friendly?", a: "Yes. XRP is one of the greenest major cryptocurrencies. Its consensus mechanism requires minimal energy, and the XRPL is carbon-neutral." },
  { q: "Why does XRP use so little energy?", a: "XRP doesn't use mining. Validators cooperate through consensus rather than competing with energy-intensive puzzles." },
  { q: "What is XRP's carbon footprint?", a: "The XRPL is carbon-neutral. Ripple offsets its minimal energy consumption through renewable energy certificates." },
  { q: "How does XRP compare to Visa's energy?", a: "Similar range (0.001-0.01 kWh per transaction). XRP matches Visa's efficiency while adding decentralization and 24/7 operation." },
];

export default function XRPEnergyConsumptionPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Energy Consumption"
          titleAccent="How Green Is XRP?"
          subtitle="Crypto has an energy problem — but XRP doesn't. Using consensus instead of mining, XRP is 250,000 times more energy-efficient than Bitcoin and carbon-neutral. Here's the data."
          breadcrumbLabel="XRP Energy Consumption"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP is one of the greenest major cryptocurrencies.</strong> Each XRP transaction uses approximately <strong className="text-text-primary">0.0079 kWh</strong> of energy — compared to Bitcoin&apos;s <strong className="text-text-primary">707 kWh per transaction</strong>. That&apos;s a 250,000x efficiency advantage. Because XRP uses <Link href="/learn/how-does-xrp-work" className="text-xrp-accent underline decoration-xrp-accent/30">consensus instead of mining</Link>, the entire XRPL network runs on less energy than a small office building. Ripple has made the network <strong className="text-text-primary">carbon-neutral</strong> through renewable energy offsets.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "XRP Energy/Transaction", value: "0.0079 kWh" },
          { label: "Bitcoin Energy/Transaction", value: "707 kWh" },
          { label: "Efficiency Ratio", value: "XRP is 250,000x greener" },
          { label: "XRPL Annual Energy", value: "~474 MWh" },
          { label: "Bitcoin Annual Energy", value: "~127 TWh" },
          { label: "Carbon Status", value: "Carbon-neutral (offsets)" },
          { label: "Equivalent to", value: "~44 US homes (XRPL total)" },
          { label: "Visa Comparison", value: "Comparable efficiency" },
        ]} />

        <SectionNav items={[
          { id: "comparison", label: "Energy Comparison" },
          { id: "why-efficient", label: "Why So Efficient?" },
          { id: "carbon-neutral", label: "Carbon Neutral" },
          { id: "esg", label: "ESG Implications" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="XRP per Tx" value="0.0079 kWh" delay={0} />
          <StatPill label="BTC per Tx" value="707 kWh" delay={0.06} />
          <StatPill label="Efficiency" value="250,000x" delay={0.12} />
          <StatPill label="Carbon" value="Neutral" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="comparison">
            <h2 className="text-2xl font-bold text-text-primary">Energy Consumption Comparison: XRP vs Other Networks</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The energy differences between cryptocurrencies are staggering. XRP&apos;s <Link href="/learn/how-does-xrp-work" className="text-xrp-accent underline decoration-xrp-accent/30">consensus mechanism</Link> makes it one of the most energy-efficient blockchain networks in existence:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Network", "Energy per Transaction", "Annual Energy", "vs XRP"]}
                rows={[
                  ["XRP", "0.0079 kWh", "~474 MWh", "1x (baseline)"],
                  ["Stellar", "0.00022 kWh", "~120 MWh", "Slightly more efficient"],
                  ["Visa", "~0.003 kWh", "~740 GWh", "Comparable per-tx"],
                  ["Ethereum (PoS)", "~0.03 kWh", "~2.6 GWh", "~4x more than XRP"],
                  ["Bitcoin", "707 kWh", "~127 TWh", "250,000x more than XRP"],
                  ["SWIFT + Banks", "Varies widely", "Massive (global infra)", "Far more than XRP"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="Putting It in Perspective" variant="accent">
                <p>A single <Link href="/learn/xrp-vs-bitcoin" className="text-xrp-accent underline decoration-xrp-accent/30">Bitcoin</Link> transaction uses enough energy to power an average US household for <strong className="text-text-primary">24 days</strong>. An XRP transaction uses enough energy to power a <strong className="text-text-primary">single LED lightbulb for about 30 seconds</strong>. The entire XRP Ledger network uses less annual energy than 44 average US homes.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="why-efficient" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why Is XRP So Energy-Efficient?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP&apos;s extreme energy efficiency comes down to a fundamental architectural choice: <strong className="text-text-primary">consensus over competition</strong>.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "No mining puzzles", desc: "Bitcoin miners burn electricity solving SHA-256 puzzles. XRP validators simply verify signatures and vote — computationally trivial." },
                { title: "No hardware arms race", desc: "Bitcoin mining requires specialized ASIC hardware. XRP validators run on standard servers — even a decent laptop could run one." },
                { title: "No wasted computation", desc: "In Bitcoin, all miners except the winner waste their electricity. In XRP, every validator's work contributes to consensus." },
                { title: "Pre-created supply", desc: "No energy is spent creating new XRP tokens. All 100 billion were created at genesis with minimal computation." },
                { title: "Fast consensus rounds", desc: "Each 3-5 second consensus round uses minimal energy because validators are cooperating, not competing." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="carbon-neutral" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Carbon-Neutral Commitment</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Ripple has committed to making the XRPL carbon-neutral and has taken concrete steps:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "EW Zero partnership", desc: "Ripple partnered with Energy Web's EW Zero tool to purchase and retire renewable energy certificates covering the XRPL's energy usage." },
                { title: "Carbon offset commitment", desc: "Ripple has pledged to achieve net-zero carbon emissions across its operations, including the XRPL's energy footprint." },
                { title: "Sustainability reporting", desc: "Ripple publishes sustainability reports detailing energy consumption, carbon offsets, and environmental initiatives." },
                { title: "Green finance partnerships", desc: "Ripple has explored using the XRPL for carbon credit tokenization and sustainable finance applications." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="esg" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">ESG Implications: Why Energy Efficiency Matters for Adoption</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Energy efficiency isn&apos;t just an environmental concern — it&apos;s a <strong className="text-text-primary">business requirement</strong> for institutional adoption. Banks and financial institutions face increasing ESG (Environmental, Social, Governance) mandates from regulators and shareholders.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Regulatory Compliance", desc: "EU and global ESG regulations make energy-intensive crypto difficult for institutions to justify. XRP's efficiency removes this barrier." },
                { title: "Corporate Sustainability Goals", desc: "Banks have carbon reduction targets. Using XRP instead of Bitcoin for payments aligns with these goals." },
                { title: "Stakeholder Pressure", desc: "Shareholders and customers increasingly demand sustainable practices. XRP's green credentials are an advantage." },
                { title: "Competitive Positioning", desc: "When institutions choose between crypto payment rails, energy efficiency is a differentiator. XRP wins on this metric." },
              ]} />
            </div>

            <div className="mt-6">
              <HighlightBox title="The Bottom Line" variant="success">
                <p>XRP&apos;s energy efficiency is a <strong className="text-text-primary">competitive moat</strong> for institutional adoption. As ESG requirements tighten globally, <Link href="/learn/how-banks-use-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">banks choosing blockchain payment rails</Link> will increasingly favor energy-efficient options. XRP&apos;s 250,000x advantage over Bitcoin makes it the clear choice for ESG-conscious institutions.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How XRPL works" },
              { href: "/learn/xrpl-consensus-mechanism", label: "XRPL Consensus", desc: "Byzantine agreement" },
              { href: "/learn/xrpl-validators", label: "XRPL Validators", desc: "Network consensus nodes" },
              { href: "/learn/xrpl-decentralization", label: "XRPL Decentralization", desc: "Centralization debate" },
              { href: "/learn/xrpl-sidechains", label: "XRPL Sidechains", desc: "EVM sidechain & scaling" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide to XRP" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Technology explained simply" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore XRP's Green Advantage"
          description="XRP's energy efficiency is just one of its advantages. Learn how banks are adopting XRP for sustainable payments."
          primaryHref="/learn/how-banks-use-xrp"
          primaryLabel="How Banks Use XRP →"
          secondaryHref="/learn/xrp-vs-bitcoin"
          secondaryLabel="XRP vs Bitcoin"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Ripple.com sustainability reports, Cambridge Centre for Alternative Finance, Digiconomist.</em>
        </p>
      </div>
    </>
  );
}
