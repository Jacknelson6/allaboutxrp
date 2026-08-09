import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP News and Source-Led Analysis | AllAboutXRP",
  description:
    "Read source-led XRP news and original analysis with primary citations, clear update times, key takeaways, data tables, and practical context.",
  openGraph: {
    title: "XRP News and Source-Led Analysis | AllAboutXRP",
    description: "Source-led XRP reporting with primary citations and original analysis.",
    url: "https://allaboutxrp.com/news",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP News and Source-Led Analysis | AllAboutXRP",
    description: "Source-led XRP reporting with primary citations and original analysis.",
  },
  alternates: { canonical: "https://allaboutxrp.com/news" },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
