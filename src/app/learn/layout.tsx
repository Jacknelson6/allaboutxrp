import type { Metadata } from "next";
import NoIndexHead from "@/components/learn/NoIndexHead";

export const metadata: Metadata = {
  title: "XRP Learning Center — Source-Led XRP Guides",
  description:
    "Learn XRP from first principles with source-led guides to the XRP Ledger, Ripple, wallets, supply, escrow, risks, and practical use.",
  openGraph: {
    title: "XRP Learning Center | AllAboutXRP",
    description: "Structured, source-led guides to XRP, the XRP Ledger, Ripple, custody, and risk.",
    url: "https://allaboutxrp.com/learn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Learning Center | AllAboutXRP",
    description:
      "Structured, source-led guides to XRP, the XRP Ledger, Ripple, custody, and risk.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn" },
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NoIndexHead />
      <main id="main-content">
        {children}
      </main>
    </>
  );
}
