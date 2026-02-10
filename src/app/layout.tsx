import type { Metadata } from "next";
import { Instrument_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SEOSchema from "@/components/shared/SEOSchema";

const instrumentSans = Instrument_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AllAboutXRP — Everything You Need to Know About XRP",
    template: "%s | AllAboutXRP",
  },
  description: "Your comprehensive resource for XRP — what it is, who created it, live prices, rich list data, community voices, and how to get started.",
  metadataBase: new URL("https://allaboutxrp.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://allaboutxrp.com",
    siteName: "AllAboutXRP",
    title: "AllAboutXRP — Everything You Need to Know About XRP",
    description: "Your comprehensive resource for XRP — education, live data, community, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AllAboutXRP",
    description: "Your comprehensive resource for everything XRP.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AllAboutXRP",
  url: "https://allaboutxrp.com",
  description: "Comprehensive XRP resource hub with education, live data, and community.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://allaboutxrp.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <SEOSchema schema={websiteSchema} />
        <AnnouncementBar />
        <Nav />
        <main id="main-content" className="min-h-[80vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
