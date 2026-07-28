import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusted XRP Sources and Research References",
  description:
    "A curated directory of official XRP Ledger documentation, regulatory sources, explorers, data providers, and established XRP research references.",
  alternates: { canonical: "https://allaboutxrp.com/learn/trusted-sources" },
  openGraph: {
    title: "Trusted XRP Sources | AllAboutXRP",
    description: "Official documentation, regulatory records, explorers, and research references for verifying XRP claims.",
    url: "https://allaboutxrp.com/learn/trusted-sources",
    type: "website",
  },
};

export default function TrustedSourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
