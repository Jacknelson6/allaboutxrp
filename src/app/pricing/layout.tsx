import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — AllAboutXRP Pro & Plus Plans",
  description:
    "Choose your AllAboutXRP plan. Get weekly digests, daily analysis, and premium XRP market insights.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Pricing | AllAboutXRP",
    description: "AllAboutXRP subscription plans — weekly digest, daily analysis, and more.",
    url: "https://allaboutxrp.com/pricing",
  },
  alternates: { canonical: "https://allaboutxrp.com/pricing" },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
