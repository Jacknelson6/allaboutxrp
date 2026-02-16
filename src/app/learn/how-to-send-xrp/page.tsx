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
  title: "How to Send XRP: Fast & Cheap Transfers | AllAboutXRP",
  description: "Learn how to send XRP step-by-step. Covers wallets, destination tags, fees, and common mistakes when transferring XRP.",
  keywords: ["how to send XRP","send XRP","transfer XRP","XRP destination tag","XRP transaction"],
  openGraph: {
    title: "How to Send XRP: Step-by-Step Transfer Guide",
    description: "Send XRP in 3-5 seconds for under a penny. Complete beginner guide.",
    url: "https://allaboutxrp.com/learn/how-to-send-xrp",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "How to Send XRP: Step-by-Step Transfer Guide", description: "Send XRP in 3-5 seconds for under a penny. Complete beginner guide." },
  alternates: { canonical: "https://allaboutxrp.com/learn/how-to-send-xrp" },
};

const schemas = [
  buildArticleSchema({ headline: "How to Send XRP: Fast & Cheap Transfers", description: "Learn how to send XRP step-by-step. Covers wallets, destination tags, fees, and common mistakes when transferring XRP.", url: "https://allaboutxrp.com/learn/how-to-send-xrp", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "How to Send XRP" }]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/how-to-send-xrp" }),
  buildFAQSchema([
    {
        "question": "How long does it take to send XRP?",
        "answer": "XRP transactions settle in 3-5 seconds with finality. No confirmations needed like Bitcoin."
    },
    {
        "question": "Do I always need a destination tag?",
        "answer": "Only when sending to exchanges or services that use shared addresses. Personal wallets typically don't require one."
    },
    {
        "question": "How much does it cost to send XRP?",
        "answer": "The network fee is approximately 0.00001 XRP (fractions of a penny). Exchanges may charge additional withdrawal fees."
    },
    {
        "question": "Can I reverse an XRP transaction?",
        "answer": "No. XRP transactions are final and irreversible once confirmed. Always double-check the address before sending."
    },
    {
        "question": "What's the minimum amount of XRP I can send?",
        "answer": "The minimum transaction is 0.000001 XRP (one drop). However, the receiving wallet must maintain a 10 XRP reserve."
    }
]),
];

