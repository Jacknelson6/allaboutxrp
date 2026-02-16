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
  title: "Best XRPL NFT Marketplaces: Where to Buy & Sell (2026) | AllAboutXRP",
  description: "Best NFT marketplaces on the XRP Ledger. Compare xrp.cafe, Sologenic, and others — fees, features, and collections.",
  keywords: ["XRPL NFT marketplace","buy NFT XRP","XRP NFT market","XRPL NFT platforms"],
  openGraph: { title: "Best XRPL NFT Marketplaces: Where to Buy & Sell (2026)", description: "Best NFT marketplaces on the XRP Ledger. Compare xrp.cafe, Sologenic, and others — fees, features, and collections.", url: "https://allaboutxrp.com/learn/xrpl-nft-marketplaces", type: "article" },
  twitter: { card: "summary_large_image", title: "Best XRPL NFT Marketplaces: Where to Buy & Sell (2026)", description: "Best NFT marketplaces on the XRP Ledger. Compare xrp.cafe, Sologenic, and others — fees, features, and collections." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-nft-marketplaces" },
};

const schemas = [
  buildArticleSchema({ headline: "Best XRPL NFT Marketplaces: Where to Buy & Sell (2026)", description: "Best NFT marketplaces on the XRP Ledger. Compare xrp.cafe, Sologenic, and others — fees, features, and collections.", url: "https://allaboutxrp.com/learn/xrpl-nft-marketplaces", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRPL NFTs" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-nft-marketplaces" }),
  buildFAQSchema([
    { question: "Best marketplace?", answer: "xrp.cafe for variety. Sologenic for DEX features." },
    { question: "Mint cost?", answer: "Less than $0.01." },
    { question: "Royalties enforced?", answer: "Yes. Protocol level." },
    { question: "Wallet needed?", answer: "Xaman (XUMM)." },
    { question: "Growing?", answer: "Yes. Users and collections increasing." },
  ]),
];

const faqItems = [
  { q: "Best marketplace?", a: "xrp.cafe for variety. Sologenic for DEX features." },
  { q: "Mint cost?", a: "Less than $0.01." },
  { q: "Royalties enforced?", a: "Yes. Protocol level." },
  { q: "Wallet needed?", a: "Xaman (XUMM)." },
  { q: "Growing?", a: "Yes. Users and collections increasing." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="Best XRPL NFT Marketplaces" titleAccent="Where to Buy & Sell (2026)" subtitle="Best NFT marketplaces on the XRP Ledger. Compare xrp.cafe, Sologenic, and others — fees, features, and collections." breadcrumbLabel="XRPL NFTs">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>XRPL has native NFTs (XLS-20). Top: xrp.cafe (largest), Sologenic (DEX). Sub-cent minting, 3-sec settlement, enforced royalties. Much cheaper than Ethereum.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "#1", value: "xrp.cafe" },
          { label: "Mint", value: "<$0.01" },
          { label: "Speed", value: "3-5 sec" },
          { label: "Standard", value: "XLS-20" },
          { label: "Royalties", value: "Enforced" },
          { label: "Wallet", value: "Xaman" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "markets", label: "Markets" },
          { id: "buying", label: "How" },
          { id: "vs", label: "vs Ethereum" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Markets" value="5+" delay={0.00} />
          <StatPill label="Mint" value="<$0.01" delay={0.06} />
          <StatPill label="Speed" value="3 sec" delay={0.12} />
          <StatPill label="Type" value="XLS-20" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">XRPL NFTs</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/what-is-xrp-ledger" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> NFTs are protocol-level. Cheaper, faster, enforced royalties.</p>
            <div className="mt-6"><FeatureGrid columns={3} items={[{title:"<$0.01 Mint",desc:"Fraction of a cent."},{title:"3-Sec",desc:"Instant settlement."},{title:"Royalties",desc:"Protocol-enforced."}]} /></div>
          </RevealSection>
          <RevealSection id="markets" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Marketplaces</h2>
            <div className="mt-6"><DataTable headers={["Market","Collections","Fee"]} rows={[["xrp.cafe","Largest","2.5%"],["Sologenic","Large","2.5%"],["onXRP","Growing","2.5%"],["XPMarket","Medium","2%"]]} highlightCol={0} /></div>
          </RevealSection>
          <RevealSection id="buying" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Buy</h2>
            <div className="mt-6"><IconList items={[{title:"Get Xaman",desc:"XRPL wallet."},{title:"Connect",desc:"Visit marketplace."},{title:"Buy",desc:"One tap + confirm."},{title:"Trade",desc:"List for sale anytime."}]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="vs" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">vs Ethereum</h2>
            <div className="mt-6"><DataTable headers={["Feature","XRPL","ETH"]} rows={[["Mint","<$0.01","$5-100+"],["Speed","3-5s","15-60s"],["Royalties","Enforced","Optional"],["Gas","~$0.0001","Variable"]]} highlightCol={1} /></div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp-ledger", label: "XRPL", desc: "Basics" },
              { href: "/learn/xrpl-gaming", label: "Gaming", desc: "XRPL games" },
              { href: "/learn/how-to-store-xrp-safely", label: "Wallets", desc: "Security" },
              { href: "/learn/xrp-micropayments", label: "Micro", desc: "Payments" },
              { href: "/learn/xrp-block-explorers", label: "Explorers", desc: "Track" },
              { href: "/learn/xrp-developer-resources", label: "Dev", desc: "Build" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore NFTs" description="Discover XRPL NFTs." primaryHref="/learn/what-is-xrp-ledger" primaryLabel="XRPL →" secondaryHref="/learn/how-to-store-xrp-safely" secondaryLabel="Get Wallet" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
