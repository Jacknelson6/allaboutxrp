import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate XRP to AllAboutXRP",
  description:
    "Support AllAboutXRP with an XRP donation. Help keep this community resource free, independent, and ad-free.",
  openGraph: {
    title: "Donate XRP | AllAboutXRP",
    description: "Support AllAboutXRP with an XRP donation to keep this resource free and independent.",
    url: "https://allaboutxrp.com/donate",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Donate XRP | AllAboutXRP",
    description: "Support AllAboutXRP with an XRP donation.",
  },
  alternates: { canonical: "https://allaboutxrp.com/donate" },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
