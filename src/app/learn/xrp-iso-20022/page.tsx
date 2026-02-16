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
  title: "XRP and ISO 20022: Why It Matters for Global Payments | AllAboutXRP",
  description:
    "Learn how XRP and the XRPL are ISO 20022 compliant, why this financial messaging standard matters, and how it positions XRP for institutional adoption.",
  keywords: ["XRP ISO 20022", "ISO 20022 crypto", "XRP compliant", "ISO 20022 blockchain", "Ripple ISO 20022", "XRPL ISO 20022"],
  openGraph: {
    title: "XRP and ISO 20022: The Global Payments Standard",
    description: "ISO 20022 is becoming the global standard for financial messaging. XRP is one of the few cryptos natively compliant. Here's why that matters.",
    url: "https://allaboutxrp.com/learn/xrp-iso-20022",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP and ISO 20022: Why Compliance Matters",
    description: "How ISO 20022 compliance positions XRP for institutional adoption.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-iso-20022" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP and ISO 20022: Why It Matters for Global Payments",
    description: "A comprehensive guide to ISO 20022 compliance, what it means for crypto, and why XRP's native support gives it a competitive advantage.",
    url: "https://allaboutxrp.com/learn/xrp-iso-20022",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP and ISO 20022" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-iso-20022" }),
  buildFAQSchema([
    { question: "What is ISO 20022?", answer: "ISO 20022 is a global standard for financial messaging developed by the International Organization for Standardization. It provides a universal language for financial institutions to communicate about payments, securities, trade finance, and other transactions. It replaces older standards like SWIFT MT messages with richer, more structured data." },
    { question: "Is XRP ISO 20022 compliant?", answer: "Yes. The XRP Ledger natively supports ISO 20022 messaging standards. This means XRP transactions can carry the rich, structured data that banks and financial institutions require for compliance, reconciliation, and straight-through processing." },
    { question: "Why does ISO 20022 matter for XRP?", answer: "ISO 20022 compliance is becoming mandatory for financial institutions worldwide. By 2025, most major payment systems (SWIFT, Fedwire, TARGET2) are migrating to ISO 20022. XRP's native compliance means it can integrate seamlessly with these institutional payment systems, giving it a major advantage over non-compliant cryptocurrencies." },
    { question: "Which cryptocurrencies are ISO 20022 compliant?", answer: "Very few cryptocurrencies have native ISO 20022 compliance. XRP, Stellar (XLM), Hedera (HBAR), Quant (QNT), and IOTA are commonly cited as ISO 20022 compatible. However, the degree of compliance varies — XRP and Stellar have the deepest integration due to their payment-focused architecture." },
    { question: "Does ISO 20022 guarantee XRP will be used by banks?", answer: "No. ISO 20022 compliance is necessary but not sufficient for bank adoption. It means XRP can technically integrate with banking payment systems, but banks also need regulatory clarity, liquidity, reliability, and business justification. Think of ISO 20022 as a prerequisite — it opens the door, but doesn't guarantee entry." },
  ]),
];

const faqItems = [
  { q: "What is ISO 20022?", a: "ISO 20022 is a global standard for financial messaging. It provides a universal language for financial institutions to communicate about payments with richer, more structured data than older standards like SWIFT MT messages." },
  { q: "Is XRP ISO 20022 compliant?", a: "Yes. The XRP Ledger natively supports ISO 20022 messaging standards, meaning XRP transactions can carry the rich, structured data banks require for compliance and reconciliation." },
  { q: "Why does ISO 20022 matter for XRP?", a: "ISO 20022 compliance is becoming mandatory for financial institutions worldwide. XRP's native compliance means it can integrate seamlessly with institutional payment systems like SWIFT, Fedwire, and TARGET2." },
  { q: "Which cryptos are ISO 20022 compliant?", a: "XRP, Stellar (XLM), Hedera (HBAR), Quant (QNT), and IOTA are commonly cited. XRP and Stellar have the deepest integration due to their payment-focused architecture." },
  { q: "Does ISO 20022 guarantee XRP bank adoption?", a: "No. ISO 20022 compliance is necessary but not sufficient. It opens the door for bank integration, but banks also need regulatory clarity, liquidity, and business justification." },
  { q: "When is the ISO 20022 migration deadline?", a: "Most major payment systems have been migrating since 2022-2025. SWIFT's coexistence period with MT messages is ending, and full ISO 20022 adoption is expected by 2025-2026. Banks that can't communicate in ISO 20022 will be left behind." },
];

