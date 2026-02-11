import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP Transaction Fee Calculator — See How Cheap XRP Is",
  description:
    "Calculate XRP transaction fees for any number of transactions. XRP fees are ~0.00001 XRP ($0.00003) per transaction — see the math.",
  openGraph: {
    title: "XRP Fee Calculator | AllAboutXRP",
    description: "See how incredibly cheap XRP transactions are — free calculator tool.",
    url: "https://allaboutxrp.com/tools/xrp-fee-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XRP Fee Calculator | AllAboutXRP",
    description: "See how incredibly cheap XRP transactions are.",
  },
  alternates: { canonical: "https://allaboutxrp.com/tools/xrp-fee-calculator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
