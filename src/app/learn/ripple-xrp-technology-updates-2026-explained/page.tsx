import { Metadata } from "next";
import Link from "next/link";
import AuthorByline from "@/components/shared/AuthorByline";
import SEOSchema from "@/components/shared/SEOSchema";
import SourceList from "@/components/shared/SourceList";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/utils/seo";
import {
  LearnHero,
  TLDRBox,
  LastUpdated,
  RevealSection,
  DataTable,
  FAQAccordion,
  LearnLinkGrid,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

const title = "Ripple Technology vs. XRP Ledger Upgrades: 2026 Guide";
const description =
  "Understand recent XRP Ledger and Ripple Custody updates, including XRPL 3.3.0, and why a software release does not confirm mainnet activation.";
const url =
  "https://allaboutxrp.com/learn/ripple-xrp-technology-updates-2026-explained";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqItems = [
  {
    q: "Where can I check whether an XRP Ledger amendment is enabled?\n\nCheck the amendment's entry in the [official Known Amendments reference](https://xrpl.org/resources/known-amendments). A release note describing support for an amendment is different from confirmation that it is enabled on mainnet.\n\n### Does a Ripple Custody release upgrade the XRP Ledger?",
    a: "Ripple Custody and XRP Ledger server software have separate release tracks. A custody product version does not, by itself, activate an XRP Ledger protocol amendment. Sources: Custody release notes, XRPL amendment process.",
  },
];

const sources = [
  {
    label: "Ripple Custody release notes",
    href: "https://docs.ripple.com/products/custody/support/change-history/v140",
  },
  {
    label: "XRPL amendment documentation",
    href: "https://xrpl.org/docs/concepts/networks-and-servers/amendments",
  },
  {
    label: "XRPL 3.3.0 release notes",
    href: "https://xrpl.org/blog/2026/xrpld-3.3.0",
  },
  {
    label: "official Known Amendments reference",
    href: "https://xrpl.org/resources/known-amendments",
  },
];

const schemas = [
  buildArticleSchema({
    headline: title,
    description,
    url,
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    citations: sources.map((source) => source.href),
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Ripple Technology Updates" },
  ]),
  buildFAQSchema(
    faqItems.map((item) => ({ question: item.q, answer: item.a })),
  ),
];

export default function GuidePage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="Ripple Technology"
          titleAccent="and XRPL Upgrades"
          subtitle={description}
          breadcrumbLabel="Ripple Technology Updates"
        >
          <div className="mt-5">
            <AuthorByline date="2026-09-08" modified="2026-09-08" />
            <LastUpdated date="September 8, 2026" />
          </div>
        </LearnHero>
        <TLDRBox>
          <p>
            {
              "Ripple product updates and XRP Ledger upgrades affect different systems. Ripple Custody updates change a commercial digital asset management product. XRP Ledger releases update network server software and may introduce amendments that require separate activation. A product launch or software release alone does not establish that a network feature is enabled. "
            }
            <a
              href="https://docs.ripple.com/products/custody/support/change-history/v140"
              className="text-xrp-accent underline decoration-xrp-accent/30"
            >
              {"Sources: Ripple Custody release notes"}
            </a>
            {", "}
            <a
              href="https://xrpl.org/docs/concepts/networks-and-servers/amendments"
              className="text-xrp-accent underline decoration-xrp-accent/30"
            >
              {"XRPL amendment documentation"}
            </a>
            {"."}
          </p>
        </TLDRBox>
        <div className="cv-auto mt-14 space-y-14">
          <div className="space-y-5">
            <p className="text-text-secondary leading-relaxed">
              {
                "Two examples are the August 6, 2026 release of XRP Ledger server software version 3.3.0 and Ripple Custody version 1.40, whose phased SaaS deployment began August 17. These are separate release tracks. "
              }
              <a
                href="https://xrpl.org/blog/2026/xrpld-3.3.0"
                className="text-xrp-accent underline decoration-xrp-accent/30"
              >
                {"Sources: XRPL 3.3.0 release notes"}
              </a>
              {", "}
              <a
                href="https://docs.ripple.com/products/custody/support/change-history/v140"
                className="text-xrp-accent underline decoration-xrp-accent/30"
              >
                {"Ripple Custody 1.40 release notes"}
              </a>
              {"."}
            </p>
            <DataTable
              headers={[
                "Update",
                "System affected",
                "Date stated in the source",
                "What the date means",
              ]}
              rows={[
                [
                  "XRPL 3.3.0",
                  "XRP Ledger server software",
                  "August 6, 2026",
                  "Software release; included amendments have separate activation requirements",
                ],
                [
                  "Ripple Custody 1.40",
                  "Ripple's custody product",
                  "August 17, 2026",
                  "Start of phased deployment across hosted environments",
                ],
              ]}
            />
            <p className="text-text-secondary leading-relaxed">
              {"Sources: "}
              <a
                href="https://xrpl.org/blog/2026/xrpld-3.3.0"
                className="text-xrp-accent underline decoration-xrp-accent/30"
              >
                {"XRPL 3.3.0"}
              </a>
              {" and "}
              <a
                href="https://docs.ripple.com/products/custody/support/change-history/v140"
                className="text-xrp-accent underline decoration-xrp-accent/30"
              >
                {"Ripple Custody 1.40"}
              </a>
              {
                ". These are selected releases, not a complete list of 2026 updates."
              }
            </p>
          </div>
          <RevealSection id="what-did-xrpl-3-3-0-introduce">
            <h2 className="text-2xl font-bold text-text-primary">
              {"What did XRPL 3.3.0 introduce?"}
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "The release included amendments for atomic batch transactions, confidential Multi-Purpose Token transfers, configurable token properties, account permission delegation, and reserve and transaction sponsoring. It also contained bug fixes and build improvements."
                }
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "These features address different needs. Batch transactions concern coordinating multiple operations. Permission delegation concerns authorizing another account to perform specified actions. Sponsoring concerns covering reserves and transaction costs. Confidential transfers concern Multi-Purpose Tokens, so that feature should not be described as blanket privacy for every XRP transfer. "
                }
                <a
                  href="https://xrpl.org/blog/2026/xrpld-3.3.0"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Source: XRPL 3.3.0 release notes"}
                </a>
                {"."}
              </p>
            </div>
          </RevealSection>
          <RevealSection id="does-inclusion-in-a-release-mean-a-feature-is-live">
            <h2 className="text-2xl font-bold text-text-primary">
              {"Does inclusion in a release mean a feature is live?"}
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "No. Software support and network activation are separate milestones."
                }
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "The XRP Ledger uses an amendment process for changes affecting transaction processing. Amendments require sustained validator support over a two-week period before activation. A release announcement therefore does not establish that every included amendment is enabled on mainnet. "
                }
                <a
                  href="https://xrpl.org/docs/concepts/networks-and-servers/amendments"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Source: XRPL amendment documentation"}
                </a>
                {"."}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "Readers should check the status of the specific amendment in the "
                }
                <a
                  href="https://xrpl.org/resources/known-amendments"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"official Known Amendments reference"}
                </a>
                {
                  ". This article describes release contents and does not assert current activation for the listed features."
                }
              </p>
            </div>
          </RevealSection>
          <RevealSection id="where-do-ripple-s-product-updates-fit">
            <h2 className="text-2xl font-bold text-text-primary">
              {"Where do Ripple's product updates fit?"}
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "Ripple Custody has its own versions and deployment schedule. Its version 1.40 documentation describes a phased rollout across hosted environments, illustrating why a product release date and availability in a particular customer environment can differ. "
                }
                <a
                  href="https://docs.ripple.com/products/custody/support/change-history/v140"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Source: Ripple Custody 1.40 release notes"}
                </a>
                {"."}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "When assessing any technology headline, identify the system, the capability, and its deployment status. Then ask whether there is evidence of customer use. That sequence makes it easier to distinguish engineering progress from adoption and to connect an update to something a user or institution can actually do."
                }
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "For the organizations involved in the wider ecosystem, see our "
                }
                <Link
                  href="/learn/partnerships"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Ripple partnerships guide"}
                </Link>
                {"."}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "For the release-specific announcement and its status at publication, read our "
                }
                <Link
                  href="/news/xrp-ledger-3-3-0-amendments-not-live-yet"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"August 2026 report on XRPL 3.3.0"}
                </Link>
                {
                  ". That dated report should not be used as a current amendment-status check."
                }
              </p>
            </div>
          </RevealSection>
          <RevealSection id="faq">
            <h2 className="mb-5 text-2xl font-bold text-text-primary">
              Frequently asked questions
            </h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>
          <RevealSection>
            <h2 className="text-2xl font-bold text-text-primary">
              Continue learning
            </h2>
            <LearnLinkGrid
              links={[
                {
                  href: "/learn/ripple-prime",
                  label: "Ripple Prime",
                  desc: "Institutional trading, collateral, and XRP evidence",
                },
                {
                  href: "/learn/ripple-acquisitions-xrp-demand",
                  label: "Ripple Acquisitions and XRP Demand",
                  desc: "How to evaluate the link to XRP usage",
                },
                {
                  href: "/learn/acquisitions",
                  label: "Ripple acquisitions",
                  desc: "Deal history and company expansion",
                },
                {
                  href: "/learn/partnerships",
                  label: "Ripple partnerships",
                  desc: "Relationships and direct XRP evidence",
                },
              ]}
            />
          </RevealSection>
        </div>
        <SourceList sources={sources} />
        <p className="mt-6 text-sm leading-relaxed text-text-secondary">
          Sourcing: factual reporting uses the linked Ripple announcements and
          XRP Ledger documentation. Interpretations of what those sources
          establish are editorial analysis. Dates identify the cited events and
          releases, not a claim that every announced integration is live.
        </p>
      </div>
    </>
  );
}
