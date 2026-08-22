import { accountablePublisher, SITE_URL } from "@/lib/editorial";

export { SITE_URL };

/** Canonical node id for the publisher entity, referenced by every other schema. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/** Editorial desk: corrections, disputed claims, and source questions. */
export const EDITORIAL_EMAIL = "team@allaboutxrp.com";

/** General inbox named in the privacy policy and terms of service. */
export const GENERAL_EMAIL = "info@allaboutxrp.com";

/**
 * The single Organization entity for the site.
 *
 * Rendered site-wide by the root layout so the "@id" reference used by
 * WebSite, Article, NewsArticle, and ContactPage schemas resolves wherever
 * those schemas appear. Every field is published somewhere a reader can check:
 * the two contact addresses are the ones on /contact, /corrections, and the
 * privacy policy, and the address region is the governing jurisdiction stated
 * in the terms of service. No official AllAboutXRP social profiles currently
 * exist, so `sameAs` is intentionally omitted rather than invented.
 */
export const organizationSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "AllAboutXRP",
  url: SITE_URL,
  description:
    "Independent, source-led educational publisher covering XRP, the XRP Ledger, and Ripple.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-full.png`,
    width: 2000,
    height: 2000,
  },
  foundingDate: "2026-02",
  founder: accountablePublisher,
  address: {
    "@type": "PostalAddress",
    addressRegion: "WY",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "editorial",
      name: "Editorial desk",
      email: EDITORIAL_EMAIL,
      url: `${SITE_URL}/contact`,
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      name: "General enquiries",
      email: GENERAL_EMAIL,
      url: `${SITE_URL}/contact`,
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
  ],
};
