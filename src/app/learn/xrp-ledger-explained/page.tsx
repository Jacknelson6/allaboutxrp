import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, MisconceptionCard, IconList, GlowCard,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRP Ledger Explained: How XRPL Works (2026)",
  description:
    "How does the XRP Ledger work? Learn about XRPL consensus, validators, features, and architecture in this technical guide.",
  openGraph: {
    title: "XRP Ledger Explained: How XRPL Works | AllAboutXRP",
    description:
      "Complete technical guide to the XRP Ledger — consensus protocol, validators, DEX, AMM, NFTs, and more.",
    url: "https://allaboutxrp.com/learn/xrp-ledger-explained",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Ledger Explained | AllAboutXRP",
    description: "How the XRP Ledger works — consensus, validators, native features, and why it matters.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrp-ledger-explained",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Ledger Explained: How XRPL Works",
    description: "A comprehensive technical guide explaining how the XRP Ledger works, including its consensus protocol, validator network, native features, and architecture.",
    url: "https://allaboutxrp.com/learn/xrp-ledger-explained",
    datePublished: "2026-02-11",
    dateModified: "2026-02-11",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Ledger Explained" },
  ]),
  buildFAQSchema([
    { question: "What is the XRP Ledger?", answer: "The XRP Ledger (XRPL) is an open-source, decentralized blockchain created in 2012. It's the native blockchain for XRP and features a built-in decentralized exchange, automated market maker, NFT support, and more. It settles transactions in 3-5 seconds." },
    { question: "How does XRPL consensus work?", answer: "The XRPL uses the Federated Consensus Protocol. Over 150 independent validators propose and vote on transaction sets. When 80% of validators on each Unique Node List agree, the ledger closes — typically in 3-5 seconds. No mining or staking is required." },
    { question: "Is the XRP Ledger decentralized?", answer: "Yes. The XRPL has over 150 independent validators worldwide. Ripple operates approximately 6% of validators. Anyone can run a validator, and the network would continue operating without Ripple." },
    { question: "What features does the XRPL have?", answer: "The XRPL includes a native decentralized exchange (DEX), automated market maker (AMM), NFT support (XLS-20), token issuance, escrow, multi-signing, payment channels, and more — all built into the protocol layer." },
    { question: "Who controls the XRP Ledger?", answer: "No single entity controls the XRPL. Changes to the protocol require an 80% supermajority of validators to approve amendments over a two-week voting period. This is a decentralized governance model." },
    { question: "How many transactions can the XRPL handle?", answer: "The XRP Ledger can process approximately 1,500 transactions per second (TPS) with current settings. This significantly exceeds Bitcoin (~7 TPS) and Ethereum (~30 TPS)." },
  ]),
];

const faqItems = [
  { q: "What is the XRP Ledger?", a: "The XRP Ledger (XRPL) is an open-source, decentralized blockchain created in 2012 by David Schwartz, Jed McCaleb, and Arthur Britto. It's the native blockchain for XRP and was purpose-built for fast, efficient payments. Beyond simple transfers, the XRPL includes a built-in decentralized exchange, automated market maker, NFT support, token issuance, escrow, and more." },
  { q: "How does XRPL consensus work?", a: "The XRPL uses the Federated Consensus Protocol. A network of 150+ independent validators proposes and votes on sets of transactions. Each validator maintains a Unique Node List (UNL) of validators it trusts. When 80% of validators on each UNL agree on a transaction set, the ledger closes and transactions are finalized — typically in 3-5 seconds. No mining or staking is required." },
  { q: "Is the XRP Ledger decentralized?", a: "Yes. The XRPL has over 150 independent validators run by universities, exchanges, businesses, and individuals worldwide. Ripple operates approximately 6% of all validators. Anyone can run a validator without permission. The XRPL existed before Ripple was incorporated and would continue operating if Ripple ceased to exist." },
  { q: "What is the difference between XRPL and Ripple?", a: "The XRPL is the decentralized, open-source blockchain. Ripple is a private company that builds products using the XRPL and XRP. Ripple contributes to XRPL development but does not control it. Think of it like the relationship between a company that builds apps on the internet — they use the infrastructure but don't control it." },
  { q: "What are XRPL amendments?", a: "Amendments are the XRPL's governance mechanism for protocol upgrades. Any proposed change must receive continuous 80% supermajority support from validators over a two-week voting period before it activates. This ensures changes have broad consensus and gives the ecosystem time to prepare." },
  { q: "How much does it cost to use the XRPL?", a: "Standard XRPL transactions cost approximately 0.00001 XRP (well under one cent). Accounts require a 10 XRP base reserve and 2 XRP per owned object (trust lines, offers, etc.). These reserves are set by validator vote and can be adjusted." },
];

