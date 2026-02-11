import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP People & Ecosystem — Holders, Leadership, Partnerships | AllAboutXRP",
  description:
    "Complete guide to the XRP ecosystem: holder distribution & tier calculator, trusted sources, Ripple leadership, partnerships, acquisitions, escrow system, and the legendary XRP riddlers.",
  openGraph: {
    title: "XRP People & Ecosystem | AllAboutXRP",
    description: "Holders, trusted voices, Ripple leadership, partnerships, acquisitions, escrow, and riddlers — everything about who's behind XRP.",
    url: "https://allaboutxrp.com/people",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP People & Ecosystem | AllAboutXRP",
    description: "Complete guide to the XRP ecosystem — holders, leadership, partnerships, acquisitions, escrow, and riddlers.",
  },
  alternates: { canonical: "https://allaboutxrp.com/people" },
};

export default function PeopleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
