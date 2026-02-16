import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList, GlowCard,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "How to Run an XRPL Validator: Complete Setup Guide",
  description: "Technical guide to running an XRPL validator node. Hardware requirements, setup steps, UNL listing, and best practices.",
  keywords: ["run XRPL validator", "XRPL validator setup", "XRP node", "run XRP validator"],
  openGraph: {
    title: "How to Run an XRPL Validator | AllAboutXRP",
    description: "Technical guide to running an XRPL validator node — hardware, setup, and best practices.",
    url: "https://allaboutxrp.com/learn/how-to-run-xrpl-validator",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Run an XRPL Validator | AllAboutXRP",
    description: "Complete guide to setting up and running an XRPL validator node.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/how-to-run-xrpl-validator" },
};

const schemas = [
  buildArticleSchema({
    headline: "How to Run an XRPL Validator: Complete Setup Guide",
    description: "Step-by-step technical guide to running an XRPL validator node. Covers hardware requirements, software setup, UNL listing process, and operational best practices.",
    url: "https://allaboutxrp.com/learn/how-to-run-xrpl-validator",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "How to Run an XRPL Validator" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/how-to-run-xrpl-validator" }),
  buildFAQSchema([
    { question: "What does an XRPL validator do?", answer: "XRPL validators participate in the consensus process — they propose, validate, and agree on the order of transactions to be included in each ledger. Validators don't mine blocks; they use the XRP Ledger Consensus Protocol (a form of Byzantine agreement) to achieve consensus in 3-5 seconds." },
    { question: "Do XRPL validators earn rewards?", answer: "No, XRPL validators do not receive block rewards or transaction fees. Unlike proof-of-work or proof-of-stake systems, running an XRPL validator is a public service. Organizations run validators to support network decentralization, ensure their transactions are processed, and have a voice in network governance." },
    { question: "What hardware do I need to run an XRPL validator?", answer: "Minimum recommended: 8+ CPU cores, 64GB RAM, 500GB+ SSD (NVMe preferred), and a reliable internet connection with 100Mbps+ bandwidth. Enterprise-grade hardware is recommended for UNL-listed validators. Cloud instances like AWS c5.2xlarge or equivalent work well." },
    { question: "How do I get my validator on the UNL?", answer: "Getting on the default Unique Node List (dUNL) requires demonstrating sustained reliability (99.9%+ uptime), contributing to the XRPL community, being a known and trusted entity, and applying through the XRPL Foundation's validator program. It's a trust-based process, not automatic." },
    { question: "Can I run a validator at home?", answer: "Technically yes, but it's not recommended for production validators. Home internet lacks the reliability, bandwidth, and uptime guarantees needed. Use a professional data center or cloud provider. A stock server (non-validating node) for monitoring or development is fine at home." },
  ]),
];

const faqItems = [
  { q: "What does an XRPL validator do?", a: "Validators participate in consensus — proposing, validating, and agreeing on transaction ordering for each ledger. They use the XRP Ledger Consensus Protocol (Byzantine agreement) to achieve consensus in 3-5 seconds. No mining involved." },
  { q: "Do validators earn rewards?", a: "No — unlike PoW/PoS, XRPL validators receive no block rewards or fees. Running a validator is a public service that supports decentralization and gives you a voice in network governance." },
  { q: "What hardware do I need?", a: "Minimum: 8+ CPU cores, 64GB RAM, 500GB+ NVMe SSD, 100Mbps+ internet. Cloud instances like AWS c5.2xlarge work well. Enterprise-grade hardware for UNL-listed validators." },
  { q: "How do I get on the UNL?", a: "Demonstrate 99.9%+ uptime, contribute to the XRPL community, be a known/trusted entity, and apply through the XRPL Foundation's validator program. It's trust-based, not automatic." },
  { q: "Can I run a validator at home?", a: "Technically yes, but not recommended for production. Use a data center or cloud provider for reliability. A non-validating stock node for development is fine at home." },
    { q: "How many validators does the XRPL have?", a: "The XRPL has 100+ validators globally, with 35+ on the default UNL. The network is designed to work with a diverse set of validators run by universities, businesses, exchanges, and individuals." },
];

export default function HowToRunXRPLValidatorPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="How to Run an XRPL Validator:"
          titleAccent="Complete Setup Guide"
          subtitle="Want to help secure the XRP Ledger? Here's the complete technical guide to running your own XRPL validator node."
          breadcrumbLabel="How to Run an XRPL Validator"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Running an XRPL validator supports <Link href="/learn/xrpl-decentralization" className="text-xrp-accent underline decoration-xrp-accent/30">network decentralization</Link> and gives you a voice in governance. You need 8+ cores, 64GB RAM, 500GB+ SSD, and reliable internet. There are no financial rewards — it&apos;s a public service. Getting on the <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">default UNL</Link> requires sustained uptime and community trust.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "CPU", value: "8+ cores recommended" },
          { label: "RAM", value: "64GB minimum" },
          { label: "Storage", value: "500GB+ NVMe SSD" },
          { label: "Bandwidth", value: "100Mbps+" },
          { label: "OS", value: "Ubuntu 22.04 LTS recommended" },
          { label: "Rewards", value: "None (public service)" },
        ]} />

        <SectionNav items={[
          { id: "overview", label: "Overview" },
          { id: "requirements", label: "Requirements" },
          { id: "setup", label: "Setup Steps" },
          { id: "configuration", label: "Configuration" },
          { id: "unl", label: "UNL Listing" },
          { id: "best-practices", label: "Best Practices" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Validators" value="100+" delay={0} />
          <StatPill label="UNL Size" value="35+" delay={0.06} />
          <StatPill label="Consensus" value="3-5 sec" delay={0.12} />
          <StatPill label="Rewards" value="None" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="overview">
            <h2 className="text-2xl font-bold text-text-primary">What XRPL Validators Do</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRPL validators are the backbone of the <Link href="/learn/xrpl-consensus-mechanism" className="text-xrp-accent underline decoration-xrp-accent/30">consensus process</Link>. They propose transaction sets, vote on their validity and ordering, and agree on the canonical ledger state — all in 3-5 seconds per round.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Transaction Ordering", desc: "Validators propose which transactions to include and in what order, then reach consensus with other validators." },
                { title: "Ledger Validation", desc: "Each validator independently computes the resulting ledger state and publishes a validation confirming agreement." },
                { title: "Amendment Voting", desc: "Validators vote on protocol amendments — new features, bug fixes, parameter changes. 80% agreement activates an amendment." },
                { title: "Network Health", desc: "More diverse validators = more resilient network. Geographic and organizational diversity strengthens the XRPL." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="requirements" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Hardware & Software Requirements</h2>
            <div className="mt-6">
              <DataTable
                headers={["Component", "Minimum", "Recommended"]}
                rows={[
                  ["CPU", "4 cores", "8+ cores (modern Xeon/EPYC)"],
                  ["RAM", "32GB", "64GB+"],
                  ["Storage", "250GB SSD", "500GB+ NVMe SSD"],
                  ["Network", "50Mbps", "100Mbps+ dedicated"],
                  ["OS", "Ubuntu 20.04+", "Ubuntu 22.04 LTS"],
                  ["Uptime", "95%", "99.9%+ for UNL"],
                ]}
                highlightCol={2}
              />
            </div>
          </RevealSection>

          <RevealSection id="setup" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Setup Steps</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "1. Provision a Server", desc: "Set up a dedicated server or cloud instance (AWS, Google Cloud, Hetzner). Ubuntu 22.04 LTS recommended." },
                { title: "2. Install rippled", desc: "Add the official Ripple apt repository and install rippled: `sudo apt install rippled`. Follow the official installation guide at xrpl.org." },
                { title: "3. Generate Validator Keys", desc: "Use the `validator-keys` tool to generate your validator key pair. Store the secret key securely — it's your validator's identity." },
                { title: "4. Configure rippled.cfg", desc: "Set [validator_token] with your validator token, configure peer ports, database paths, and network parameters." },
                { title: "5. Enable Validation", desc: "Set `[validation_seed]` or `[validator_token]` in your config. Start rippled and verify it's participating in consensus." },
                { title: "6. Monitor", desc: "Set up monitoring (Prometheus/Grafana) to track sync status, validation count, peer connections, and server health." },
              ]} variant="zap" />
            </div>
            <div className="mt-6">
              <HighlightBox title="Important" variant="warning">
                <p>Never share your validator secret key. If compromised, an attacker could impersonate your validator. Generate keys on a secure, offline machine and transfer only the token to your server.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="configuration" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Key Configuration</h2>
            <div className="mt-6">
              <DataTable
                headers={["Setting", "Purpose", "Value"]}
                rows={[
                  ["[validator_token]", "Validator identity token", "Generated by validator-keys tool"],
                  ["[peer_private]", "Hide validator from crawlers", "1 (recommended)"],
                  ["[network_id]", "Network selection", "0 (mainnet)"],
                  ["[node_size]", "Server resource allocation", "huge (for validators)"],
                  ["[ledger_history]", "Ledger history to keep", "256+ (or full)"],
                ]}
                highlightCol={0}
              />
            </div>
          </RevealSection>

          <RevealSection id="unl" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Getting on the UNL</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">Unique Node List (UNL)</strong> is the set of validators that other XRPL nodes trust for consensus. Getting on the default UNL is the gold standard — it means the network trusts your validator.
            </p>
            <div className="mt-5">
              <IconList items={[
                { title: "Sustained Reliability", desc: "Demonstrate 99.9%+ uptime over months. The XRPL Foundation tracks validator performance metrics." },
                { title: "Known Entity", desc: "UNL validators are typically run by known organizations — universities, businesses, foundations. Anonymous validators are unlikely to be added." },
                { title: "Community Contribution", desc: "Active participation in XRPL development, governance discussions, or ecosystem projects strengthens your case." },
                { title: "Apply to XRPL Foundation", desc: "Submit your validator information through the XRPL Foundation's validator program for consideration." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="best-practices" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Best Practices</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Separate Validator & Stock", desc: "Run your validator separate from any stock (full history) server. Validators should be lean and focused." },
                { title: "Automated Updates", desc: "Keep rippled updated. Set up automated update processes with testing before deploying to production." },
                { title: "Redundant Infrastructure", desc: "Use redundant power, network, and storage. Consider failover servers in different data centers." },
                { title: "Security Hardening", desc: "Firewall all ports except peer (51235). Use SSH keys only. No unnecessary services running." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrpl-validators", label: "XRPL Validators", desc: "Validator overview" },
              { href: "/learn/xrpl-consensus-mechanism", label: "XRPL Consensus", desc: "How consensus works" },
              { href: "/learn/xrpl-decentralization", label: "XRPL Decentralization", desc: "Network decentralization" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger Explained", desc: "XRPL fundamentals" },
              { href: "/learn/xrpl-transaction-fees", label: "Transaction Fees", desc: "How fees work" },
              { href: "/learn/xrpl-hooks-explained", label: "XRPL Hooks", desc: "Smart logic on XRPL" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Support the XRP Ledger"
          description="Running a validator strengthens the network for everyone. Start with the fundamentals."
          primaryHref="/learn/xrpl-consensus-mechanism"
          primaryLabel="Learn Consensus →"
          secondaryHref="/learn/xrpl-validators"
          secondaryLabel="Validator Overview"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org validator documentation.</em>
        </p>
      </div>
    </>
  );
}
