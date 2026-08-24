import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP Escrow Tracker: Monthly Unlock Schedule & Verification",
  description:
    "Verify Ripple's monthly XRP escrow schedule, understand the 1 billion XRP release structure, and check actual unlocks on the XRP Ledger.",
  keywords: ["XRP escrow tracker", "Ripple escrow", "XRP monthly unlock", "1 billion XRP", "XRP supply schedule"],
  openGraph: {
    title: "XRP Escrow Tracker: Monthly Unlock Schedule",
    description: "A source-led XRP escrow schedule with ledger verification links and clear limits on unlock data.",
    url: "https://allaboutxrp.com/tools/escrow-tracker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Escrow Tracker: Monthly Unlock Schedule",
    description: "How Ripple's escrow schedule works and what ledger data can and cannot show.",
  },
  alternates: { canonical: "https://allaboutxrp.com/tools/escrow-tracker" },
  robots: { index: true, follow: true },
};

export default function EscrowTrackerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
