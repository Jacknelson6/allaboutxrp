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
    url: `${SITE_URL}/logo.png`,
    width: 200,
    height: 200,
  },
};

const author = {
  "@type": "Person",
  name: "AllAboutXRP Editorial Team",
  url: SITE_URL,
  jobTitle: "XRP & Blockchain Research",
};

export function buildArticleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
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
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    ...(opts.image && { image: opts.image }),
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
