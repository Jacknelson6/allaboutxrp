import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP Escrow Live Tracker — Monthly Unlock Schedule & Data",
  description:
    "Track Ripple's XRP escrow releases in real-time. Monthly unlock schedule, historical release data, re-lock amounts, and impact analysis. Updated for 2026.",
  keywords: ["XRP escrow tracker", "Ripple escrow", "XRP monthly unlock", "1 billion XRP", "XRP supply schedule"],
  openGraph: {
    title: "XRP Escrow Live Tracker | AllAboutXRP",
    description: "Track Ripple's monthly 1B XRP escrow releases. Schedule, history, and market impact analysis.",
    url: "https://allaboutxrp.com/tools/escrow-tracker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Escrow Tracker | AllAboutXRP",
    description: "Live tracking of Ripple's XRP escrow releases and re-locks.",
  },
  alternates: { canonical: "https://allaboutxrp.com/tools/escrow-tracker" },
};

export default function EscrowTrackerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
