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
  robots: { index: false, follow: true },
  title: "Gaming on the XRP Ledger: Play-to-Earn & Beyond | AllAboutXRP",
  description: "Gaming on the XRP Ledger — play-to-earn projects, in-game NFTs, and why XRPL's low fees make it ideal for blockchain gaming.",
  keywords: ["XRPL gaming","XRP games","play to earn XRP","XRP gaming ecosystem"],
  openGraph: { title: "Gaming on the XRP Ledger: Play-to-Earn & Beyond", description: "Gaming on the XRP Ledger — play-to-earn projects, in-game NFTs, and why XRPL's low fees make it ideal for blockchain gaming.", url: "https://allaboutxrp.com/learn/xrpl-gaming", type: "article" },
  twitter: { card: "summary_large_image", title: "Gaming on the XRP Ledger: Play-to-Earn & Beyond", description: "Gaming on the XRP Ledger — play-to-earn projects, in-game NFTs, and why XRPL's low fees make it ideal for blockchain gaming." },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-gaming" },
};

const schemas = [
  buildArticleSchema({ headline: "Gaming on the XRP Ledger: Play-to-Earn & Beyond", description: "Gaming on the XRP Ledger — play-to-earn projects, in-game NFTs, and why XRPL's low fees make it ideal for blockchain gaming.", url: "https://allaboutxrp.com/learn/xrpl-gaming", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRPL Gaming" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-gaming" }),
  buildFAQSchema([
    { question: "Can I play on XRPL?", answer: "Yes. Card games, metaverse, casual games." },
    { question: "Why XRPL?", answer: "Sub-cent fees, instant settlement, native NFTs." },
    { question: "In-game NFTs?", answer: "Protocol-level. True ownership. Tradeable." },
    { question: "Earn XRP?", answer: "Some games offer micropayment rewards." },
    { question: "Mature?", answer: "Early but growing." },
  ]),
];

const faqItems = [
  { q: "Can I play on XRPL?", a: "Yes. Card games, metaverse, casual games." },
  { q: "Why XRPL?", a: "Sub-cent fees, instant settlement, native NFTs." },
  { q: "In-game NFTs?", a: "Protocol-level. True ownership. Tradeable." },
  { q: "Earn XRP?", a: "Some games offer micropayment rewards." },
  { q: "Mature?", a: "Early but growing." },
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="Gaming on the XRP Ledger" titleAccent="Play-to-Earn & Beyond" subtitle="Gaming on the XRP Ledger — play-to-earn projects, in-game NFTs, and why XRPL's low fees make it ideal for blockchain gaming." breadcrumbLabel="XRPL Gaming">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox><p>XRPL: sub-cent fees + 3-sec settlement = ideal for gaming. Native NFT items, micro XRP rewards. Ecosystem is early but growing.</p></TLDRBox>

        <KeyFactsTable facts={[
          { label: "Fees", value: "<$0.01" },
          { label: "Speed", value: "3-5 sec" },
          { label: "NFTs", value: "Native" },
          { label: "Stage", value: "Early" },
          { label: "Advantage", value: "No gas barriers" },
          { label: "Wallet", value: "Xaman" },
        ]} />

        <SectionNav items={[
          { id: "why", label: "Why XRPL?" },
          { id: "games", label: "Games" },
          { id: "nfts", label: "NFTs" },
          { id: "p2e", label: "P2E" },
          { id: "future", label: "Future" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Cost" value="<$0.001" delay={0.00} />
          <StatPill label="Speed" value="3 sec" delay={0.06} />
          <StatPill label="NFTs" value="Native" delay={0.12} />
          <StatPill label="Stage" value="Growing" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">

          <RevealSection id="why">
            <h2 className="text-2xl font-bold text-text-primary">Why XRPL?</h2>
            <div className="mt-6"><FeatureGrid columns={3} items={[{title:"No Gas",desc:"Transact freely."},{title:"Instant",desc:"3-sec confirmation."},{title:"Native NFTs",desc:"Protocol-level items."}]} /></div>
          </RevealSection>
          <RevealSection id="games" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Games</h2>
            <div className="mt-6"><IconList items={[{title:"Card Games",desc:"NFT cards tradeable on XRPL."},{title:"Metaverse",desc:"Land as XRPL NFTs."},{title:"Casual",desc:"XRP micro-rewards."}]} variant="check" /></div>
          </RevealSection>
          <RevealSection id="nfts" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">In-Game NFTs</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">True ownership. Trade on <Link href="/learn/xrpl-nft-marketplaces" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL marketplaces</Link>.</p>
          </RevealSection>
          <RevealSection id="p2e" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Play-to-Earn</h2>
            <p className="mt-4 text-text-secondary leading-relaxed"><Link href="/learn/xrp-micropayments" className="text-xrp-accent underline decoration-xrp-accent/30">Micropayments</Link> enable tiny XRP rewards impossible on high-fee chains.</p>
          </RevealSection>
          <RevealSection id="future" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Future</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">As <Link href="/learn/xrp-developer-resources" className="text-xrp-accent underline decoration-xrp-accent/30">dev tools</Link> improve, expect more sophisticated games on XRPL.</p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrpl-nft-marketplaces", label: "NFT Markets", desc: "Buy/sell" },
              { href: "/learn/xrp-micropayments", label: "Micro", desc: "Payments" },
              { href: "/learn/what-is-xrp-ledger", label: "XRPL", desc: "Basics" },
              { href: "/learn/xrp-developer-resources", label: "Dev", desc: "Build" },
              { href: "/learn/how-to-store-xrp-safely", label: "Wallets", desc: "Setup" },
              { href: "/learn/xrp-community-explained", label: "Community", desc: "Ecosystem" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="Explore XRPL Gaming" description="Gaming meets blockchain." primaryHref="/learn/xrpl-nft-marketplaces" primaryLabel="NFT Markets →" secondaryHref="/learn/what-is-xrp-ledger" secondaryLabel="Learn XRPL" />
        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
