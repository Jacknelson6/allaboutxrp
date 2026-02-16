import { Metadata } from "next";
import Image from "next/image";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, MisconceptionCard, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRPL Validators & Consensus Explained",
  description:
    "Learn how XRPL validators work, the RPCA consensus algorithm, UNL, decentralization progress, and how to run a validator.",
  keywords: ["XRPL validators", "XRP consensus", "XRP Ledger consensus", "RPCA algorithm"],
  openGraph: {
    title: "XRPL Validators & Consensus | AllAboutXRP",
    description:
      "How XRPL validators reach consensus without mining. RPCA algorithm, UNL, decentralization, and running your own validator.",
    url: "https://allaboutxrp.com/learn/xrpl-validators",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL Validators & Consensus | AllAboutXRP",
    description:
      "RPCA consensus, Unique Node Lists, validator requirements, and XRPL decentralization progress.",
  },
  alternates: {
    canonical: "https://allaboutxrp.com/learn/xrpl-validators",
  },
};

const schemas = [
  buildArticleSchema({
    headline: "XRPL Validators & Consensus: How It Works",
    description: "A comprehensive guide to XRPL validators, the Ripple Protocol Consensus Algorithm (RPCA), Unique Node Lists, decentralization, and how to run your own validator.",
    url: "https://allaboutxrp.com/learn/xrpl-validators",
    datePublished: "2026-02-13",
    dateModified: "2026-02-13",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL Validators & Consensus" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-validators" }),
  buildFAQSchema([
    { question: "What do XRPL validators do?", answer: "XRPL validators propose and vote on which transactions to include in the next ledger version. They reach agreement (consensus) every 3-5 seconds without mining or staking. Validators don't earn rewards — they run for the utility of participating in the network." },
    { question: "What is the RPCA consensus algorithm?", answer: "The Ripple Protocol Consensus Algorithm (RPCA) is the XRPL's consensus mechanism. Validators share transaction proposals, iteratively build agreement, and finalize a ledger version when 80%+ of trusted validators agree. It achieves finality in 3-5 seconds with no forks." },
    { question: "How is XRPL consensus different from mining?", answer: "Unlike Bitcoin's proof-of-work mining, XRPL consensus requires no computational puzzles, uses negligible energy, produces no block rewards, and achieves true finality (no confirmations needed). It's 120,000x more energy efficient than Bitcoin." },
    { question: "How many validators does the XRPL have?", answer: "The XRPL has 150+ validators globally. The default Unique Node List (dUNL) contains approximately 35 trusted validators operated by universities, exchanges, infrastructure companies, and Ripple (which runs only about 6% of dUNL validators)." },
    { question: "Can anyone run an XRPL validator?", answer: "Yes. Anyone can run a validator by installing rippled (the XRPL server software) on a server meeting minimum specs. However, to have influence on consensus, your validator must be added to other operators' UNLs, which requires building reputation and uptime track record." },
  ]),
];

const faqItems = [
  { q: "What do XRPL validators do?", a: "XRPL validators propose and vote on which transactions to include in the next ledger version. They reach agreement (consensus) every 3-5 seconds without mining or staking. Validators don't earn rewards — they run for the utility and responsibility of participating in the network." },
  { q: "What is the RPCA consensus algorithm?", a: "The Ripple Protocol Consensus Algorithm (RPCA) is the XRPL's consensus mechanism. Validators share transaction proposals, iteratively build agreement through multiple rounds, and finalize a ledger version when 80%+ of trusted validators agree. It achieves finality in 3-5 seconds with no possibility of forks." },
  { q: "How is XRPL consensus different from mining?", a: "Unlike Bitcoin's proof-of-work mining, XRPL consensus requires no computational puzzles, uses negligible energy (120,000x less than Bitcoin), produces no block rewards, and achieves true finality — no need to wait for multiple confirmations." },
  { q: "How many validators does the XRPL have?", a: "The XRPL has over 150 validators globally. The default Unique Node List (dUNL) contains approximately 35 trusted validators operated by universities, exchanges, infrastructure companies, and Ripple (which runs about 6% of dUNL validators)." },
  { q: "Can anyone run an XRPL validator?", a: "Yes. Anyone can run a validator by installing rippled on a server meeting minimum hardware specs (8+ cores, 64GB RAM, fast SSD). However, to influence consensus, your validator needs to be added to others' UNLs — which requires building a track record of reliability and uptime." },
];

