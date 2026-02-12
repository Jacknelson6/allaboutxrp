import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP ETF Tracker — Live AUM, Holdings & Daily Flows",
  description:
    "Track all XRP ETFs in one place — live AUM, XRP holdings, daily inflows/outflows, volume, and fund comparisons. Updated daily.",
  openGraph: {
    title: "XRP ETF Tracker — Live AUM, Holdings & Daily Flows | AllAboutXRP",
    description:
      "Track all XRP ETFs in one place — live AUM, XRP holdings, daily inflows/outflows, volume, and fund comparisons.",
    url: "https://allaboutxrp.com/etf",
  },
};

export default function ETFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
