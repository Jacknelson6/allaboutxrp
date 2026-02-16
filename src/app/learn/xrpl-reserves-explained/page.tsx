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
  title: "XRPL Reserve Requirements: Why You Need 10 XRP",
  description: "Why XRP wallets require a 10 XRP reserve. Base reserve, owner reserve, and how to minimize locked XRP. Updated for 2026.",
  keywords: ["XRPL reserve", "XRP reserve requirement", "10 XRP reserve", "XRP wallet minimum", "owner reserve XRP"],
  openGraph: {
    title: "XRPL Reserve Requirements Explained | AllAboutXRP",
    description: "Why XRP wallets require a 10 XRP reserve — base reserve, owner reserve, and how to minimize locked XRP.",
    url: "https://allaboutxrp.com/learn/xrpl-reserves-explained",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL Reserves Explained | AllAboutXRP",
    description: "Why you need 10 XRP to activate a wallet — reserves explained.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-reserves-explained" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRPL Reserve Requirements: Why You Need 10 XRP",
    description: "Complete guide to XRPL reserve requirements — base reserve, owner reserve, how to minimize locked XRP, and how reserves protect the network.",
    url: "https://allaboutxrp.com/learn/xrpl-reserves-explained",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL Reserves Explained" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-reserves-explained" }),
  buildFAQSchema([
    { question: "Why does an XRP wallet need 10 XRP?", answer: "The 10 XRP base reserve is required to activate an XRPL account. It exists to prevent ledger spam — without a cost to create accounts, attackers could create billions of fake accounts and bloat the ledger. The reserve makes this economically unfeasible." },
    { question: "Can I get the 10 XRP reserve back?", answer: "Yes, you can recover the base reserve by deleting your XRPL account using the AccountDelete transaction. The account must meet certain conditions (sequence number requirements, no remaining objects), and there's a fee to delete. The remaining reserve XRP is sent to a destination account." },
    { question: "What is the owner reserve?", answer: "The owner reserve is an additional 2 XRP locked for each object your account owns on the ledger — trust lines, DEX offers, escrows, payment channels, etc. If you have 3 trust lines and 2 DEX offers, that's 10 XRP additional owner reserve (5 objects × 2 XRP)." },
    { question: "Can the reserve amounts change?", answer: "Yes. Reserve amounts are network parameters that validators can vote to change through amendments. The base reserve was originally 200 XRP, then reduced to 50, then 20, and now 10. It could be reduced further as XRP's price increases." },
    { question: "How do I minimize my locked XRP?", answer: "Remove trust lines for tokens you no longer hold, cancel open DEX offers, close unused payment channels, and remove expired escrows. Each removed object frees up 2 XRP of owner reserve." },
  ]),
];

const faqItems = [
  { q: "Why does a wallet need 10 XRP?", a: "The 10 XRP base reserve activates your XRPL account and prevents ledger spam. Without this cost, attackers could create billions of fake accounts and bloat the ledger." },
  { q: "Can I get the 10 XRP back?", a: "Yes — delete your account using AccountDelete. The reserve XRP gets sent to a destination address you specify. Your account must meet certain conditions first." },
  { q: "What is the owner reserve?", a: "An additional 2 XRP locked per ledger object your account owns — trust lines, DEX offers, escrows, etc. More objects = more locked XRP." },
  { q: "Can reserve amounts change?", a: "Yes — validators can vote to change reserves. The base reserve has dropped from 200 → 50 → 20 → 10 XRP over the years. It could decrease further." },
  { q: "How do I minimize locked XRP?", a: "Remove unused trust lines, cancel open DEX offers, close payment channels, and remove expired escrows. Each removed object frees 2 XRP." },
  { q: "Is the reserve lost forever?", a: "No — it's locked, not lost. You can recover it by removing objects (owner reserve) or deleting your account (base reserve)." },
];

