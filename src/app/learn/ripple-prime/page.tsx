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

const title = "Ripple Prime Explained: XRP Trading and RLUSD Collateral";
const description =
  "Learn what Ripple's Hidden Road acquisition brought to Ripple Prime, how institutions can trade XRP, and what the deal does not prove about demand.";
const url = "https://allaboutxrp.com/learn/ripple-prime";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqItems = [
  {
    q: "What is Ripple Prime?",
    a: "Ripple Prime is Ripple’s institutional prime brokerage business, formerly Hidden Road. It provides clearing, financing, and brokerage services across digital assets and traditional markets.",
  },
  {
    q: "Is Hidden Road now Ripple Prime?",
    a: "Yes. Ripple confirmed the Hidden Road acquisition had closed and identified the business as Ripple Prime on October 24, 2025.",
  },
  {
    q: "Does Ripple Prime's XRP offering prove that clients hold XRP?",
    a: "The offering establishes access to XRP trading. Measuring client holdings requires separate XRP-specific disclosures; the availability of a trading service does not provide that measurement.",
  },
];

const sources = [
  {
    label: "Ripple's U.S. spot brokerage launch",
    href: "https://ripple.com/ripple-press/ripple-launches-digital-asset-spot-prime-brokerage-for-the-united-states-market/",
  },
  {
    label: "Ripple's acquisition completion announcement",
    href: "https://ripple.com/insights/ripple-closes-hidden-road-acquisition/",
  },
];

