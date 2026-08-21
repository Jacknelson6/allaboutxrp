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
  title: "XRPL Reserve Requirements: Current 1 XRP Minimum",
  description: "Why XRP wallets require a 1 XRP reserve. Base reserve, owner reserve, and how to minimize locked XRP. Updated for 2026.",
  keywords: ["XRPL reserve", "XRP reserve requirement", "1 XRP reserve", "XRP wallet minimum", "owner reserve XRP"],
  openGraph: {
    title: "XRPL Reserve Requirements Explained | AllAboutXRP",
    description: "Why XRP wallets require a 1 XRP reserve — base reserve, owner reserve, and how to minimize locked XRP.",
    url: "https://allaboutxrp.com/learn/xrpl-reserves-explained",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRPL Reserves Explained | AllAboutXRP",
    description: "Why you need 1 XRP to activate a wallet — reserves explained.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrpl-reserves-explained" },
};

const faqItems = [
  { q: "Why does a wallet need 1 XRP?", a: "The 1 XRP base reserve activates your XRPL account and prevents ledger spam by giving every account an economic cost." },
  { q: "Can I get the 1 XRP back?", a: "You can delete an eligible account using AccountDelete and send its remaining XRP to another account, but the deletion transaction currently costs 0.2 XRP and has protocol conditions." },
  { q: "What is the owner reserve?", a: "Usually 0.2 XRP locked per ledger object your account owns, including trust lines, DEX offers, escrows, and payment channels." },
  { q: "Can reserve amounts change?", a: "Yes. Validators can vote to change reserves. The current 1 XRP base reserve and 0.2 XRP owner reserve took effect on December 2, 2024." },
  { q: "How do I minimize locked XRP?", a: "Remove unused trust lines, cancel open DEX offers, close payment channels, and remove expired escrows. Each removed object frees 0.2 XRP." },
  { q: "Is the reserve lost forever?", a: "No — it's locked, not lost. You can recover it by removing objects (owner reserve) or deleting your account (base reserve)." },
];

const schemas = [
  buildArticleSchema({
    headline: "XRPL Reserve Requirements: Current 1 XRP Minimum",
    description: "Complete guide to XRPL reserve requirements — base reserve, owner reserve, how to minimize locked XRP, and how reserves protect the network.",
    url: "https://allaboutxrp.com/learn/xrpl-reserves-explained",
    datePublished: "2026-02-15",
    dateModified: "2026-07-27",
    citations: [
      "https://xrpl.org/docs/concepts/accounts/reserves",
      "https://xrpl.org/blog/2024/lower-reserves-are-in-effect",
      "https://xrpl.org/docs/references/protocol/transactions/types/accountdelete",
    ],
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRPL Reserves Explained" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrpl-reserves-explained" }),
  buildFAQSchema(faqItems.map((item) => ({ question: item.q, answer: item.a }))),
];