export default function XRPLReservesExplainedPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL Reserve Requirements:"
          titleAccent="Why You Need 10 XRP"
          subtitle="Every XRP wallet needs a minimum balance. Here's exactly why, how much, and how to get it back."
          breadcrumbLabel="XRPL Reserves Explained"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Every <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP wallet</Link> needs <strong className="text-text-primary">10 XRP base reserve</strong> to activate and <strong className="text-text-primary">2 XRP per object</strong> (trust lines, offers) as owner reserve. This prevents ledger spam. Reserves are <em>locked, not lost</em> — recoverable by removing objects or deleting the account. Validators can vote to lower reserves as <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> price rises.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Base Reserve", value: "10 XRP (account activation)" },
          { label: "Owner Reserve", value: "2 XRP per object" },
          { label: "Recoverable?", value: "Yes (remove objects or delete account)" },
          { label: "Purpose", value: "Anti-spam / ledger bloat prevention" },
          { label: "History", value: "200 → 50 → 20 → 10 XRP" },
          { label: "Changeable?", value: "Yes (validator vote)" },
        ]} />

        <SectionNav items={[
          { id: "base-reserve", label: "Base Reserve" },
          { id: "owner-reserve", label: "Owner Reserve" },
          { id: "why-reserves", label: "Why Reserves?" },
          { id: "minimize", label: "Minimize Reserves" },
          { id: "history", label: "Reserve History" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Base" value="10 XRP" delay={0} />
          <StatPill label="Per Object" value="2 XRP" delay={0.06} />
          <StatPill label="Recoverable" value="Yes" delay={0.12} />
          <StatPill label="Original" value="200 XRP" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="base-reserve">
            <h2 className="text-2xl font-bold text-text-primary">Base Reserve: 10 XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">base reserve</strong> is the minimum XRP needed to activate (fund) an XRPL account. Currently set at 10 XRP, this amount is locked in the account as long as it exists. You cannot send this XRP in normal transactions — it&apos;s held to ensure every account on the ledger has a real cost.
            </p>
            <div className="mt-6">
              <HighlightBox title="Why Not Free?" variant="accent">
                <p>If accounts were free, an attacker could create trillions of empty accounts, bloating the ledger database and degrading network performance. The 10 XRP cost makes this attack prohibitively expensive — creating 1 billion accounts would cost 10 billion XRP.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="owner-reserve" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Owner Reserve: 2 XRP Per Object</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Beyond the base reserve, each &quot;object&quot; your account owns on the ledger requires an additional 2 XRP <strong className="text-text-primary">owner reserve</strong>. Objects include:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Object Type", "Reserve Each", "Example"]}
                rows={[
                  ["Trust Line", "2 XRP", "Holding RLUSD, community tokens"],
                  ["DEX Offer", "2 XRP", "Open limit orders on the XRPL DEX"],
                  ["Escrow", "2 XRP", "Time-locked or conditional XRP"],
                  ["Payment Channel", "2 XRP", "Streaming payment channels"],
                  ["Signer List", "2 XRP", "Multi-signature setup"],
                  ["NFT Page", "2 XRP", "Holding NFTs on the XRPL"],
                ]}
                highlightCol={1}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Example:</strong> If you have 5 trust lines and 3 DEX offers, your total reserve is: 10 (base) + 16 (8 objects × 2) = <strong className="text-text-primary">26 XRP locked</strong>.
            </p>
          </RevealSection>

          <RevealSection id="why-reserves" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why Reserves Exist</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Prevent Ledger Bloat", desc: "Every account and object takes storage space in the ledger. Reserves ensure each entry has a real economic cost." },
                { title: "Anti-Spam Protection", desc: "Without reserves, attackers could create unlimited accounts, trust lines, and offers to degrade network performance." },
                { title: "Sustainable Storage", desc: "Validators must store the entire ledger. Reserves ensure the ledger grows at a sustainable rate." },
                { title: "Incentive to Clean Up", desc: "Owner reserves incentivize users to remove objects they no longer need, keeping the ledger efficient." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="minimize" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Minimize Locked XRP</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Remove Unused Trust Lines", desc: "If you no longer hold a token and the balance is zero, remove the trust line to free 2 XRP." },
                { title: "Cancel Open DEX Offers", desc: "Old limit orders that haven't filled? Cancel them to recover 2 XRP each." },
                { title: "Close Payment Channels", desc: "Unused payment channels lock 2 XRP. Close them when no longer needed." },
                { title: "Delete the Account", desc: "If you want to recover the full base reserve, you can delete the account entirely using AccountDelete." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="history" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Reserve History</h2>
            <div className="mt-6">
              <DataTable
                headers={["Period", "Base Reserve", "Owner Reserve", "Context"]}
                rows={[
                  ["2012-2013", "200 XRP", "50 XRP", "XRP < $0.01"],
                  ["2013-2021", "50 XRP / 20 XRP", "12.5 / 5 XRP", "Gradual reductions"],
                  ["2021-present", "10 XRP", "2 XRP", "XRP $0.50-$3+"],
                ]}
                highlightCol={1}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              As XRP&apos;s price increases, the community and validators can vote to lower reserves further. The goal is keeping the USD-equivalent cost reasonable while maintaining anti-spam protection.
            </p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrpl-transaction-fees", label: "Transaction Fees", desc: "How fees work" },
              { href: "/learn/xrpl-trust-lines-explained", label: "Trust Lines", desc: "How tokens work" },
              { href: "/learn/xrp-destination-tag-guide", label: "Destination Tags", desc: "Don't lose XRP" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Wallet options" },
              { href: "/learn/xrp-supply-explained", label: "XRP Supply", desc: "Total supply explained" },
              { href: "/learn/xrp-ledger-explained", label: "XRP Ledger", desc: "XRPL fundamentals" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Understand the XRP Ledger"
          description="Reserves are just one piece of the XRPL puzzle. Learn how the whole system works."
          primaryHref="/learn/xrp-ledger-explained"
          primaryLabel="XRP Ledger Explained →"
          secondaryHref="/learn/xrp-wallets"
          secondaryLabel="Get a Wallet"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org reserves documentation.</em>
        </p>
      </div>
    </>
  );
}
