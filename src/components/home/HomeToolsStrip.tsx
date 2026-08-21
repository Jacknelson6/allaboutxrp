import { Card, SectionHeader } from "@/components/ui";

const tools = [
  {
    href: "/live-chart",
    eyebrow: "Live market",
    title: "XRP live chart",
    description: "Price, ranges, and volume with the feed and window stated on the page.",
  },
  {
    href: "/holders",
    eyebrow: "Ledger data",
    title: "Holder distribution",
    description: "Major balances, known accounts, and the concentration methodology behind them.",
  },
  {
    href: "/tools/escrow-tracker",
    eyebrow: "Schedule reference",
    title: "XRP escrow tracker",
    description: "The monthly schedule alongside the escrow events confirmed on the ledger.",
  },
  {
    href: "/tools/price-alerts",
    eyebrow: "Market levels",
    title: "XRP price levels",
    description: "Current support and resistance areas shown next to the latest price.",
  },
  {
    href: "/tools/xrp-profit-calculator",
    eyebrow: "Calculator",
    title: "XRP profit calculator",
    description: "Model profit, loss, and return from an entry price, exit price, and amount.",
  },
  {
    href: "/tools/xrp-fee-calculator",
    eyebrow: "Calculator",
    title: "Transaction fee calculator",
    description: "Estimate XRP Ledger fee costs across one transaction or a larger batch.",
  },
];

/**
 * The tools strip: the indexed instruments as compact data cards, so a reader
 * can move from the market band straight into checking a figure themselves.
 */
export default function HomeToolsStrip() {
  return (
    <section className="border-b border-hairline bg-paper" aria-labelledby="tools-heading">
      <div className="site-container py-12 sm:py-16">
        <SectionHeader
          eyebrow="Tools / live instruments"
          title={<span id="tools-heading">Check the numbers yourself.</span>}
          href="/tools"
          linkLabel="View all tools"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Card
              key={tool.href}
              href={tool.href}
              variant="data"
              eyebrow={tool.eyebrow}
              title={tool.title}
            >
              <p className="text-sm leading-6 text-text-secondary">{tool.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
