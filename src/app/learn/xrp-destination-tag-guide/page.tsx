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
  robots: { index: false, follow: true },
  title: "XRP Destination Tag Explained: Don't Lose Your XRP",
  description: "What is an XRP destination tag, why it matters, and what happens if you forget it. Critical guide for sending XRP to exchanges.",
  keywords: ["XRP destination tag", "what is destination tag XRP", "XRP destination tag missing", "forgot destination tag"],
  openGraph: {
    title: "XRP Destination Tag Explained | AllAboutXRP",
    description: "What is an XRP destination tag, why it matters, and what happens if you forget it.",
    url: "https://allaboutxrp.com/learn/xrp-destination-tag-guide",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Destination Tag Guide | AllAboutXRP",
    description: "What is a destination tag, why you need it, and what to do if you forget one.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/xrp-destination-tag-guide" },
};

const schemas = [
  buildArticleSchema({
    headline: "XRP Destination Tag Explained: Don't Lose Your XRP",
    description: "Complete guide to XRP destination tags — what they are, why exchanges require them, and how to recover XRP sent without one.",
    url: "https://allaboutxrp.com/learn/xrp-destination-tag-guide",
    datePublished: "2026-02-15",
    dateModified: "2026-02-15",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP Destination Tag Guide" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/xrp-destination-tag-guide" }),
  buildFAQSchema([
    { question: "What is an XRP destination tag?", answer: "A destination tag is a numerical identifier (up to 10 digits) attached to an XRP transaction. Exchanges use a single XRP address for all customers and use destination tags to identify which customer a deposit belongs to. Think of it like an apartment number — the XRP address is the building, and the tag is your unit." },
    { question: "What happens if I forget the destination tag?", answer: "Your XRP will arrive at the exchange's main wallet but won't be automatically credited to your account because the exchange doesn't know which customer it belongs to. Contact the exchange's support with your transaction hash — most can manually credit your account, though it may take 1-4 weeks." },
    { question: "Do I need a destination tag for all XRP transactions?", answer: "No. Destination tags are only required when sending to addresses that use them — primarily exchange deposit addresses. Sending XRP to a personal wallet (Xaman, Ledger, etc.) typically does not require a destination tag." },
    { question: "Is a destination tag the same as a memo?", answer: "They serve a similar purpose but are technically different. XRP destination tags are numerical identifiers native to the XRPL protocol. Some exchanges use the term 'memo' interchangeably, while other blockchains (like Stellar) have a separate memo field." },
    { question: "Can I choose my own destination tag?", answer: "When sending to an exchange, you must use the exact destination tag the exchange provides — you cannot choose your own. When receiving XRP, you can optionally set a destination tag requirement on your own account using the RequireDest flag." },
  ]),
];

const faqItems = [
  { q: "What is an XRP destination tag?", a: "A destination tag is a numerical identifier (up to 10 digits) attached to an XRP transaction. Exchanges use a single XRP address for all customers and use destination tags to identify which customer a deposit belongs to. Think of it like an apartment number — the XRP address is the building, the tag is your unit." },
  { q: "What happens if I forget the destination tag?", a: "Your XRP arrives at the exchange's wallet but won't be credited to your account automatically. Contact support with your transaction hash — most exchanges can manually credit your account, though it may take 1-4 weeks and some charge a recovery fee." },
  { q: "Do I need a destination tag for all XRP transactions?", a: "No — only when sending to addresses that require them, primarily exchange deposit addresses. Sending to personal wallets (Xaman, Ledger) typically doesn't need one." },
  { q: "Is a destination tag the same as a memo?", a: "They serve similar purposes but are technically different. XRP destination tags are numerical identifiers native to the XRPL. Some exchanges use 'memo' interchangeably, but they're not the same field on all blockchains." },
  { q: "Can I choose my own destination tag?", a: "When sending to an exchange, use the exact tag they provide. You can optionally require destination tags on your own account using the RequireDest flag in your XRPL account settings." },
  { q: "Where do I find the destination tag?", a: "The exchange provides your destination tag on the XRP deposit page alongside the deposit address. It's usually a number between 1 and 4,294,967,295. Always copy-paste it — never type it manually." },
];

export default function XRPDestinationTagGuidePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Destination Tag:"
          titleAccent="Don't Lose Your XRP"
          subtitle="The destination tag is one of the most misunderstood features in XRP — and forgetting it is one of the most common mistakes. Here's everything you need to know."
          breadcrumbLabel="XRP Destination Tag Guide"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-15" />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>A destination tag is a number that tells an exchange <em>which customer</em> a deposit belongs to. Always include it when sending <Link href="/learn/what-is-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">XRP</Link> to an exchange. If you forget it, contact exchange support with your transaction hash — recovery is usually possible but slow. Personal <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">wallets</Link> usually don&apos;t need one.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "What It Is", value: "Numerical identifier (up to 10 digits)" },
          { label: "When Required", value: "Sending to exchange deposit addresses" },
          { label: "When Not Required", value: "Sending to personal wallets" },
          { label: "If Forgotten", value: "Contact exchange support with tx hash" },
          { label: "Recovery Time", value: "1-4 weeks typically" },
          { label: "XRPL Name", value: "DestinationTag field" },
        ]} />

        <SectionNav items={[
          { id: "what-is-it", label: "What Is It?" },
          { id: "why-needed", label: "Why Needed" },
          { id: "how-to-use", label: "How to Use" },
          { id: "forgot-tag", label: "Forgot Tag?" },
          { id: "technical", label: "Technical Details" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Format" value="Number" delay={0} />
          <StatPill label="Max Value" value="4.29B" delay={0.06} />
          <StatPill label="Required?" value="Exchanges" delay={0.12} />
          <StatPill label="Recovery" value="1-4 weeks" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what-is-it">
            <h2 className="text-2xl font-bold text-text-primary">What Is a Destination Tag?</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              A <strong className="text-text-primary">destination tag</strong> is a numerical identifier attached to an XRP transaction on the <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link>. It&apos;s used to identify the recipient when multiple users share a single XRP address.
            </p>
            <div className="mt-6">
              <HighlightBox title="Simple Analogy" variant="accent">
                <p>Think of it like a postal address: the <strong className="text-text-primary">XRP address</strong> is the apartment building, and the <strong className="text-text-primary">destination tag</strong> is the apartment number. Without the apartment number, your mail arrives at the building but nobody knows which unit it belongs to.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="why-needed" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why Exchanges Require Destination Tags</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Every active XRP account requires a minimum <Link href="/learn/xrpl-reserves-explained" className="text-xrp-accent underline decoration-xrp-accent/30">reserve of 10 XRP</Link>. If an exchange created a separate address for each customer, they&apos;d lock up millions of XRP in reserves. Instead, exchanges use one (or a few) XRP addresses and assign unique destination tags to each customer.
            </p>
            <div className="mt-5">
              <FeatureGrid columns={2} items={[
                { title: "Cost Efficiency", desc: "One address serves millions of customers, saving the exchange from locking up millions of XRP in reserves." },
                { title: "Customer Identification", desc: "The destination tag tells the exchange which customer account to credit the deposit to." },
                { title: "Automated Processing", desc: "Exchanges automatically monitor incoming transactions and credit accounts based on destination tags." },
                { title: "XRPL Standard", desc: "The DestinationTag is a native XRPL transaction field — it's not an add-on but a core protocol feature." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="how-to-use" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to Use Destination Tags</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "1. Get Your Tag from the Exchange", desc: "Go to your exchange's XRP deposit page. You'll see both an XRP address and a destination tag (a number). Both are required." },
                { title: "2. Copy-Paste Both Values", desc: "Never type these manually. Copy the address and destination tag exactly as shown. One wrong digit means lost funds." },
                { title: "3. Enter Both in Your Wallet", desc: "In your sending wallet (Xaman, Ledger, etc.), paste the address in the 'To' field and the destination tag in the 'Destination Tag' or 'Tag' field." },
                { title: "4. Double-Check Before Sending", desc: "Verify the address AND the tag match what the exchange shows. Send a small test transaction first for large amounts." },
                { title: "5. Confirm the Transaction", desc: "After sending, check the transaction on an XRPL explorer (xrpscan.com) to verify it includes the correct destination tag." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="forgot-tag" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">What to Do If You Forgot the Destination Tag</h2>
            <div className="mt-6">
              <HighlightBox title="Don't Panic" variant="info">
                <p>Your XRP is <strong className="text-text-primary">not lost</strong> — it arrived at the exchange&apos;s wallet. The exchange just doesn&apos;t know it&apos;s yours. Most exchanges have a process to manually credit these deposits.</p>
              </HighlightBox>
            </div>
            <div className="mt-5">
              <IconList items={[
                { title: "1. Find Your Transaction Hash", desc: "Look up your transaction on xrpscan.com or bithomp.com using your sending wallet address. Copy the transaction hash." },
                { title: "2. Contact Exchange Support", desc: "Open a support ticket. Include: your transaction hash, the amount sent, the XRP address you sent to, and your account email." },
                { title: "3. Verify Your Identity", desc: "The exchange will likely ask you to verify your identity to prove account ownership." },
                { title: "4. Wait for Manual Credit", desc: "Processing typically takes 1-4 weeks. Some exchanges charge a recovery fee ($5-$25). Be patient." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="technical" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Technical Details</h2>
            <div className="mt-6">
              <DataTable
                headers={["Property", "Details"]}
                rows={[
                  ["Field Name", "DestinationTag (in XRPL transaction format)"],
                  ["Data Type", "Unsigned 32-bit integer"],
                  ["Value Range", "0 to 4,294,967,295"],
                  ["Required?", "Optional by default; accounts can enable RequireDest flag"],
                  ["Source Tags", "Senders can also set SourceTag to identify themselves"],
                  ["Amendment", "Core XRPL feature since launch (2012)"],
                ]}
                highlightCol={0}
              />
            </div>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Account owners can enable the <strong className="text-text-primary">RequireDest</strong> flag (asfRequireDest) on their XRPL account, which forces all incoming payments to include a destination tag. Transactions without a tag to a RequireDest account will be rejected by the network — preventing accidental tagless sends.
            </p>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-scams", label: "XRP Scams", desc: "Common scams to avoid" },
              { href: "/learn/recover-lost-xrp", label: "Recover Lost XRP", desc: "Options for lost access" },
              { href: "/learn/xrp-self-custody-guide", label: "Self-Custody Guide", desc: "Be your own bank" },
              { href: "/learn/xrpl-reserves-explained", label: "XRPL Reserves", desc: "Why 10 XRP minimum" },
              { href: "/learn/xrpl-transaction-fees", label: "Transaction Fees", desc: "How XRPL fees work" },
              { href: "/learn/xrp-wallets", label: "XRP Wallets", desc: "Best wallets compared" },
              { href: "/learn/how-does-xrp-work", label: "How XRP Works", desc: "Understand the basics" },
              { href: "/learn/xrp-transaction-types", label: "Transaction Types", desc: "All XRPL tx types" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Send XRP Safely"
          description="Now that you understand destination tags, learn how to secure your XRP with self-custody."
          primaryHref="/learn/xrp-self-custody-guide"
          primaryLabel="Self-Custody Guide →"
          secondaryHref="/learn/xrp-wallets"
          secondaryLabel="Best XRP Wallets"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Sources: XRPL.org documentation.</em>
        </p>
      </div>
    </>
  );
}
