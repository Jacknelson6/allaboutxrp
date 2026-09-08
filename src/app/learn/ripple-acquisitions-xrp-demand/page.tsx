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

const title = "Do Ripple Acquisitions Increase XRP Demand? What to Watch";
const description =
  "Explore how Ripple acquisitions could connect to XRP usage, why business growth is different from token demand, and which adoption signals matter.";
const url = "https://allaboutxrp.com/learn/ripple-acquisitions-xrp-demand";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqItems = [
  {
    q: "Does holding XRP give me ownership of Ripple's acquisitions?",
    a: "No. XRP is a digital asset, not an equity interest in Ripple. Holding XRP does not give the holder ownership of companies Ripple buys.",
  },
  {
    q: "Is RLUSD activity the same as XRP demand?",
    a: "No. RLUSD activity measures use of a separate asset. To connect a particular RLUSD workflow to XRP demand, identify whether it uses XRP and in what capacity. An RLUSD balance alone does not supply that information.",
  },
];

const sources = [
  {
    label: "Ripple's infrastructure strategy update",
    href: "https://ripple.com/insights/building-the-one-stop-shop-for-digital-asset-infrastructure/",
  },
  {
    label: "Ripple Treasury's Solvexia announcement",
    href: "https://treasury.ripple.com/news/gtreasury-acquires-solvexia-reconciliation-and-regulatory-reporting",
  },
  {
    label: "Ripple's Palisade acquisition announcement",
    href: "https://ripple.com/ripple-press/ripple-acquires-palisade-to-offer-comprehensive-digital-asset-custody-solution/",
  },
  {
    label: "XRPL transaction cost documentation",
    href: "https://xrpl.org/docs/concepts/transactions/transaction-cost",
  },
  {
    label: "Ripple's XRP overview",
    href: "https://ripple.com/xrp/",
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
    { name: "Ripple Acquisitions and XRP Demand" },
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
          title="Ripple Acquisitions"
          titleAccent="and XRP Demand"
          subtitle={description}
          breadcrumbLabel="Ripple Acquisitions and XRP Demand"
        >
          <div className="mt-5">
            <AuthorByline date="2026-09-08" modified="2026-09-08" />
            <LastUpdated date="September 8, 2026" />
          </div>
        </LearnHero>
        <TLDRBox>
          <p>
            {
              "Ripple acquisitions do not automatically increase XRP demand. An acquired business may offer services involving XRP, stablecoins, or other assets. To establish a direct connection to XRP usage, look for a documented customer workflow that uses XRP and measurements of that activity, rather than the acquisition's price or the business's total volume."
            }
          </p>
        </TLDRBox>
        <div className="cv-auto mt-14 space-y-14">
          <div className="space-y-5">
            <p className="text-text-secondary leading-relaxed">
              {
                "Ripple has described an expanded offering that brings together treasury management, payments, custody, and institutional trading. Its December 2025 strategy update confirmed the closing of the $1 billion GTreasury acquisition and described how the acquired treasury platform could connect enterprise customers with digital asset infrastructure. "
              }
              <a
                href="https://ripple.com/insights/building-the-one-stop-shop-for-digital-asset-infrastructure/"
                className="text-xrp-accent underline decoration-xrp-accent/30"
              >
                {"Source: Ripple's infrastructure strategy update"}
              </a>
              {"."}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {
                "That creates several possible paths to adoption. Each needs to be evaluated on its own evidence."
              }
            </p>
          </div>
          <RevealSection id="does-ripple-s-treasury-expansion-require-customers-to-use-xrp">
            <h2 className="text-2xl font-bold text-text-primary">
              {"Does Ripple's treasury expansion require customers to use XRP?"}
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "Treasury teams manage cash, payments, and financial exposures. Giving them access to digital asset services can make those services easier to consider, but access does not establish which asset they will choose."
                }
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "A related example is Ripple Treasury's January 6, 2026 announcement that it acquired Solvexia, a financial automation, data management, and analytics provider. The announcement describes capabilities such as reconciliation and regulatory reporting. Those are business software functions, not evidence by themselves of XRP purchases. "
                }
                <a
                  href="https://treasury.ripple.com/news/gtreasury-acquires-solvexia-reconciliation-and-regulatory-reporting"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Source: Ripple Treasury's Solvexia announcement"}
                </a>
                {"."}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "The useful follow-up is whether a customer subsequently adopts a workflow that uses XRP, and whether the provider discloses how that workflow operates."
                }
              </p>
            </div>
          </RevealSection>
          <RevealSection id="how-could-custody-acquisitions-connect-to-xrp-holdings">
            <h2 className="text-2xl font-bold text-text-primary">
              {"How could custody acquisitions connect to XRP holdings?"}
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "Ripple announced its acquisition of wallet and custody provider Palisade on November 3, 2025. The deal expanded its digital asset custody offering. "
                }
                <a
                  href="https://ripple.com/ripple-press/ripple-acquires-palisade-to-offer-comprehensive-digital-asset-custody-solution/"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Source: Ripple's Palisade acquisition announcement"}
                </a>
                {"."}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "Custody infrastructure can support customers that want to hold digital assets. To evaluate the XRP connection, readers still need asset-specific information. A new custody customer, an increase in assets under custody, and an increase in XRP holdings are different disclosures."
                }
              </p>
            </div>
          </RevealSection>
          <RevealSection id="does-xrp-ledger-transaction-activity-consume-xrp">
            <h2 className="text-2xl font-bold text-text-primary">
              {"Does XRP Ledger transaction activity consume XRP?"}
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "The XRP Ledger charges transaction costs in XRP, and the XRP used for those costs is destroyed. That provides a direct connection between fee-paying ledger transactions and XRP consumption. "
                }
                <a
                  href="https://xrpl.org/docs/concepts/transactions/transaction-cost"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Source: XRPL transaction cost documentation"}
                </a>
                {"."}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "It does not mean that the full value of every asset transferred becomes an XRP purchase. A token transfer's face value and the XRP spent on its transaction fee measure different things."
                }
              </p>
            </div>
          </RevealSection>
          <RevealSection id="which-measurements-show-xrp-usage">
            <h2 className="text-2xl font-bold text-text-primary">
              {"Which measurements show XRP usage?"}
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "Different measurements answer different questions. Our evidence framework separates business reach, asset holdings, and transaction activity so that a broad adoption claim can be assessed against the specific disclosure supporting it."
                }
              </p>
              <DataTable
                headers={[
                  "Measurement",
                  "What it can show",
                  "What it cannot establish alone",
                ]}
                rows={[
                  [
                    "Acquisition price",
                    "The disclosed value of a deal",
                    "Customer demand for XRP",
                  ],
                  [
                    "Total assets under custody",
                    "The scale of reported custody holdings",
                    "How much of those holdings is XRP",
                  ],
                  [
                    "XRP-specific customer balances",
                    "XRP held within the disclosed scope",
                    "How frequently that XRP is used",
                  ],
                  [
                    "XRP trading volume",
                    "Trading activity within the reported market",
                    "Net accumulation or future price performance",
                  ],
                  [
                    "XRP spent on ledger transaction costs",
                    "XRP consumed by those fees",
                    "XRP purchases equal to the value transferred",
                  ],
                ]}
              />
              <p className="text-text-secondary leading-relaxed">
                {"The fee distinction follows the "}
                <a
                  href="https://xrpl.org/docs/concepts/transactions/transaction-cost"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"XRPL transaction cost documentation"}
                </a>
                {
                  ". The broader framework is editorial analysis, not a claim about undisclosed Ripple customer activity."
                }
              </p>
            </div>
          </RevealSection>
          <RevealSection id="which-signals-would-make-the-connection-clearer">
            <h2 className="text-2xl font-bold text-text-primary">
              {"Which signals would make the connection clearer?"}
            </h2>
            <div className="mt-5 space-y-5">
              <p className="text-text-secondary leading-relaxed">
                {
                  "Look for named production deployments that identify XRP's role, asset-specific trading or settlement figures, and disclosures separating XRP from stablecoins and other tokens. Recurring activity is more informative about sustained use than a pilot announcement alone."
                }
              </p>
              <p className="text-text-secondary leading-relaxed">
                {
                  "Our assessment is that Ripple's expanding product range gives it more opportunities to introduce digital asset services to customers. Whether those opportunities translate into sustained XRP demand is a separate question, best answered with evidence of actual usage."
                }
              </p>
              <p className="text-text-secondary leading-relaxed">
                {"Explore our "}
                <Link
                  href="/learn/partnerships"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Ripple partnerships guide"}
                </Link>
                {" for more context on the company's business relationships."}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {"For the deal history behind these examples, see the "}
                <Link
                  href="/learn/acquisitions"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Ripple acquisitions overview"}
                </Link>
                {". For the institutional trading example, see our "}
                <Link
                  href="/learn/ripple-prime"
                  className="text-xrp-accent underline decoration-xrp-accent/30"
                >
                  {"Ripple Prime guide"}
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
                  href: "/learn/ripple-prime",
                  label: "Ripple Prime",
                  desc: "Institutional trading, collateral, and XRP evidence",
                },
                {
                  href: "/learn/ripple-xrp-technology-updates-2026-explained",
                  label: "Ripple Technology Updates",
                  desc: "Product releases and network activation explained",
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
