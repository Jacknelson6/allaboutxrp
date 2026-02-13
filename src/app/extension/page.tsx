import { Metadata } from "next";
import ExtensionPageContent from "@/components/extension/ExtensionPageContent";

export const metadata: Metadata = {
  title: "Chrome Extension — Live XRP Trader Monitor",
  description:
    "Track XRP price, live charts, XRPL transaction globe, and real-time trades with the All About XRP Chrome extension. A persistent trading dashboard right in your browser.",
  openGraph: {
    title: "All About XRP Chrome Extension — Live XRP Trader Monitor",
    description:
      "Persistent XRP trading dashboard: live price, charts, XRPL globe, and real-time trade tape — all in a Chrome extension.",
    url: "https://allaboutxrp.com/extension",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All About XRP Chrome Extension",
    description:
      "Live XRP price, charts, XRPL globe, and trade tape in a persistent Chrome extension.",
  },
  alternates: { canonical: "https://allaboutxrp.com/extension" },
};

export default function ExtensionPage() {
  return <ExtensionPageContent />;
}
