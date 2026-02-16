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
  title: "How Does XRP Work? Simple Explanation | AllAboutXRP",
  description:
    "How does XRP work? Learn how XRP transactions are processed, how the consensus mechanism works, and why XRP settles in 3-5 seconds.",
  keywords: ["how does XRP work", "XRP technology explained", "XRP consensus", "how XRP transactions work", "XRP Ledger technology"],
  openGraph: {
    title: "How Does XRP Work? A Simple, Complete Explanation",
    description: "From sending a transaction to consensus to settlement — here's exactly how XRP works, explained simply.",
    url: "https://allaboutxrp.com/learn/how-does-xrp-work",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Does XRP Work? Complete Guide",
    description: "XRP consensus, transactions, and settlement explained simply.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/how-does-xrp-work" },
};

const schemas = [
  buildArticleSchema({
    headline: "How Does XRP Work? Simple Explanation",
    description: "A comprehensive yet accessible explanation of how XRP transactions work, the consensus mechanism, and the technology behind 3-5 second settlement.",
    url: "https://allaboutxrp.com/learn/how-does-xrp-work",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "How Does XRP Work?" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/how-does-xrp-work" }),
  buildFAQSchema([
    { question: "How does XRP work in simple terms?", answer: "XRP works by using a network of independent validators to confirm transactions through consensus. When you send XRP, your transaction is broadcast to the network. Validators agree on which transactions are valid, and the ledger is updated every 3-5 seconds. Unlike Bitcoin, XRP doesn't use mining — validators don't compete for rewards, they cooperate to validate transactions." },
    { question: "How fast are XRP transactions?", answer: "XRP transactions settle in 3-5 seconds with guaranteed finality. This means once a transaction is confirmed, it cannot be reversed or rolled back. This is dramatically faster than Bitcoin (10-60 minutes), Ethereum (12-15 seconds), or traditional bank transfers (1-5 days)." },
    { question: "How much does an XRP transaction cost?", answer: "XRP transaction fees are approximately 0.00001 XRP (10 drops), which is a fraction of a cent. Fees are burned (destroyed), not paid to validators. This makes XRP one of the cheapest cryptocurrencies to transact with." },
    { question: "Does XRP use mining?", answer: "No. XRP does not use mining or proof-of-work. All 100 billion XRP were created at the ledger's inception. Instead of miners competing to solve puzzles, XRP uses a consensus protocol where trusted validators cooperate to validate transactions. This makes XRP far more energy-efficient than Bitcoin." },
    { question: "What happens to XRP transaction fees?", answer: "XRP transaction fees are permanently burned (destroyed). They are not paid to validators or any entity. This creates a very slight deflationary pressure on XRP's supply over time, though the burn rate is minimal — roughly 10-20 XRP per day at current usage levels." },
  ]),
];

const faqItems = [
  { q: "How does XRP work in simple terms?", a: "XRP uses a network of independent validators to confirm transactions through consensus. When you send XRP, validators agree on which transactions are valid, and the ledger updates every 3-5 seconds. No mining — validators cooperate to validate." },
  { q: "How fast are XRP transactions?", a: "XRP transactions settle in 3-5 seconds with guaranteed finality. Once confirmed, a transaction cannot be reversed. This is faster than Bitcoin (10-60 min), Ethereum (12-15 sec), or bank transfers (1-5 days)." },
  { q: "How much does an XRP transaction cost?", a: "About 0.00001 XRP (~$0.00002), which is a fraction of a cent. Fees are burned, not paid to validators." },
  { q: "Does XRP use mining?", a: "No. All 100 billion XRP were created at inception. XRP uses a consensus protocol where trusted validators cooperate instead of miners competing. This makes XRP far more energy-efficient than Bitcoin." },
  { q: "What happens to XRP transaction fees?", a: "Fees are permanently burned (destroyed). This creates slight deflationary pressure, though the burn rate is minimal at about 10-20 XRP per day." },
  { q: "Who are XRP validators?", a: "XRP validators are independent servers run by universities, exchanges, companies, and individuals worldwide. They don't earn rewards — they participate because they use the network. Ripple runs some validators but doesn't control the majority." },
];

export default function HowDoesXRPWorkPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How Does XRP Work?"
          titleAccent="A Simple, Complete Explanation"
          subtitle="XRP settles payments in 3-5 seconds for a fraction of a cent. But how does it actually work? Here's a clear, jargon-free explanation of the technology behind XRP — from sending a transaction to final settlement."
          breadcrumbLabel="How Does XRP Work?"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP works through a consensus mechanism</strong> — not mining. When you send XRP, your transaction is broadcast to a network of independent <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">validators</Link> who agree on which transactions are valid. The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> closes a new block every 3-5 seconds, confirming transactions with <strong className="text-text-primary">guaranteed finality</strong> (no chargebacks or reversals). Transaction fees cost a fraction of a cent and are <strong className="text-text-primary">burned permanently</strong>, not paid to anyone. All 100 billion XRP were created at the start — there&apos;s no mining.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Consensus Type", value: "Federated Consensus (UNL)" },
          { label: "Settlement Time", value: "3-5 seconds" },
          { label: "Transaction Fee", value: "~0.00001 XRP (~$0.00002)" },
          { label: "Finality", value: "Guaranteed (irreversible)" },
          { label: "Mining", value: "None — all XRP pre-created" },
          { label: "Validators", value: "150+ independent nodes" },
          { label: "TPS Capacity", value: "1,500+ transactions/second" },
          { label: "Fee Destination", value: "Burned (destroyed)" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "sending-transaction", label: "Sending a Transaction" },
          { id: "consensus", label: "Consensus" },
          { id: "validators", label: "Validators" },
          { id: "vs-bitcoin", label: "vs Bitcoin Mining" },
          { id: "features", label: "Built-in Features" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Settlement" value="3-5 sec" delay={0} />
          <StatPill label="Fee" value="$0.00002" delay={0.06} />
          <StatPill label="Validators" value="150+" delay={0.12} />
          <StatPill label="TPS" value="1,500+" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">How XRP Works: The Big Picture</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              At its core, XRP is a <strong className="text-text-primary">digital payment protocol</strong>. The XRP Ledger (XRPL) is an open-source, decentralized blockchain that processes and records XRP transactions. Unlike Bitcoin, which uses energy-intensive mining, XRP uses a <strong className="text-text-primary">consensus mechanism</strong> — a system where independent validators agree on the state of the ledger every few seconds.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Think of it like this: Bitcoin is a competition (miners race to solve puzzles), while XRP is a vote (validators cooperate to agree on truth). This is why XRP is <strong className="text-text-primary">250,000x more energy-efficient</strong> than Bitcoin and settles payments in seconds instead of minutes.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={3} items={[
                { title: "Step 1: Send", desc: "You initiate a transaction from your XRP wallet, signing it with your private key." },
                { title: "Step 2: Broadcast", desc: "Your transaction is broadcast to the network of validators around the world." },
                { title: "Step 3: Validate", desc: "Validators check: Is the sender's balance sufficient? Is the signature valid? Is this a double-spend?" },
                { title: "Step 4: Consensus", desc: "Validators propose transactions for the next ledger. When 80%+ agree, the ledger closes." },
                { title: "Step 5: Settle", desc: "The new ledger version is published. Your transaction is confirmed with finality in 3-5 seconds." },
                { title: "Step 6: Fee Burn", desc: "The tiny transaction fee (0.00001 XRP) is permanently destroyed. Not paid to anyone." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="sending-transaction" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What Happens When You Send XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Let&apos;s walk through exactly what happens when you send XRP from your <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">wallet</Link> to someone else&apos;s wallet:
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "1. You create and sign the transaction", desc: "Your wallet software creates a transaction object containing the recipient's address, amount, and a destination tag (if needed). It signs this with your private key, proving you authorized the payment." },
                { title: "2. Transaction broadcasts to the network", desc: "Your signed transaction is sent to the nearest XRP Ledger node, which relays it to other nodes across the global network within milliseconds." },
                { title: "3. Validators check validity", desc: "Each validator independently verifies: Does the sender have enough XRP? Is the cryptographic signature valid? Is this transaction properly formatted? Has this XRP already been spent?" },
                { title: "4. Consensus round occurs", desc: "Validators propose valid transactions for inclusion in the next ledger version. Through iterative voting rounds, they reach 80%+ agreement on which transactions to include." },
                { title: "5. Ledger closes (3-5 seconds)", desc: "The new ledger version is published with your transaction included. The recipient's balance is updated. The transaction has guaranteed finality — it cannot be reversed." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="What Does 'Finality' Mean?" variant="accent">
                <p>Unlike Bitcoin where transactions can theoretically be reversed through a 51% attack (which is why exchanges wait for 6 confirmations), XRP transactions have <strong className="text-text-primary">guaranteed finality</strong>. Once a ledger closes, the transactions in it are permanent. No amount of computing power can reverse them. This is why XRP is trusted for <Link href="/learn/cross-border-payments" className="text-xrp-accent underline decoration-xrp-accent/30">high-value institutional payments</Link>.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="consensus" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The XRP Consensus Mechanism Explained</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP&apos;s consensus mechanism is called the <strong className="text-text-primary">XRP Ledger Consensus Protocol</strong> (sometimes called Federated Consensus). It&apos;s fundamentally different from Bitcoin&apos;s Proof-of-Work and Ethereum&apos;s Proof-of-Stake.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Each validator maintains a <strong className="text-text-primary">Unique Node List (UNL)</strong> — a list of other validators it trusts. To reach consensus, at least <strong className="text-text-primary">80% of a validator&apos;s UNL</strong> must agree on a set of transactions. This process happens through multiple rounds of proposals, with each round narrowing disagreements until supermajority agreement is reached.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "No Mining Required", desc: "Validators don't solve puzzles or stake coins. They simply verify transactions and vote on the next ledger state." },
                { title: "No Rewards", desc: "Validators earn nothing for participating. They validate because they use the network (exchanges, institutions, developers)." },
                { title: "80% Supermajority", desc: "Consensus requires 80%+ agreement among trusted validators, preventing any single entity from controlling the network." },
                { title: "3-5 Second Rounds", desc: "Each consensus round takes 3-5 seconds, producing a new immutable ledger version with guaranteed finality." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="validators" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Who Are XRP Validators?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">XRP validators</Link> are independent servers run by a diverse set of organizations and individuals around the world. Unlike Bitcoin miners who are incentivized by block rewards, XRP validators participate because they <strong className="text-text-primary">use the network and want it to function correctly</strong>.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Universities", desc: "Academic institutions including some that run validators for research and education purposes." },
                { title: "Exchanges", desc: "Major crypto exchanges run validators to ensure they can trust the transactions they process." },
                { title: "Financial institutions", desc: "Banks and payment providers that use RippleNet run validators for direct network participation." },
                { title: "Infrastructure companies", desc: "Blockchain infrastructure providers run validators as part of their services." },
                { title: "Individual developers", desc: "Community members who run validators on commodity hardware to support decentralization." },
              ]} variant="check" />
            </div>

            <div className="mt-6">
              <HighlightBox title="Is XRP Centralized?" variant="info">
                <p>A common criticism is that XRP is &quot;centralized&quot; because Ripple runs some validators. The reality: Ripple runs only <strong className="text-text-primary">4-5 of 150+ validators</strong> on the default UNL. Even if Ripple&apos;s validators went offline, the network would continue operating. No single entity controls 80% of validators, which is what would be needed to manipulate consensus. See our <Link href="/learn/xrp-myths" className="text-xrp-accent underline decoration-xrp-accent/30">XRP myths page</Link> for more on this topic.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="vs-bitcoin" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP vs Bitcoin: How They Work Differently</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRP", "Bitcoin"]}
                rows={[
                  ["Consensus", "Federated Consensus (voting)", "Proof-of-Work (mining)"],
                  ["Settlement Time", "3-5 seconds", "10-60 minutes"],
                  ["Transaction Fee", "~$0.00002", "$1-50+"],
                  ["Energy Use", "0.0079 kWh/tx", "707 kWh/tx"],
                  ["Supply Creation", "All pre-created at genesis", "Mined over ~140 years"],
                  ["Finality", "Guaranteed in 3-5 sec", "Probabilistic (6 confirmations)"],
                  ["TPS Capacity", "1,500+", "~7"],
                  ["Validator Incentive", "None (network participation)", "Block rewards + fees"],
                ]}
                highlightCol={1}
              />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              The key philosophical difference: Bitcoin was designed as <strong className="text-text-primary">digital gold</strong> (store of value), while XRP was designed as <strong className="text-text-primary">digital money</strong> (medium of exchange). Their technical architectures reflect these different goals. For a deeper comparison, see <Link href="/learn/xrp-vs-bitcoin" className="text-xrp-accent underline decoration-xrp-accent/30">XRP vs Bitcoin</Link>.
            </p>
          </RevealSection>

          <RevealSection id="features" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Built-in Features of the XRP Ledger</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Beyond simple payments, the XRP Ledger has several powerful features built directly into the protocol:
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Decentralized Exchange (DEX)", desc: "A built-in DEX for trading any tokens issued on the XRPL, including stablecoins and custom assets." },
                { title: "Automated Market Maker (AMM)", desc: "Native AMM functionality for automated token swaps and liquidity provision." },
                { title: "Token Issuance", desc: "Anyone can issue custom tokens on the XRPL — from stablecoins like RLUSD to event tickets." },
                { title: "NFTs (XLS-20)", desc: "Native NFT support built into the protocol, more efficient than smart contract-based NFTs." },
                { title: "Escrow", desc: "Built-in time-locked escrow for conditional payments. Ripple uses this for its XRP supply management." },
                { title: "Payment Channels", desc: "Off-ledger payment channels for high-frequency micropayments with minimal fees." },
              ]} />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              Learn more about these features in our guides on <Link href="/learn/xrp-transaction-types" className="text-xrp-accent underline decoration-xrp-accent/30">XRP transaction types</Link>, <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL DeFi</Link>, and the <Link href="/learn/xrp-escrow-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP escrow system</Link>.
            </p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete guide to XRP" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company behind XRP" },
              { href: "/learn/ripple-vs-xrp", label: "Ripple vs XRP", desc: "Key differences explained" },
              { href: "/learn/xrp-for-beginners", label: "XRP for Beginners", desc: "Start your XRP journey" },
              { href: "/learn/faq", label: "XRP FAQ", desc: "Common questions answered" },
              { href: "/learn/get-started", label: "Get Started with XRP", desc: "Buy your first XRP" },
              { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", desc: "Step-by-step buying guide" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Security best practices" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Dive Deeper into XRP Technology"
          description="Now you understand how XRP works. Explore the XRP Ledger's advanced features or learn about real-world use cases."
          primaryHref="/learn/xrp-ledger-explained"
          primaryLabel="XRP Ledger Deep Dive →"
          secondaryHref="/learn/xrp-use-cases"
          secondaryLabel="XRP Use Cases"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org, Ripple.com, XRP Ledger documentation.</em>
        </p>
      </div>
    </>
  );
}
