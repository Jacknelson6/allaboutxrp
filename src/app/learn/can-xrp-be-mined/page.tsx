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
  title: "Can XRP Be Mined? Why XRP Doesn't Use Mining | AllAboutXRP",
  description:
    "Can you mine XRP? No — all 100 billion XRP were pre-created. Learn why XRP uses consensus instead of mining, and how to actually get XRP.",
  keywords: ["can XRP be mined", "XRP mining", "mine XRP", "is XRP mineable", "XRP proof of work", "how to mine XRP"],
  openGraph: {
    title: "Can XRP Be Mined? Here's Why Mining Doesn't Apply",
    description: "XRP cannot be mined. All 100 billion tokens were created at the XRPL's inception. Here's why and how to get XRP instead.",
    url: "https://allaboutxrp.com/learn/can-xrp-be-mined",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Can XRP Be Mined? No — Here's Why",
    description: "Why XRP uses consensus instead of mining, and how to actually acquire XRP.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/can-xrp-be-mined" },
};

const schemas = [
  buildArticleSchema({
    headline: "Can XRP Be Mined? Why XRP Doesn't Use Mining",
    description: "A clear explanation of why XRP cannot be mined, how the consensus mechanism works differently from proof-of-work, and how to acquire XRP.",
    url: "https://allaboutxrp.com/learn/can-xrp-be-mined",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Can XRP Be Mined?" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/can-xrp-be-mined" }),
  buildFAQSchema([
    { question: "Can you mine XRP?", answer: "No, XRP cannot be mined. All 100 billion XRP tokens were created when the XRP Ledger launched in 2012. Unlike Bitcoin, which uses proof-of-work mining to create new coins, XRP uses a consensus protocol where validators cooperate to confirm transactions without receiving mining rewards." },
    { question: "Why can't XRP be mined?", answer: "XRP was designed with a fixed, pre-created supply to maximize efficiency. Mining requires enormous energy to solve cryptographic puzzles and creates new coins slowly. XRP's approach — pre-creating all tokens and using lightweight consensus — enables 3-5 second settlement, near-zero fees, and 250,000x less energy than Bitcoin." },
    { question: "How do you get XRP if you can't mine it?", answer: "You can acquire XRP by purchasing it on cryptocurrency exchanges (Coinbase, Binance, Kraken, etc.), receiving it as payment, earning it through XRPL DeFi participation, or receiving airdrops. The most common method is simply buying it on an exchange with fiat currency or other crypto." },
    { question: "Is XRP proof of work or proof of stake?", answer: "Neither. XRP uses its own unique consensus mechanism called the XRP Ledger Consensus Protocol (sometimes called Federated Consensus). Validators don't mine (proof-of-work) or stake (proof-of-stake). They simply verify transactions and vote on the next ledger state." },
    { question: "Can new XRP be created?", answer: "No. The total supply of XRP is permanently fixed at 100 billion tokens. No mechanism exists to create additional XRP. In fact, the supply decreases very slightly over time because transaction fees are burned (destroyed). Currently about 58 billion XRP are in circulation, with the rest held in Ripple's escrow." },
  ]),
];

const faqItems = [
  { q: "Can you mine XRP?", a: "No. All 100 billion XRP were created when the XRP Ledger launched in 2012. XRP uses consensus, not mining." },
  { q: "Why can't XRP be mined?", a: "XRP was designed with a fixed, pre-created supply for maximum efficiency. This enables 3-5 second settlement, near-zero fees, and 250,000x less energy than Bitcoin." },
  { q: "How do you get XRP?", a: "Buy on exchanges (Coinbase, Binance, Kraken), receive as payment, earn through XRPL DeFi, or receive airdrops." },
  { q: "Is XRP proof of work or proof of stake?", a: "Neither. XRP uses its own Federated Consensus protocol where validators verify transactions and vote on ledger state without mining or staking." },
  { q: "Can new XRP be created?", a: "No. The supply is permanently fixed at 100 billion. Transaction fees are burned, so supply actually decreases slightly over time." },
  { q: "Does XRP have validators instead of miners?", a: "Yes. The XRPL has 150+ independent validators who confirm transactions through consensus. They don't earn rewards — they participate because they use the network." },
];

