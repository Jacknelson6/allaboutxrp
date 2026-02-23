import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP Price Levels to Watch — Support & Resistance Analysis",
  description:
    "Key XRP price levels, support and resistance zones, and technical analysis. Updated regularly with current market conditions. Bookmark this page for quick reference.",
  keywords: ["XRP price levels", "XRP support resistance", "XRP technical analysis", "XRP price targets", "XRP key levels"],
  openGraph: {
    title: "XRP Price Levels to Watch | AllAboutXRP",
    description: "Key support and resistance levels for XRP. Updated technical analysis and price targets.",
    url: "https://allaboutxrp.com/tools/price-alerts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Price Levels to Watch | AllAboutXRP",
    description: "Key support/resistance and technical analysis for XRP.",
  },
  alternates: { canonical: "https://allaboutxrp.com/tools/price-alerts" },
};

export default function PriceAlertsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
