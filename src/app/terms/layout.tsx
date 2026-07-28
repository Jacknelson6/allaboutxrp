import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "AllAboutXRP.com terms of service — rules, disclaimers, and legal information for using our website.",
  alternates: { canonical: "https://allaboutxrp.com/terms" },
  robots: { index: false, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
