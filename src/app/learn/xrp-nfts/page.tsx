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
  title: "XRP NFTs: NFTs on the XRP Ledger (XLS-20) | AllAboutXRP",
  description:
    "Learn about NFTs on the XRP Ledger using XLS-20. How XRPL NFTs work, their advantages over Ethereum NFTs, and how to mint and trade them.",
  keywords: ["XRP NFTs", "XRPL NFTs", "XLS-20", "NFT XRP Ledger", "mint NFT XRP", "XRP NFT marketplace"],
  openGraph: {
    title: "XRP NFTs: Everything About NFTs on the XRP Ledger",
    description: "XRPL NFTs are faster, cheaper, and more energy-efficient than Ethereum NFTs. Here's the complete guide.",
    url: "https://allaboutxrp.com/learn/xrp-nfts",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "XRPL NFTs: The Complete Guide", description: "Native NFTs on the XRP Ledger via XLS-20." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-nfts" },
};

const schemas = [
  buildArticleSchema({ headline: "XRP NFTs: NFTs on the XRP Ledger (XLS-20)", description: "A comprehensive guide to NFTs on the XRP Ledger, covering XLS-20, minting, trading, and advantages over Ethereum-based NFTs.", url: "https://allaboutxrp.com/learn/xrp-nfts", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP NFTs" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-nfts" }),
  buildFAQSchema([
    { question: "Can you create NFTs on XRP?", answer: "Yes. The XRP Ledger supports native NFTs through the XLS-20 standard, which was activated in October 2022. Unlike Ethereum NFTs that require smart contracts, XRPL NFTs are built directly into the ledger protocol, making them faster, cheaper, and more energy-efficient to create and trade." },
    { question: "How much does it cost to mint an NFT on XRP?", answer: "Minting an NFT on the XRP Ledger costs approximately 0.00001 XRP (a fraction of a cent) in transaction fees. This is dramatically cheaper than Ethereum, where minting can cost $10-100+ in gas fees depending on network congestion." },
    { question: "What is XLS-20?", answer: "XLS-20 is the NFT standard for the XRP Ledger. It defines how non-fungible tokens are created, traded, and managed natively on the XRPL. Key features include built-in royalty enforcement, automatic transfers, and burn capabilities — all at the protocol level." },
    { question: "What are the advantages of XRPL NFTs over Ethereum NFTs?", answer: "XRPL NFTs are cheaper to mint (fraction of a cent vs $10-100+), faster to transfer (3-5 seconds vs 12-15+ seconds), more energy-efficient (250,000x less energy than PoW Ethereum), and have built-in royalty enforcement at the protocol level (Ethereum royalties are optional and often bypassed)." },
    { question: "Where can I buy XRP NFTs?", answer: "XRP NFTs can be purchased on XRPL-native marketplaces including xrp.cafe, Sologenic, OnXRP, and nftmaster.com. Some NFTs can also be traded directly peer-to-peer using the XRPL's built-in DEX and offer system." },
  ]),
];

const faqItems = [
  { q: "Can you create NFTs on XRP?", a: "Yes. XLS-20 enables native NFTs on the XRP Ledger since October 2022. They're built into the protocol — no smart contracts needed." },
  { q: "How much does it cost to mint an NFT on XRP?", a: "About 0.00001 XRP (fraction of a cent). Dramatically cheaper than Ethereum's $10-100+ gas fees." },
  { q: "What is XLS-20?", a: "XLS-20 is the NFT standard for the XRP Ledger. It enables native NFT creation, trading, royalties, and burning at the protocol level." },
  { q: "What are XRPL NFT advantages?", a: "Cheaper minting, faster transfers (3-5 sec), energy-efficient, and built-in royalty enforcement at the protocol level." },
  { q: "Where can I buy XRP NFTs?", a: "XRPL marketplaces like xrp.cafe, Sologenic, OnXRP, and nftmaster.com. Also via peer-to-peer offers on the XRPL DEX." },
];

