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
  title: "XRP Smart Contracts: Hooks & EVM Sidechain | AllAboutXRP",
  description:
    "Does XRP have smart contracts? Learn about XRPL Hooks, the EVM sidechain, and how the XRP Ledger is adding programmability while keeping payments fast.",
  keywords: ["XRP smart contracts", "XRPL Hooks", "XRP EVM sidechain", "does XRP have smart contracts", "XRP programmability"],
  openGraph: {
    title: "XRP Smart Contracts: Hooks & EVM Sidechain Explained",
    description: "XRP is adding smart contracts through Hooks and an EVM sidechain. Here's how it works without compromising speed.",
    url: "https://allaboutxrp.com/learn/xrp-smart-contracts",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRP Smart Contracts: The Complete Guide", description: "Hooks, EVM sidechain, and XRPL programmability." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-smart-contracts" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP Smart Contracts: Hooks & EVM Sidechain", description: "A comprehensive guide to smart contract capabilities on the XRP Ledger, including Hooks and the EVM-compatible sidechain.", url: "https://allaboutxrp.com/learn/xrp-smart-contracts", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Smart Contracts" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-smart-contracts" }),
  buildFAQSchema([
    { question: "Does XRP have smart contracts?", answer: "Yes, but differently from Ethereum. The XRP Ledger supports smart contract functionality through two approaches: (1) Hooks — lightweight, on-chain logic written in C/WebAssembly that attaches to XRPL transactions, and (2) an EVM-compatible sidechain for full Solidity smart contracts. The main XRPL also has built-in 'smart' features like escrow, payment channels, and the native DEX/AMM." },
    { question: "What are XRPL Hooks?", answer: "Hooks are small, efficient pieces of code written in C that compile to WebAssembly and attach to XRP Ledger transactions. They can add logic like conditional payments, automatic forwarding, or compliance checks directly on the XRPL without the overhead of a full smart contract platform. Think of them as 'transaction middleware.'" },
    { question: "What is the XRP EVM sidechain?", answer: "The XRP EVM sidechain is a separate blockchain compatible with Ethereum's Virtual Machine (EVM) that connects to the XRPL via a bridge. Developers can write Solidity smart contracts and deploy existing Ethereum dApps on it, while leveraging XRP for gas fees and bridging assets between the XRPL mainnet and the sidechain." },
    { question: "Can you build DeFi on XRP?", answer: "Yes. The XRPL already has a built-in decentralized exchange (DEX) and automated market maker (AMM). With Hooks and the EVM sidechain, more complex DeFi applications are possible. The XRPL DeFi ecosystem includes lending, yield farming, and token swaps." },
    { question: "How do XRP smart contracts compare to Ethereum?", answer: "Ethereum has the most mature smart contract ecosystem with thousands of dApps. XRP's approach is intentionally different — Hooks are lightweight and optimized for payment-adjacent logic, while the EVM sidechain provides full Ethereum compatibility for complex applications. XRP prioritizes payment performance over general-purpose computing." },
  ]),
];

const faqItems = [
  { q: "Does XRP have smart contracts?", a: "Yes — through Hooks (lightweight on-chain logic) and an EVM-compatible sidechain. The XRPL also has built-in features like escrow, payment channels, and native DEX/AMM." },
  { q: "What are XRPL Hooks?", a: "Small, efficient C code compiled to WebAssembly that attaches to XRPL transactions. They add logic like conditional payments without full smart contract overhead." },
  { q: "What is the XRP EVM sidechain?", a: "A separate EVM-compatible blockchain bridged to the XRPL. Developers can deploy Solidity/Ethereum dApps using XRP for gas fees." },
  { q: "Can you build DeFi on XRP?", a: "Yes. Built-in DEX, AMM, plus Hooks and EVM sidechain enable lending, yield farming, and complex DeFi on the XRPL." },
  { q: "How do XRP contracts compare to Ethereum?", a: "Ethereum has the larger ecosystem. XRP's Hooks are optimized for payment logic; the EVM sidechain provides Ethereum compatibility. XRP prioritizes speed over general computing." },
];