export default function CanXRPBeMinedPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Can XRP Be Mined?"
          titleAccent="Why Mining Doesn't Apply"
          subtitle="It's one of the most common questions newcomers ask. The answer is no — and the reason why reveals fundamental design choices that make XRP faster, cheaper, and greener than mined cryptocurrencies."
          breadcrumbLabel="Can XRP Be Mined?"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">No, XRP cannot be mined.</strong> All 100 billion XRP tokens were created when the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> launched in 2012. Unlike Bitcoin, which creates new coins through energy-intensive mining, XRP uses a <Link href="/learn/how-does-xrp-work" className="text-xrp-accent underline decoration-xrp-accent/30">consensus mechanism</Link> where <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">independent validators</Link> cooperate to confirm transactions. This design choice is what enables XRP&apos;s 3-5 second settlement, near-zero fees, and minimal energy consumption. To get XRP, you <Link href="/learn/how-to-buy-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">buy it on an exchange</Link>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Can XRP Be Mined?", value: "No" },
          { label: "Total Supply", value: "100 billion (fixed forever)" },
          { label: "New XRP Created?", value: "Never — impossible" },
          { label: "Consensus Type", value: "Federated Consensus" },
          { label: "Energy per Transaction", value: "0.0079 kWh" },
          { label: "Bitcoin Energy per Tx", value: "707 kWh" },
          { label: "Efficiency Ratio", value: "XRP is 250,000x greener" },
          { label: "How to Get XRP", value: "Buy on exchanges" },
        ]} />

        <SectionNav items={[
          { id: "why-no-mining", label: "Why No Mining?" },
          { id: "consensus-vs-mining", label: "Consensus vs Mining" },
          { id: "benefits", label: "Benefits" },
          { id: "supply", label: "Supply Model" },
          { id: "how-to-get", label: "How to Get XRP" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Mineable?" value="No" delay={0} />
          <StatPill label="Total Supply" value="100B" delay={0.06} />
          <StatPill label="Energy Savings" value="250,000x" delay={0.12} />
          <StatPill label="Settlement" value="3-5 sec" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="why-no-mining">
            <h2 className="text-2xl font-bold text-text-primary">Why Can&apos;t XRP Be Mined?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP was intentionally designed without mining. When the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> was created in 2012 by David Schwartz, Jed McCaleb, and Arthur Britto, they made a deliberate architectural choice: <strong className="text-text-primary">create all tokens at genesis and use consensus instead of mining</strong>.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Their reasoning was straightforward: mining is inherently wasteful. Bitcoin&apos;s proof-of-work requires miners to burn massive amounts of electricity solving mathematical puzzles that serve no purpose other than determining who gets to write the next block. The XRPL&apos;s creators believed there was a better way — and the result is a network that&apos;s faster, cheaper, and dramatically more energy-efficient.
            </p>

            <div className="mt-6">
              <HighlightBox title="The Design Philosophy" variant="accent">
                <p>Bitcoin was designed to be <strong className="text-text-primary">digital gold</strong> — scarce, energy-secured, and gradually released through mining. XRP was designed to be <strong className="text-text-primary">digital money</strong> — fast, cheap, and efficient for payments. Mining makes sense for gold. It doesn&apos;t make sense for a payment network that needs to settle in seconds.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="consensus-vs-mining" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Consensus vs Mining: How They Differ</h2>
            <div className="mt-6">
              <DataTable
                headers={["Aspect", "Mining (Bitcoin)", "Consensus (XRP)"]}
                rows={[
                  ["How it works", "Miners compete to solve puzzles", "Validators cooperate to agree"],
                  ["Energy use", "707 kWh per transaction", "0.0079 kWh per transaction"],
                  ["Speed", "10+ minutes per block", "3-5 seconds per ledger"],
                  ["Rewards", "Block rewards + fees to miners", "No rewards — fees are burned"],
                  ["Hardware needed", "Specialized ASICs ($5,000+)", "Standard server hardware"],
                  ["New coins created?", "Yes — 6.25 BTC per block", "No — supply fixed at 100B"],
                  ["Finality", "Probabilistic (6 confirmations)", "Guaranteed in 3-5 seconds"],
                  ["Centralization risk", "Mining pools dominate", "Diverse validator network"],
                ]}
                highlightCol={2}
              />
            </div>
          </RevealSection>

          <RevealSection id="benefits" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Benefits of Not Using Mining</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "Ultra-fast settlement (3-5 seconds)", desc: "Without mining competition, consensus happens in seconds. No waiting for block confirmations." },
                { title: "Near-zero transaction fees", desc: "Without miner rewards to fund, XRP fees are a fraction of a cent. Fees are burned, not paid to anyone." },
                { title: "Environmentally sustainable", desc: "XRP uses 250,000x less energy than Bitcoin per transaction. The entire XRPL network could run on a handful of servers." },
                { title: "Guaranteed finality", desc: "Once a transaction is in a closed ledger, it's permanent. No waiting for 6 confirmations like Bitcoin." },
                { title: "Accessible validation", desc: "Anyone can run a validator on standard hardware. No $5,000+ ASIC miners needed." },
                { title: "No miner centralization", desc: "Bitcoin mining is dominated by a few large pools. XRPL validators are geographically and organizationally diverse." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="supply" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Supply Model: Pre-Created and Fixed</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              All 100 billion XRP were created at the XRPL&apos;s genesis in 2012. No mechanism exists to create more. This is fundamentally different from Bitcoin (which will mine new coins until ~2140) or Ethereum (which issues new ETH as staking rewards).
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Circulating Supply: ~58B", desc: "About 58 billion XRP are in public circulation, held by individuals, institutions, and exchanges." },
                { title: "Ripple Escrow: ~40B", desc: "Ripple holds about 40 billion XRP in cryptographic escrow, releasing up to 1 billion monthly." },
                { title: "Burned (Destroyed): ~12M", desc: "Transaction fees burn XRP permanently. About 12 million XRP have been destroyed since launch." },
                { title: "Net Direction: Deflationary", desc: "With fees being burned and no new creation, XRP's supply technically decreases over time." },
              ]} />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              For a detailed breakdown of XRP&apos;s supply mechanics, see our guides on <Link href="/learn/xrp-supply-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP supply explained</Link> and <Link href="/learn/xrp-tokenomics" className="text-xrp-accent underline decoration-xrp-accent/30">XRP tokenomics</Link>.
            </p>
          </RevealSection>

          <RevealSection id="how-to-get" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Actually Get XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Since you can&apos;t mine XRP, here are the ways to acquire it:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Buy on an exchange", desc: "The most common method. Buy XRP on Coinbase, Binance, Kraken, Bitstamp, or other major exchanges using fiat currency or other crypto." },
                { title: "Receive as payment", desc: "Accept XRP as payment for goods or services. With 3-5 second settlement and near-zero fees, it's ideal for payments." },
                { title: "Earn through XRPL DeFi", desc: "Provide liquidity on the XRPL's AMM, lend on DeFi protocols, or earn rewards through ecosystem participation." },
                { title: "Airdrops", desc: "Some XRPL projects distribute tokens to XRP holders via airdrops. Hold XRP in a self-custody wallet to be eligible." },
              ]} variant="zap" />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              For a step-by-step guide, see <Link href="/learn/how-to-buy-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">How to Buy XRP</Link> and <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Wallets</Link>.
            </p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/how-does-xrp-work", label: "How Does XRP Work?", desc: "Complete technology explainer" },
              { href: "/learn/xrpl-validators", label: "XRPL Validators", desc: "Who secures the network" },
              { href: "/learn/xrp-vs-bitcoin", label: "XRP vs Bitcoin", desc: "Full comparison" },
              { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", desc: "Step-by-step guide" },
              { href: "/learn/xrp-energy-consumption", label: "XRP Energy Usage", desc: "Environmental comparison" },
              { href: "/learn/xrp-supply-explained", label: "XRP Supply Explained", desc: "Tokenomics deep dive" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Learn How XRP Actually Works"
          description="Now you know XRP can't be mined. Discover how the consensus mechanism works and what makes XRP unique."
          primaryHref="/learn/how-does-xrp-work"
          primaryLabel="How XRP Works →"
          secondaryHref="/learn/how-to-buy-xrp"
          secondaryLabel="Buy XRP"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Ripple.com, Bitcoin.org.</em>
        </p>
      </div>
    </>
  );
}
