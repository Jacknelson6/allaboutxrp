import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

const slug = "xrp-vs-ripple-for-beginners";
const title = "XRP vs Ripple for Beginners: The One Thing You Must Understand";
const description = "The #1 thing beginners get wrong about XRP. Ripple is a company. XRP is a currency. Here's why it matters for your investment.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const dp = "2026-02-15";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title, description,
  openGraph: { title: `${title} | AllAboutXRP`, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

const schemas = [
  buildArticleSchema({ headline: title, description, url, datePublished: dp, dateModified: dp }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "XRP vs Ripple" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "What is the difference between XRP and Ripple?", answer: "Ripple is a technology company based in San Francisco. XRP is a digital currency that runs on the XRP Ledger. Ripple uses XRP in its products, but they are separate things — like how Google is a company and Gmail is a product." },
    { question: "Is buying XRP the same as investing in Ripple?", answer: "No. When you buy XRP, you're buying a digital currency. You are NOT buying shares in Ripple the company. Ripple is a private company — you can't buy its stock on any exchange." },
    { question: "Does Ripple control XRP?", answer: "No. Ripple contributes to the XRP Ledger and uses XRP in its products, but the XRP Ledger is decentralized and operates independently. If Ripple disappeared, XRP would continue to function." },
    { question: "Why do people confuse XRP and Ripple?", answer: "Because Ripple is the most prominent company using XRP, and early on the terms were used interchangeably. Media coverage often says 'Ripple' when they mean 'XRP,' adding to the confusion." },
    { question: "Does Ripple own a lot of XRP?", answer: "Yes. Ripple holds a significant amount of XRP, with most of it locked in escrow accounts that release a set amount monthly. This is publicly visible on the blockchain." },
  ]),
];

const faqItems = [
  { q: "Is XRP and Ripple the same thing?", a: "No! Ripple is a company (like Apple). XRP is a digital currency (like dollars, but digital). Ripple uses XRP in its products, but they're separate. You can use XRP without Ripple, and Ripple has products that don't use XRP." },
  { q: "If I buy XRP, do I own part of Ripple?", a: "Absolutely not. Buying XRP gives you a digital currency. It does NOT give you ownership in Ripple. Ripple is a private company — its shares aren't available to the public (yet)." },
  { q: "What does Ripple actually do?", a: "Ripple builds technology for banks and financial institutions to send money around the world. Its main products include RippleNet (payment network), ODL (on-demand liquidity using XRP), and RLUSD (a stablecoin)." },
  { q: "Could XRP exist without Ripple?", a: "Yes. The XRP Ledger is decentralized open-source software maintained by a community of developers and validators. If Ripple disappeared, the ledger and XRP would continue operating." },
  { q: "Why does Ripple matter for XRP's price?", a: "Ripple is the biggest company driving XRP adoption. When Ripple signs a new bank partner or launches a new product, it increases demand for XRP. Ripple's success is good for XRP, but they're still separate." },
  { q: "Will Ripple do an IPO?", a: "Ripple has discussed a potential IPO (initial public offering). If they go public, you could buy Ripple stock separately from buying XRP. These would be two different investments." },
];

export default function XRPvsRippleBeginnersPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP vs Ripple"
          titleAccent="for Beginners"
          subtitle="The #1 thing every beginner gets wrong. Ripple is a company. XRP is a currency. Here's why understanding the difference is critical."
          breadcrumbLabel="XRP vs Ripple"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">Ripple</strong> = a technology company in San Francisco 🏢<br />
          <strong className="text-text-primary">XRP</strong> = a digital currency that runs on the XRP Ledger 💰<br /><br />
          They&apos;re related but separate — like how <Link href="/learn/ripple-vs-xrp" className="text-xrp-accent underline decoration-xrp-accent/30">Google is a company and Gmail is a product</Link>. Buying XRP does NOT mean you&apos;re buying shares in Ripple.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Ripple", value: "Private tech company (San Francisco)" },
          { label: "XRP", value: "Digital currency on the XRP Ledger" },
          { label: "Buying XRP", value: "Buying a currency, NOT company shares" },
          { label: "XRP Ledger", value: "Decentralized, open-source, runs independently" },
          { label: "Ripple's Role", value: "Biggest contributor & user, but not owner" },
          { label: "Key Product", value: "ODL uses XRP for cross-border payments" },
        ]} />

        <SectionNav items={[
          { id: "difference", label: "The Difference" },
          { id: "why-matters", label: "Why It Matters" },
          { id: "relationship", label: "Relationship" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="difference">
            <h2 className="text-2xl font-bold text-text-primary">The Difference, Simply</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "🏢 Ripple (Company)", desc: "A technology company with 900+ employees, offices worldwide, a CEO (Brad Garlinghouse), and products for banks. Private company — you can't buy its stock." },
                { title: "💰 XRP (Currency)", desc: "A digital currency that lives on the XRP Ledger blockchain. You can buy, sell, send, and receive it. It exists independently from Ripple." },
                { title: "🌐 XRP Ledger (Technology)", desc: "The decentralized blockchain where XRP transactions happen. Open-source software maintained by developers worldwide. Ripple is one contributor among many." },
                { title: "📱 Ripple Products", desc: "RippleNet, ODL, RLUSD, Ripple Custody, Ripple Prime — these are Ripple's products. Some use XRP, some don't. They're how Ripple makes money." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="why-matters" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why This Matters for You</h2>
            <div className="mt-5">
              <HighlightBox title="Don't make this mistake" variant="accent" large>
                <p className="text-lg">When you buy XRP, you&apos;re buying a <strong>digital currency</strong>. You are NOT buying shares in Ripple. If Ripple has a great quarter, XRP might go up — but it&apos;s not guaranteed. They&apos;re correlated but separate. Understanding this keeps you from making bad assumptions about your investment.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="relationship" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How They&apos;re Connected</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Ripple uses XRP", desc: "Ripple's ODL product uses XRP as a bridge currency for cross-border payments. More ODL = more XRP demand." },
                { title: "Ripple holds XRP", desc: "Ripple holds billions of XRP, mostly locked in escrow with scheduled monthly releases. This is public and transparent." },
                { title: "Ripple develops XRPL", desc: "Ripple employs developers who contribute to the XRP Ledger, but the community can develop it independently." },
                { title: "Ripple drives adoption", desc: "Ripple's bank partnerships bring real-world usage to XRP. Their sales team signs up institutions to use XRP." },
                { title: "But they're separate", desc: "The XRP Ledger is decentralized. XRP would keep working even without Ripple. They're not the same entity." },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/ripple-vs-xrp", label: "Ripple vs XRP", desc: "Detailed breakdown" },
              { href: "/learn/what-is-ripple", label: "What is Ripple?", desc: "The company explained" },
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "The currency explained" },
              { href: "/learn/xrp-explained-like-im-five", label: "ELI5", desc: "Simplest explanation" },
              { href: "/learn/xrp-for-beginners", label: "XRP for Beginners", desc: "Getting started" },
              { href: "/learn/leadership", label: "Ripple Leadership", desc: "Who runs Ripple" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Now You Know the Difference! 🎉"
          description="Ripple is the company. XRP is the currency. Ready to get started?"
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/what-is-xrp"
          secondaryLabel="Learn About XRP"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial advice.</em>
        </p>
      </div>
    </>
  );
}
