import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "AllAboutXRP.com terms of service — rules, disclaimers, and legal information for using our website.",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
