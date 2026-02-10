import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP People to Follow on X/Twitter | AllAboutXRP",
  description:
    "Curated list of the best XRP and Ripple accounts to follow on X/Twitter. Builders, analysts, media, and community voices in the XRP ecosystem.",
  openGraph: {
    title: "XRP People to Follow | AllAboutXRP",
    description: "Curated list of the best XRP accounts on X/Twitter — builders, analysts, community voices.",
    url: "https://allaboutxrp.com/people",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP People to Follow | AllAboutXRP",
    description: "Curated list of the best XRP and Ripple accounts on X/Twitter.",
  },
  alternates: { canonical: "https://allaboutxrp.com/people" },
};

export default function PeopleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
