import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP Holders & Market Pulse | AllAboutXRP",
  description:
    "Explore XRP holder distribution, trading sentiment, fear & greed index, and holder tiers. Real-time data from the XRP Ledger.",
  openGraph: {
    title: "XRP Holders & Market Pulse",
    description:
      "XRP holder distribution, trading sentiment, and interactive tier calculator.",
    url: "https://allaboutxrp.com/richlist",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Holders & Market Pulse | AllAboutXRP",
    description: "XRP holder distribution, trading sentiment, fear & greed index, and tier calculator.",
  },
  alternates: { canonical: "https://allaboutxrp.com/richlist" },
};

export default function HoldersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