const faqItems = [
  {
    "q": "How long does it take to send XRP?",
    "a": "XRP transactions settle in 3-5 seconds with finality. No confirmations needed like Bitcoin."
  },
  {
    "q": "Do I always need a destination tag?",
    "a": "Only when sending to exchanges or services that use shared addresses. Personal wallets typically don't require one."
  },
  {
    "q": "How much does it cost to send XRP?",
    "a": "The network fee is approximately 0.00001 XRP (fractions of a penny). Exchanges may charge additional withdrawal fees."
  },
  {
    "q": "Can I reverse an XRP transaction?",
    "a": "No. XRP transactions are final and irreversible once confirmed. Always double-check the address before sending."
  },
  {
    "q": "What's the minimum amount of XRP I can send?",
    "a": "The minimum transaction is 0.000001 XRP (one drop). However, the receiving wallet must maintain a 10 XRP reserve."
  }
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="How to Send XRP" titleAccent="Fast & Cheap Transfers" subtitle="Send XRP anywhere in the world in 3-5 seconds for less than a penny. Step-by-step guide for beginners." breadcrumbLabel="How to Send XRP">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>Sending XRP is fast, cheap, and simple. You need the recipient's <strong className="text-text-primary">XRP address</strong> and sometimes a <strong className="text-text-primary">destination tag</strong> (required for exchanges). Transactions settle in 3-5 seconds and cost a fraction of a penny. Use a wallet like <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">Xaman</Link> or an exchange to send. Always double-check the address — XRP transactions are <strong className="text-text-primary">irreversible</strong>.</p>
        </TLDRBox>

        <KeyFactsTable facts={[{"label":"Speed","value":"3-5 seconds"},{"label":"Cost","value":"~0.00001 XRP (~$0.00003)"},{"label":"Destination Tag","value":"Required for exchanges"},{"label":"Minimum Send","value":"0.000001 XRP"},{"label":"Irreversible","value":"Yes — always double check"},{"label":"24/7","value":"Works any time, any day"}]} />

        <SectionNav items={[{"id":"from-wallet","label":"From Wallet"},{"id":"from-exchange","label":"From Exchange"},{"id":"destination-tags","label":"Destination Tags"},{"id":"fees","label":"Fees"},{"id":"troubleshooting","label":"Troubleshooting"},{"id":"faq","label":"FAQ"}]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Speed" value="3-5 sec" delay={0.00} />
          <StatPill label="Fee" value="<$0.01" delay={0.06} />
          <StatPill label="Uptime" value="24/7" delay={0.12} />
          <StatPill label="Finality" value="Instant" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          
          <RevealSection id="from-wallet">
            <h2 className="text-2xl font-bold text-text-primary">Sending XRP from a Wallet</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Sending XRP from a personal <Link href="/learn/xrp-wallets" className="text-xrp-accent underline decoration-xrp-accent/30">wallet like Xaman</Link> is the most straightforward method. The <Link href="/learn/xrp-ledger-explained" className="text-xrp-accent underline decoration-xrp-accent/30">XRP Ledger</Link> processes transactions in 3-5 seconds with near-zero fees.
            </p>
            <div className="mt-6">
              <IconList items={[
                { title: "1. Open your wallet app", desc: "Launch Xaman, Trust Wallet, or whatever XRPL-compatible wallet you use." },
                { title: "2. Tap Send/Transfer", desc: "Find the send function and select XRP as the asset to send." },
                { title: "3. Enter the recipient address", desc: "Paste the destination XRP address. It starts with 'r' and is 25-34 characters long." },
                { title: "4. Add destination tag if needed", desc: "If sending to an exchange, you MUST include the destination tag. Without it, your XRP may be lost." },
                { title: "5. Enter amount and confirm", desc: "Enter the amount, review everything carefully, then confirm the transaction." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="from-exchange" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Sending XRP from an Exchange</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Exchanges like Coinbase, Binance, and Kraken all support XRP withdrawals. The process is similar to wallet transfers but may include additional verification steps and withdrawal fees. After <Link href="/learn/how-to-buy-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">buying XRP</Link>, you can send it anywhere.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Exchange", "Withdrawal Fee", "Processing Time", "Min Withdrawal"]}
                rows={[
                  ["Coinbase", "Free-$0.15", "Minutes", "1 XRP"],
                  ["Binance", "0.25 XRP", "Minutes", "20 XRP"],
                  ["Kraken", "0.02 XRP", "Minutes", "25 XRP"],
                  ["Uphold", "Free", "Instant", "No minimum"],
                ]}
                highlightCol={1}
              />
            </div>
          </RevealSection>

          <RevealSection id="destination-tags" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Destination Tags Explained</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              A <strong className="text-text-primary">destination tag</strong> is a number attached to an XRP transaction that identifies which user the payment belongs to. Exchanges use one XRP address for all customers, so the destination tag tells them whose account to credit. <strong className="text-text-primary">Forgetting the destination tag when sending to an exchange is the #1 cause of lost XRP.</strong>
            </p>
            <div className="mt-6">
              <HighlightBox title="When You Need a Destination Tag" variant="warning">
                <p><strong>Always required:</strong> Sending to exchanges (Coinbase, Binance, Kraken, etc.)<br /><strong>Usually not needed:</strong> Sending to personal wallets (Xaman, Ledger, etc.)<br /><strong>Check first:</strong> The recipient will tell you if one is needed.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="fees" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">XRP Transaction Fees</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              XRP has some of the lowest transaction fees in crypto. The standard network fee is approximately <strong className="text-text-primary">0.00001 XRP</strong> (about $0.00003 at current prices). This fee is <Link href="/learn/xrp-burn-rate" className="text-xrp-accent underline decoration-xrp-accent/30">burned permanently</Link>, reducing the total XRP supply. Exchanges may charge additional withdrawal fees on top of the network fee.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Network Fee", desc: "~0.00001 XRP per transaction. This is burned and goes to no one." },
                { title: "Exchange Fees", desc: "Exchanges add their own withdrawal fees. These vary by platform (see table above)." },
                { title: "No Gas Wars", desc: "Unlike Ethereum, XRP fees don't spike during high demand. They stay consistently low." },
                { title: "Fee Escalation", desc: "During extreme network load, fees may temporarily increase but remain well under $0.01." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="troubleshooting" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Troubleshooting XRP Transfers</h2>
            <div className="mt-6">
              <IconList items={[
                { title: "Missing destination tag", desc: "Contact the exchange support immediately. Many can recover funds with proof of the transaction hash." },
                { title: "Transaction not arriving", desc: "Check the transaction hash on an explorer like xrpscan.com. Most issues are wrong address or missing tag." },
                { title: "Below minimum reserve", desc: "You can't send XRP that would bring your wallet below the 10 XRP reserve requirement." },
                { title: "Wrong address format", desc: "XRP addresses start with 'r'. If you sent to a wrong but valid address, the funds cannot be recovered." },
              ]} variant="warn" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[{"href":"/learn/xrp-wallets","label":"XRP Wallets","desc":"Choose the right wallet"},{"href":"/learn/how-to-buy-xrp","label":"How to Buy XRP","desc":"Purchase guide"},{"href":"/learn/xrp-transaction-types","label":"Transaction Types","desc":"All XRPL transactions"},{"href":"/learn/how-to-store-xrp-safely","label":"Store XRP Safely","desc":"Security best practices"},{"href":"/learn/xrp-burn-rate","label":"XRP Burn Rate","desc":"How fees are burned"},{"href":"/learn/xrp-addresses-and-keys","label":"Addresses & Keys","desc":"Key management"}]} />
          </RevealSection>
        </div>

        <LearnCTA title="Ready to Send XRP?" description="Get a wallet and start sending XRP anywhere in the world in seconds." primaryHref="/learn/xrp-wallets" primaryLabel="Get a Wallet →" secondaryHref="/learn/how-to-buy-xrp" secondaryLabel="Buy XRP" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
