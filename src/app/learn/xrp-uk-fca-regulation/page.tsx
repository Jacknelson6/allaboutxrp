import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

const slug = "xrp-uk-fca-regulation";
const title = "XRP & UK FCA Regulation: What UK Investors Need to Know";
const description = "XRP under UK FCA regulation — legal status, registered platforms, financial promotions rules, and tax treatment.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const dp = "2026-02-15";

export const metadata: Metadata = {
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
    { name: "UK FCA Regulation" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "Is XRP legal in the UK?", answer: "Yes. XRP is legal to buy, sell, and hold in the United Kingdom. It is classified as a cryptoasset (exchange token) under FCA guidelines, not as a security or e-money." },
    { question: "How does the FCA regulate XRP?", answer: "The FCA regulates crypto exchanges operating in the UK through its cryptoasset registration regime. Exchanges must register with the FCA for anti-money laundering compliance. The FCA also oversees financial promotions rules for crypto." },
    { question: "What platforms can I use to buy XRP in the UK?", answer: "FCA-registered platforms that offer XRP include major exchanges like Bitstamp, Kraken, and others with UK operations. Always verify an exchange's FCA registration status before using it." },
    { question: "How is XRP taxed in the UK?", answer: "HMRC treats crypto as property for capital gains tax purposes. You pay CGT when selling XRP at a profit, with a £3,000 annual exempt amount (2026). Crypto received as income is subject to income tax." },
    { question: "Are there restrictions on crypto in the UK?", answer: "The FCA has banned the sale of crypto derivatives and ETNs to retail consumers. Spot XRP trading remains fully legal. Financial promotions rules require risk warnings on crypto advertisements." },
  ]),
];

const faqItems = [
  { q: "Is XRP legal in the UK?", a: "Yes. XRP is fully legal in the UK. The FCA classifies it as an exchange token (cryptoasset). You can buy, sell, hold, and transfer XRP freely through FCA-registered platforms." },
  { q: "How does the FCA regulate crypto?", a: "The FCA requires crypto exchanges to register for AML/KYC compliance. It oversees financial promotions (advertising rules), bans crypto derivatives for retail, and is developing a comprehensive regulatory framework." },
  { q: "What are financial promotions rules?", a: "Since October 2023, all crypto promotions in the UK must include risk warnings, be fair and not misleading, and be approved by an FCA-authorized firm. This applies to exchanges advertising to UK residents." },
  { q: "How is XRP taxed in the UK?", a: "HMRC treats crypto as property. You pay Capital Gains Tax when selling at a profit (after the £3,000 annual allowance). Rates are 10% (basic rate) or 20% (higher rate). Crypto income is subject to Income Tax." },
  { q: "Can I use a non-UK exchange?", a: "You can, but unregistered exchanges cannot legally promote their services to UK residents. Using an FCA-registered exchange provides better consumer protection and regulatory oversight." },
  { q: "Will there be an XRP ETF in the UK?", a: "The FCA currently bans crypto ETNs/ETPs for retail investors. However, institutional access is available, and the regulatory landscape is evolving. A change in this policy could unlock UK-listed XRP products." },
];

export default function XRPUKFCAPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP & UK"
          titleAccent="FCA Regulation"
          subtitle="Everything UK investors need to know about XRP — legal status, FCA rules, registered platforms, tax treatment, and what's changing in 2026."
          breadcrumbLabel="UK FCA Regulation"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>XRP is <strong className="text-text-primary">fully legal in the United Kingdom</strong>. The FCA classifies it as an exchange token (cryptoasset). Buy XRP through FCA-registered platforms, pay Capital Gains Tax on profits, and be aware of the <Link href="/learn/xrp-european-regulation" className="text-xrp-accent underline decoration-xrp-accent/30">evolving regulatory landscape</Link>. The UK is building a comprehensive crypto framework that aims to make Britain a global crypto hub.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Legal Status", value: "Fully legal — exchange token classification" },
          { label: "Regulator", value: "Financial Conduct Authority (FCA)" },
          { label: "Exchange Requirement", value: "FCA registration for AML compliance" },
          { label: "Tax Treatment", value: "Capital Gains Tax (10% or 20%)" },
          { label: "CGT Allowance", value: "£3,000 annual exempt amount (2026)" },
          { label: "Derivatives", value: "Banned for retail consumers" },
        ]} />

        <SectionNav items={[
          { id: "status", label: "Legal Status" },
          { id: "fca-rules", label: "FCA Rules" },
          { id: "tax", label: "UK Tax" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="status">
            <h2 className="text-2xl font-bold text-text-primary">XRP&apos;s Legal Status in the UK</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The FCA classifies cryptocurrencies into three categories. XRP falls under <strong className="text-text-primary">exchange tokens</strong> — digital assets used primarily as a means of exchange. This is the lightest regulatory category.
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Exchange Tokens (XRP)", desc: "Used as means of exchange. Not issued by a central authority. Includes Bitcoin, XRP, and most cryptocurrencies. Legal to trade." },
                { title: "Security Tokens", desc: "Tokens that provide rights similar to shares or debt instruments. Subject to securities regulation." },
                { title: "E-Money Tokens", desc: "Tokens pegged to fiat currency (stablecoins). Subject to e-money regulation." },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="fca-rules" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">FCA Rules for Crypto</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Exchange Registration", desc: "All crypto exchanges serving UK customers must register with the FCA for AML compliance" },
                { title: "Financial Promotions", desc: "Crypto ads must include risk warnings, be fair and clear, and be approved by an FCA-authorized firm" },
                { title: "Consumer Warnings", desc: "Exchanges must clearly state that crypto investments can lose value and are not protected by FSCS" },
                { title: "Derivatives Ban", desc: "Sale of crypto derivatives (CFDs, options, ETNs) to retail consumers is banned" },
                { title: "Travel Rule", desc: "Exchanges must share sender/recipient information for crypto transfers above certain thresholds" },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="tax" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">UK Tax Treatment</h2>
            <div className="mt-5">
              <HighlightBox title="HMRC Crypto Tax Rules" variant="info">
                <p>HMRC treats crypto as property. <strong>Capital Gains Tax</strong> applies when you sell, swap, or gift XRP at a profit. The annual CGT allowance is £3,000 (2026). Basic rate taxpayers pay 10%, higher rate pay 20%. Crypto received as income (mining, airdrops, salary) is subject to Income Tax.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-european-regulation", label: "European Regulation", desc: "MiCA and EU rules" },
              { href: "/learn/xrp-us-regulation", label: "US Regulation", desc: "Federal & state rules" },
              { href: "/learn/xrp-tax-guide", label: "XRP Tax Guide", desc: "Tax reporting help" },
              { href: "/learn/crypto-regulation-xrp-impact", label: "Regulation Impact", desc: "How rules affect XRP" },
              { href: "/learn/xrp-sec-settlement", label: "SEC Settlement", desc: "US legal resolution" },
              { href: "/learn/get-started", label: "Buy XRP", desc: "Getting started guide" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="XRP Is Legal in the UK"
          description="Clear regulatory status. FCA-registered platforms. Start your XRP journey."
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/xrp-european-regulation"
          secondaryLabel="European Rules"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial or legal advice.</em>
        </p>
      </div>
    </>
  );
}
