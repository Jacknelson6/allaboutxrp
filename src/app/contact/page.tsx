import type { Metadata } from "next";
import Link from "next/link";
import SEOSchema from "@/components/shared/SEOSchema";
import { EDITORIAL_EMAIL, GENERAL_EMAIL, ORGANIZATION_ID, SITE_URL } from "@/lib/seo/organization";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact AllAboutXRP — Editorial, Corrections, and General Enquiries",
  description:
    "How to reach AllAboutXRP: the editorial desk for corrections and source questions, the general inbox for privacy, licensing, and business enquiries, and what to expect in reply.",
  openGraph: {
    title: "Contact AllAboutXRP",
    description:
      "Reach the AllAboutXRP editorial desk for corrections and source questions, or the general inbox for privacy, licensing, and business enquiries.",
    url: "https://allaboutxrp.com/contact",
    type: "website",
    siteName: "AllAboutXRP",
    locale: "en_US",
  },
  alternates: { canonical: "https://allaboutxrp.com/contact" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#webpage`,
  url: `${SITE_URL}/contact`,
  name: "Contact AllAboutXRP",
  description:
    "Contact routes for AllAboutXRP: the editorial desk for corrections and source questions, and the general inbox for privacy, licensing, and business enquiries.",
  inLanguage: "en-US",
  dateModified: "2026-08-22",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": ORGANIZATION_ID },
  mainEntity: { "@id": ORGANIZATION_ID },
};

const routes = [
  {
    email: EDITORIAL_EMAIL,
    title: "Editorial desk",
    summary: "Corrections, disputed claims, source questions, and review requests.",
    detail:
      "Include the page URL, the exact sentence in question, and a primary source if you have one. Structured corrections are faster to process through the corrections form, which routes to the same desk.",
  },
  {
    email: GENERAL_EMAIL,
    title: "General enquiries",
    summary: "Privacy requests, licensing, republication, and business questions.",
    detail:
      "This is the inbox named in our privacy policy and terms of service. Privacy and data requests should state the request type and the email address you used on the site, if any.",
  },
];

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-surface-primary">
      <SEOSchema schema={[breadcrumbSchema, contactPageSchema]} />
      <article className="reading-container py-16 sm:py-24">
        <header className="border-b border-surface-border pb-10">
          <p className="editorial-kicker">Contact</p>
          <h1 className="mt-4 text-4xl font-bold text-text-primary sm:text-6xl">
            Reach the people behind the pages
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
            AllAboutXRP is an independent publisher, not a broker, exchange, or wallet provider. Two
            inboxes cover everything we handle: one for the editorial record, one for everything else.
          </p>
        </header>

        <section className="prose-custom mt-12">
          <h2>Where to write</h2>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {routes.map((route) => (
              <div key={route.email} className="border border-surface-border bg-surface-card p-6">
                <h3 className="text-lg font-semibold text-text-primary">{route.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{route.summary}</p>
                <p className="mt-4">
                  <a
                    href={`mailto:${route.email}`}
                    className="inline-flex min-h-11 items-center font-semibold text-xrp-accent-bright underline decoration-xrp-accent/30 underline-offset-4 hover:decoration-xrp-accent-bright"
                  >
                    {route.email}
                  </a>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{route.detail}</p>
              </div>
            ))}
          </div>

          <h2>Reporting a factual error</h2>
          <p>
            Corrections take priority over every other kind of message. The fastest route is the{" "}
            <Link href="/corrections">corrections form</Link>, which asks for the page URL, the claim
            you believe is wrong, and the correction you propose. Material corrections are logged
            publicly with the date and the substance of the change, and the underlying page carries a
            visible note where the change affects a reader&apos;s understanding. If you would rather
            write in prose, email the editorial desk with the same three details.
          </p>

          <h2>What to expect</h2>
          <p>
            One person reads both inboxes, so replies are measured in days rather than minutes. We
            answer questions about sourcing, methodology, and how a figure on a data page was
            derived. We do not answer questions that amount to personalized financial, legal, or tax
            advice, and we cannot recover funds, reverse a transaction, unlock an exchange account,
            or intervene with a wallet provider — nobody at AllAboutXRP has access to any of those
            systems. If a message asks for a seed phrase, a private key, or a payment, it did not
            come from us.
          </p>

          <h2>Press, licensing, and republication</h2>
          <p>
            Short quotations with a link back to the source page are welcome without asking. For
            bulk republication, translation, syndication, or use of our charts and tables in a
            commercial product, write to the general inbox and describe the scope. We do not sell
            editorial placement, sponsored guides, or ranking positions, so pitches offering payment
            for coverage or links are declined as a matter of policy — the reasoning is set out in
            our <Link href="/editorial">editorial standards</Link>.
          </p>

          <h2>Publisher and accountability</h2>
          <p>
            <Link href="/authors/jack-nelson">Jack Nelson</Link> is the accountable publisher for
            AllAboutXRP and is responsible for editorial standards, independence, disclosures, and
            corrections. Background on the publication&apos;s scope and independence policy lives on
            the <Link href="/about">about page</Link>. Data handling, including what we collect and
            how to make a privacy request, is documented in the{" "}
            <Link href="/privacy-policy">privacy policy</Link>.
          </p>

          <div className="not-prose mt-12 border border-surface-border bg-surface-card p-6">
            <p className="text-sm leading-relaxed text-text-secondary">
              AllAboutXRP is an independent publication and is not affiliated with Ripple Labs, any
              exchange, or any wallet provider. Nothing sent to or received from these inboxes
              constitutes financial, legal, or investment advice.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