const schemas = [
  buildArticleSchema({
    headline: title,
    description,
    url,
    datePublished: "2026-02-12",
    dateModified: "2026-09-08",
    citations: sources.map((source) => source.href),
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "Ripple Prime" },
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
          title="Ripple Prime:"
          titleAccent="XRP and RLUSD"
          subtitle={description}
          breadcrumbLabel="Ripple Prime"
        >
          <div className="mt-5">
            <AuthorByline date="2026-02-12" modified="2026-09-08" />
            <LastUpdated date="September 8, 2026" />
          </div>
        </LearnHero>
        <TLDRBox>
          <p>
            {
              "U.S. institutional clients can trade XRP through Ripple Prime's over-the-counter spot brokerage service, announced November 3, 2025. The service provides access to XRP alongside other digital assets. Its availability does not establish how much XRP clients hold or whether their trades settle on the XRP Ledger. "
            }
            <a
              href="https://ripple.com/ripple-press/ripple-launches-digital-asset-spot-prime-brokerage-for-the-united-states-market/"
              className="text-xrp-accent underline decoration-xrp-accent/30"
            >
              {"Source: Ripple's U.S. spot brokerage launch"}
            </a>
            {"."}
          </p>
        </TLDRBox>
        <div className="cv-auto mt-14 space-y-14">
          <div className="space-y-5">
            <p className="text-text-secondary leading-relaxed">
              {
                "Ripple confirmed the acquisition had closed on October 24, 2025, and renamed Hidden Road Ripple Prime. The acquired business provides services including clearing, financing, and prime brokerage across multiple markets. Prime brokerage helps professional trading firms manage financing and trading relationships. "
              }
              <a
                href="https://ripple.com/insights/ripple-closes-hidden-road-acquisition/"
                className="text-xrp-accent underline decoration-xrp-accent/30"
              >
                {"Source: Ripple's acquisition completion announcement"}
              </a>
              {"."}
            </p>
          </div>
          <RevealSection id="services">
            <h2 className="text-2xl font-bold text-text-primary">
              What does Ripple Prime do?
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "Ripple Prime provides clearing, financing, and prime brokerage across foreign exchange, digital assets, derivatives, swaps, and fixed income. These services help institutional clients manage trading relationships and financing across markets. "
                }
                <a
                  href="https://ripple.com/insights/ripple-closes-hidden-road-acquisition/"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Source: Ripple acquisition completion announcement"}
                </a>
                {"."}
              </p>
            </div>
          </RevealSection>
          <RevealSection id="what-can-institutions-do-with-xrp-through-ripple-prime">
            <h2 className="text-2xl font-bold text-text-primary">
              {"What can institutions do with XRP through Ripple Prime?"}
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "On November 3, 2025, Ripple announced U.S. digital asset spot prime brokerage capabilities. Its announcement explicitly included XRP and RLUSD among the assets available for institutional over-the-counter spot transactions. OTC transactions are trades arranged outside a public exchange order book."
                }
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "Ripple also said eligible clients could cross-margin spot positions with other parts of their digital asset portfolios. This lets positions be assessed together for margin purposes, which can affect the collateral a trading firm needs. "
                }
                <a
                  href="https://ripple.com/ripple-press/ripple-launches-digital-asset-spot-prime-brokerage-for-the-united-states-market/"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Source: Ripple's U.S. spot brokerage launch"}
                </a>
                {"."}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "The practical significance is that XRP can sit inside an institutional trading workflow alongside other products. Availability alone does not tell us how frequently clients trade it, how much they hold, or whether their transactions settle on the XRP Ledger."
                }
              </p>
            </div>
          </RevealSection>
          <RevealSection id="how-do-xrp-and-rlusd-differ-in-ripple-prime">
            <h2 className="text-2xl font-bold text-text-primary">
              {"How do XRP and RLUSD differ in Ripple Prime?"}
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "Ripple's closing announcement said RLUSD was already being used as collateral for some prime brokerage products. That is a specific use of Ripple's dollar stablecoin. It should not be reported as if the collateral were XRP. "
                }
                <a
                  href="https://ripple.com/insights/ripple-closes-hidden-road-acquisition/"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Source: Ripple's acquisition completion announcement"}
                </a>
                {"."}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "This distinction helps readers evaluate future updates. A report about RLUSD balances supports a conclusion about stablecoin usage. A report about XRP trading supports a conclusion about XRP market activity. Evidence of settlement on the XRP Ledger would answer another question."
                }
              </p>
              <DataTable
                headers={[
                  "Reported development",
                  "What it establishes",
                  "What it leaves unanswered",
                ]}
                rows={[
                  [
                    "XRP included in the U.S. spot offering",
                    "Institutional clients have a route to trade XRP",
                    "XRP-specific trading volume",
                  ],
                  [
                    "RLUSD used as collateral",
                    "A documented stablecoin use case",
                    "Whether clients need XRP for that workflow",
                  ],
                  [
                    "Hidden Road acquisition completed",
                    "Ripple owns the acquired brokerage business",
                    "How much of its activity settles on XRPL",
                  ],
                ]}
              />
              <p className="text-text-secondary leading-relaxed">
                {"Sources: "}
                <a
                  href="https://ripple.com/ripple-press/ripple-launches-digital-asset-spot-prime-brokerage-for-the-united-states-market/"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"U.S. spot offering"}
                </a>
                {" and "}
                <a
                  href="https://ripple.com/insights/ripple-closes-hidden-road-acquisition/"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"acquisition completion"}
                </a>
                {
                  ". The unanswered questions are our interpretation of the limits of these announcements."
                }
              </p>
            </div>
          </RevealSection>
          <RevealSection id="what-should-xrp-readers-watch-next">
            <h2 className="text-2xl font-bold text-text-primary">
              {"What should XRP readers watch next?"}
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "Useful disclosures would include XRP-specific trading activity, named customers using XRP in production, and documented settlement processes. Each would explain more than a headline about the size of Ripple Prime's overall business."
                }
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "The acquisition expands the services Ripple can offer institutions. Its significance for XRP will become clearer as reporting identifies which assets customers actually use and how they use them."
                }
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "For a broader view of Ripple's business relationships, explore our "
                }
                <Link
                  href="/learn/partnerships"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Ripple partnerships guide"}
                </Link>
                {"."}
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
                  href: "/learn/ripple-xrp-technology-updates-2026-explained",
                  label: "Ripple Technology Updates",
                  desc: "Product releases and network activation explained",
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
