import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import SourceList from "@/components/shared/SourceList";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, MisconceptionCard, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What is XRP? Complete Guide to XRP Cryptocurrency",
  description:
    "What is XRP? Learn how XRP works, its use cases, tokenomics, and why it's built for fast global payments. Your complete XRP guide for 2026.",
  openGraph: {
    title: "What is XRP? Complete Cryptocurrency Guide | AllAboutXRP",
    description:
      "Everything you need to know about XRP — the digital asset built for fast, low-cost global payments on the XRP Ledger.",
    url: "https://allaboutxrp.com/learn/what-is-xrp",
    type: "article",
    images: [{ url: "https://allaboutxrp.com/opengraph-image", width: 1200, height: 630, alt: "AllAboutXRP guide to XRP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is XRP? Complete Guide | AllAboutXRP",
    description:
      "Learn what XRP is, how it works, and why it matters. Comprehensive guide covering XRP explained simply.",
    images: ["https://allaboutxrp.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/what-is-xrp",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "What is XRP? Complete Guide to XRP Cryptocurrency",
    description: "A comprehensive guide explaining what XRP is, how it works, its tokenomics, use cases, and role in the future of global payments.",
    url: "https://allaboutxrp.com/learn/what-is-xrp",
    datePublished: "2026-02-10",
    dateModified: "2026-07-29",
    citations: [
      "https://xrpl.org/about/xrp",
      "https://xrpl.org/docs/concepts/consensus-protocol",
      "https://xrpl.org/docs/concepts/transactions/transaction-cost",
      "https://xrpl.org/docs/concepts/accounts/reserves",
      "https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26369",
    ],
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "What is XRP?" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/what-is-xrp" }),
  buildFAQSchema([
    { question: "What is XRP in simple terms?", answer: "XRP is the native digital asset of the XRP Ledger. It pays transaction costs and can be used directly in payments or as a bridge between assets. The network usually closes a new ledger version in three to five seconds." },
    { question: "Is XRP the same as Ripple?", answer: "No. XRP is an asset native to the open-source XRP Ledger. Ripple is a private company that builds products and holds XRP. The asset, ledger, and company are related but distinct." },
    { question: "How many XRP tokens exist?", answer: "100 billion XRP were created at genesis. No more can ever be minted. XRP is slightly deflationary because small amounts are burned with every transaction." },
    { question: "Is XRP a good investment?", answer: "XRP is a volatile crypto asset and is not suitable for everyone. Evaluate its use case, supply, custody, liquidity, regulation, competition, and your capacity for loss instead of relying on price forecasts or promotional claims." },
    { question: "What makes XRP different from Bitcoin?", answer: "The XRP Ledger uses a validator-based consensus process instead of proof-of-work mining, usually closes ledgers in three to five seconds, and includes native exchange and issued-asset functions. Bitcoin uses proof of work and has a different monetary policy and design goal." },
  ]),
];

const faqItems = [
  { q: "What is XRP in simple terms?", a: "XRP is the native digital asset of the XRP Ledger. It pays transaction costs and can be used directly in payments or as a bridge between assets. The network usually closes a new ledger version in three to five seconds." },
  { q: "Is XRP the same as Ripple?", a: "No. XRP is an asset native to the open-source XRP Ledger. Ripple is a private company that builds products and holds XRP. The asset, ledger, and company are related but distinct." },
  { q: "How many XRP tokens exist?", a: "100 billion XRP were created at genesis and no additional XRP can be minted. The total supply gradually declines because transaction costs are destroyed. Circulating-supply estimates vary by provider and over time, so check the methodology and date behind any current figure." },
  { q: "Is XRP a good investment?", a: "XRP is a volatile crypto asset and is not suitable for everyone. Evaluate its use case, supply, custody, liquidity, regulation, competition, and your capacity for loss instead of relying on price forecasts or promotional claims." },
  { q: "What makes XRP different from Bitcoin?", a: "The XRP Ledger uses a validator-based consensus process instead of proof-of-work mining, usually closes ledgers in three to five seconds, and includes native exchange and issued-asset functions. Bitcoin uses proof of work and has a different monetary policy and design goal." },
  { q: "How do I buy XRP?", a: "Choose a venue that serves your jurisdiction and supports XRP withdrawals, complete its identity checks, fund the account, and compare the total order cost before confirming. Plan whether you will use exchange custody or a self-custody wallet before purchasing." },
];

export default function WhatIsXRPPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="What is"
          titleAccent="XRP?"
          subtitle="XRP is a digital asset native to the XRP Ledger (XRPL), an open-source, decentralized blockchain purpose-built for payments. Created in 2012, XRP was designed to move money globally in seconds for fractions of a cent."
          breadcrumbLabel="What is XRP?"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-11" modified="2026-07-29" />
            <LastUpdated date="July 29, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP</strong> is the native digital asset of the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>, an open-source network that usually closes ledgers in three to five seconds. XRP pays transaction costs and can bridge value between assets. All 100 billion XRP were created at launch; no additional XRP can be minted. <a href="https://xrpl.org/about/xrp" data-source-link="true" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">Verify the protocol facts on XRPL.org</a>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Created", value: "June 2, 2012" },
          { label: "Total Supply", value: "100 billion (fixed)" },
          { label: "Settlement Time", value: "3-5 seconds" },
          { label: "Transaction Fee", value: "< $0.01" },
          { label: "Consensus", value: "Federated Consensus Protocol" },
          { label: "Throughput", value: "1,500+ TPS" },
          { label: "Creators", value: "David Schwartz, Jed McCaleb, Arthur Britto" },
          { label: "U.S. Court Context", value: "Treatment depends on the transaction" },
        ]} />

        <SectionNav items={[
          { id: "basics", label: "The Basics" },
          { id: "how-it-works", label: "How It Works" },
          { id: "tokenomics", label: "Tokenomics" },
          { id: "vs-others", label: "Comparisons" },
          { id: "use-cases", label: "Use Cases" },
          { id: "creators", label: "Creators" },
          { id: "sec-case", label: "SEC Case" },
          { id: "mistakes", label: "Common Mistakes" },
          { id: "faq", label: "FAQ" },
        ]} />


        {/* Key Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Settlement Time" value="3-5 sec" delay={0} />
          <StatPill label="Transaction Fee" value="< $0.01" delay={0.06} />
          <StatPill label="Throughput" value="1,500+ TPS" delay={0.12} />
          <StatPill label="Total Supply" value="100B (fixed)" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== THE BASICS ===== */}
          <RevealSection id="basics">
            <h2 className="text-2xl font-bold text-text-primary">XRP Explained: The Basics</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP is a <strong className="text-text-primary">cryptocurrency</strong> — a digital asset that uses cryptography and blockchain technology to enable secure, peer-to-peer transactions without intermediaries. But XRP isn&apos;t just another cryptocurrency. It was specifically engineered to solve one of the biggest problems in global finance: moving money across borders quickly and cheaply.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP can be transferred on the ledger without a proof-of-work miner or a correspondent-bank chain. The network usually validates a new ledger in three to five seconds, while the minimum cost for a standard transaction is currently 0.00001 XRP and can rise when the network is under load.
            </p>

            <div className="mt-6">
              <HighlightBox title="Key Insight" variant="accent">
                <p>Performance figures describe the network&apos;s technical capacity, not guaranteed end-to-end payment speed. Exchange processing, compliance checks, liquidity, and the off-ledger steps on either side of a transfer can take longer than an XRPL ledger close.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== HOW IT WORKS ===== */}
          <RevealSection id="how-it-works" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Does XRP Work?</h2>

            <h3 className="mt-6 text-xl font-semibold text-text-primary">The XRP Ledger Consensus Protocol</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Unlike Bitcoin, which uses energy-intensive proof-of-work (PoW) mining, the XRP Ledger uses a unique <strong className="text-text-primary">Federated Consensus Protocol</strong>. A network of independent validators agrees on the order and validity of XRP transactions every 3-5 seconds.
            </p>

            <div className="mt-5">
              <IconList items={[
                { title: "Fast", desc: "Transactions confirm in 3-5 seconds, not minutes or hours" },
                { title: "Energy-efficient", desc: "Consensus does not require proof-of-work mining" },
                { title: "Open participation", desc: "Anyone can run validator software, while each server chooses which validators it trusts" },
                { title: "Deterministic", desc: "Transactions either succeed or fail under the shared ledger rules" },
              ]} variant="zap" />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Bridge Currency for Cross-Border Payments</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              XRP&apos;s primary use case is as a <strong className="text-text-primary">bridge currency</strong> for international payments. A sender converts their local currency to XRP, the XRP is transferred across the XRPL in seconds, and the recipient&apos;s financial institution converts the XRP to their local currency. This eliminates the need for pre-funded nostro/vostro accounts — freeing up trillions of dollars currently locked in the global banking system.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              <Link href="/learn/what-is-ripple" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">Ripple&apos;s</Link> On-Demand Liquidity (ODL) product leverages this bridge currency function, enabling financial institutions to send cross-border payments without maintaining accounts in destination currencies.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Native Features of the XRP Ledger</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Beyond simple payments, the XRPL includes powerful built-in features:
            </p>
            <div className="mt-5">
              <FeatureGrid columns={3} items={[
                { title: "Decentralized Exchange", desc: "A built-in order book for trading any XRPL-issued asset", mono: false },
                { title: "Escrow", desc: "Time-locked and condition-based escrow contracts enforced by the protocol" },
                { title: "NFTs (XLS-20)", desc: "Native NFT minting and trading since October 2022" },
                { title: "AMM", desc: "Native Automated Market Maker functionality for decentralized liquidity" },
                { title: "Token Issuance", desc: "Issue stablecoins, CBDCs, and tokenized assets on the XRPL" },
                { title: "Multi-signing", desc: "Require multiple parties to authorize a transaction for security" },
              ]} />
            </div>
          </RevealSection>

          {/* ===== TOKENOMICS ===== */}
          <RevealSection id="tokenomics" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP Tokenomics: Supply Breakdown</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">100 billion XRP</strong> were created when the XRP Ledger launched in 2012. This is a fixed supply: no additional XRP can be minted. Some XRP is held in <Link href="/learn/escrow" className="text-xrp-accent underline decoration-xrp-accent/30">time-based escrow</Link>, and the amount considered circulating varies with the data provider&apos;s classification method.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Category", "Amount", "Details"]}
                rows={[
                  ["Total Supply", "100B XRP", "Fixed forever — no inflation"],
                  ["Circulating Supply", "Changes over time", "Check the provider's method and date"],
                  ["Time-based Escrow", "Changes monthly", "Verify with ledger records"],
                  ["Transaction Costs", "Destroyed", "Total supply gradually declines"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="Deflationary by Design" variant="success">
                <p>Every validated transaction destroys the exact XRP amount specified in its Fee field. The current minimum for a standard transaction is 0.00001 XRP, but the required cost can rise under load and can be changed through the network&apos;s fee-voting process.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== COMPARISONS ===== */}
          <RevealSection id="vs-others" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP vs. Bitcoin vs. Ethereum: How Do They Compare?</h2>

            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRP", "Bitcoin", "Ethereum"]}
                rows={[
                  ["Settlement Time", "3-5 seconds", "10-60 minutes", "12-15 seconds"],
                  ["Transaction Fee", "< $0.01", "$1-50+", "$0.50-100+"],
                  ["Throughput", "1,500+ TPS", "~7 TPS", "~30 TPS"],
                  ["Consensus", "Federated Consensus", "Proof of Work", "Proof of Stake"],
                  ["Total Supply", "100B (fixed)", "21M (capped)", "~120M (variable)"],
                  ["Primary Use Case", "Payments & Bridging", "Store of Value", "Smart Contracts"],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="How Is XRP Different?" variant="info">
                <ol className="list-decimal pl-4 space-y-2">
                  <li><strong className="text-text-primary">Purpose-built for payments:</strong> While Bitcoin was designed as &quot;digital gold&quot; and Ethereum as a smart contract platform, XRP was engineered specifically for fast, low-cost value transfer.</li>
                  <li><strong className="text-text-primary">No mining:</strong> XRPL consensus does not use proof-of-work mining or pay block rewards.</li>
                  <li><strong className="text-text-primary">Pre-mined fixed supply:</strong> All 100 billion XRP existed from day one. Combined with the deflationary burn mechanism, XRP&apos;s supply only decreases over time.</li>
                  <li><strong className="text-text-primary">Built-in exchange:</strong> The ledger includes a decentralized exchange and pathfinding between issued assets.</li>
                  <li><strong className="text-text-primary">Transaction-specific legal context:</strong> The U.S. court distinguished categories of Ripple&apos;s XRP sales; it did not create one worldwide rule for every transaction.</li>
                </ol>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== USE CASES ===== */}
          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Are XRP&apos;s Use Cases?</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Native Payments", desc: "XRP can move directly between accounts and can bridge paths between assets on the ledger." },
                { title: "Issued Assets", desc: "Organizations can issue fungible tokens while users manage trust lines and transfer rules." },
                { title: "Decentralized Exchange", desc: "Order books and automated market makers are built into the protocol rather than added through a separate smart contract." },
                { title: "Escrow and Payment Channels", desc: "Protocol-native primitives support time-based releases and high-volume off-ledger payment flows." },
                { title: "Tokenization", desc: "The ledger supports fungible tokens, NFTs, and multi-purpose tokens with issuer controls." },
                { title: "Bridge Liquidity", desc: "Pathfinding can combine order books and liquidity pools to route value between available assets." },
              ]} />
            </div>
          </RevealSection>

          {/* ===== CREATORS ===== */}
          <RevealSection id="creators" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Who Created XRP and the XRP Ledger?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP Ledger was created by three developers: <strong className="text-text-primary">David Schwartz</strong> (now Ripple&apos;s CTO, known online as &quot;JoelKatz&quot;), <strong className="text-text-primary">Jed McCaleb</strong> (who later co-founded Stellar), and <strong className="text-text-primary">Arthur Britto</strong>. Development began in 2011 as they sought to build a faster, more energy-efficient alternative to Bitcoin.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The XRPL went live on June 2, 2012, with all 100 billion XRP created at genesis. <strong className="text-text-primary">Chris Larsen</strong> joined the team and together they formed OpenCoin (later renamed to <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link>) in September 2012.
            </p>

            <div className="mt-5">
              <HighlightBox title="Important Distinction" variant="warning">
                <p><strong className="text-text-primary">The XRP Ledger was created before Ripple the company existed.</strong> The XRPL is open-source and decentralized — it would continue to operate even if Ripple ceased to exist. Learn about the team on our <Link href="/learn/leadership" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple Leadership</Link> page.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== ESCROW ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Does XRP&apos;s Escrow System Work?</h2>

            <div className="mt-5">
              <GlowCard
                title="December 16, 2017"
                value="55,000,000,000 XRP"
                subtitle="Locked into cryptographically enforced escrow contracts on the XRP Ledger"
              />
            </div>

            <p className="mt-5 text-text-secondary leading-relaxed">
              The original escrow schedule releases time-based tranches on the ledger. A release does not by itself show that XRP entered the open market: the receiving account can transfer, hold, use, or place XRP into a new escrow. Current balances and subsequent transactions should be checked against ledger records rather than inferred from the scheduled amount alone.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Read our comprehensive deep dive: <Link href="/learn/escrow" className="text-xrp-accent hover:text-xrp-accent-bright transition-colors underline decoration-xrp-accent/30">XRP Escrow: The Complete Guide →</Link>
            </p>
          </RevealSection>

          {/* ===== SEC CASE ===== */}
          <RevealSection id="sec-case" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The SEC Case and Regulatory Clarity</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In December 2020, the SEC sued Ripple Labs and two executives over offers and sales of XRP. The district court&apos;s 2023 summary-judgment decision distinguished Ripple&apos;s institutional sales from programmatic sales and other distributions. That transaction-specific analysis should not be compressed into a claim that every XRP transaction has one legal status in every jurisdiction.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The August 2024 final judgment imposed a $125,035,150 civil penalty and an injunction. In August 2025, the SEC and Ripple dismissed their appeals, leaving that final judgment in effect. <a href="https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26369" data-source-link="true" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">Read the SEC&apos;s case-resolution notice</a>.
            </p>
            <p className="mt-3 text-sm text-text-secondary">
              Learn more in our <Link href="/learn/history" className="text-xrp-accent underline decoration-xrp-accent/30">complete history and timeline</Link>.
            </p>
          </RevealSection>

          {/* ===== WHAT TO MONITOR ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Should XRP Readers Monitor?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Separate changes to the public ledger from announcements about Ripple, exchanges, funds, or regulation. Each evidence type answers a different question:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Protocol changes", desc: "Use XRPL amendment and release documentation to verify what the network can do." },
                { title: "Ledger activity", desc: "Use reproducible on-chain queries, timestamps, and methodology instead of social-media screenshots." },
                { title: "Regulatory status", desc: "Read regulator notices, court records, and jurisdiction-specific rules before drawing conclusions." },
                { title: "Product availability", desc: "Verify exchange, custody, and fund availability in the provider's current official disclosures." },
                { title: "Commercial adoption", desc: "Distinguish a pilot, partnership, integration, and production transaction volume." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          {/* ===== WHY XRP MATTERS ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why Does XRP Matter?</h2>
            <div className="mt-5">
              <HighlightBox title="A purpose-built settlement asset" variant="accent" large>
                <p>XRP matters because it is native liquidity inside a public ledger designed around payments, exchange, and issued assets. Its relevance depends on whether people and institutions actually use those functions—not on a price target or a company announcement.</p>
                <p className="mt-3">Evaluate the XRP Ledger as public infrastructure, <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> as a separate company, and XRP as a volatile asset with its own liquidity, custody, concentration, and regulatory risks.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== COMMON MISTAKES ===== */}
          <RevealSection id="mistakes" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Common Mistakes to Avoid</h2>
            <div className="mt-5 space-y-3">
              <MisconceptionCard myth="Ripple and XRP are the same thing" reality="Ripple is a company; XRP is a decentralized digital asset. They are related but distinct. XRP would continue to exist even if Ripple ceased operations." />
              <MisconceptionCard myth="XRP has unlimited supply" reality="XRP has a fixed supply of 100 billion. No more can ever be created. It's actually deflationary — transaction fees permanently burn XRP." />
              <MisconceptionCard myth="A scheduled escrow release proves selling" reality="A release changes who can move the XRP; it does not by itself show where the XRP went. Follow the resulting ledger transactions." />
              <MisconceptionCard myth="Self-custody is automatically safer" reality="Self-custody removes exchange custody risk but adds key-management and recovery risk. The safer choice depends on your controls and capability." />
              <MisconceptionCard myth="The wallet reserve never changes" reality="The base reserve is a network setting that validators can change. Verify the current value before funding a new account." />
            </div>
          </RevealSection>

          {/* ===== FAQ ===== */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* ===== CONTINUE LEARNING ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Technology explained simply" },
              { href: "/learn/ripple-vs-xrp", label: "Ripple vs XRP", desc: "Key differences explained" },
              { href: "/learn/xrp-for-beginners", label: "XRP for Beginners", desc: "Start your XRP journey" },
              { href: "/learn/faq", label: "XRP FAQ", desc: "Common questions answered" },
              { href: "/how-to-start", label: "Get Started with XRP", desc: "A risk-aware buying and custody checklist" },
              { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", desc: "Step-by-step buying guide" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Security best practices" },
            ]} />
          </RevealSection>
        </div>

        <div className="mt-10">
          <HighlightBox title="Keep the legal conclusion precise" variant="info">
            <p>The 2023 summary-judgment decision addressed specific categories of XRP sales; it did not declare that every XRP transaction is categorically outside securities law. Legal status depends on the transaction and jurisdiction, so this guide separates the asset, Ripple the company, and the circumstances in which XRP is offered or sold.</p>
          </HighlightBox>
        </div>

        <SourceList sources={[
          { label: "XRPL.org: XRP overview", href: "https://xrpl.org/about/xrp", note: "XRP purpose, supply, settlement, and its relationship to Ripple" },
          { label: "XRPL consensus protocol", href: "https://xrpl.org/docs/concepts/consensus-protocol", note: "How transactions are validated without mining" },
          { label: "XRPL transaction cost", href: "https://xrpl.org/docs/concepts/transactions/transaction-cost", note: "Current minimum fee, load scaling, and fee destruction" },
          { label: "XRPL account reserves", href: "https://xrpl.org/docs/concepts/accounts/reserves", note: "Current base and owner reserve settings" },
          { label: "SEC: Ripple case resolution", href: "https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26369", note: "Final judgment, civil penalty, injunction, and dismissal of appeals" },
        ]} />

        {/* Conclusion CTA */}
        <LearnCTA
          title="Continue with a practical checklist"
          description="If you decide to buy XRP, compare current fees and eligibility, plan custody before purchasing, and verify addresses and reserve requirements before withdrawing."
          primaryHref="/how-to-start"
          primaryLabel="How to Start with XRP →"
          secondaryHref="/learn/what-is-ripple"
          secondaryLabel="Learn About Ripple"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Reviewed July 29, 2026. Published by AllAboutXRP. Use the linked primary sources for current protocol and legal details.</em>
        </p>
      </div>
    </>
  );
}