export default function XRPLedgerExplainedPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Ledger"
          titleAccent="Explained"
          subtitle="The XRP Ledger (XRPL) is one of the most advanced blockchain networks in existence — processing 1,500+ transactions per second with 3-5 second finality since 2012. Here's how it works under the hood."
          breadcrumbLabel="XRP Ledger Explained"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-11" />
          </div>
        </LearnHero>

        {/* TL;DR */}
        <div className="mt-10 rounded-2xl border border-xrp-accent/20 bg-xrp-accent/5 p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-xrp-accent">TL;DR</h2>
          <p className="mt-3 text-text-secondary leading-relaxed">
            <strong className="text-text-primary">Here&apos;s what you need to know:</strong> The XRP Ledger is an open-source, decentralized blockchain that uses Federated Consensus (not mining or staking) to validate transactions in 3-5 seconds. It has 150+ independent validators, a built-in DEX and AMM, native NFT support, and has operated with zero downtime since 2012 — closing over 90 million ledgers.
          </p>
        </div>

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "consensus", label: "Consensus" },
          { id: "validators", label: "Validators" },
          { id: "features", label: "Native Features" },
          { id: "dex", label: "DEX & AMM" },
          { id: "amendments", label: "Governance" },
          { id: "architecture", label: "Architecture" },
          { id: "history", label: "History" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Ledger Close" value="3-5 sec" />
          <StatPill label="Throughput" value="1,500+ TPS" />
          <StatPill label="Validators" value="150+" />
          <StatPill label="Uptime" value="Since 2012" />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== OVERVIEW ===== */}
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">The XRP Ledger — Everything You Need to Know in 2026</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRP Ledger (XRPL) is an open-source, decentralized blockchain that serves as the native network for <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP, the digital asset developed by Ripple Labs</Link>. Created in 2012 by David Schwartz, Jed McCaleb, and Arthur Britto, the XRPL was purpose-built to solve one of finance&apos;s oldest problems: moving money across borders quickly, cheaply, and reliably.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Unlike Bitcoin&apos;s Proof of Work or Ethereum&apos;s Proof of Stake, the XRPL uses a unique <strong className="text-text-primary">Federated Consensus Protocol</strong> that enables dramatically faster transaction finality without the energy costs of mining or the token lockup requirements of staking. The result is a blockchain that settles transactions in 3-5 seconds for less than a penny — and has done so continuously since 2012 with zero downtime.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              But the XRPL is far more than a payment rail. It includes a native <Link href="/learn/xrp-tokenomics" className="text-xrp-accent underline decoration-xrp-accent/30">decentralized exchange</Link>, automated market maker, NFT support, token issuance capabilities, escrow, multi-signing, and more — all built directly into the protocol layer rather than through smart contracts.
            </p>
          </RevealSection>

          {/* ===== CONSENSUS ===== */}
          <RevealSection id="consensus">
            <h2 className="text-2xl font-bold text-text-primary">How XRPL Consensus Works</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The Federated Consensus Protocol is the engine that powers the XRP Ledger. It&apos;s a fundamentally different approach to achieving distributed agreement compared to Proof of Work or Proof of Stake systems. Here&apos;s how it works step by step:
            </p>

            <div className="mt-8 space-y-6">
              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">1</span>
                  <h3 className="text-xl font-semibold text-text-primary">Transaction Collection</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Users submit transactions to the network. These are collected by validators into a <strong className="text-text-primary">candidate set</strong> — a proposed group of transactions to include in the next ledger version.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">2</span>
                  <h3 className="text-xl font-semibold text-text-primary">Proposal Rounds</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  Each validator shares its candidate set with other validators on its <strong className="text-text-primary">Unique Node List (UNL)</strong> — a list of validators that node trusts. Validators compare proposals and iteratively converge on a common set through multiple voting rounds.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">3</span>
                  <h3 className="text-xl font-semibold text-text-primary">Supermajority Agreement</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  A transaction is included in the final set only when at least <strong className="text-text-primary">80% of trusted validators</strong> agree on it. This supermajority threshold provides strong Byzantine fault tolerance — the network can withstand up to 20% of validators acting maliciously.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xrp-accent/20 font-mono text-sm font-bold text-xrp-accent">4</span>
                  <h3 className="text-xl font-semibold text-text-primary">Ledger Close</h3>
                </div>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  The agreed-upon transactions are applied to the previous ledger state, creating a new validated ledger version. This entire process — from transaction submission to finality — takes <strong className="text-text-primary">3-5 seconds</strong>. Once a ledger closes, transactions are final and cannot be reversed.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <HighlightBox title="Key Advantage: Absolute Finality" variant="accent">
                <p>Unlike Bitcoin (where transactions become &quot;more final&quot; with each confirmation) or Proof of Stake chains (which can sometimes reorganize), XRPL transactions have <strong className="text-text-primary">absolute finality</strong> once the ledger closes. A confirmed transaction on the XRPL can never be reversed, rolled back, or reorganized. This is critical for financial applications.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== VALIDATORS ===== */}
          <RevealSection id="validators">
            <h2 className="text-2xl font-bold text-text-primary">Validators and the Unique Node List</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Validators are the backbone of the XRP Ledger. They are servers that participate in the consensus process, proposing and voting on transaction sets. As of 2026, the XRPL has over <strong className="text-text-primary">150 validators</strong> operated by a diverse set of entities around the world.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Who Runs Validators?</h3>
            <div className="mt-5">
              <IconList items={[
                { title: "Universities", desc: "Academic institutions like the University of Tokyo, Korea University, and others run XRPL validators for research and network support" },
                { title: "Exchanges", desc: "Cryptocurrency exchanges like Bitstamp, Bitso, and others operate validators" },
                { title: "Financial institutions", desc: "Companies in the payments and fintech space run validators" },
                { title: "Independent operators", desc: "Individual developers and enthusiasts run validators — anyone can do so without permission" },
                { title: "Ripple", desc: "Ripple operates approximately 6% of XRPL validators — a small minority of the network" },
              ]} variant="zap" />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">The Unique Node List (UNL)</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Each validator maintains a <strong className="text-text-primary">Unique Node List</strong> — a curated list of other validators it trusts for consensus purposes. The default UNL is published by the XRP Ledger Foundation, but any validator operator can customize their UNL. For consensus to work safely, UNLs across the network need substantial overlap (research suggests at least 60% overlap).
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Metric", "Value"]}
                rows={[
                  ["Total Validators", "150+ worldwide"],
                  ["Default UNL Size", "~35 validators"],
                  ["Ripple's Share", "~6% of validators"],
                  ["Supermajority Required", "80%"],
                  ["Anyone Can Run One?", "Yes, permissionless"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          {/* ===== NATIVE FEATURES ===== */}
          <RevealSection id="features">
            <h2 className="text-2xl font-bold text-text-primary">Native Features Built Into the Protocol</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              One of the XRPL&apos;s most distinctive qualities is that many features other blockchains implement through smart contracts are built <em>directly into the protocol layer</em>. This makes them faster, cheaper, and more secure — there&apos;s no smart contract code to exploit.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={3} items={[
                { title: "Decentralized Exchange", desc: "Built-in order book for trading any XRPL-issued asset against XRP or other tokens. No smart contract needed." },
                { title: "Automated Market Maker", desc: "Native AMM functionality for decentralized liquidity pools with continuous pricing. Launched 2024." },
                { title: "NFTs (XLS-20)", desc: "Native NFT minting, trading, and royalty enforcement built into the ledger. No separate contract deployment." },
                { title: "Token Issuance", desc: "Issue stablecoins, CBDCs, tokenized assets, or custom tokens directly on the XRPL with trust lines." },
                { title: "Escrow", desc: "Time-locked and condition-based escrow contracts enforced by the protocol. Used by Ripple for XRP supply management." },
                { title: "Multi-signing", desc: "Require multiple parties to authorize transactions. Built-in support for M-of-N signature schemes." },
                { title: "Payment Channels", desc: "Off-ledger payment channels for high-throughput microtransactions, settling on-chain only when needed." },
                { title: "Checks", desc: "Deferred payment instruments — like writing a physical check. The recipient cashes it when ready." },
                { title: "Clawback", desc: "Token issuers can reclaim issued tokens for compliance — critical for regulated assets and stablecoins." },
              ]} />
            </div>
          </RevealSection>

          {/* ===== DEX & AMM ===== */}
          <RevealSection id="dex">
            <h2 className="text-2xl font-bold text-text-primary">The XRPL Decentralized Exchange and AMM</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL has had a <strong className="text-text-primary">built-in decentralized exchange (DEX)</strong> since its inception in 2012 — making it one of the oldest DEXs in all of crypto. Unlike Uniswap or other DEXs that run as smart contracts on top of a blockchain, the XRPL DEX operates at the protocol level.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Order Book DEX</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              The XRPL&apos;s native DEX uses a traditional <strong className="text-text-primary">order book model</strong>. Users can place limit orders to buy or sell any XRPL-issued asset. When orders match, they execute automatically on-chain. The DEX also supports auto-bridging through XRP — if there&apos;s no direct order book for two tokens, the XRPL can automatically route through XRP for better pricing.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Automated Market Maker (AMM)</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              In 2024, the XRPL added native <strong className="text-text-primary">AMM functionality</strong> through a validator-approved amendment. This allows users to create liquidity pools, provide liquidity, and earn trading fees — all without smart contracts. The AMM works alongside the existing order book DEX, with the protocol automatically routing trades to the best available price source.
            </p>

            <div className="mt-6">
              <HighlightBox title="Best of Both Worlds" variant="info">
                <p>The XRPL is one of the only blockchains that offers <strong className="text-text-primary">both</strong> an order book DEX and an AMM natively. This hybrid approach provides better price discovery and deeper liquidity than either model alone. Trades are automatically routed to the best price, whether that&apos;s the order book, an AMM pool, or a combination of both.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== GOVERNANCE ===== */}
          <RevealSection id="amendments">
            <h2 className="text-2xl font-bold text-text-primary">Governance: How the XRPL Upgrades</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL uses a decentralized governance system called the <strong className="text-text-primary">amendment process</strong> to upgrade the protocol. No single entity — including Ripple — can unilaterally change the XRPL.
            </p>

            <div className="mt-5">
              <IconList items={[
                { title: "Proposal", desc: "A developer proposes a protocol change as an amendment in the XRPL codebase (open source on GitHub)" },
                { title: "Validator voting", desc: "Validators signal support for the amendment. Each validator gets one vote, regardless of how much XRP they hold." },
                { title: "80% threshold", desc: "The amendment must receive continuous support from at least 80% of trusted validators for a minimum of two weeks" },
                { title: "Activation", desc: "Once the two-week threshold is met, the amendment activates automatically on the network" },
                { title: "Immutable once active", desc: "Once activated, an amendment is permanently part of the protocol. It can only be superseded by a new amendment." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="Recent Major Amendments" variant="success">
                <p>Notable amendments include <strong className="text-text-primary">XLS-20</strong> (native NFTs, 2022), <strong className="text-text-primary">AMM</strong> (automated market maker, 2024), <strong className="text-text-primary">Clawback</strong> (token issuer recovery, 2024), and <strong className="text-text-primary">DID</strong> (decentralized identifiers). The <strong className="text-text-primary">Hooks</strong> amendment (smart contract-like functionality) is currently in development.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== ARCHITECTURE ===== */}
          <RevealSection id="architecture">
            <h2 className="text-2xl font-bold text-text-primary">Technical Architecture</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Under the hood, the XRPL has a sophisticated technical architecture designed for performance, reliability, and extensibility.
            </p>

            <div className="mt-6">
              <DataTable
                headers={["Component", "Details"]}
                rows={[
                  ["Core Software", "rippled — open source C++ daemon (GitHub: XRPLF/rippled)"],
                  ["Ledger Structure", "Linked chain of ledger versions, each containing a complete state tree"],
                  ["Account Model", "Account-based (like Ethereum), not UTXO-based (like Bitcoin)"],
                  ["Transaction Types", "25+ native transaction types (Payment, OfferCreate, NFTokenMint, etc.)"],
                  ["Cryptography", "ECDSA (secp256k1), Ed25519 supported"],
                  ["API Access", "WebSocket and JSON-RPC APIs for developers"],
                  ["Testnet", "Free testnet available for development and testing"],
                  ["Sidechains", "EVM-compatible sidechains for Ethereum-style smart contracts"],
                  ["Hooks", "In development — WASM-based smart contract-like functionality native to XRPL"],
                ]}
                highlightCol={0}
              />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">The Ledger State Tree</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Each XRPL ledger version contains a complete snapshot of the network state — all accounts, balances, offers, trust lines, and other objects. This state is organized as a hash tree (similar to a Merkle tree) where any change to any object changes the root hash. This makes it cryptographically verifiable and tamper-proof.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Hooks: The Future of XRPL Smart Contracts</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Hooks</strong> are an upcoming XRPL feature that will add smart contract-like programmability to the ledger. Written in C and compiled to WebAssembly (WASM), Hooks will allow developers to attach custom logic to XRPL accounts — executing before or after transactions. Unlike Ethereum&apos;s Solidity smart contracts, Hooks are lightweight and designed to be safe by default, with strict resource limits.
            </p>
          </RevealSection>

          {/* ===== HISTORY ===== */}
          <RevealSection id="history">
            <h2 className="text-2xl font-bold text-text-primary">A Brief History of the XRP Ledger</h2>

            <div className="mt-6">
              <GlowCard
                title="Genesis Ledger"
                value="June 2, 2012"
                subtitle="The XRP Ledger goes live with 100 billion XRP created at genesis"
              />
            </div>

            <div className="mt-6">
              <DataTable
                headers={["Year", "Milestone"]}
                rows={[
                  ["2011", "David Schwartz, Jed McCaleb, and Arthur Britto begin developing the XRPL"],
                  ["2012", "XRPL launches (June). OpenCoin (later Ripple) founded (September)"],
                  ["2013", "First major validator network expansion. XRPL DEX goes live"],
                  ["2017", "Ripple locks 55 billion XRP in escrow. XRP reaches all-time high ~$3.84"],
                  ["2020", "SEC files lawsuit against Ripple Labs. Several exchanges delist XRP temporarily"],
                  ["2022", "XLS-20 amendment brings native NFTs to the XRPL"],
                  ["2023", "Judge Torres rules XRP is not a security on exchanges. Major relisting wave"],
                  ["2024", "Native AMM launches. Ripple launches RLUSD stablecoin. XRP futures on CME"],
                  ["2025-26", "XRP ETF filings. Ripple acquires Hidden Road. XRPL ecosystem expansion"],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              For a complete timeline, see our <Link href="/learn/history" className="text-xrp-accent underline decoration-xrp-accent/30">XRP History and Timeline</Link> page.
            </p>
          </RevealSection>

          {/* ===== MISCONCEPTIONS ===== */}
          <RevealSection>
            <h2 className="text-2xl font-bold text-text-primary">Common Misconceptions</h2>
            <div className="mt-5 space-y-3">
              <MisconceptionCard myth="The XRPL is controlled by Ripple" reality="Ripple operates ~6% of validators. The XRPL is open source, governed by validator amendments (80% supermajority), and would operate without Ripple." />
              <MisconceptionCard myth="The XRPL can't do smart contracts" reality="The XRPL has powerful native features (DEX, AMM, escrow, NFTs) and Hooks will add WASM-based programmability. It takes a different approach than Ethereum-style smart contracts." />
              <MisconceptionCard myth="The XRPL is just for payments" reality="While designed for payments, the XRPL supports DeFi (DEX, AMM), NFTs, tokenized assets, stablecoins, escrow, DIDs, and more. It's a full-featured blockchain." />
              <MisconceptionCard myth="XRPL consensus isn't secure" reality="The XRPL's Federated Consensus provides Byzantine fault tolerance up to 20% of validators. It has operated since 2012 with zero downtime and no successful attacks." />
            </div>
          </RevealSection>

          {/* ===== FAQ ===== */}
          <RevealSection id="faq">
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* ===== RELATED ===== */}
          <RevealSection>
            <h2 className="text-2xl font-bold text-text-primary">Related Resources</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrpl-consensus-mechanism", label: "XRPL Consensus", desc: "Byzantine agreement" },
              { href: "/learn/xrpl-validators", label: "XRPL Validators", desc: "Network consensus nodes" },
              { href: "/learn/xrpl-decentralization", label: "XRPL Decentralization", desc: "Centralization debate" },
              { href: "/learn/xrpl-sidechains", label: "XRPL Sidechains", desc: "EVM sidechain & scaling" },
              { href: "/learn/xrpl-payment-channels", label: "Payment Channels", desc: "Off-ledger micropayments" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide to XRP" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Technology explained simply" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore the XRP Ecosystem"
          description="Now that you understand how the XRP Ledger works, explore the tokenomics, wallets, and ecosystem built on top of it."
          primaryHref="/learn/xrp-tokenomics"
          primaryLabel="XRP Tokenomics →"
          secondaryHref="/learn/xrp-wallets"
          secondaryLabel="Choose a Wallet"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 11, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org documentation, XRP Ledger Foundation, Ripple technical whitepapers, XRPScan on-chain data.</em>
        </p>
      </div>
    </>
  );
}
