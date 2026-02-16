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
  title: "How to Use the XRPL DEX: Decentralized Trading Guide | AllAboutXRP",
  description: "Step-by-step guide to using the XRPL DEX. Trade tokens, place orders, and access DeFi on the XRP Ledger.",
  keywords: ["XRPL DEX","how to use XRPL DEX","XRP decentralized exchange","trade on XRPL"],
  openGraph: {
    title: "How to Use the XRPL DEX: Decentralized Trading Guide",
    description: "Step-by-step guide to using the XRPL DEX. Trade tokens, place orders, and access DeFi on the XRP Ledger.",
    url: "https://allaboutxrp.com/learn/how-to-use-xrpl-dex",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "How to Use the XRPL DEX: Decentralized Trading Guide", description: "Step-by-step guide to using the XRPL DEX. Trade tokens, place orders, and access DeFi on the XRP Ledger." },
  alternates: { canonical: "https://allaboutxrp.com/learn/how-to-use-xrpl-dex" },
};

const schemas = [
  buildArticleSchema({ headline: "How to Use the XRPL DEX: Decentralized Trading Guide", description: "Step-by-step guide to using the XRPL DEX. Trade tokens, place orders, and access DeFi on the XRP Ledger.", url: "https://allaboutxrp.com/learn/how-to-use-xrpl-dex", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "How to Use the XRPL DEX" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/how-to-use-xrpl-dex" }),
  buildFAQSchema([
    { question: "Is the XRPL DEX safe?", answer: "Built into the protocol — no smart contract exploits possible. But always verify tokens before trading." },
    { question: "Do I need KYC?", answer: "No. The XRPL DEX is fully decentralized and permissionless." },
    { question: "What fees?", answer: "Standard XRPL fee (~0.00001 XRP). AMM pools also charge a small trading fee." },
    { question: "Can I trade any token?", answer: "Any XRPL-issued token can be traded. Includes stablecoins, meme tokens, and tokenized assets." },
    { question: "Best wallets for DEX?", answer: "Xaman, Crossmark, and Sologenic. Sologenic has the most full-featured trading UI." },
  ]),
];

const faqItems = [
  { q: "Is the XRPL DEX safe?", a: "Built into the protocol — no smart contract exploits possible. But always verify tokens before trading." },
  { q: "Do I need KYC?", a: "No. The XRPL DEX is fully decentralized and permissionless." },
  { q: "What fees?", a: "Standard XRPL fee (~0.00001 XRP). AMM pools also charge a small trading fee." },
  { q: "Can I trade any token?", a: "Any XRPL-issued token can be traded. Includes stablecoins, meme tokens, and tokenized assets." },
  { q: "Best wallets for DEX?", a: "Xaman, Crossmark, and Sologenic. Sologenic has the most full-featured trading UI." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="How to Use the XRPL DEX" titleAccent="Decentralized Trading Guide" subtitle="Trade tokens on the XRP Ledger's built-in decentralized exchange — no intermediaries, no KYC, near-zero fees." breadcrumbLabel="How to Use the XRPL DEX">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> has a <strong className="text-text-primary">built-in DEX</strong> since 2012 — years before Uniswap. Combined with the <Link href="/learn/xrp-amm" className="text-xrp-accent underline decoration-xrp-accent/30">native AMM</Link>, it offers hybrid orderbook+AMM trading with near-zero fees and 3-5 second settlement.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Type", value: "Native DEX + AMM" },
          { label: "KYC", value: "Not required" },
          { label: "Fee", value: "Near-zero" },
          { label: "Speed", value: "3-5 seconds" },
          { label: "Pairs", value: "Any XRPL token" },
          { label: "Wallet", value: "Xaman / Sologenic" },
        ]} />

        <SectionNav items={[
          { id: "what-is", label: "What Is It" },
          { id: "getting-started", label: "Getting Started" },
          { id: "orders", label: "Order Types" },
          { id: "hybrid", label: "AMM vs Orderbook" },
          { id: "tips", label: "Tips" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Type" value="Native" delay={0.00} />
          <StatPill label="Fee" value="~$0" delay={0.06} />
          <StatPill label="Speed" value="3-5s" delay={0.12} />
          <StatPill label="KYC" value="None" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="what-is">
            <h2 className="text-2xl font-bold text-text-primary">What Is the XRPL DEX?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The XRPL has had a <strong className="text-text-primary">built-in decentralized exchange</strong> since launch in 2012. It features a traditional orderbook plus the <Link href="/learn/xrp-amm" className="text-xrp-accent underline decoration-xrp-accent/30">AMM</Link>, creating a unique <strong className="text-text-primary">hybrid trading system</strong>.</p>
            <div className="mt-6"><FeatureGrid columns={2} items={[
              {title:"Orderbook Trading",desc:"Limit and market orders like traditional exchanges. Full price control."},
              {title:"AMM Pools",desc:"Trade against automated liquidity pools for always-available liquidity."},
              {title:"Auto-Bridging",desc:"XRP bridges trades between any two tokens automatically."},
              {title:"Pathfinding",desc:"Ledger finds the cheapest route across all pools and orders."},
            ]} /></div>
          </RevealSection>
          <RevealSection id="getting-started" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Getting Started</h2>
            <div className="mt-6"><IconList items={[
              {title:"1. Get an XRPL wallet",desc:"Download Xaman or use Sologenic.org. Fund with 10+ XRP for wallet reserve."},
              {title:"2. Set trust lines",desc:"To hold non-XRP tokens, set trust lines. Most wallets handle this automatically."},
              {title:"3. Open DEX",desc:"In Xaman, go to exchange. On Sologenic.org, connect wallet and browse pairs."},
              {title:"4. Place a trade",desc:"Select pair, choose amount, submit. Settles in 3-5 seconds."},
              {title:"5. Manage orders",desc:"View, cancel, or modify open orders. Unfilled orders cancelled at no cost."},
            ]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="orders" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Order Types</h2>
            <div className="mt-6"><DataTable headers={["Type","How It Works","Best For"]} rows={[
              ["Market","Fills immediately at best price","Quick trades"],
              ["Limit","Fills at your price or better","Price control"],
              ["AMM Swap","Trade against pool liquidity","Always available"],
            ]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="hybrid" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Hybrid DEX + AMM</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">The <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL hybrid system</Link> auto-routes through whichever gives better price — orderbook, AMM, or combination.</p>
            <div className="mt-6"><HighlightBox title="Best of Both Worlds" variant="accent"><p>Orderbooks excel at large trades with precise pricing. AMMs provide always-available liquidity. The XRPL gives you both in one system — unique in crypto.</p></HighlightBox></div>
          </RevealSection>
          <RevealSection id="tips" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Trading Tips</h2>
            <div className="mt-6"><IconList items={[
              {title:"Check liquidity",desc:"Low-liquidity pairs have high slippage. Stick to popular pairs."},
              {title:"Use limit orders",desc:"For larger trades, limits ensure your desired price without slippage."},
              {title:"Verify tokens",desc:"Anyone can issue XRPL tokens. Verify issuers before trading."},
              {title:"Mind reserves",desc:"Keep 10 XRP base reserve plus 2 XRP per trust line."},
            ]} variant="check" /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
            { href: "/learn/xrp-amm", label: "XRP AMM", desc: "Automated market maker" },
            { href: "/learn/xrpl-defi", label: "XRPL DeFi", desc: "Full ecosystem" },
            { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Get a wallet" },
            { href: "/learn/xrpl-trust-lines-explained", label: "Trust Lines", desc: "How they work" },
            { href: "/learn/how-to-create-xrpl-token", label: "Create Token", desc: "Issue tokens" },
            { href: "/learn/xrp-transaction-types", label: "Transactions", desc: "All types" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Start Trading on the XRPL" description="Decentralized, fast, and nearly free. The original crypto DEX." primaryHref="/learn/xrp-wallets" primaryLabel="Get a Wallet →" secondaryHref="/learn/xrp-amm" secondaryLabel="XRPL AMM" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