export default function XRPSmartContractsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Smart Contracts" titleAccent="Hooks & EVM Sidechain" subtitle="The XRPL is adding programmability without compromising what makes it great: speed and efficiency. Here's how Hooks and the EVM sidechain bring smart contracts to XRP." breadcrumbLabel="XRP Smart Contracts">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Yes, XRP has smart contracts</strong> — but not like Ethereum. The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> takes a two-pronged approach: <strong className="text-text-primary">Hooks</strong> are lightweight, on-chain programs for payment-adjacent logic, and the <strong className="text-text-primary">EVM sidechain</strong> provides full Ethereum-compatible smart contracts bridged to the XRPL. The main ledger also has powerful built-in features — <Link href="/learn/xrp-escrow-explained" className="text-xrp-accent underline decoration-xrp-accent/30">escrow</Link>, <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">DEX, AMM</Link>, payment channels, and <Link href="/learn/xrp-nfts" className="text-xrp-accent underline decoration-xrp-accent/30">native NFTs</Link> — that provide &quot;smart&quot; functionality without traditional contracts.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Smart Contract Approach", value: "Hooks + EVM Sidechain" },
          { label: "Hooks Language", value: "C → WebAssembly" },
          { label: "EVM Compatibility", value: "Full Solidity support" },
          { label: "Built-in Features", value: "DEX, AMM, Escrow, NFTs" },
          { label: "Payment Speed Impact", value: "None (Hooks are lightweight)" },
          { label: "EVM Bridge", value: "Cross-chain asset bridge" },
          { label: "Gas Token (EVM)", value: "XRP" },
          { label: "Design Philosophy", value: "Payments first, programmability second" },
        ]} />

        <SectionNav items={[
          { id: "approach", label: "XRP's Approach" },
          { id: "hooks", label: "Hooks Explained" },
          { id: "evm", label: "EVM Sidechain" },
          { id: "built-in", label: "Built-in Features" },
          { id: "comparison", label: "vs Ethereum" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Hooks" value="WebAssembly" delay={0} />
          <StatPill label="EVM" value="Solidity" delay={0.06} />
          <StatPill label="Built-in" value="DEX+AMM" delay={0.12} />
          <StatPill label="Speed" value="Preserved" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="approach">
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Unique Approach to Smart Contracts</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The XRPL&apos;s philosophy has always been <strong className="text-text-primary">payments first</strong>. Rather than trying to be a general-purpose computing platform like <Link href="/learn/xrp-vs-ethereum" className="text-xrp-accent underline decoration-xrp-accent/30">Ethereum</Link>, the XRPL adds programmability in ways that <strong className="text-text-primary">don&apos;t compromise its core strengths</strong>: 3-5 second settlement, near-zero fees, and 1,500+ TPS.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              This means XRP uses a layered approach. The <strong className="text-text-primary">main chain stays fast and lean</strong> for payments. Hooks add lightweight logic directly on-chain. And complex smart contracts run on a separate <strong className="text-text-primary">EVM-compatible sidechain</strong> that bridges back to the main XRPL.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={3} items={[
                { title: "Layer 1: Built-in", desc: "DEX, AMM, escrow, NFTs, payment channels — 'smart' features baked into the protocol." },
                { title: "Layer 1.5: Hooks", desc: "Lightweight C/WASM programs that add conditional logic to transactions without bloating the ledger." },
                { title: "Layer 2: EVM Sidechain", desc: "Full Ethereum compatibility on a separate chain, bridged to the XRPL for complex dApps." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="hooks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL Hooks: Lightweight On-Chain Logic</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Hooks are small, efficient programs written in C that compile to WebAssembly (WASM) and attach to XRPL accounts. They execute automatically when certain transactions occur — like middleware that intercepts and processes payments.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Conditional payments", desc: "Hooks can enforce conditions before a payment goes through — like requiring a specific memo, minimum amount, or destination tag." },
                { title: "Automatic forwarding", desc: "Automatically split or forward incoming payments to multiple recipients — useful for payroll or revenue sharing." },
                { title: "Compliance checks", desc: "Run AML/KYC logic on transactions before they settle — critical for institutional adoption." },
                { title: "Rate limiting", desc: "Limit the frequency or amount of transactions from an account — useful for subscription models or spending controls." },
                { title: "Carbon credit integration", desc: "Automatically offset carbon for each transaction — an example of the creative possibilities." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="Hooks vs Ethereum Smart Contracts" variant="info">
                <p>Hooks are intentionally <strong className="text-text-primary">simpler and more constrained</strong> than Ethereum smart contracts. They can&apos;t create complex DeFi protocols with arbitrary logic, but they&apos;re <strong className="text-text-primary">fast, cheap, and safe</strong> — exactly what payment-adjacent logic needs. Think of Hooks as &quot;transaction rules&quot; rather than &quot;programs.&quot;</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="evm" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The XRP EVM Sidechain</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              For developers who want full Ethereum-compatible smart contracts, the XRPL offers an <strong className="text-text-primary">EVM-compatible sidechain</strong>. This is a separate blockchain that:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Runs Solidity smart contracts", desc: "Deploy existing Ethereum smart contracts without modification. Any Solidity developer can build on it immediately." },
                { title: "Uses XRP for gas fees", desc: "Transaction fees on the EVM sidechain are paid in XRP, increasing demand for the native token." },
                { title: "Bridges to XRPL mainnet", desc: "A cross-chain bridge allows assets to move between the EVM sidechain and the main XRP Ledger." },
                { title: "Supports Ethereum tooling", desc: "MetaMask, Hardhat, Remix, and other Ethereum developer tools work out of the box." },
                { title: "Cheaper than Ethereum", desc: "Lower gas fees than Ethereum mainnet while maintaining full EVM compatibility." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="built-in" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Built-in Smart Features (No Contracts Needed)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Even without Hooks or the EVM sidechain, the XRPL has powerful built-in features that other blockchains need smart contracts to achieve:
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Native DEX", desc: "Decentralized exchange built into the protocol. Trade any XRPL-issued token without a smart contract." },
                { title: "AMM (Automated Market Maker)", desc: "Provide liquidity and earn fees through the native AMM. No Uniswap-style contract needed." },
                { title: "Escrow", desc: "Time-locked and condition-based escrow for conditional payments. Used by Ripple for XRP supply management." },
                { title: "Payment Channels", desc: "Off-ledger payment channels for high-frequency micropayments. Settle thousands of payments with one on-chain transaction." },
                { title: "NFTs (XLS-20)", desc: "Native NFT minting, trading, and royalty enforcement. No ERC-721 contract needed." },
                { title: "Multi-signing", desc: "Require multiple signatures for transactions — built-in multi-sig without a smart contract wallet." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="comparison" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP vs Ethereum: Smart Contract Comparison</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRP (Hooks + EVM)", "Ethereum"]}
                rows={[
                  ["Approach", "Payment-first + layered", "General-purpose computing"],
                  ["Main chain speed", "3-5 seconds", "12-15 seconds"],
                  ["Smart contract language", "C/WASM (Hooks) + Solidity (EVM)", "Solidity, Vyper"],
                  ["Built-in DEX", "Yes (native)", "No (Uniswap is a contract)"],
                  ["Built-in NFTs", "Yes (XLS-20)", "No (ERC-721 contract)"],
                  ["dApp ecosystem", "Growing", "Largest in crypto"],
                  ["Developer community", "Growing", "Very large"],
                  ["Transaction fee", "<$0.01", "$1-50+ (varies)"],
                  ["TVL (DeFi)", "Growing", "~$30B+"],
                ]}
                highlightCol={1}
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

        <LearnCTA title="Explore XRPL Development" description="Smart contracts are expanding what's possible on the XRP Ledger. Explore the growing DeFi ecosystem." primaryHref="/learn/xrpl-defi" primaryLabel="XRPL DeFi →" secondaryHref="/learn/xrp-nfts" secondaryLabel="XRP NFTs" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Hooks documentation, Ripple.com.</em></p>
      </div>
    </>
  );
}
