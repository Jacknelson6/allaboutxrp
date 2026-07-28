import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ripple Acquisitions and Company Expansion",
  description:
    "Track Ripple acquisitions and what each deal adds to its payments, custody, stablecoin, and institutional infrastructure.",
  alternates: { canonical: "https://allaboutxrp.com/learn/acquisitions" },
  openGraph: {
    title: "Ripple Acquisitions | AllAboutXRP",
    description: "A sourced guide to Ripple acquisitions and company expansion.",
    url: "https://allaboutxrp.com/learn/acquisitions",
    type: "article",
  },
};

export default function AcquisitionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
