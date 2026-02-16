import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRPL Price Oracles: Bringing Off-Chain Data On-Chain",
  description: "How price oracles work on the XRPL. Native oracle support, Band Protocol integration, and why oracles matter for DeFi.",
  keywords: ["XRPL oracles", "XRP price oracle", "XRPL oracle data", "Band Protocol XRPL"],
  openGraph: {
    title: "XRPL Price Oracles | AllAboutXRP",
    description: "How price oracles work on the XRPL — native support, integrations, and DeFi implications.",
    url: "https://allaboutxrp.com/learn/xrpl-oracles",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL Oracles | AllAboutXRP",
    description: "Price oracles on the XRP Ledger — bringing real-world data on-chain.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-oracles" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRPL Price Oracles: Bringing Off-Chain Data On-Chain",
    description: "How price oracles work on the XRP Ledger — native oracle amendment, oracle providers, DeFi implications, and how they enable real-world data on-chain.",
    url: "https://allaboutxrp.com/learn/xrpl-oracles",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL Oracles" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-oracles" }),
  buildFAQSchema([
    { question: "What are price oracles on the XRPL?", answer: "Price oracles are services that bring off-chain data (like asset prices, exchange rates, weather data) onto the XRP Ledger. The XRPL has native oracle support (XLS-47d amendment) that allows accounts to publish price data directly on-chain as ledger objects." },
    { question: "Why does the XRPL need oracles?", answer: "Blockchains can't access external data natively. DeFi applications need real-world price data for lending (collateral values), AMM pricing, liquidation triggers, and tokenized asset valuation. Oracles bridge this gap by feeding trusted external data onto the ledger." },
    { question: "How do XRPL native oracles work?", answer: "The XLS-47d Price Oracle amendment allows XRPL accounts to create Oracle objects that store price data on-chain. Oracle providers publish price updates using OracleSet transactions. Applications can read this data from the ledger for their DeFi logic." },
    { question: "What oracle providers work with XRPL?", answer: "Band Protocol has integrated with the XRPL to provide decentralized oracle data. Additionally, the native oracle amendment allows any trusted entity to publish price feeds directly on-chain without third-party infrastructure." },
    { question: "Are XRPL oracles decentralized?", answer: "The native oracle system allows multiple providers to publish price data, and applications can aggregate feeds from multiple sources for decentralization. Band Protocol provides additional decentralized oracle infrastructure with its own validator network." },
  ]),
];

const faqItems = [
  { q: "What are price oracles?", a: "Services that bring off-chain data (prices, rates, external info) onto the XRP Ledger. XRPL has native oracle support (XLS-47d) for publishing price data directly as ledger objects." },
  { q: "Why does XRPL need oracles?", a: "DeFi needs real-world data — collateral values, exchange rates, liquidation triggers. Blockchains can't access external data natively; oracles bridge this gap." },
  { q: "How do native oracles work?", a: "XLS-47d lets accounts create Oracle objects storing price data on-chain. Providers publish updates via OracleSet transactions. Apps read data from the ledger." },
  { q: "What providers work with XRPL?", a: "Band Protocol is integrated for decentralized oracle data. The native amendment also lets any trusted entity publish price feeds directly." },
  { q: "Are they decentralized?", a: "Multiple providers can publish data, and apps can aggregate from several sources. Band Protocol adds additional decentralization with its own validator network." },
  { q: "How do oracles affect DeFi on XRPL?", a: "Oracles unlock advanced DeFi — lending protocols need price feeds for liquidations, derivatives need price data, and RWA tokenization needs asset valuations. They're a critical DeFi building block." },
];

