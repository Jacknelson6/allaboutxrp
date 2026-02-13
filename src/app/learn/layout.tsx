import type { Metadata } from "next";
import NewsletterSignup from "@/components/shared/NewsletterSignup";

export const metadata: Metadata = {
  title: "What is XRP? Complete Guide to XRP & the XRP Ledger",
  description:
    "Learn everything about XRP — what it is, who created it, how it works, its history, and why it matters.",
  openGraph: {
    title: "What is XRP? Complete Guide | AllAboutXRP",
    description: "Everything you need to know about XRP.",
    url: "https://allaboutxrp.com/learn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is XRP? Complete Guide | AllAboutXRP",
    description:
      "Learn everything about XRP — what it is, who created it, how it works, and why it matters.",
  },
  alternates: { canonical: "https://allaboutxrp.com/learn" },
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="mx-auto max-w-3xl px-4 py-8">
        <NewsletterSignup variant="full" />
      </div>
    </>
  );
}
