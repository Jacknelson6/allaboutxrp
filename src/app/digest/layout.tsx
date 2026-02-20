import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly XRP Digest — Market Analysis & News Recap",
  description:
    "Weekly XRP market digest with price analysis, regulatory updates, and ecosystem news. Stay informed with AllAboutXRP's curated weekly report.",
  openGraph: {
    title: "Weekly XRP Digest | AllAboutXRP",
    description: "Weekly XRP market digest — price analysis, regulatory updates, and ecosystem news.",
    url: "https://allaboutxrp.com/digest",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekly XRP Digest | AllAboutXRP",
    description: "Weekly XRP market analysis, regulatory updates, and ecosystem news.",
  },
  alternates: { canonical: "https://allaboutxrp.com/digest" },
};

export default function DigestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
