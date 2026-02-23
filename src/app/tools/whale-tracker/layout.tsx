import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP Whale Tracker — Live Large Transaction Monitor",
  description:
    "Track large XRP transactions in real-time. Monitor whale movements, exchange flows, and institutional activity on the XRP Ledger. Updated every 60 seconds.",
  keywords: ["XRP whale tracker", "XRP large transactions", "XRP whale alert", "XRPL whale monitor", "XRP exchange flows"],
  openGraph: {
    title: "XRP Whale Tracker — Live Large Transactions | AllAboutXRP",
    description: "Monitor XRP whale movements in real-time. Track transactions over 1M XRP, exchange flows, and institutional activity.",
    url: "https://allaboutxrp.com/tools/whale-tracker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Whale Tracker | AllAboutXRP",
    description: "Live monitoring of large XRP transactions on the XRPL.",
  },
  alternates: { canonical: "https://allaboutxrp.com/tools/whale-tracker" },
};

export default function WhaleTrackerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
