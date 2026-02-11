import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP Profit Calculator — Calculate Your XRP ROI",
  description:
    "Free XRP profit calculator. Enter buy price, sell price, and amount to instantly calculate your profit/loss in USD and ROI percentage.",
  openGraph: {
    title: "XRP Profit Calculator | AllAboutXRP",
    description: "Calculate your XRP profit or loss instantly — free tool, no sign-up.",
    url: "https://allaboutxrp.com/tools/xrp-profit-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Profit Calculator | AllAboutXRP",
    description: "Calculate your XRP profit or loss instantly.",
  },
  alternates: { canonical: "https://allaboutxrp.com/tools/xrp-profit-calculator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
