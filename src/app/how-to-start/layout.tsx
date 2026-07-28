import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Start with XRP — Buy, Store & Verify Safely",
  description:
    "A risk-aware beginner checklist for researching exchanges, buying XRP, understanding custody, and securing an XRP wallet.",
  alternates: { canonical: "https://allaboutxrp.com/how-to-start" },
  openGraph: {
    title: "How to Start with XRP | AllAboutXRP",
    description: "A practical, risk-aware checklist for buying and securing XRP.",
    url: "https://allaboutxrp.com/how-to-start",
    type: "article",
  },
};

export default function HowToStartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