export default function XRPLValidatorsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL Validators &"
          titleAccent="Consensus"
          subtitle="The XRP Ledger achieves consensus without mining, staking, or block rewards. Instead, a network of independent validators agrees on the state of the ledger every 3-5 seconds — making the XRPL one of the most energy-efficient and fastest blockchain networks in existence."
          breadcrumbLabel="XRPL Validators & Consensus"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-13" />
            <LastUpdated date="February 13, 2026" />
          </div>
        </LearnHero>

        <div className="mt-8 mb-12 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/xrpl-validators-hero.jpg"
            alt="XRPL validator nodes and network"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>

        <TLDRBox>
          <p>The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL</Link> uses the <strong className="text-text-primary">Ripple Protocol Consensus Algorithm (RPCA)</strong> — not mining or staking. Over <strong className="text-text-primary">150 validators</strong> globally propose and agree on transactions every 3-5 seconds. Each node maintains a <strong className="text-text-primary">Unique Node List (UNL)</strong> of trusted validators. <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> operates only ~6% of default UNL validators. No rewards, no mining — just pure consensus.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Algorithm", value: "RPCA (Federated Consensus)" },
          { label: "Validators", value: "150+ globally" },
          { label: "dUNL Size", value: "~35 validators" },
          { label: "Consensus Time", value: "3-5 seconds" },
          { label: "Supermajority", value: "80% agreement" },
          { label: "Ripple's Share", value: "~6% of dUNL" },
          { label: "Energy Use", value: "120,000x less than BTC" },
          { label: "Validator Rewards", value: "None (volunteer)" },
        ]} />

        <SectionNav items={[
          { id: "what-validators-do", label: "What Validators Do" },
          { id: "rpca", label: "RPCA Algorithm" },
          { id: "unl", label: "Unique Node Lists" },
          { id: "vs-mining", label: "vs. Mining & Staking" },
          { id: "decentralization", label: "Decentralization" },
          { id: "run-validator", label: "Run a Validator" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Validators" value="150+" delay={0} />
          <StatPill label="Consensus" value="3-5 sec" delay={0.06} />
          <StatPill label="Agreement" value="80%+" delay={0.12} />
          <StatPill label="Energy Savings" value="120,000x" delay={0.18} />
        </div>

        <div className="pointer-events-none absolute inset-0 " />
        <div className="pointer-events-none absolute inset-0 " />

        <div className="cv-auto mt-14 space-y-14">
          {/* ===== WHAT VALIDATORS DO ===== */}
          <RevealSection id="what-validators-do">
            <h2 className="text-2xl font-bold text-text-primary">What Do XRPL Validators Do?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Validators are servers running the <strong className="text-text-primary">rippled</strong> software that participate in the XRPL&apos;s consensus process. Their job is to:
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Propose Transactions", desc: "Validators collect pending transactions and propose candidate sets to include in the next ledger" },
                { title: "Vote on Validity", desc: "Each validator evaluates proposals from its trusted peers and votes on which transactions are valid" },
                { title: "Reach Consensus", desc: "Through multiple rounds of voting, validators converge on an agreed-upon set of transactions" },
                { title: "Close the Ledger", desc: "Once 80%+ of trusted validators agree, the new ledger version is finalized and published" },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="No Rewards by Design" variant="info">
                <p>Unlike Bitcoin miners or Ethereum stakers, XRPL validators receive <strong className="text-text-primary">no block rewards or transaction fees</strong>. This is intentional — it eliminates the profit motive that can lead to centralization (mining pools) and ensures validators run for the right reasons: to support the network they depend on.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== RPCA ===== */}
          <RevealSection id="rpca" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">The RPCA Consensus Algorithm</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">Ripple Protocol Consensus Algorithm (RPCA)</strong> is what makes the XRPL work. Published in a 2014 whitepaper by David Schwartz, Noah Youngs, and Arthur Britto, RPCA achieves consensus through an iterative voting process.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">How Consensus Works (Step by Step)</h3>
            <div className="mt-5">
              <DataTable
                headers={["Step", "Phase", "What Happens"]}
                rows={[
                  ["1", "Open Ledger", "Validators receive transactions from users and hold them in a candidate pool"],
                  ["2", "Propose", "Each validator proposes its candidate transaction set to its UNL peers"],
                  ["3", "Vote (Round 1)", "Validators compare proposals. Transactions with >50% support survive to the next round"],
                  ["4", "Vote (Round 2+)", "Threshold increases. Transactions need increasing supermajority support"],
                  ["5", "Consensus", "When 80%+ of trusted validators agree on the transaction set, the ledger closes"],
                  ["6", "Validation", "Each validator independently computes the new ledger hash and publishes it"],
                  ["7", "Finality", "If 80%+ of validators produce the same hash, the ledger is final. No forks possible."],
                ]}
                highlightCol={1}
              />
            </div>

            <div className="mt-6">
              <HighlightBox title="True Finality" variant="accent">
                <p>Unlike Bitcoin (where you wait for 6 confirmations) or Ethereum (where finality takes ~15 minutes), XRPL transactions are <strong className="text-text-primary">truly final</strong> once the ledger closes. There are no forks, no reorganizations, no rollbacks. When a <Link href="/learn/xrp-transaction-types" className="text-xrp-accent underline decoration-xrp-accent/30">transaction</Link> is confirmed, it&apos;s confirmed forever.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== UNL ===== */}
          <RevealSection id="unl" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Unique Node Lists (UNL)</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Each XRPL validator maintains a <strong className="text-text-primary">Unique Node List (UNL)</strong> — a list of validators it trusts for consensus. A validator only considers votes from nodes on its UNL. This is a key security feature: it means an attacker would need to compromise a supermajority (80%+) of trusted validators to manipulate the network.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">The Default UNL (dUNL)</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Most operators use the <strong className="text-text-primary">default UNL (dUNL)</strong> published by the XRP Ledger Foundation and Ripple. This list contains approximately 35 validators operated by a diverse set of entities:
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Universities", desc: "UC Berkeley, Korea University, and other academic institutions run validators for research and network support." },
                { title: "Exchanges", desc: "Bitstamp, Bitso, and other exchanges operate validators to ensure the network they depend on is healthy." },
                { title: "Infrastructure Cos.", desc: "XRPScan, Alloy Networks, and other XRPL infrastructure providers run validators as part of their ecosystem commitment." },
                { title: "Ripple", desc: "Ripple operates approximately 6% of dUNL validators — down from 100% in the early days, reflecting ongoing decentralization." },
              ]} />
            </div>
          </RevealSection>

          {/* ===== VS MINING ===== */}
          <RevealSection id="vs-mining" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL Consensus vs. Mining vs. Staking</h2>
            <div className="mt-6">
              <DataTable
                headers={["Feature", "XRPL (RPCA)", "Bitcoin (PoW)", "Ethereum (PoS)"]}
                rows={[
                  ["Mechanism", "Federated voting", "Computational puzzles", "Stake-weighted voting"],
                  ["Finality", "3-5 seconds (true)", "~60 min (probabilistic)", "~15 min (finalized)"],
                  ["Energy Use", "Minimal", "~150 TWh/year", "~0.01 TWh/year"],
                  ["Rewards", "None", "Block rewards + fees", "Staking rewards + fees"],
                  ["Hardware", "Standard server", "Specialized ASICs", "32 ETH + server"],
                  ["Centralization Risk", "UNL overlap", "Mining pool dominance", "Whale staker dominance"],
                  ["Fork Risk", "None", "Possible (chain splits)", "Possible (rare)"],
                ]}
                highlightCol={1}
              />
            </div>
            <div className="mt-6">
              <HighlightBox title="Why No Rewards?" variant="info">
                <p>The XRPL deliberately avoids validator rewards to prevent the <strong className="text-text-primary">centralization incentives</strong> seen in mining and staking. When there&apos;s money to be made from validation, economics of scale kick in — leading to mining pools and whale stakers. Without rewards, validators run because they use the network and want it to function well, not for profit. Learn more in our <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">What is XRP?</Link> guide.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== DECENTRALIZATION ===== */}
          <RevealSection id="decentralization" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRPL Decentralization Progress</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              In the early days, Ripple operated all validators on the default UNL. Over the years, the network has progressively decentralized. Today, <Link href="/learn/what-is-ripple" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple</Link> operates only about 6% of dUNL validators — and the network would continue operating normally even if all Ripple validators went offline.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "2012-2015", desc: "Ripple operated most validators. Network was functional but centralized." },
                { title: "2017-2019", desc: "Ripple began actively diversifying the UNL, adding third-party validators from universities and companies." },
                { title: "2020-2023", desc: "XRPL Foundation established. Multiple independent UNL publishers emerged. Ripple's share dropped below 10%." },
                { title: "2024-Present", desc: "150+ validators globally. Ripple at ~6% of dUNL. The Nakamoto coefficient (minimum nodes to disrupt consensus) continues to grow." },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <GlowCard
                title="Current dUNL Composition"
                value="~35 Validators"
                subtitle="Operated by universities, exchanges, infrastructure companies, and Ripple (~6%)"
              />
            </div>
          </RevealSection>

          {/* ===== RUN A VALIDATOR ===== */}
          <RevealSection id="run-validator" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Run an XRPL Validator</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Anyone can run an XRPL validator. You don&apos;t need to stake tokens or purchase mining hardware. You just need a server running the <strong className="text-text-primary">rippled</strong> software.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Minimum Hardware Requirements</h3>
            <div className="mt-5">
              <DataTable
                headers={["Component", "Minimum", "Recommended"]}
                rows={[
                  ["CPU", "8 cores", "16+ cores"],
                  ["RAM", "64 GB", "128 GB"],
                  ["Storage", "500 GB NVMe SSD", "1 TB NVMe SSD"],
                  ["Network", "100 Mbps", "1 Gbps"],
                  ["OS", "Ubuntu 22.04 LTS", "Ubuntu 22.04+ LTS"],
                ]}
                highlightCol={2}
              />
            </div>

            <h3 className="mt-8 text-xl font-semibold text-text-primary">Steps to Get Started</h3>
            <div className="mt-5">
              <IconList items={[
                { title: "1. Install rippled", desc: "Follow the official XRPL documentation to install and configure rippled on your server" },
                { title: "2. Generate Validator Keys", desc: "Use the validator-keys-tool to generate your validator identity key pair" },
                { title: "3. Configure and Sync", desc: "Set up your rippled.cfg, connect to the network, and wait for a full ledger sync (may take hours)" },
                { title: "4. Build Reputation", desc: "Maintain high uptime, publish your validator domain, and engage with the XRPL community" },
                { title: "5. Get Listed", desc: "After demonstrating reliability, apply to be added to the default UNL by contacting the XRPL Foundation" },
              ]} variant="zap" />
            </div>

            <div className="mt-6">
              <HighlightBox title="Running ≠ Influencing" variant="warning">
                <p>Anyone can run a validator, but <strong className="text-text-primary">having influence on consensus</strong> requires being on other operators&apos; UNLs. A new validator won&apos;t affect consensus until trusted peers add it to their lists. This is a security feature — it prevents Sybil attacks (spinning up many fake validators).</p>
              </HighlightBox>
            </div>
          </RevealSection>

          {/* ===== COMMON MISTAKES ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Common Misconceptions</h2>
            <div className="mt-5 space-y-3">
              <MisconceptionCard myth="Ripple controls the XRPL validators" reality="Ripple operates only ~6% of default UNL validators. The network would function normally without any Ripple validators." />
              <MisconceptionCard myth="XRPL validators earn rewards like miners" reality="XRPL validators receive no rewards. They run voluntarily — typically because they use the network and want to ensure its reliability." />
              <MisconceptionCard myth="XRPL consensus is centralized because there's no mining" reality="Decentralization comes from diverse, independent validators — not from mining. The XRPL has 150+ validators across universities, exchanges, and companies worldwide." />
              <MisconceptionCard myth="Anyone can immediately influence XRPL consensus" reality="Running a validator is open to anyone, but influencing consensus requires being trusted by other operators — a deliberate anti-Sybil security measure." />
            </div>
          </RevealSection>

          {/* ===== FAQ ===== */}
          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          {/* ===== SOURCES ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sources</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>• <a href="https://xrpl.org/consensus.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Consensus</a></li>
              <li>• <a href="https://xrpl.org/run-rippled-as-a-validator.html" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Run a Validator</a></li>
              <li>• <a href="https://arxiv.org/abs/1802.07242" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">RPCA Consensus Whitepaper (2018)</a></li>
              <li>• <a href="https://livenet.xrpl.org/network/validators" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPL.org — Live Validator List</a></li>
              <li>• <a href="https://xrpscan.com/validators" target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30 hover:text-xrp-accent-bright">XRPScan — Validator Dashboard</a></li>
            </ul>
          </RevealSection>

          {/* ===== CONTINUE LEARNING ===== */}
          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-ledger-explained", label: "XRPL Explained", desc: "Full technical deep dive" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "Complete beginner's guide" },
              { href: "/learn/xrp-transaction-types", label: "Transaction Types", desc: "How XRPL transactions work" },
              { href: "/learn/xrp-addresses-and-keys", label: "Addresses & Keys", desc: "XRPL account security" },
              { href: "/learn/history", label: "XRP History", desc: "From 2012 to today" },
              { href: "/learn/xrp-tokenomics", label: "XRP Tokenomics", desc: "Supply, escrow & burns" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Explore the XRPL Network"
          description="The XRPL's validator network has been securing transactions since 2012 with zero downtime. Explore the network, check validator stats, or start your own XRP journey."
          primaryHref="/learn/get-started"
          primaryLabel="Get Started with XRP →"
          secondaryHref="/learn/xrp-ledger-explained"
          secondaryLabel="Learn About XRPL"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 13, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org documentation, RPCA whitepaper, XRPScan validator data.</em>
        </p>
      </div>
    </>
  );
}
