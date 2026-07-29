import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import SourceList from "@/components/shared/SourceList";
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

const faqItems = [
  { q: "How does XRP work in simple terms?", a: "XRP transactions are processed by the XRP Ledger. Independent servers propose transactions and use the XRPL consensus protocol to agree on a validated ledger, typically every three to five seconds. The network does not use proof-of-work mining." },
  { q: "When is an XRP transaction final?", a: "A transaction result is final when the transaction appears in a validated ledger. A preliminary result from a submitted transaction is not enough; wallets and exchanges should verify the validated result." },
  { q: "How much does an XRP transaction cost?", a: "The reference transaction cost on Mainnet is normally 10 drops, or 0.00001 XRP, but the open-ledger cost can rise when the network is busy. The cost is destroyed rather than paid to a validator." },
  { q: "Does XRP use mining?", a: "No. The 100 billion XRP supply was created when the XRP Ledger began. XRPL validation uses a consensus process, not proof-of-work mining, and validators do not receive protocol rewards." },
  { q: "Who operates XRP Ledger validators?", a: "Validators can be operated by independent individuals and organizations. Each server operator chooses which validators it trusts for consensus, and the public validator landscape can change over time." },
];

const schemas = [
  buildArticleSchema({
    headline: "How Does XRP Work? Simple Explanation",
    description: "A comprehensive yet accessible explanation of how XRP transactions work, the consensus mechanism, and the technology behind 3-5 second settlement.",
    url: "https://allaboutxrp.com/learn/how-does-xrp-work",
    datePublished: "2026-02-15",
    dateModified: "2026-07-28",
    citations: [
      "https://xrpl.org/docs/concepts/transactions/finality-of-results",
      "https://xrpl.org/docs/concepts/transactions/transaction-cost",
      "https://xrpl.org/docs/concepts/consensus-protocol",
    ],
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "How Does XRP Work?" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/how-does-xrp-work" }),
  buildFAQSchema(faqItems.map((item) => ({ question: item.q, answer: item.a }))),
];

export default function HowDoesXRPWorkPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How Does XRP Work?"
          titleAccent="A Simple, Complete Explanation"
          subtitle="The XRP Ledger typically validates new ledger versions every three to five seconds. Here is how transactions move from submission to a final, validated result—and where to verify each technical detail."
          breadcrumbLabel="How Does XRP Work?"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" modified="2026-07-28" />
            <LastUpdated date="July 28, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP works through the XRP Ledger consensus protocol</strong>, not mining. A submitted transaction is relayed to XRPL servers, checked against protocol rules, and becomes final when it is included in a <strong className="text-text-primary">validated ledger</strong>. Ledger versions typically validate every three to five seconds. The minimum transaction cost is normally 10 drops (0.00001 XRP), can rise with load, and is <strong className="text-text-primary">destroyed</strong> rather than paid to a validator.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Consensus", value: "XRPL Consensus Protocol" },
          { label: "Typical Ledger Close", value: "3-5 seconds" },
          { label: "Reference Cost", value: "10 drops (0.00001 XRP)" },
          { label: "Final Result", value: "Included in a validated ledger" },
          { label: "Mining", value: "None — all XRP pre-created" },
          { label: "Validators", value: "Independent operators" },
          { label: "Network Load", value: "Can raise open-ledger cost" },
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
          <StatPill label="Reference Cost" value="10 drops" delay={0.06} />
          <StatPill label="Mining" value="None" delay={0.12} />
          <StatPill label="Final Result" value="Validated" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">How XRP Works: The Big Picture</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              At its core, XRP is a <strong className="text-text-primary">digital payment protocol</strong>. The XRP Ledger (XRPL) is an open-source, decentralized blockchain that processes and records XRP transactions. Unlike Bitcoin, which uses energy-intensive mining, XRP uses a <strong className="text-text-primary">consensus mechanism</strong> — a system where independent validators agree on the state of the ledger every few seconds.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              A useful shorthand is that proof-of-work networks use mining to order transactions, while XRPL servers exchange proposals and converge on a validated ledger. The protocols make different security and liveness tradeoffs, so the comparison should not be reduced to one speed or energy statistic.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={3} items={[
                { title: "Step 1: Send", desc: "You initiate a transaction from your XRP wallet, signing it with your private key." },
                { title: "Step 2: Broadcast", desc: "Your transaction is broadcast to the network of validators around the world." },
                { title: "Step 3: Validate", desc: "Validators check: Is the sender's balance sufficient? Is the signature valid? Is this a double-spend?" },
                { title: "Step 4: Consensus", desc: "Validators propose transactions for the next ledger. When 80%+ agree, the ledger closes." },
                { title: "Step 5: Validate", desc: "If the transaction is included in a validated ledger, its result is final. A preliminary submission result is not final." },
                { title: "Step 6: Destroy the Cost", desc: "The transaction cost is deducted and permanently destroyed instead of being paid to a validator." },
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
                { title: "5. Check the validated result", desc: "A transaction is final when it appears in a validated ledger. Applications should verify the validated result rather than relying only on the preliminary submission response." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="What Does 'Finality' Mean?" variant="accent">
                <p>XRPL distinguishes between a transaction being submitted, a preliminary engine result, and a result in a validated ledger. Only the validated result is final. This distinction matters when a wallet, exchange, or payment system decides whether to credit a payment.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="consensus" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The XRP Consensus Mechanism Explained</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP&apos;s consensus mechanism is called the <strong className="text-text-primary">XRP Ledger Consensus Protocol</strong> (sometimes called Federated Consensus). It&apos;s fundamentally different from Bitcoin&apos;s Proof-of-Work and Ethereum&apos;s Proof-of-Stake.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Each server operator configures a <strong className="text-text-primary">Unique Node List (UNL)</strong>—the validators it listens to for consensus. Validators exchange proposals over several rounds and converge on the transaction set for the next ledger. The protocol&apos;s safety depends on sufficient overlap between operators&apos; trusted lists; no single global list is hard-coded into the ledger.
            </p>

            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "No Mining Required", desc: "Validators don't solve puzzles or stake coins. They simply verify transactions and vote on the next ledger state." },
                { title: "No Rewards", desc: "Validators earn nothing for participating. They validate because they use the network (exchanges, institutions, developers)." },
                { title: "Quorum and List Overlap", desc: "Servers use quorum among trusted validators, and sufficient overlap between trusted lists is important to network safety." },
                { title: "Typical 3-5 Second Rounds", desc: "The network usually validates a new ledger version every three to five seconds, though timing can vary." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="validators" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Who Are XRP Validators?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger validators</Link> can be run by individuals and organizations. XRPL does not pay block rewards or transaction fees to validators. Operators participate for reasons such as running reliable infrastructure, independently verifying the ledger, supporting applications, or contributing to the network.
            </p>

            <div className="mt-6">
              <IconList items={[
                { title: "Infrastructure operators", desc: "Organizations can validate the same ledger data they use for wallets, exchanges, explorers, and applications." },
                { title: "Universities and nonprofits", desc: "Academic and nonprofit operators may participate for research, education, or public infrastructure." },
                { title: "Businesses", desc: "Companies that depend on XRPL can run servers and validators to verify network activity independently." },
                { title: "Individual operators", desc: "Technically capable community members can operate validators and publish their public keys and policies." },
              ]} variant="check" />
            </div>

            <div className="mt-6">
              <HighlightBox title="Is XRP Centralized?" variant="info">
                <p>There is no single administrator that approves XRPL transactions, but decentralization is not a yes-or-no label. Evaluate who operates validators, how operators choose trusted lists, the overlap between those lists, software-development influence, and what would happen if a major operator went offline. Current validator and UNL data should be checked live rather than reduced to a fixed count.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="vs-bitcoin" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP vs Bitcoin: How They Work Differently</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRP", "Bitcoin"]}
                rows={[
                  ["Consensus", "XRPL consensus protocol", "Proof-of-Work mining"],
                  ["Finality", "Final once included in a validated ledger", "Probabilistic; confidence rises with confirmations"],
                  ["Transaction Cost", "Reference cost in drops; can rise with load", "Fee market denominated in satoshis per virtual byte"],
                  ["Mining", "No proof-of-work mining", "Proof-of-work mining"],
                  ["Supply Creation", "All pre-created at genesis", "Mined over ~140 years"],
                  ["Protocol Incentive", "No validator reward", "Block subsidy and transaction fees"],
                ]}
                highlightCol={1}
              />
            </div>

            <p className="mt-6 text-text-secondary leading-relaxed">
              The protocols were designed with different transaction-ordering models, issuance schedules, and operating assumptions. Those differences matter more than a single speed or fee snapshot. For a deeper comparison, see <Link href="/learn/xrp-vs-bitcoin" className="text-xrp-accent underline decoration-xrp-accent/30">XRP vs Bitcoin</Link>.
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
              Learn more about these features in our guides on <Link href="/learn/xrp-transaction-types" className="text-xrp-accent underline decoration-xrp-accent/30">XRP transaction types</Link>, <Link href="/learn/xrpl-defi" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL DeFi</Link>, and the <Link href="/learn/escrow" className="text-xrp-accent underline decoration-xrp-accent/30">XRP escrow system</Link>.
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
              { href: "/how-to-start", label: "Get Started with XRP", desc: "A risk-aware buying and custody checklist" },
              { href: "/learn/how-to-buy-xrp", label: "How to Buy XRP", desc: "Step-by-step buying guide" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Security best practices" },
            ]} />
          </RevealSection>
        </div>

        <SourceList sources={[
          { label: "XRPL transaction finality", href: "https://xrpl.org/docs/concepts/transactions/finality-of-results", note: "How to distinguish preliminary and validated transaction results" },
          { label: "XRPL transaction cost", href: "https://xrpl.org/docs/concepts/transactions/transaction-cost", note: "Reference cost, load-based escalation, and cost destruction" },
          { label: "XRPL consensus protocol", href: "https://xrpl.org/docs/concepts/consensus-protocol", note: "How validators exchange proposals and validate ledgers" },
          { label: "XRPL consensus principles and rules", href: "https://xrpl.org/docs/concepts/consensus-protocol/consensus-principles-and-rules", note: "Quorum, trusted lists, and validation behavior" },
        ]} />

        <LearnCTA
          title="Dive Deeper into XRP Technology"
          description="Now you understand how XRP works. Explore the XRP Ledger's advanced features or learn about real-world use cases."
          primaryHref="/learn/xrp-ledger-explained"
          primaryLabel="XRP Ledger Deep Dive →"
          secondaryHref="/learn/xrp-use-cases"
          secondaryLabel="XRP Use Cases"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Reviewed July 28, 2026. Published by AllAboutXRP. Network settings and validator lists can change; use the primary sources above for current details.</em>
        </p>
      </div>
    </>
  );
}