export default function XRPLReservesExplainedPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRPL Reserve Requirements:"
          titleAccent="Current 1 XRP Minimum"
          subtitle="Every XRP wallet needs a minimum balance. Here's exactly why, how much, and how to get it back."
          breadcrumbLabel="XRPL Reserves Explained"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" modified="2026-07-27" />
            <LastUpdated date="July 27, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Every <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">XRP wallet</Link> needs <strong className="text-text-primary">1 XRP base reserve</strong> to activate and <strong className="text-text-primary">0.2 XRP per object</strong> (trust lines, offers) as owner reserve. This prevents ledger spam. Reserves are <em>locked, not lost</em> — recoverable by removing objects or deleting the account. Validators can vote to lower reserves as <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> price rises.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Base Reserve", value: "1 XRP (account activation)" },
          { label: "Owner Reserve", value: "0.2 XRP per object" },
          { label: "Recoverable?", value: "Yes (remove objects or delete account)" },
          { label: "Purpose", value: "Anti-spam / ledger bloat prevention" },
          { label: "Effective Since", value: "December 2, 2024" },
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
          <StatPill label="Base" value="1 XRP" delay={0} />
          <StatPill label="Per Object" value="0.2 XRP" delay={0.06} />
          <StatPill label="Recoverable" value="Yes" delay={0.12} />
          <StatPill label="Since" value="Dec. 2024" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="base-reserve">
            <h2 className="text-2xl font-bold text-text-primary">Base Reserve: 1 XRP</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The <strong className="text-text-primary">base reserve</strong> is the minimum XRP needed to activate (fund) an XRPL account. Currently set at 1 XRP, this amount is locked in the account as long as it exists. You cannot send it in a normal transaction while the account remains active.
            </p>
            <div className="mt-6">
              <HighlightBox title="Why Not Free?" variant="accent">
                <p>If accounts were free, an attacker could create huge numbers of empty accounts and increase the ledger&apos;s storage burden. The 1 XRP reserve gives every account a real economic cost.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="owner-reserve" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Owner Reserve: 0.2 XRP Per Object</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Beyond the base reserve, most ledger objects your account owns require an additional 0.2 XRP <strong className="text-text-primary">owner reserve</strong>. Objects include:
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Object Type", "Reserve Each", "Example"]}
                rows={[
                  ["Trust Line", "0.2 XRP", "Holding RLUSD or other issued tokens"],
                  ["DEX Offer", "0.2 XRP", "Open limit orders on the XRPL DEX"],
                  ["Escrow", "0.2 XRP", "Time-locked or conditional XRP"],
                  ["Payment Channel", "0.2 XRP", "Streaming payment channels"],
                  ["Signer List", "0.2 XRP", "Multi-signature setup"],
                  ["NFT Page", "0.2 XRP", "Holding NFTs on the XRPL"],
                ]}
                highlightCol={1}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Example:</strong> If you have 5 trust lines and 3 DEX offers, your total reserve is 1 XRP (base) + 1.6 XRP (8 objects × 0.2) = <strong className="text-text-primary">2.6 XRP locked</strong>.
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
                { title: "Remove Unused Trust Lines", desc: "If you no longer hold a token and the balance is zero, remove the trust line to free 0.2 XRP." },
                { title: "Cancel Open DEX Offers", desc: "Old limit orders that haven't filled? Cancel them to recover the 0.2 XRP owner reserve each." },
                { title: "Close Payment Channels", desc: "Unused payment channels usually lock 0.2 XRP. Close them when no longer needed." },
                { title: "Delete the Account", desc: "An eligible account can use AccountDelete to send its remaining XRP elsewhere, minus the special deletion transaction cost." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="history" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Reserve History</h2>
            <div className="mt-6">
              <DataTable
                headers={["Period", "Base Reserve", "Owner Reserve", "Context"]}
                rows={[
                  ["September 2021–December 1, 2024", "10 XRP", "2 XRP", "Previous network settings"],
                  ["December 2, 2024–present", "1 XRP", "0.2 XRP", "Current network settings"],
                ]}
                highlightCol={1}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The current values took effect after validators approved lower network settings. Reserve requirements can change again through the XRPL consensus process, so check the official documentation before funding a new account.
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

        <div className="mt-10 border-t border-white/[0.08] pt-6 text-sm text-text-secondary">
          <h2 className="font-semibold text-text-primary">Primary sources</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><a href="https://xrpl.org/docs/concepts/accounts/reserves" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL account reserve documentation</a></li>
            <li><a href="https://xrpl.org/blog/2024/lower-reserves-are-in-effect" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL: Lower Reserves Are in Effect (December 2024)</a></li>
            <li><a href="https://xrpl.org/docs/references/protocol/transactions/types/accountdelete" rel="noopener noreferrer" className="text-xrp-accent underline decoration-xrp-accent/30">XRPL AccountDelete transaction reference</a></li>
          </ul>
          <p className="mt-4 text-xs text-text-secondary/60"><em>Last updated July 27, 2026 by the AllAboutXRP Editorial Team.</em></p>
        </div>
      </div>
    </>
  );
}
