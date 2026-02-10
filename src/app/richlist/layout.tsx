import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP Rich List & Holder Tiers | AllAboutXRP",
  description:
    "Explore the XRP rich list, holder distribution, and find your XRP holder tier. Interactive calculator from Shrimp to Humpback Whale.",
  openGraph: {
    title: "XRP Rich List & Holder Tiers",
    description:
      "Discover where you rank among XRP holders. Interactive tier calculator, whale tracking, and distribution data.",
    url: "https://allaboutxrp.com/richlist",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Rich List & Holder Tiers | AllAboutXRP",
    description: "XRP rich list, whale tracking, holder distribution, and interactive tier calculator.",
  },
  alternates: { canonical: "https://allaboutxrp.com/richlist" },
};

export default function RichListLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
