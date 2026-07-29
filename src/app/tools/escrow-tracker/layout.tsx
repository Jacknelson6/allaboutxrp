import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP Escrow Schedule Reference | AllAboutXRP",
  description:
    "Understand Ripple's published XRP escrow schedule, what an escrow finish means, and why a monthly unlock is not the same as a market sale.",
  keywords: ["XRP escrow tracker", "Ripple escrow", "XRP monthly unlock", "1 billion XRP", "XRP supply schedule"],
  openGraph: {
    title: "XRP Escrow Schedule Reference | AllAboutXRP",
    description: "A source-led explanation of Ripple's XRP escrow schedule and the limits of unlock data.",
    url: "https://allaboutxrp.com/tools/escrow-tracker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Escrow Schedule Reference | AllAboutXRP",
    description: "How Ripple's escrow schedule works and what ledger data can—and cannot—show.",
  },
  alternates: { canonical: "https://allaboutxrp.com/tools/escrow-tracker" },
};

export default function EscrowTrackerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
