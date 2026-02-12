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
  return <LiveChartContent />;
}
