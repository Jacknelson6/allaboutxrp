import type { Metadata } from "next";
import ExtensionPageContent from "@/components/extension/ExtensionPageContent";

export const metadata: Metadata = {
  title: "XRP Browser Monitor: Product Plan and Current Tools",
  description:
    "Review the planned AllAboutXRP browser monitor, its proposed privacy model, and the live XRP chart and research tools available today.",
  alternates: { canonical: "/extension" },
  openGraph: {
    title: "XRP Browser Monitor: Product Plan and Current Tools",
    description:
      "An honest product brief for the planned AllAboutXRP browser monitor, plus links to live tools you can use now.",
    url: "https://allaboutxrp.com/extension",
    type: "website",
  },
};

export default function ExtensionPage() {
  return <ExtensionPageContent />;
}