export default function XRPIso20022Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP and ISO 20022"
          titleAccent="The Global Payments Standard"
          subtitle="The world's financial institutions are migrating to ISO 20022 — a new universal messaging standard. XRP is one of the few cryptocurrencies natively compliant. Here's why that matters more than most people realize."
          breadcrumbLabel="XRP and ISO 20022"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">ISO 20022</strong> is the new global standard for financial messaging, replacing aging formats used by <Link href="/learn/xrp-vs-swift" className="text-xrp-accent underline decoration-xrp-accent/30">SWIFT</Link> and central banks. It carries richer data, enables straight-through processing, and is becoming <strong className="text-text-primary">mandatory</strong> for payment systems worldwide. The <strong className="text-text-primary">XRP Ledger natively supports ISO 20022</strong>, meaning XRP transactions can carry the structured data banks need for compliance and reconciliation — giving it a significant advantage over cryptocurrencies that lack this integration.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Standard", value: "ISO 20022" },
          { label: "Governs", value: "Financial messaging (payments, securities)" },
          { label: "Adoption Target", value: "2025-2026 (mandatory)" },
          { label: "SWIFT Migration", value: "In progress (MT → MX)" },
          { label: "XRP Compliance", value: "Native support" },
          { label: "Data Richness", value: "10x more data than MT messages" },
          { label: "Institutions Affected", value: "11,000+ banks globally" },
          { label: "Payment Systems", value: "SWIFT, Fedwire, TARGET2, CHIPS" },
        ]} />

        <SectionNav items={[
          { id: "what-is-iso-20022", label: "What Is ISO 20022?" },
          { id: "why-it-matters", label: "Why It Matters" },
          { id: "xrp-compliance", label: "XRP's Compliance" },
          { id: "compliant-cryptos", label: "Compliant Cryptos" },
          { id: "migration-timeline", label: "Migration Timeline" },
          { id: "implications", label: "Implications for XRP" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Banks Affected" value="11,000+" delay={0} />
          <StatPill label="Data Richness" value="10x" delay={0.06} />
          <StatPill label="XRP Native" value="✓" delay={0.12} />
          <StatPill label="Deadline" value="2025-26" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what-is-iso-20022">
            <h2 className="text-2xl font-bold text-text-primary">What Is ISO 20022?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              ISO 20022 is a global standard for electronic financial messaging, developed by the International Organization for Standardization. Think of it as a <strong className="text-text-primary">universal language for financial institutions</strong> — a way for banks, payment processors, and clearing houses to communicate about transactions using structured, machine-readable data.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The old standard (SWIFT MT messages) was developed in the 1970s and carries limited, unstructured data. ISO 20022 messages are XML-based and can carry <strong className="text-text-primary">10x more data</strong> — including detailed remittance information, structured addresses, purpose codes, and regulatory data. This enables automated compliance checks, faster reconciliation, and straight-through processing.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Richer Data", desc: "ISO 20022 messages carry structured fields for remittance info, purpose codes, regulatory data, and more — enabling automation." },
                { title: "Universal Format", desc: "One standard for all financial messages: payments, securities, trade finance, FX. Replaces dozens of proprietary formats." },
                { title: "Machine-Readable", desc: "XML/JSON structure enables straight-through processing, AI-powered compliance, and real-time analytics." },
                { title: "Global Adoption", desc: "Mandated by SWIFT, ECB, Federal Reserve, Bank of England, and 70+ countries' payment systems." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="why-it-matters" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why ISO 20022 Matters for the Future of Payments</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The migration to ISO 20022 isn&apos;t optional — it&apos;s becoming <strong className="text-text-primary">mandatory for every major payment system globally</strong>. Banks that can&apos;t send and receive ISO 20022 messages will be cut off from the global financial network.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "SWIFT (11,000+ banks)", desc: "SWIFT is migrating all cross-border messaging from MT to MX (ISO 20022) format. The coexistence period is ending." },
                { title: "Fedwire (US Federal Reserve)", desc: "The US Federal Reserve has adopted ISO 20022 for Fedwire, the backbone of US domestic payments." },
                { title: "TARGET2 (European Central Bank)", desc: "Europe's main payment system migrated to ISO 20022 in March 2023." },
                { title: "CHIPS (US clearing)", desc: "The Clearing House Interbank Payments System adopted ISO 20022 for US dollar clearing." },
                { title: "70+ countries", desc: "National payment systems in over 70 countries are adopting or have adopted ISO 20022." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="The Key Insight" variant="accent">
                <p>Any cryptocurrency that wants to be used by <Link href="/learn/banks-using-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">banks and financial institutions</Link> for payments <strong className="text-text-primary">must be able to carry ISO 20022 data</strong>. This is not a nice-to-have — it&apos;s a prerequisite. Bitcoin, for example, has no native mechanism for carrying structured ISO 20022 payment data.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="xrp-compliance" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How XRP Supports ISO 20022</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> was designed with institutional payments in mind. Its native support for ISO 20022 comes through several mechanisms:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Memo fields for structured data", desc: "XRP transactions include memo fields that can carry ISO 20022-formatted payment data, enabling rich remittance information." },
                { title: "Ripple's payment messaging layer", desc: "RippleNet's messaging infrastructure is fully ISO 20022 native, wrapping XRP transactions in compliant message formats." },
                { title: "Transaction metadata", desc: "The XRPL supports extensive metadata in transactions, compatible with ISO 20022's structured data requirements." },
                { title: "Destination tags for routing", desc: "XRP's destination tag system enables precise payment routing that maps to ISO 20022 addressing standards." },
              ]} variant="check" />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              The practical result: when a bank sends a <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">cross-border payment</Link> using <Link href="/learn/on-demand-liquidity" className="text-xrp-accent underline decoration-xrp-accent/30">ODL</Link>, the transaction carries all the structured data that the receiving bank&apos;s compliance systems expect. There&apos;s no data loss or format conversion needed — XRP transactions fit natively into the ISO 20022 workflow.
            </p>
          </RevealSection>

          <RevealSection id="compliant-cryptos" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Which Cryptocurrencies Are ISO 20022 Compliant?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Only a handful of cryptocurrencies have meaningful ISO 20022 compliance. Here&apos;s how they compare:
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Cryptocurrency", "ISO 20022 Support", "Payment Focus", "Institutional Adoption"]}
                rows={[
                  ["XRP (Ripple)", "Native — full compliance", "Cross-border bank payments", "300+ institutions"],
                  ["Stellar (XLM)", "Native — full compliance", "Financial inclusion", "50+ partners"],
                  ["Hedera (HBAR)", "Compatible", "Enterprise DLT", "Growing"],
                  ["Quant (QNT)", "Interoperability layer", "Cross-chain connectivity", "Limited"],
                  ["IOTA", "Compatible", "IoT payments", "Minimal"],
                  ["Bitcoin (BTC)", "Not compliant", "Store of value", "Via ETFs only"],
                  ["Ethereum (ETH)", "Not compliant", "Smart contracts / DeFi", "DeFi-focused"],
                ]}
                highlightCol={1}
              />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              Among ISO 20022-compliant cryptos, <strong className="text-text-primary">XRP has by far the most institutional adoption</strong>, with <Link href="/learn/partnerships" className="text-xrp-accent underline decoration-xrp-accent/30">300+ financial institution partnerships</Link> and live payment corridors across 55+ countries. <Link href="/learn/xrp-vs-stellar" className="text-xrp-accent underline decoration-xrp-accent/30">Stellar</Link> is the next closest competitor in the payment-focused ISO 20022 category.
            </p>
          </RevealSection>

          <RevealSection id="migration-timeline" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">ISO 20022 Migration Timeline</h2>
            <div className="mt-6">
              <DataTable
                headers={["System", "Region", "Migration Status"]}
                rows={[
                  ["TARGET2", "Europe (ECB)", "Completed March 2023"],
                  ["CHIPS", "United States", "Completed 2023"],
                  ["Fedwire", "United States", "Completed March 2025"],
                  ["SWIFT Cross-Border", "Global", "Coexistence ending 2025"],
                  ["BOE CHAPS", "United Kingdom", "Completed June 2023"],
                  ["RITS", "Australia", "Completed 2024"],
                  ["CNAPS2", "China", "In progress"],
                ]}
                highlightCol={2}
              />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              The migration is essentially complete for major systems. By the end of 2025-2026, <strong className="text-text-primary">ISO 20022 will be the only accepted format</strong> for most cross-border and domestic high-value payments. Any crypto or fintech that doesn&apos;t speak this language will be locked out of institutional payment flows.
            </p>
          </RevealSection>

          <RevealSection id="implications" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What This Means for XRP&apos;s Future</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              ISO 20022 compliance isn&apos;t just a technical checkbox — it&apos;s a <strong className="text-text-primary">strategic moat</strong> for XRP. Here&apos;s why:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Institutional gateway", desc: "ISO 20022 compliance is the entry ticket for institutional adoption. Banks can integrate XRP into their existing payment workflows without data format friction." },
                { title: "Competitive advantage over BTC/ETH", desc: "Bitcoin and Ethereum lack native ISO 20022 support. For institutional payment use cases, this gives XRP a clear technical advantage." },
                { title: "CBDC interoperability", desc: "Central bank digital currencies are being built on ISO 20022 standards. XRP's compliance positions it as a natural bridge currency between CBDCs." },
                { title: "Regulatory alignment", desc: "ISO 20022's rich data supports AML/KYC compliance. Using XRP within ISO 20022 frameworks helps institutions meet regulatory requirements." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="The Bottom Line" variant="success">
                <p>ISO 20022 compliance doesn&apos;t guarantee XRP&apos;s success, but it <strong className="text-text-primary">eliminates a critical barrier</strong> to institutional adoption. As the world&apos;s financial infrastructure standardizes on ISO 20022, XRP is already speaking the language. Combined with <Link href="/learn/how-banks-use-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">existing bank partnerships</Link> and <Link href="/learn/is-xrp-a-security" className="text-xrp-accent underline decoration-xrp-accent/30">regulatory clarity</Link>, ISO 20022 compliance strengthens XRP&apos;s position as the leading crypto for institutional payments.</p>
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
              { href: "/learn/how-banks-use-xrp", label: "How Banks Use XRP", desc: "Institutional adoption" },
              { href: "/learn/banks-using-xrp", label: "Banks Using XRP", desc: "Complete institution list" },
              { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "Why XRP changes everything" },
              { href: "/learn/partnerships", label: "Ripple Partnerships", desc: "Banks & institutions" },
              { href: "/learn/xrp-institutional-custody", label: "Institutional Custody", desc: "Enterprise storage" },
              { href: "/learn/ripplenet", label: "RippleNet", desc: "Global payment network" },
              { href: "/learn/on-demand-liquidity", label: "On-Demand Liquidity", desc: "XRP bridge currency" },
              { href: "/learn/ripple-software-stack", label: "Ripple Software Stack", desc: "Complete product suite" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore XRP's Institutional Advantage"
          description="ISO 20022 compliance is just one part of XRP's institutional story. Discover how banks are already using XRP."
          primaryHref="/learn/how-banks-use-xrp"
          primaryLabel="How Banks Use XRP →"
          secondaryHref="/learn/xrp-vs-swift"
          secondaryLabel="XRP vs SWIFT"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: ISO.org, SWIFT.com, ECB.europa.eu, Ripple.com, XRPL.org.</em>
        </p>
      </div>
    </>
  );
}
