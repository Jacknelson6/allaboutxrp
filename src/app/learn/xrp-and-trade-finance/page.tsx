import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

const slug = "xrp-and-trade-finance";
const title = "XRP in Trade Finance: Letters of Credit & Beyond";
const description = "How XRP is being explored for trade finance — faster letters of credit, supply chain payments, and reducing friction in global trade.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const dp = "2026-02-15";

export const metadata: Metadata = {
  title, description,
  openGraph: { title: `${title} | AllAboutXRP`, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

const schemas = [
  buildArticleSchema({ headline: title, description, url, datePublished: dp, dateModified: dp }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP & Trade Finance" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "What is trade finance?", answer: "Trade finance is the financial instruments and products used to facilitate international trade. It includes letters of credit, trade insurance, factoring, and supply chain financing — a $10+ trillion annual market." },
    { question: "How can XRP improve trade finance?", answer: "XRP can speed up trade finance by enabling instant settlement of letters of credit, reducing the documentation cycle from weeks to hours, and providing real-time payment tracking across supply chains." },
    { question: "What are letters of credit?", answer: "Letters of credit are bank guarantees that a buyer's payment to a seller will be received on time and for the correct amount. They're essential in international trade but currently take 5-10 days to process." },
    { question: "Is XRP being used in trade finance today?", answer: "XRP's cross-border payment capabilities are being explored for trade finance applications. While direct trade finance products are still emerging, the underlying ODL infrastructure can dramatically improve trade settlement." },
    { question: "How big is the trade finance market?", answer: "Global trade finance is a $10+ trillion annual market. The trade finance gap (unmet demand) is estimated at $2.5 trillion, particularly affecting SMEs in developing countries." },
  ]),
];

const faqItems = [
  { q: "What is trade finance?", a: "Trade finance covers all the financial instruments that make international trade possible — letters of credit, export financing, trade insurance, factoring. It's a $10+ trillion market that still runs largely on paper documents and multi-day settlement." },
  { q: "How can XRP improve trade finance?", a: "XRP enables instant settlement between trading parties, reduces letter of credit processing from weeks to hours, provides real-time payment tracking, and eliminates the need for multiple intermediary banks in trade transactions." },
  { q: "What is the trade finance gap?", a: "The trade finance gap is $2.5 trillion — unmet demand from businesses (especially SMEs) that can't access traditional trade finance. Blockchain solutions like XRP can help close this gap by reducing costs and improving accessibility." },
  { q: "Can XRPL handle trade documents?", a: "While XRPL isn't designed for document storage, it can provide the settlement layer while other systems handle documentation. XRPL's escrow feature is particularly relevant for conditional trade payments." },
  { q: "How does XRP escrow help trade finance?", a: "XRPL's native escrow feature allows conditional payments — funds are locked and released only when conditions are met (like shipment confirmation). This is ideal for trade finance where payment depends on delivery." },
];

export default function XRPAndTradeFinancePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP in"
          titleAccent="Trade Finance"
          subtitle="A $10T+ market running on paper and week-long settlement. XRP and XRPL offer a faster, cheaper alternative for letters of credit, supply chain payments, and global trade."
          breadcrumbLabel="XRP & Trade Finance"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Trade finance is a <strong className="text-text-primary">$10+ trillion market</strong> with a $2.5T unmet demand gap. It still relies on paper documents and multi-day settlement. XRP&apos;s instant settlement, <Link href="/learn/xrp-escrow-explained" className="text-xrp-accent underline decoration-xrp-accent/30">native escrow</Link> for conditional payments, and <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">cross-border capabilities</Link> make it a natural fit for modernizing trade finance.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Market Size", value: "$10+ trillion annually" },
          { label: "Finance Gap", value: "$2.5T unmet demand" },
          { label: "Current Settlement", value: "5-10 days for letters of credit" },
          { label: "XRP Settlement", value: "3-5 seconds" },
          { label: "Key Feature", value: "XRPL native escrow for conditional payments" },
          { label: "Opportunity", value: "SME access in developing countries" },
        ]} />

        <SectionNav items={[
          { id: "problem", label: "The Problem" },
          { id: "solution", label: "XRP Solution" },
          { id: "use-cases", label: "Use Cases" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Market" value="$10T+" delay={0} />
          <StatPill label="Gap" value="$2.5T" delay={0.06} />
          <StatPill label="Old Speed" value="5-10 days" delay={0.12} />
          <StatPill label="XRP Speed" value="3-5s" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="problem">
            <h2 className="text-2xl font-bold text-text-primary">Why Trade Finance Needs Disruption</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              International trade moves $25+ trillion in goods annually, but the financial infrastructure supporting it is decades behind. Letters of credit — the backbone of trade finance — still involve physical documents, multiple bank intermediaries, and settlement times measured in weeks.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Paper-based processes", desc: "Trade documents are still physically couriered between banks in many corridors" },
                { title: "5-10 day settlement", desc: "Letters of credit take nearly two weeks to process through intermediary banks" },
                { title: "$2.5T finance gap", desc: "SMEs in developing countries can't access affordable trade financing" },
                { title: "High costs", desc: "Multiple intermediaries each add fees, making small trade deals uneconomical" },
                { title: "Fraud risk", desc: "Paper-based systems are vulnerable to document fraud and double-financing" },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="solution" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How XRP Transforms Trade Finance</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Instant Settlement", desc: "Replace multi-day bank-to-bank settlement with 3-5 second finality on the XRP Ledger." },
                { title: "Conditional Escrow", desc: "XRPL's native escrow locks funds until trade conditions are met — a digital letter of credit." },
                { title: "Cost Reduction", desc: "Eliminate intermediary banks and their fees, making smaller trade deals economically viable." },
                { title: "Transparency", desc: "Real-time tracking of trade payments on the public ledger — no more black-box processing." },
                { title: "Global Access", desc: "Any business with internet access can participate in trade finance through XRPL." },
                { title: "Currency Bridging", desc: "XRP bridges any trade currency pair, enabling direct settlement without USD intermediation." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Trade Finance Use Cases</h2>
            <div className="mt-5">
              <HighlightBox title="XRPL Escrow as Digital Letters of Credit" variant="accent" large>
                <p>XRPL&apos;s <Link href="/learn/xrp-escrow-explained" className="text-xrp-accent underline decoration-xrp-accent/30">native escrow feature</Link> is a game-changer for trade finance. A buyer can lock XRP in escrow, set release conditions (like shipment confirmation), and the seller receives payment automatically when conditions are met. No banks, no paper, no delays.</p>
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
              { href: "/learn/xrp-escrow-explained", label: "XRP Escrow", desc: "Conditional payments" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Global settlement" },
              { href: "/learn/xrp-and-banks", label: "XRP & Banks", desc: "Institutional adoption" },
              { href: "/learn/xrp-use-cases", label: "XRP Use Cases", desc: "All applications" },
              { href: "/learn/on-demand-liquidity", label: "ODL", desc: "Bridge currency payments" },
              { href: "/learn/xrp-and-correspondent-banking", label: "Correspondent Banking", desc: "Replacing nostro/vostro" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Modernizing Global Trade"
          description="XRP brings instant settlement and conditional payments to the $10T+ trade finance market."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/xrp-use-cases"
          secondaryLabel="Explore Use Cases"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial advice.</em>
        </p>
      </div>
    </>
  );
}
