import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Public_Sans } from "next/font/google";
import "../styles/globals.css";
import MegaMenu from "@/components/layout/MegaMenu";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SEOSchema from "@/components/shared/SEOSchema";
import LayoutShell from "@/components/layout/LayoutShell";
import { XRPPriceProvider } from "@/contexts/XRPPriceContext";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { accountablePublisher, SITE_URL } from "@/lib/editorial";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-2BWKVQT4L5";
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

const publicSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "AllAboutXRP — Everything You Need to Know About XRP",
    template: "%s",
  },
  description: "Your comprehensive resource for XRP — what it is, who created it, live prices, holder data, community voices, and how to get started.",
  metadataBase: new URL("https://allaboutxrp.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://allaboutxrp.com",
    siteName: "AllAboutXRP",
    title: "AllAboutXRP — Everything You Need to Know About XRP",
    description: "Your comprehensive resource for XRP — education, live data, community, and more.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AllAboutXRP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AllAboutXRP",
    description: "Your comprehensive resource for everything XRP.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(GSC_VERIFICATION && {
    verification: {
      google: GSC_VERIFICATION,
    },
  }),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://allaboutxrp.com/#website",
  name: "AllAboutXRP",
  url: "https://allaboutxrp.com",
  description: "Independent XRP resource with source-led education, live data, tools, and news.",
  inLanguage: "en-US",
  publisher: { "@id": "https://allaboutxrp.com/#organization" },
  about: [
    { "@type": "Thing", name: "XRP", sameAs: "https://xrpl.org/about/xrp" },
    { "@type": "Thing", name: "XRP Ledger", sameAs: "https://xrpl.org" },
  ],
};

// Canonical, site-wide Organization entity. Rendered on every page so the
// "@id" reference used by WebSite, Article, and NewsArticle schemas resolves
// wherever those schemas appear. No official AllAboutXRP social profiles
// currently exist, so `sameAs` is intentionally omitted rather than invented.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://allaboutxrp.com/#organization",
  name: "AllAboutXRP",
  url: SITE_URL,
  description: "Independent, source-led educational publisher covering XRP, the XRP Ledger, and Ripple.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-full.png`,
    width: 2000,
    height: 2000,
  },
  foundingDate: "2026-02",
  founder: accountablePublisher,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${publicSans.variable} ${libreBaskerville.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('aaxrp-theme');var theme=saved==='light'||saved==='dark'?saved:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=theme;}catch(e){document.documentElement.dataset.theme='light';}})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {GA_ID ? <GoogleAnalytics measurementId={GA_ID} /> : null}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <SEOSchema schema={[organizationSchema, websiteSchema]} />
        <XRPPriceProvider>
        <AnnouncementBar />
        <LayoutShell megaMenu={<MegaMenu />} footer={<Footer />}>
          {children}
        </LayoutShell>
        </XRPPriceProvider>
      </body>
    </html>
  );
}
