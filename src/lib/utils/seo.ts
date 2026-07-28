/**
 * Shared SEO schema builders for consistent E-E-A-T signals across all pages.
 */

const SITE_URL = "https://allaboutxrp.com";

const publisher = {
  "@type": "Organization",
  name: "AllAboutXRP",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-full.png`,
    width: 2000,
    height: 2000,
  },
};

const author = {
  "@type": "Organization",
  name: "AllAboutXRP Editorial Team",
  url: `${SITE_URL}/editorial`,
};

export function buildArticleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  citations?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author,
    publisher,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    ...(opts.image && { image: opts.image }),
    ...(opts.citations?.length && { citation: opts.citations }),
  };
}

export function buildHowToSchema(opts: {
  name: string;
  description: string;
  url: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    author,
    publisher,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

export function buildSpeakableSchema(opts: {
  url: string;
  cssSelectors?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: opts.url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: opts.cssSelectors || [".summary", "h1", "h2"],
    },
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
