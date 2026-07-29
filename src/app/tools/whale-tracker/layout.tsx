import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP Large Transaction Monitor | AllAboutXRP",
  description:
    "Review XRP payments above 1 million XRP from third-party ledger providers and verify each transaction in an explorer.",
  keywords: ["XRP whale tracker", "XRP large transactions", "XRP whale alert", "XRPL whale monitor", "XRP exchange flows"],
  openGraph: {
    title: "XRP Large Transaction Monitor | AllAboutXRP",
    description: "Review large XRP payments and verify each transaction hash in a ledger explorer.",
    url: "https://allaboutxrp.com/tools/whale-tracker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Whale Tracker | AllAboutXRP",
    description: "Third-party XRP transaction data with links for ledger verification.",
  },
  alternates: { canonical: "https://allaboutxrp.com/tools/whale-tracker" },
};

export default function WhaleTrackerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
