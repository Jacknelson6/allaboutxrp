import type { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import { LearnHero, TLDRBox, LastUpdated, FAQAccordion, LearnLinkGrid } from "@/components/learn/LearnPageShell";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/utils/seo";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "XRP Legal Status by Country: A Source-Led Guide (2026)",
  description: "A jurisdiction-by-jurisdiction XRP legal guide using current regulator, tax, and court sources for the US, EU, UK, Canada, Australia, India, Bolivia, and Nigeria.",
  alternates: { canonical: "/learn/xrp-legal-status-by-country" },
};

const faq = [
  { q: "Is XRP legal everywhere?", a: "There is no worldwide answer. Treatment depends on jurisdiction, activity, provider, customer, and transaction structure." },
  { q: "Did a US court declare XRP universally not a security?", a: "No. The Ripple case reached different results for different offers and sales. The final $125,035,150 judgment and injunction remain in effect." },
  { q: "Does MiCA declare XRP legal across the EU?", a: "MiCA regulates in-scope issuers and service providers. It is not a one-line asset approval and does not replace each user's product and provider checks." },
  { q: "Is crypto still fully banned in Bolivia?", a: "No. Bolivia's central bank announced Resolution 082/2024, which lifted the prior prohibition on payment instruments for virtual-asset transactions." },
];

const sources = [
  ["United States", "Transaction-specific Ripple holdings; final penalty and injunction remain", "SEC litigation release", "https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26369"],
  ["European Union", "MiCA framework for in-scope issuers and crypto-asset service providers", "EU MiCA regulation", "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32023R1114"],
  ["United Kingdom", "Cryptoasset businesses may need FCA registration; registration is not endorsement", "FCA registration scope", "https://www.fca.org.uk/firms/cryptoassets/who-needs-register"],
  ["Canada", "Provider registration and tax treatment must be checked separately", "CSA registration search", "https://info.securities-administrators.ca/nrsmobile/nrssearch.aspx?lang=EN"],
  ["Australia", "Provider registration and tax treatment must be checked separately", "AUSTRAC provider register", "https://www.austrac.gov.au/virtual-asset-service-provider-register-goes-public"],
  ["India", "VDA tax rules and FIU provider registration apply; this is not a universal approval", "Income Tax Act section 115BBH", "https://www.incometaxindia.gov.in/w/section-115bbh-3"],
  ["Bolivia", "The prior central-bank prohibition was lifted in 2024", "Central Bank Resolution 082/2024 announcement", "https://www.bcb.gob.bo/?q=node%2F235234"],
  ["Nigeria", "Banks may service compliant VASPs under guidelines but may not trade or hold virtual assets for their own account", "CBN VASP account guidelines", "https://www.cbn.gov.ng/out/2024/fprd/guidelines%20on%20operations%20of%20bank%20accounts%20for%20virtual%20asset%20providers.pdf"],
] as const;

const schemas = [
  buildArticleSchema({ headline: "XRP Legal Status by Country: A Source-Led Guide", description: metadata.description as string, url: "https://allaboutxrp.com/learn/xrp-legal-status-by-country", datePublished: "2026-02-15", dateModified: "2026-08-24" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "XRP Legal Status by Country" }]),
  buildFAQSchema(faq.map((item) => ({ question: item.q, answer: item.a }))),
];

export default function XrpLegalStatusByCountryPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="XRP Legal Status" titleAccent="A country-by-country source guide" subtitle="Legal treatment depends on the jurisdiction, activity, provider, and transaction. This page limits its table to claims supported by current primary records." breadcrumbLabel="XRP Legal Status by Country">
          <div className="mt-5"><AuthorByline date="2026-02-15" modified="2026-08-24" /><LastUpdated date="August 24, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">There is no single legal status for XRP worldwide.</strong> A country&apos;s rules may regulate exchanges, promotions, custody, payments, taxation, or a particular offer without assigning one permanent label to every XRP transaction. Verify the activity you plan to conduct, not just the asset name.</p>
        </TLDRBox>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text-primary">Verified jurisdiction notes</h2>
          <p className="mt-4 leading-relaxed text-text-secondary">The table intentionally excludes countries for which we did not locate a current enacted instrument or regulator record. It does not infer legality from exchange availability.</p>
          <div className="mt-6 overflow-x-auto border border-white/[0.08]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.04] text-text-primary"><tr><th className="p-4">Jurisdiction</th><th className="p-4">What the source supports</th><th className="p-4">Primary record</th></tr></thead>
              <tbody className="divide-y divide-white/[0.06] text-text-secondary">
                {sources.map(([country, note, label, href]) => (
                  <tr key={country}><td className="p-4 font-semibold text-text-primary">{country}</td><td className="p-4 leading-relaxed">{note}</td><td className="p-4"><a href={href} target="_blank" rel="noopener noreferrer" className="text-xrp-accent underline">{label}</a></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 space-y-5 text-text-secondary leading-relaxed">
          <h2 className="text-2xl font-bold text-text-primary">United States: what the Ripple case means</h2>
          <p>The court analyzed different offers and sales separately. Ripple&apos;s institutional sales violated securities law, while the record did not establish the required expectation of profits for its programmatic exchange sales. The case does not supply a universal answer for every seller, promotion, product, or future transaction.</p>
          <p>In August 2025, both appeals were dismissed. The SEC states that the $125,035,150 final judgment and injunction remain in effect. A proposed $50 million modification was not implemented.</p>
        </section>

        <section className="mt-12 space-y-5 text-text-secondary leading-relaxed">
          <h2 className="text-2xl font-bold text-text-primary">Corrections to common country claims</h2>
          <p><strong className="text-text-primary">Bolivia:</strong> calling the country a current full ban is incorrect. The central bank announced that Resolution 082/2024 lifted the prior prohibition.</p>
          <p><strong className="text-text-primary">Nigeria:</strong> the 2023 VASP account guidelines changed the earlier banking position. Financial institutions may open designated accounts for compliant VASPs, while they remain prohibited from trading or holding virtual assets for their own account.</p>
          <p><strong className="text-text-primary">Morocco:</strong> Bank Al-Maghrib described work on a draft crypto-asset law in its 2024 reporting. A draft is not an enacted instrument, so this page does not assign a conclusive current status without the final official text.</p>
        </section>

        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold text-text-primary">Frequently asked questions</h2>
          <FAQAccordion items={faq} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text-primary">Continue learning</h2>
          <LearnLinkGrid links={[
            { href: "/learn/sec-vs-ripple", label: "SEC v Ripple", desc: "The case and final judgment" },
            { href: "/learn/buy-xrp-in-usa", label: "Buy XRP in the US", desc: "State and provider checks" },
            { href: "/learn/buy-xrp-in-uk", label: "Buy XRP in the UK", desc: "FCA and HMRC sources" },
            { href: "/learn/buy-xrp-in-canada", label: "Buy XRP in Canada", desc: "Registration and tax sources" },
          ]} />
        </section>

        <p className="mt-10 text-xs text-text-secondary/70">Editorial legal overview reviewed August 24, 2026. Not legal advice. Consult a qualified professional for a specific transaction or jurisdiction.</p>
      </div>
    </>
  );
}
