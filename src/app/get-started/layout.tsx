import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Buy XRP — Quick Start Guide | AllAboutXRP",
  description:
    "Quick-start guide to buying XRP. Choose an exchange, verify your identity, and secure your tokens. Simple steps for beginners.",
  openGraph: {
    title: "How to Buy XRP — Quick Start | AllAboutXRP",
    description: "Step-by-step guide to buying XRP for beginners.",
    url: "https://allaboutxrp.com/get-started",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy XRP | AllAboutXRP",
    description: "Quick-start guide to buying XRP cryptocurrency.",
  },
  alternates: { canonical: "https://allaboutxrp.com/get-started" },
};

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
