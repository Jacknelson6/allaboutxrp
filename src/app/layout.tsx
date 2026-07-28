import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import MegaMenu from "@/components/layout/MegaMenu";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SEOSchema from "@/components/shared/SEOSchema";
import LayoutShell from "@/components/layout/LayoutShell";
import { XRPPriceProvider } from "@/contexts/XRPPriceContext";
import { AuthProvider } from "@/lib/supabase/auth-context";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
  name: "AllAboutXRP",
  url: "https://allaboutxrp.com",
  description: "Comprehensive XRP resource hub with education, live data, and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen antialiased">
        {GA_ID ? <GoogleAnalytics measurementId={GA_ID} /> : null}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <SEOSchema schema={websiteSchema} />
        <AuthProvider>
        <XRPPriceProvider>
        <AnnouncementBar />
        <LayoutShell megaMenu={<MegaMenu />} footer={<Footer />}>
          {children}
        </LayoutShell>
        </XRPPriceProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
