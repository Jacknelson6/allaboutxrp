import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP News — Latest Updates & Community Feed",
  description:
    "Stay updated with the latest XRP and Ripple news. Daily recaps, community updates, and breaking stories from the XRP ecosystem.",
  openGraph: {
    title: "XRP News Feed | AllAboutXRP",
    description: "Latest XRP news, daily recaps, and community updates from the XRP ecosystem.",
    url: "https://allaboutxrp.com/news",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP News Feed | AllAboutXRP",
    description: "Latest XRP and Ripple news, daily recaps, and ecosystem updates.",
  },
  alternates: { canonical: "https://allaboutxrp.com/news" },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