export default function XRPNFTsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP NFTs" titleAccent="NFTs on the XRP Ledger" subtitle="The XRP Ledger has native NFT support through XLS-20 — offering faster, cheaper, and greener NFTs than Ethereum. Here's everything you need to know about creating, buying, and trading NFTs on the XRPL." breadcrumbLabel="XRP NFTs">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> supports <strong className="text-text-primary">native NFTs through XLS-20</strong>, activated in October 2022. XRPL NFTs are built directly into the protocol — no smart contracts required. This means minting costs a <strong className="text-text-primary">fraction of a cent</strong> (vs $10-100+ on Ethereum), transfers settle in <strong className="text-text-primary">3-5 seconds</strong>, and royalties are <strong className="text-text-primary">enforced at the protocol level</strong> (not optional). The XRPL NFT ecosystem is growing with marketplaces, collections, and creator tools.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Standard", value: "XLS-20 (native)" },
          { label: "Activated", value: "October 2022" },
          { label: "Minting Cost", value: "~$0.0005 (fraction of a cent)" },
          { label: "Transfer Speed", value: "3-5 seconds" },
          { label: "Royalties", value: "Protocol-enforced (mandatory)" },
          { label: "Ethereum Minting Cost", value: "$10-100+ (gas fees)" },
          { label: "Energy per NFT Mint", value: "0.0079 kWh (negligible)" },
          { label: "Top Marketplaces", value: "xrp.cafe, Sologenic, OnXRP" },
        ]} />

        <SectionNav items={[
          { id: "what-are-xrpl-nfts", label: "What Are XRPL NFTs?" },
          { id: "xls-20", label: "XLS-20 Standard" },
          { id: "advantages", label: "Advantages" },
          { id: "comparison", label: "vs Ethereum NFTs" },
          { id: "marketplaces", label: "Marketplaces" },
          { id: "how-to-mint", label: "How to Mint" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Mint Cost" value="<$0.01" delay={0} />
          <StatPill label="Speed" value="3-5 sec" delay={0.06} />
          <StatPill label="Royalties" value="Enforced" delay={0.12} />
          <StatPill label="Energy" value="Negligible" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what-are-xrpl-nfts">
            <h2 className="text-2xl font-bold text-text-primary">What Are NFTs on the XRP Ledger?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              NFTs (Non-Fungible Tokens) on the XRP Ledger are unique digital assets created using the native XLS-20 standard. Unlike Ethereum, where NFTs are created via smart contracts (ERC-721/1155), <strong className="text-text-primary">XRPL NFTs are built directly into the blockchain protocol</strong>. This means the ledger itself understands what an NFT is — it&apos;s not an add-on, it&apos;s a first-class feature.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              This architectural choice gives XRPL NFTs several inherent advantages: lower costs, faster transfers, protocol-level royalty enforcement, and native support for features like burn capabilities and transfer fees. It&apos;s part of the XRPL&apos;s broader strategy of building key features natively rather than relying on smart contracts.
            </p>
          </RevealSection>

          <RevealSection id="xls-20" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The XLS-20 Standard: How It Works</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XLS-20 defines four key <Link href="/learn/xrp-transaction-types" className="text-xrp-accent underline decoration-xrp-accent/30">transaction types</Link> for NFT operations on the XRPL:
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "NFTokenMint", desc: "Create a new NFT on the XRPL. Define metadata URI, transfer fee (royalty), and flags like burnable or transferable." },
                { title: "NFTokenCreateOffer", desc: "Create a buy or sell offer for an NFT. Offers are stored on-ledger and can be accepted by the counterparty." },
                { title: "NFTokenAcceptOffer", desc: "Accept an existing buy or sell offer, completing the NFT transfer and automatically distributing royalties." },
                { title: "NFTokenBurn", desc: "Permanently destroy an NFT. Only the owner or issuer (if flagged) can burn. Useful for ticketing and expiring assets." },
              ]} />
            </div>

            <div className="mt-6">
              <HighlightBox title="Built-in Royalty Enforcement" variant="accent">
                <p>One of XLS-20&apos;s most powerful features: <strong className="text-text-primary">royalties are enforced at the protocol level</strong>. When an NFT creator sets a transfer fee (up to 50%), it&apos;s automatically collected on every secondary sale. Unlike Ethereum where marketplaces can bypass royalties, <strong className="text-text-primary">XRPL royalties cannot be circumvented</strong>. This is a major advantage for creators.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="advantages" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Advantages of XRPL NFTs</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "Near-zero minting costs", desc: "Mint an NFT for a fraction of a cent. No gas fee spikes or network congestion surcharges." },
                { title: "3-5 second settlement", desc: "NFT transfers and sales complete in seconds with guaranteed finality. No waiting for block confirmations." },
                { title: "Protocol-enforced royalties", desc: "Creator royalties are mandatory on every secondary sale. Can't be bypassed by marketplaces or users." },
                { title: "Energy-efficient", desc: "Minting and trading NFTs on XRPL uses negligible energy — 250,000x less than pre-merge Ethereum." },
                { title: "No smart contract vulnerabilities", desc: "Native protocol implementation means no smart contract bugs or exploits. The ledger enforces all NFT rules." },
                { title: "Built-in burn mechanism", desc: "NFTs can be permanently destroyed by owners or issuers. Useful for tickets, access passes, and time-limited assets." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="comparison" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL NFTs vs Ethereum NFTs</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRPL (XLS-20)", "Ethereum (ERC-721)"]}
                rows={[
                  ["Implementation", "Native protocol", "Smart contract"],
                  ["Minting Cost", "<$0.01", "$10-100+"],
                  ["Transfer Speed", "3-5 seconds", "12-15+ seconds"],
                  ["Royalties", "Protocol-enforced (mandatory)", "Optional (often bypassed)"],
                  ["Max Royalty", "Up to 50%", "No standard limit"],
                  ["Burn Support", "Native (by owner/issuer)", "Via smart contract"],
                  ["Marketplace Size", "Growing (smaller)", "Largest ecosystem"],
                  ["Developer Tools", "Growing", "Very mature"],
                  ["Collection Size", "Smaller but growing", "Millions of NFTs"],
                  ["Energy per Mint", "Negligible", "Moderate (post-merge)"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="marketplaces" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL NFT Marketplaces</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "xrp.cafe", desc: "One of the most popular XRPL NFT marketplaces. Clean interface, collection browsing, and easy buying/selling." },
                { title: "Sologenic", desc: "Combines NFT marketplace with DEX functionality. Supports both NFTs and tokenized assets on the XRPL." },
                { title: "OnXRP", desc: "Community-driven marketplace with collection launchpad, rarity tools, and social features." },
                { title: "nftmaster.com", desc: "Growing XRPL NFT platform with creator tools and collection management." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="how-to-mint" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Mint an NFT on the XRP Ledger</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "1. Set up an XRP wallet", desc: "You need an XRPL wallet with at least 10 XRP for the reserve requirement. Xumm (now Xaman) is the most popular choice." },
                { title: "2. Prepare your asset", desc: "Create your digital artwork, music, or content. Upload it to IPFS or another decentralized storage solution." },
                { title: "3. Choose a minting platform", desc: "Use a marketplace like xrp.cafe or Sologenic, or mint directly using XRPL developer tools." },
                { title: "4. Configure your NFT", desc: "Set the metadata URI, transfer fee (royalty percentage), and flags (burnable, transferable, etc.)." },
                { title: "5. Sign and submit", desc: "Approve the minting transaction in your wallet. Your NFT will be created on-ledger in 3-5 seconds." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "DeFi on the XRPL" },
              { href: "/learn/xrp-amm", label: "XRP AMM", desc: "Automated market maker" },
              { href: "/learn/how-to-use-xrpl-dex", label: "XRPL DEX Guide", desc: "Decentralized trading" },
              { href: "/learn/how-to-stake-xrp", label: "How to Stake XRP", desc: "Earn yield on XRP" },
              { href: "/learn/xrp-staking", label: "XRP Staking", desc: "Staking options explained" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "How XRPL works" },
              { href: "/learn/xrpl-consensus-mechanism", label: "XRPL Consensus", desc: "Byzantine agreement" },
              { href: "/learn/xrpl-validators", label: "XRPL Validators", desc: "Network consensus nodes" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore the XRPL Ecosystem" description="NFTs are just one feature of the XRP Ledger. Discover DeFi, tokenized assets, and more." primaryHref="/learn/xrpl-defi" primaryLabel="XRPL DeFi →" secondaryHref="/learn/xrp-ledger-explained" secondaryLabel="XRP Ledger Explained" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, XLS-20 documentation, xrp.cafe.</em></p>
      </div>
    </>
  );
}