export default function XRPLOraclesPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL Price Oracles:"
          titleAccent="Bringing Off-Chain Data On-Chain"
          subtitle="Oracles are the bridge between the real world and the blockchain. Here's how the XRPL is building native oracle infrastructure."
          breadcrumbLabel="XRPL Oracles"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Price oracles feed real-world data (prices, rates) onto the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>. The XRPL has <strong className="text-text-primary">native oracle support</strong> (XLS-47d) built into the protocol, plus <strong className="text-text-primary">Band Protocol integration</strong> for decentralized data feeds. Oracles are critical for <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">DeFi</Link>, lending, and <Link href="/learn/xrp-real-world-assets" className="text-xrp-accent underline decoration-xrp-accent/30">RWA tokenization</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Amendment", value: "XLS-47d (Price Oracle)" },
          { label: "Purpose", value: "Bring off-chain data on-chain" },
          { label: "Provider", value: "Band Protocol + native" },
          { label: "Data Types", value: "Prices, exchange rates, more" },
          { label: "Critical For", value: "DeFi, lending, RWA" },
        ]} />

        <SectionNav items={[
          { id: "what-are-oracles", label: "What Are Oracles?" },
          { id: "native-oracles", label: "Native Oracles" },
          { id: "band-protocol", label: "Band Protocol" },
          { id: "use-cases", label: "Use Cases" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Standard" value="XLS-47d" delay={0} />
          <StatPill label="Type" value="Native" delay={0.06} />
          <StatPill label="Provider" value="Band + More" delay={0.12} />
          <StatPill label="For" value="DeFi/RWA" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what-are-oracles">
            <h2 className="text-2xl font-bold text-text-primary">What Are Blockchain Oracles?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Blockchains are <strong className="text-text-primary">deterministic, closed systems</strong> — they can only access data that&apos;s already on-chain. They can&apos;t query APIs, check stock prices, or read sensor data. <strong className="text-text-primary">Oracles</strong> solve this by acting as trusted bridges that bring external data onto the blockchain.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Price Feeds", desc: "Real-time asset prices — XRP/USD, BTC/USD, gold, stocks. Essential for DeFi lending and liquidation." },
                { title: "Exchange Rates", desc: "Fiat currency exchange rates for cross-border payment applications." },
                { title: "Market Data", desc: "Trading volume, market cap, volatility indices for derivatives and structured products." },
                { title: "Real-World Events", desc: "Weather data, sports scores, election results — for prediction markets and insurance." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="native-oracles" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL Native Oracle Support</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">XLS-47d Price Oracle amendment</strong> adds native oracle support directly into the XRPL protocol. This means oracle data is stored as first-class ledger objects — not smart contracts — with all the performance and reliability benefits of protocol-native features.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "OracleSet Transaction", desc: "Oracle providers publish price data using the OracleSet transaction type. Up to 10 price pairs per oracle object." },
                { title: "On-Ledger Storage", desc: "Price data is stored directly on the XRPL as Oracle objects, accessible by any application reading the ledger." },
                { title: "Aggregation", desc: "The get_aggregate_price API method aggregates data from multiple oracle providers, calculating mean, median, and trimmed statistics." },
                { title: "Freshness Tracking", desc: "Each price update includes a timestamp, allowing applications to verify data freshness before using it." },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <GlowCard
                title="Protocol-Native"
                value="First-Class Oracles"
                subtitle="XRPL oracles are built into the protocol — not smart contracts"
              />
            </div>
          </RevealSection>

          <RevealSection id="band-protocol" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Band Protocol Integration</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Band Protocol</strong> is a cross-chain oracle platform that has integrated with the XRPL. It provides decentralized, tamper-resistant data feeds secured by its own validator network — adding an additional layer of trust and decentralization to XRPL oracle data.
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Decentralized Validation", desc: "Band's own validators aggregate data from multiple sources, preventing single-point-of-failure." },
                { title: "Cross-Chain", desc: "Band serves multiple blockchains, providing consistent data across ecosystems." },
                { title: "Customizable Feeds", desc: "Applications can request specific data pairs and update frequencies." },
                { title: "Proven Track Record", desc: "Band Protocol secures billions in DeFi value across multiple chains." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Oracle Use Cases on XRPL</h2>
            <div className="mt-6">
              <DataTable
                headers={["Use Case", "Data Needed", "Why It Matters"]}
                rows={[
                  ["DeFi Lending", "Asset prices", "Determine collateral ratios and trigger liquidations"],
                  ["AMM Pricing", "External prices", "Reduce arbitrage opportunities and IL"],
                  ["RWA Tokenization", "Asset valuations", "Keep tokenized asset prices accurate"],
                  ["Cross-Border Payments", "FX rates", "Calculate real-time conversion rates"],
                  ["Insurance", "Event data", "Trigger automated payouts based on conditions"],
                  ["Derivatives", "Market data", "Settlement prices for futures and options"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "DeFi ecosystem" },
              { href: "/learn/xrpl-amm-liquidity-pools", label: "XRPL AMM", desc: "Liquidity pools" },
              { href: "/learn/xrp-real-world-assets", label: "RWA on XRPL", desc: "Tokenized assets" },
              { href: "/learn/xrpl-hooks-explained", label: "XRPL Hooks", desc: "Smart logic" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger", desc: "XRPL fundamentals" },
              { href: "/learn/xrpl-transaction-fees", label: "Transaction Fees", desc: "How fees work" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore XRPL Infrastructure"
          description="Oracles are one piece of the XRPL's growing infrastructure. Learn about the full technology stack."
          primaryHref="/learn/xrp-ledger-explained"
          primaryLabel="XRP Ledger Explained →"
          secondaryHref="/learn/xrpl-defi"
          secondaryLabel="XRPL DeFi"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Band Protocol, XLS-47d specification.</em>
        </p>
      </div>
    </>
  );
}
