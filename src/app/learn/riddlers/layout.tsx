import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP Riddlers: History, Claims, and Context",
  description:
    "A historical guide to XRP riddler accounts, their community impact, and how to separate documented facts from speculation.",
  alternates: { canonical: "https://allaboutxrp.com/learn/riddlers" },
  openGraph: {
    title: "XRP Riddlers Explained | AllAboutXRP",
    description: "History and context for XRP riddler accounts and community claims.",
    url: "https://allaboutxrp.com/learn/riddlers",
    type: "article",
  },
};

export default function RiddlersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
