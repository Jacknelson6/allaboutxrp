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
  title: "XRPL Sidechains: Scaling the XRP Ledger | AllAboutXRP",
  description: "XRPL sidechains explained. How they work, the EVM sidechain, cross-chain bridges, and what they mean for XRP.",
  keywords: ["XRPL sidechains","XRPL EVM sidechain","XRP sidechain","XRPL scaling"],
  openGraph: {
    title: "XRPL Sidechains: Scaling the XRP Ledger",
    description: "XRPL sidechains explained. How they work, the EVM sidechain, cross-chain bridges, and what they mean for XRP.",
    url: "https://allaboutxrp.com/learn/xrpl-sidechains",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRPL Sidechains: Scaling the XRP Ledger", description: "XRPL sidechains explained. How they work, the EVM sidechain, cross-chain bridges, and what they mean for XRP." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-sidechains" },
};

const schemas = [
  buildArticleSchema({ headline: "XRPL Sidechains: Scaling the XRP Ledger", description: "XRPL sidechains explained. How they work, the EVM sidechain, cross-chain bridges, and what they mean for XRP.", url: "https://allaboutxrp.com/learn/xrpl-sidechains", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRPL Sidechains" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-sidechains" }),
  buildFAQSchema([
    { question: "What is the XRPL EVM sidechain?", answer: "An Ethereum-compatible blockchain connected to the XRPL via cross-chain bridge. Run Solidity smart contracts using XRP for gas." },
    { question: "How do sidechains connect to XRPL?", answer: "Via a decentralized cross-chain bridge using lock-and-mint mechanism with witness nodes." },
    { question: "Can I use MetaMask with XRPL?", answer: "Yes — on the EVM sidechain. Add it as a custom network in MetaMask." },
    { question: "Do sidechains affect XRPL performance?", answer: "No. Sidechains have independent consensus. They don't slow down the mainnet." },
    { question: "When will the EVM sidechain launch?", answer: "It's on devnet/testnet. Mainnet timeline depends on bridge security audits and community readiness." },
  ]),
];

