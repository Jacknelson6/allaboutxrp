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
  title: "XRPL Hooks Explained: Smart Logic on the XRP Ledger",
  description: "What are XRPL Hooks? How lightweight smart contract logic works on the XRP Ledger — use cases, examples, and comparison to Ethereum.",
  keywords: ["XRPL Hooks", "XRP Hooks", "XRPL smart logic", "Hooks XRPL explained"],
  openGraph: {
    title: "XRPL Hooks Explained: Smart Logic on the XRP Ledger | AllAboutXRP",
    description: "What are XRPL Hooks? How lightweight smart contract logic works on the XRP Ledger.",
    url: "https://allaboutxrp.com/learn/xrpl-hooks-explained",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL Hooks Explained | AllAboutXRP",
    description: "Smart logic on the XRP Ledger — how Hooks bring programmability to XRPL.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-hooks-explained" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRPL Hooks Explained: Smart Logic on the XRP Ledger",
    description: "Comprehensive guide to XRPL Hooks — lightweight smart contract logic on the XRP Ledger. Use cases, technical architecture, and comparison to Ethereum smart contracts.",
    url: "https://allaboutxrp.com/learn/xrpl-hooks-explained",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL Hooks Explained" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-hooks-explained" }),
  buildFAQSchema([
    { question: "What are XRPL Hooks?", answer: "XRPL Hooks are small, efficient pieces of code (written in C and compiled to WebAssembly) that can be attached to XRPL accounts. They execute before or after transactions, enabling smart contract-like logic directly on the XRP Ledger — such as conditional payments, spending limits, and automated responses." },
    { question: "How are Hooks different from Ethereum smart contracts?", answer: "Hooks are lightweight and transaction-triggered, running only when a transaction touches the account. Ethereum smart contracts are general-purpose programs that can hold state and be called independently. Hooks are more efficient but less flexible — designed for the specific needs of payment logic rather than general computation." },
    { question: "Are Hooks live on the XRPL mainnet?", answer: "As of early 2026, Hooks are live on the Xahau sidechain (a Hooks-enabled XRPL sidechain) and under consideration for XRPL mainnet via an amendment. The Hooks testnet has been running successfully, and the community is evaluating mainnet activation." },
    { question: "What can Hooks do?", answer: "Hooks can enforce spending limits, require multi-signature approval, automate recurring payments, implement carbon offsetting on transactions, create conditional escrows, filter spam transactions, and much more — essentially any logic that should trigger on incoming or outgoing transactions." },
    { question: "Do Hooks make XRP a 'smart contract platform'?", answer: "Hooks add programmability but in a focused, efficient way. Unlike Ethereum's general-purpose VM, Hooks are specifically designed for transaction-level logic. The XRPL also supports the EVM sidechain for full Ethereum-compatible smart contracts, giving developers both options." },
  ]),
];

const faqItems = [
  { q: "What are XRPL Hooks?", a: "Hooks are small, efficient pieces of code (C compiled to WebAssembly) attached to XRPL accounts. They execute before or after transactions, enabling smart contract-like logic — conditional payments, spending limits, automated responses — directly on the XRP Ledger." },
  { q: "How are Hooks different from Ethereum smart contracts?", a: "Hooks are lightweight and transaction-triggered — they run only when a transaction touches the account. Ethereum smart contracts are general-purpose programs with independent state. Hooks are more efficient but less flexible, optimized for payment logic." },
  { q: "Are Hooks live on XRPL mainnet?", a: "As of early 2026, Hooks are live on the Xahau sidechain and under consideration for XRPL mainnet via an amendment. The Hooks testnet has been running successfully." },
  { q: "What programming language are Hooks written in?", a: "Hooks are written in C and compiled to WebAssembly (Wasm). The Hooks Builder tool provides a web-based IDE for writing, testing, and deploying Hooks without local setup." },
  { q: "What can Hooks do?", a: "Spending limits, multi-sig approval, recurring payments, carbon offsetting, conditional escrows, spam filtering, automated treasury management, and any transaction-level logic you can imagine." },
  { q: "Do Hooks increase transaction fees?", a: "Hooks add a small computational overhead to transactions they process, but the XRPL's fee model keeps costs extremely low. The Wasm execution engine is highly optimized for efficiency." },
];

