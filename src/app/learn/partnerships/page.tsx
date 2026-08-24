import { Metadata } from "next";
import Link from "next/link";
import AuthorByline from "@/components/shared/AuthorByline";
import SEOSchema from "@/components/shared/SEOSchema";
import SourceList from "@/components/shared/SourceList";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildSpeakableSchema,
} from "@/lib/utils/seo";
import {
  FAQAccordion,
  KeyFactsTable,
  LastUpdated,
  LearnCTA,
  LearnHero,
  LearnLinkGrid,
  RevealSection,
  SectionNav,
  TLDRBox,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ripple Partnerships 2026: Banks Using Ripple and XRP",
  description:
    "A verified 2026 list of Ripple partnerships, banks using Ripple technology, and the smaller set with public evidence of direct XRP use.",
  keywords: [
    "Ripple partnerships",
    "Ripple partnerships 2026",
    "banks using Ripple",
    "banks using XRP",
    "XRP bank partnerships",
  ],
  openGraph: {
    title: "Ripple Partnerships 2026: Banks Using Ripple and XRP",
    description:
      "Separate Ripple software customers from institutions with public evidence of direct XRP use.",
    url: "https://allaboutxrp.com/learn/partnerships",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ripple Partnerships 2026: Verified List",
    description:
      "Which banks use Ripple technology, and which relationships actually involve XRP?",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn/partnerships" },
};

const faqItems = [
  {
    q: "What banks use XRP in 2026?",
    a: "There is no complete public list proving that every Ripple banking customer uses XRP. Ripple products can use fiat, stablecoins, XRP, or custody infrastructure. SBI Remit has clear first-party evidence of using XRP through On-Demand Liquidity, while many other bank announcements describe Ripple Payments, RippleNet, custody, or RLUSD without confirming XRP as the settlement asset.",
  },
  {
    q: "Which banks use Ripple technology?",
    a: "Public announcements identify Jeonbuk Bank, Kbank, BBVA, BNY, Santander, Standard Chartered, Axis Bank, RAKBANK, and WebBank in Ripple-related payment, custody, reserve, or settlement initiatives. Their products and stages differ, so a Ripple relationship should not automatically be labeled XRP use.",
  },
  {
    q: "Is using Ripple the same as using XRP?",
    a: "No. Ripple is a company with payments, custody, stablecoin, and tokenization products. XRP is the native asset of the independent XRP Ledger. A customer can use Ripple technology without using XRP in a transaction.",
  },
  {
    q: "Does Mastercard use XRP?",
    a: "No public source reviewed for this page proves that Mastercard settles payments in XRP. Ripple, Mastercard, WebBank, and Gemini announced an exploration of RLUSD settlement on the XRP Ledger. That is evidence of an XRPL and RLUSD initiative, not direct XRP settlement.",
  },
  {
    q: "How many Ripple partners are there?",
    a: "Ripple says its network serves hundreds of customers and partners, but it does not publish one current, exhaustive roster that identifies each institution, product, launch status, and settlement asset. Any precise total should be treated as a dated company claim unless it is backed by a current roster.",
  },
];

const schemas = [
  buildArticleSchema({
    headline: "Ripple Partnerships 2026: Banks Using Ripple and XRP",
    description:
      "A source-classified guide to Ripple partnerships, banks using Ripple technology, and relationships with public evidence of direct XRP use.",
    url: "https://allaboutxrp.com/learn/partnerships",
    datePublished: "2026-02-09",
    dateModified: "2026-08-24",
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Ripple Partnerships" },
  ]),
  buildSpeakableSchema({ url: "https://allaboutxrp.com/learn/partnerships" }),
  buildFAQSchema(faqItems.map((item) => ({ question: item.q, answer: item.a }))),
];

type Relationship = {
  institution: string;
  confirmedUse: string;
  xrpEvidence: string;
  source: string;
  href: string;
};

const bankRelationships: Relationship[] = [
  {
    institution: "Jeonbuk Bank",
    confirmedUse: "Ripple Payments partnership for cross-border payments",
    xrpEvidence: "Not specified in the announcement",
    source: "Ripple, August 2026",
    href: "https://ripple.com/ripple-press/ripple-and-jeonbuk-bank-partner-to-modernize-cross-border-payments-for-korea-s-regional-banking-sector/",
  },
  {
    institution: "Kbank",
    confirmedUse: "Ripple Custody wallet infrastructure",
    xrpEvidence: "No direct XRP use stated",
    source: "Ripple, April 2026",
    href: "https://ripple.com/ripple-press/ripple-partners-with-kbank-to-deploy-scalable-digital-asset-wallet-infrastructure-through-ripple-custody/",
  },
  {
    institution: "BBVA",
    confirmedUse: "Ripple Custody for a digital-asset service",
    xrpEvidence: "Announcement identifies bitcoin and ether, not XRP",
    source: "Ripple, September 2025",
    href: "https://ripple.com/ripple-press/ripple-expands-footprint-into-spain-through-new-agreement-with-bbva/",
  },
  {
    institution: "BNY",
    confirmedUse: "Primary reserve custodian for RLUSD",
    xrpEvidence: "No direct XRP use stated",
    source: "Ripple, July 2025",
    href: "https://ripple.com/ripple-press/ripple-selects-bny-to-custody-ripple-usd-reserves/",
  },
  {
    institution: "WebBank",
    confirmedUse: "Exploration of RLUSD settlement on XRPL with Mastercard and Gemini",
    xrpEvidence: "RLUSD on XRPL is not proof of XRP settlement",
    source: "Ripple, November 2025",
    href: "https://ripple.com/ripple-press/ripple-teams-up-with-mastercard-webbank-and-gemini/",
  },
  {
    institution: "Santander",
    confirmedUse: "One Pay FX built with Ripple technology",
    xrpEvidence: "The cited case describes xCurrent, not direct XRP use",
    source: "Ripple case study",
    href: "https://ripple.com/insights/santander-partners-with-ripple-to-bring-certainty-and-speed-to-international-payments/",
  },
  {
    institution: "Standard Chartered, Axis Bank, and RAKBANK",
    confirmedUse: "RippleNet payment services",
    xrpEvidence: "The cited launch does not state direct XRP use",
    source: "Ripple, November 2017",
    href: "https://ripple.com/insights/ripple-powered-instant-payment-services-now-live-axis-bank-rakbank-standard-chartered/",
  },
];

const directXrpRelationships: Relationship[] = [
  {
    institution: "SBI Remit",
    confirmedUse: "On-Demand Liquidity for remittances from Japan",
    xrpEvidence: "Ripple explicitly states that the flow leverages XRP",
    source: "Ripple, July 2021",
    href: "https://ripple.com/ripple-press/ripple-launches-on-demand-liquidity-with-sbi-remit-to-accelerate-and-grow-cross-border-payments-from-japan/",
  },
  {
    institution: "Bitso",
    confirmedUse: "Ripple Payments settlement",
    xrpEvidence: "Current customer case study names both RLUSD and XRP as settlement assets",
    source: "Ripple customer case study",
    href: "https://ripple.com/customer-case-study/bitso/",
  },
  {
    institution: "Tranglo",
    confirmedUse: "Ripple Payments for cross-border corridors",
    xrpEvidence: "Ripple documented an XRP-based On-Demand Liquidity rollout; current asset mix is not disclosed per payment",
    source: "Ripple announcements and case study",
    href: "https://ripple.com/insights/ripple-acquires-40-stake-in-asias-leading-cross-border-payments-specialist-tranglo/",
  },
  {
    institution: "Cuallix",
    confirmedUse: "Early xRapid cross-border payment pilot",
    xrpEvidence: "Ripple identified Cuallix as the first institution to use xRapid and XRP",
    source: "Ripple, October 2017",
    href: "https://ripple.com/insights/ripplenet-grows-to-over-100-financial-institutions/",
  },
];

function EvidenceTable({ rows }: { rows: Relationship[] }) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-white/[0.04] text-text-primary">
          <tr>
            <th className="px-4 py-3 font-semibold">Institution</th>
            <th className="px-4 py-3 font-semibold">Confirmed relationship</th>
            <th className="px-4 py-3 font-semibold">Direct XRP evidence</th>
            <th className="px-4 py-3 font-semibold">Primary source</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 text-text-secondary">
          {rows.map((row) => (
            <tr key={row.institution} className="align-top">
              <td className="px-4 py-4 font-medium text-text-primary">{row.institution}</td>
              <td className="px-4 py-4">{row.confirmedUse}</td>
              <td className="px-4 py-4">{row.xrpEvidence}</td>
              <td className="px-4 py-4">
                <a
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {row.source}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PartnershipsPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-5xl px-4 py-16">
        <LearnHero
          title="Ripple Partnerships"
          titleAccent="and Banks Using Ripple"
          subtitle="A verified 2026 guide that separates Ripple customers, XRPL initiatives, and relationships with public evidence of direct XRP use."
          breadcrumbLabel="Ripple Partnerships"
        >
          <div className="mt-5">
            <AuthorByline date="2026-08-24" />
            <LastUpdated date="August 24, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>
            <strong className="text-text-primary">No complete public list proves that every bank using Ripple also uses XRP.</strong>{" "}
            Ripple sells payments, custody, stablecoin, and tokenization products that can work without XRP. Public sources clearly
            connect SBI Remit, Bitso, Tranglo, and Cuallix to XRP-based payment flows. Other institutions below are confirmed Ripple
            relationships, but their announcements do not establish direct XRP use.
          </p>
        </TLDRBox>

        <KeyFactsTable
          facts={[
            { label: "Verified through", value: "August 24, 2026" },
            { label: "Bank relationships classified", value: "7 source-backed entries" },
            { label: "Direct XRP evidence highlighted", value: "4 relationships" },
            { label: "Critical distinction", value: "Ripple customer does not automatically mean XRP user" },
          ]}
        />

        <SectionNav
          items={[
            { id: "updates", label: "2026 Updates" },
            { id: "banks", label: "Banks Using Ripple" },
            { id: "xrp", label: "Direct XRP Evidence" },
            { id: "verify", label: "How to Verify" },
            { id: "faq", label: "FAQ" },
          ]}
        />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="updates">
            <h2 className="text-2xl font-bold text-text-primary">Ripple partnerships added or expanded in 2026</h2>
            <div className="mt-5 space-y-4 text-text-secondary leading-relaxed">
              <p>
                Ripple announced a cross-border payments partnership with <strong className="text-text-primary">Jeonbuk Bank</strong> in
                August 2026 and a Ripple Custody deployment with <strong className="text-text-primary">Kbank</strong> in April 2026.
                Neither announcement identifies XRP as the settlement asset.
              </p>
              <p>
                Ripple and SBI Group also announced plans to distribute <Link href="/learn/rlusd" className="text-xrp-accent underline decoration-xrp-accent/30">RLUSD</Link> in
                Japan, while Bitso expanded its use of Ripple Payments with both RLUSD and XRP named as settlement options. These examples
                show why the exact product and asset matter more than a generic partner count.
              </p>
            </div>
          </RevealSection>

          <RevealSection id="banks" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">List of banks using Ripple technology</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              This table records what each primary source actually confirms. It does not upgrade a custody, software, reserve, pilot, or
              stablecoin relationship into an XRP claim.
            </p>
            <EvidenceTable rows={bankRelationships} />
          </RevealSection>

          <RevealSection id="xrp" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Relationships with public evidence of direct XRP use</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              The strongest evidence explicitly names XRP or the former On-Demand Liquidity and xRapid products that used XRP as a bridge
              asset. Historical evidence proves a documented use at that time, not that every current transaction still uses XRP.
            </p>
            <EvidenceTable rows={directXrpRelationships} />
          </RevealSection>

          <RevealSection id="verify" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How to verify an XRP bank partnership claim</h2>
            <ol className="mt-5 space-y-4 text-text-secondary leading-relaxed">
              <li><strong className="text-text-primary">1. Open the primary announcement.</strong> Prefer the institution, Ripple, a regulator, or an official filing.</li>
              <li><strong className="text-text-primary">2. Identify the product.</strong> Ripple Payments, RippleNet, custody, RLUSD, and XRPL are not interchangeable.</li>
              <li><strong className="text-text-primary">3. Look for the asset.</strong> Count direct XRP use only when the source names XRP or an XRP-specific liquidity product.</li>
              <li><strong className="text-text-primary">4. Check the stage and date.</strong> Exploration, pilot, partnership, and live production describe different levels of adoption.</li>
              <li><strong className="text-text-primary">5. Recheck current status.</strong> A historical launch does not prove the same product or asset mix remains active today.</li>
            </ol>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="mb-5 text-2xl font-bold text-text-primary">Frequently asked questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue learning</h2>
            <LearnLinkGrid
              links={[
                { href: "/learn/what-is-ripple", label: "What Is Ripple?", desc: "Company, products, and XRP explained" },
                { href: "/learn/how-banks-use-xrp", label: "How Banks Could Use XRP", desc: "Payment mechanics and liquidity flow" },
                { href: "/learn/xrp-use-cases", label: "XRP Use Cases", desc: "Where XRP can provide utility" },
                { href: "/learn/cross-border-payments", label: "Cross-Border Payments", desc: "How payment flows work" },
                { href: "/learn/rlusd", label: "RLUSD Guide", desc: "Ripple's stablecoin and its role" },
              ]}
            />
          </RevealSection>
        </div>

        <SourceList
          sources={[
            { label: "Ripple banking solutions", href: "https://ripple.com/industry/banking/", note: "Current product categories and Ripple's description of its banking network" },
            { label: "Ripple customer stories", href: "https://ripple.com/customers/", note: "Current first-party customer directory and case studies" },
            { label: "Jeonbuk Bank partnership", href: bankRelationships[0].href, note: "2026 cross-border payments announcement" },
            { label: "Kbank custody partnership", href: bankRelationships[1].href, note: "2026 wallet infrastructure announcement" },
            { label: "SBI Remit XRP launch", href: directXrpRelationships[0].href, note: "Explicit first-party evidence of XRP in a remittance flow" },
            { label: "Bitso customer case study", href: directXrpRelationships[1].href, note: "Current Ripple Payments case naming RLUSD and XRP settlement assets" },
            { label: "Mastercard, WebBank, and Gemini initiative", href: bankRelationships[4].href, note: "RLUSD settlement exploration on the XRP Ledger" },
          ]}
        />

        <LearnCTA
          title="Verify the Product, Not Just the Partner Name"
          description="Understand how Ripple Payments, XRP, XRPL, and RLUSD fit into different institutional relationships."
          primaryHref="/learn/what-is-ripple"
          primaryLabel="Explore Ripple's Products →"
          secondaryHref="/learn/xrp-use-cases"
          secondaryLabel="Review XRP Use Cases"
        />
      </div>
    </>
  );
}
