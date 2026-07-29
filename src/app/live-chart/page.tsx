import type { Metadata } from "next";
import LiveChartContent from "./LiveChartContent";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Live Chart — XRP Price, Globe & Market Data | AllAboutXRP",
  description:
    "Real-time XRP price chart, XRPL globe visualizer, buy/sell volume sentiment, and market stats — all in one view.",
  openGraph: {
    title: "Live Chart — XRP Price, Globe & Market Data | AllAboutXRP",
    description:
      "Real-time XRP price chart, XRPL globe visualizer, buy/sell volume sentiment, and market stats.",
    url: "https://allaboutxrp.com/live-chart",
    siteName: "AllAboutXRP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Chart — XRP Price, Globe & Market Data",
    description:
      "Real-time XRP price chart, XRPL globe visualizer, buy/sell volume sentiment, and market stats.",
  },
  alternates: { canonical: "https://allaboutxrp.com/live-chart" },
};

export default function LiveChartPage() {
  return (
    <main className="bg-black text-white">
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:py-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-xrp-accent">Market reference</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">XRP live price and market chart</h1>
          <p className="mt-4 max-w-3xl leading-7 text-white/60">
            View current XRP price data, market activity, and recent XRP Ledger transactions. Prices are third-party market data and may differ by venue; verify before making a financial decision.
          </p>
        </div>
      </header>
      <LiveChartContent />
    </main>
  );
}