export default function XRPLHooksExplainedPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL Hooks Explained:"
          titleAccent="Smart Logic on the XRP Ledger"
          subtitle="Hooks bring programmable logic to the XRP Ledger — lightweight smart contracts that execute on every transaction. Here's how they work."
          breadcrumbLabel="XRPL Hooks Explained"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>XRPL Hooks are small programs (written in C, compiled to WebAssembly) that attach to <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL</Link> accounts and execute on every transaction. They enable smart contract-like logic — spending limits, conditional payments, automated actions — without the complexity and risk of general-purpose smart contracts. Currently live on the <strong className="text-text-primary">Xahau sidechain</strong> with mainnet activation under review.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Language", value: "C → WebAssembly" },
          { label: "Execution", value: "Before/after transactions" },
          { label: "Status", value: "Live on Xahau sidechain" },
          { label: "Mainnet", value: "Amendment under review" },
          { label: "Efficiency", value: "Lightweight, sub-millisecond" },
          { label: "Developer Tool", value: "Hooks Builder (web IDE)" },
        ]} />

        <SectionNav items={[
          { id: "what-are-hooks", label: "What Are Hooks?" },
          { id: "how-they-work", label: "How They Work" },
          { id: "use-cases", label: "Use Cases" },
          { id: "vs-smart-contracts", label: "vs Smart Contracts" },
          { id: "xahau", label: "Xahau Sidechain" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Language" value="C / Wasm" delay={0} />
          <StatPill label="Trigger" value="Per-Tx" delay={0.06} />
          <StatPill label="Status" value="Xahau Live" delay={0.12} />
          <StatPill label="Overhead" value="Minimal" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what-are-hooks">
            <h2 className="text-2xl font-bold text-text-primary">What Are XRPL Hooks?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Hooks are small, efficient programs that can be set on an <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL account</Link>. Once set, they execute automatically whenever a transaction touches that account — either incoming or outgoing. Think of them as transaction-level middleware.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Unlike general-purpose smart contracts (Ethereum&apos;s Solidity), Hooks are <strong className="text-text-primary">purpose-built for transaction logic</strong>. They can inspect, modify, reject, or trigger additional transactions — but they&apos;re intentionally limited in scope to maintain the XRPL&apos;s performance and security.
            </p>
            <div className="mt-6">
              <HighlightBox title="Key Insight" variant="accent">
                <p>Hooks aren&apos;t trying to make XRPL into Ethereum. They add just enough programmability for <strong className="text-text-primary">real-world payment logic</strong> — spending limits, compliance checks, automated responses — while keeping the XRPL fast, cheap, and secure.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="how-they-work" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Hooks Work</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Written in C", desc: "Developers write Hook logic in C, a well-understood systems programming language. This keeps the barrier to entry low for experienced developers." },
                { title: "Compiled to WebAssembly", desc: "The C code is compiled to Wasm (WebAssembly), a portable, sandboxed binary format. This ensures Hooks run efficiently and securely within the XRPL." },
                { title: "Attached to Accounts", desc: "Hooks are set on an XRPL account using a SetHook transaction. Multiple Hooks can be chained on a single account." },
                { title: "Triggered by Transactions", desc: "When a transaction is sent to or from a Hooked account, the Hook code executes. It can accept, reject, or modify the transaction." },
                { title: "State Management", desc: "Hooks can store and retrieve small amounts of state data on the ledger, enabling stateful logic across multiple transactions." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Hook Use Cases</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Spending Limits", desc: "Enforce daily or per-transaction spending caps on an account — useful for business treasury management." },
                { title: "Conditional Payments", desc: "Payments that only execute if certain conditions are met — time-based, amount-based, or counterparty-based." },
                { title: "Carbon Offsetting", desc: "Automatically route a percentage of every transaction to a carbon offset account — ESG compliance built into payments." },
                { title: "Multi-Signature Logic", desc: "Custom multi-sig requirements beyond what native XRPL multi-signing offers." },
                { title: "Spam Filtering", desc: "Reject incoming transactions below a certain amount or from unknown accounts." },
                { title: "Automated Treasury", desc: "Automatically sweep funds, distribute payments, or rebalance accounts based on triggers." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="vs-smart-contracts" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Hooks vs. Ethereum Smart Contracts</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRPL Hooks", "Ethereum Smart Contracts"]}
                rows={[
                  ["Language", "C → WebAssembly", "Solidity → EVM bytecode"],
                  ["Trigger", "Transaction-based", "Function call-based"],
                  ["Scope", "Transaction logic", "General-purpose computation"],
                  ["Gas/Fees", "Minimal overhead", "Variable gas costs ($1-$100+)"],
                  ["State", "Limited on-ledger state", "Full on-chain state"],
                  ["Security Model", "Sandboxed Wasm execution", "EVM with known exploit surface"],
                  ["Composability", "Hook chaining", "Contract-to-contract calls"],
                  ["Use Case Focus", "Payments, compliance, limits", "DeFi, NFTs, DAOs, any logic"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="xahau" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Xahau: The Hooks-Enabled Sidechain</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Xahau</strong> is an XRPL sidechain that launched with full Hooks support. It serves as both a production environment for Hooks-based applications and a proving ground for the technology before potential XRPL mainnet activation.
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Production Ready", desc: "Xahau is a live network with real value — not a testnet. Developers can deploy Hooks in production today." },
                { title: "Native Token: XAH", desc: "Xahau uses XAH as its native token, separate from XRP. It has its own validator set and governance." },
                { title: "Cross-Chain Bridge", desc: "A bridge connects Xahau to the XRPL mainnet, enabling asset movement between the two networks." },
                { title: "Governance Hooks", desc: "Xahau itself uses Hooks for on-chain governance — demonstrating the technology at the protocol level." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How the XRPL works" },
              { href: "/learn/xrp-smart-contracts", label: "XRP Smart Contracts", desc: "Smart contract options" },
              { href: "/learn/xrpl-sidechains", label: "XRPL Sidechains", desc: "Sidechain architecture" },
              { href: "/learn/xrpl-amm-liquidity-pools", label: "XRPL AMM", desc: "Liquidity pools on XRPL" },
              { href: "/learn/xrpl-transaction-fees", label: "Transaction Fees", desc: "How XRPL fees work" },
              { href: "/learn/xrpl-consensus-mechanism", label: "XRPL Consensus", desc: "How consensus works" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore XRPL Development"
          description="Interested in building on the XRP Ledger? Start with understanding the fundamentals."
          primaryHref="/learn/xrp-ledger-explained"
          primaryLabel="XRP Ledger Explained →"
          secondaryHref="/learn/xrp-smart-contracts"
          secondaryLabel="Smart Contracts on XRPL"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Hooks documentation, Xahau.network.</em>
        </p>
      </div>
    </>
  );
}