const faqItems = [
  { q: "What is the XRPL EVM sidechain?", a: "An Ethereum-compatible blockchain connected to the XRPL via cross-chain bridge. Run Solidity smart contracts using XRP for gas." },
  { q: "How do sidechains connect to XRPL?", a: "Via a decentralized cross-chain bridge using lock-and-mint mechanism with witness nodes." },
  { q: "Can I use MetaMask with XRPL?", a: "Yes — on the EVM sidechain. Add it as a custom network in MetaMask." },
  { q: "Do sidechains affect XRPL performance?", a: "No. Sidechains have independent consensus. They don't slow down the mainnet." },
  { q: "When will the EVM sidechain launch?", a: "It's on devnet/testnet. Mainnet timeline depends on bridge security audits and community readiness." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRPL Sidechains" titleAccent="Scaling the XRP Ledger" subtitle="Sidechains extend the XRPL with custom functionality — smart contracts, privacy features, and specialized applications." breadcrumbLabel="XRPL Sidechains">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>XRPL <strong className="text-text-primary">sidechains</strong> are independent ledgers that connect to the XRP Ledger mainnet via a <strong className="text-text-primary">cross-chain bridge</strong>. The most important is the <strong className="text-text-primary">EVM sidechain</strong> — bringing Ethereum compatibility to the XRP ecosystem. This enables <Link href="/learn/xrp-smart-contracts" className="text-xrp-accent underline decoration-xrp-accent/30">full smart contract</Link> functionality while preserving the mainnet&apos;s speed and efficiency.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Purpose", value: "Extended functionality" },
          { label: "Key Project", value: "XRPL EVM Sidechain" },
          { label: "Bridge", value: "Cross-chain XRP bridge" },
          { label: "Consensus", value: "Separate from mainnet" },
          { label: "Compatibility", value: "Ethereum-compatible" },
          { label: "Status", value: "Development/testnet" },
        ]} />

        <SectionNav items={[
          { id: "what", label: "What Are Sidechains" },
          { id: "evm", label: "EVM Sidechain" },
          { id: "bridge", label: "Cross-Chain Bridge" },
          { id: "use-cases", label: "Use Cases" },
          { id: "status", label: "Status" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Key" value="EVM" delay={0.00} />
          <StatPill label="Bridge" value="Cross-chain" delay={0.06} />
          <StatPill label="Compat" value="Ethereum" delay={0.12} />
          <StatPill label="Phase" value="Development" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Are XRPL Sidechains?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">Sidechains are <strong className="text-text-primary">independent ledgers with their own consensus</strong> that connect to the XRPL mainnet. They enable functionality that isn&apos;t suitable for the main <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> — like full smart contracts, privacy features, or specialized applications.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Independent Consensus",desc:"Run their own validators and rules. Don't slow down the mainnet."},
              {title:"Cross-Chain Bridge",desc:"XRP and tokens can move between mainnet and sidechains securely."},
              {title:"Custom Rules",desc:"Each sidechain can have different features, gas models, and capabilities."},
              {title:"Preserve Mainnet",desc:"Keep XRPL mainnet fast and simple. Put complex functionality on sidechains."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="evm" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The XRPL EVM Sidechain</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The most anticipated sidechain brings <strong className="text-text-primary">full Ethereum Virtual Machine compatibility</strong> to the XRP ecosystem. Deploy Solidity <Link href="/learn/xrp-smart-contracts" className="text-xrp-accent underline decoration-xrp-accent/30">smart contracts</Link>, use familiar tools (MetaMask, Hardhat), and access Ethereum DeFi protocols — all using XRP.</p>
            <div className="mt-6"><HighlightBox title="Why EVM?" variant="accent"><p>Ethereum has the largest smart contract ecosystem. EVM compatibility means thousands of existing Ethereum dApps and developers can deploy on the XRPL EVM sidechain with minimal changes. Use XRP for gas. Access <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL DeFi</Link> and Ethereum DeFi.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="bridge" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Cross-Chain Bridge</h2>
            <div className="mt-6"><IconList items={[
              {title:"Lock and mint",desc:"XRP locked on mainnet → equivalent minted on sidechain. Redeem to unlock."},
              {title:"Decentralized witnesses",desc:"Bridge operated by a decentralized set of witnesses ensuring security."},
              {title:"Bidirectional",desc:"Move assets from mainnet → sidechain and back. Full interoperability."},
              {title:"Token support",desc:"Not just XRP — XRPL-issued tokens can also bridge to sidechains."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="use-cases" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Use Cases</h2>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"DeFi Protocols",desc:"Full lending, borrowing, yield farming using Ethereum-proven protocols."},
              {title:"NFT Platforms",desc:"Advanced NFT functionality beyond mainnet's native NFT support."},
              {title:"Enterprise Apps",desc:"Private or permissioned sidechains for enterprise use cases."},
              {title:"Gaming",desc:"High-throughput gaming applications with XRP-based economies."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="status" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Current Status</h2>
            <div className="mt-6"><IconList items={[
              {title:"EVM Sidechain",desc:"Active on devnet/testnet. Bridge being finalized. Mainnet launch approaching."},
              {title:"Hooks (alternative)",desc:"Mainnet XRPL Hooks offer lightweight smart contract functionality without sidechains."},
              {title:"Other sidechains",desc:"Additional specialized sidechains can be created by anyone for specific use cases."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
            { href: "/learn/xrp-smart-contracts", label: "Smart Contracts", desc: "Hooks & EVM" },
            { href: "/learn/xrp-ledger-explained", label: "XRP Ledger", desc: "Technology" },
            { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "Ecosystem" },
            { href: "/learn/xrpl-consensus-mechanism", label: "Consensus", desc: "How it works" },
            { href: "/learn/xrp-vs-ethereum", label: "XRP vs ETH", desc: "Comparison" },
            { href: "/learn/xrp-nfts", label: "XRP NFTs", desc: "NFT support" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore XRPL Technology" description="Sidechains expand what's possible on the XRP Ledger." primaryHref="/learn/xrp-smart-contracts" primaryLabel="Smart Contracts →" secondaryHref="/learn/xrpl-defi" secondaryLabel="XRPL DeFi" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
