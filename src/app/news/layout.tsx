import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP News and Recap Archive | AllAboutXRP",
  description:
    "Browse dated XRP and Ripple news recaps with links to original reporting. Verify time-sensitive claims with the cited source.",
  openGraph: {
    title: "XRP News and Recap Archive | AllAboutXRP",
    description: "Dated XRP and Ripple news recaps with original-source links.",
    url: "https://allaboutxrp.com/news",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP News and Recap Archive | AllAboutXRP",
    description: "Dated XRP and Ripple news recaps with original-source links.",
  },
  alternates: { canonical: "https://allaboutxrp.com/news" },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
