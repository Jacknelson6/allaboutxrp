import type { Metadata } from "next";
import LiveChartContent from "./LiveChartContent";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Live XRP Price and Market Data | AllAboutXRP",
  description:
    "Live XRP price, XRP Ledger transactions, holder distribution, whale activity, escrow research, calculators, and venue data.",
  openGraph: {
    title: "Live XRP Price and Market Data | AllAboutXRP",
    description:
      "Live XRP price, XRP Ledger transactions, holder distribution, whale activity, escrow research, calculators, and venue data.",
    url: "https://allaboutxrp.com/live-chart",
    siteName: "AllAboutXRP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live XRP Price and Market Data",
    description:
      "Live XRP price, XRP Ledger transactions, holder distribution, whale activity, escrow research, calculators, and venue data.",
  },
  alternates: { canonical: "https://allaboutxrp.com/live-chart" },
};

export default function LiveChartPage() {
  return (
    <main id="main-content" className="bg-surface-primary text-text-primary">
      <header className="border-b border-surface-border">
        <div className="site-container py-16 sm:py-24">
          <p className="editorial-kicker">LIVE DATA</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(3.25rem,7vw,4.75rem)] leading-[0.98]">The XRP Ledger, in motion.</h1>
          <p className="mt-5 max-w-3xl leading-7 text-text-secondary">
            Follow live XRP Ledger payments, current market data, holder concentration, and the research tools that put each signal in context.
          </p>
        </div>
      </header>
      <LiveChartContent />
    </main>
  );
}
