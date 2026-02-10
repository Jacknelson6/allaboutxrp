import faqData from "@/data/faq.json";

export interface FAQItem {
  question: string;
  answer: string;
  page?: string;
}

export function slugify(question: string): string {
  return question
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getAllFAQSlugs(): string[] {
  return (faqData as FAQItem[]).map((item) => slugify(item.question));
}

export function getFAQBySlug(slug: string): FAQItem | undefined {
  return (faqData as FAQItem[]).find((item) => slugify(item.question) === slug);
}

export function getRelatedFAQs(currentSlug: string, count = 4): { question: string; slug: string }[] {
  return (faqData as FAQItem[])
    .filter((item) => slugify(item.question) !== currentSlug)
    .slice(0, count)
    .map((item) => ({ question: item.question, slug: slugify(item.question) }));
}

export function getAllFAQItems(): (FAQItem & { slug: string })[] {
  return (faqData as FAQItem[]).map((item) => ({
    ...item,
    slug: slugify(item.question),
  }));
}
