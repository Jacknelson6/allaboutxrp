import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
const BASE = join(import.meta.dirname, '..', 'src', 'app', 'learn');

// Page template generator
function gen(slug, p) {
  const url = `https://allaboutxrp.com/learn/${slug}`;
  const dir = join(BASE, slug);
  if (existsSync(join(dir, 'page.tsx'))) { console.log(`⏭️  ${slug} (exists)`); return; }
  mkdirSync(dir, { recursive: true });

  const faqSchema = p.faq.map(f => `    { question: ${JSON.stringify(f.q)}, answer: ${JSON.stringify(f.a)} },`).join('\n');
  const faqItems = p.faq.map(f => `  { q: ${JSON.stringify(f.q)}, a: ${JSON.stringify(f.a)} },`).join('\n');
  const factsArr = p.facts.map(f => `          { label: ${JSON.stringify(f.l)}, value: ${JSON.stringify(f.v)} },`).join('\n');
  const secArr = p.sections.map(s => `          { id: ${JSON.stringify(s.id)}, label: ${JSON.stringify(s.label)} },`).join('\n');
  const statsJsx = p.stats.map((s, i) => `          <StatPill label="${s.l}" value="${s.v}" delay={${(i*0.06).toFixed(2)}} />`).join('\n');
  const relLinks = p.related.map(r => `            { href: ${JSON.stringify(r.href)}, label: ${JSON.stringify(r.label)}, desc: ${JSON.stringify(r.desc)} },`).join('\n');

  const file = `import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, DataTable, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "${p.title}: ${p.accent} | AllAboutXRP",
  description: "${p.desc.replace(/"/g, '\\"')}",
  keywords: ${JSON.stringify(p.kw)},
  openGraph: {
    title: "${p.title}: ${p.accent}",
    description: "${p.desc.replace(/"/g, '\\"').substring(0, 155)}",
    url: "${url}",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "${p.title}: ${p.accent}", description: "${p.desc.replace(/"/g, '\\"').substring(0, 155)}" },
  alternates: { canonical: "${url}" },
};

const schemas = [
  buildArticleSchema({ headline: "${p.title}: ${p.accent}", description: "${p.desc.replace(/"/g, '\\"')}", url: "${url}", datePublished: "2026-02-15", dateModified: "2026-02-15" }),
  buildBreadcrumbSchema([{ name: "Home", url: "https://allaboutxrp.com" }, { name: "Learn", url: "https://allaboutxrp.com/learn" }, { name: "${p.title}" }]),
  buildSpeakableSchema({ url: "${url}" }),
  buildFAQSchema([
${faqSchema}
  ]),
];

const faqItems = [
${faqItems}
];

export default function Page() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero title="${p.title}" titleAccent="${p.accent}" subtitle="${p.subtitle.replace(/"/g, '\\"')}" breadcrumbLabel="${p.title}">
          <div className="mt-5"><AuthorByline date="2026-02-15" /><LastUpdated date="February 15, 2026" /></div>
        </LearnHero>

        <TLDRBox>
          <p>${p.tldr}</p>
        </TLDRBox>

        <KeyFactsTable facts={[
${factsArr}
        ]} />

        <SectionNav items={[
${secArr}
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
${statsJsx}
        </div>

        <div className="cv-auto mt-14 space-y-14">
${p.body}

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
${relLinks}
            ]} />
          </RevealSection>
        </div>

        <LearnCTA title="${p.cta.title}" description="${p.cta.desc.replace(/"/g, '\\"')}" primaryHref="${p.cta.pri.href}" primaryLabel="${p.cta.pri.label}" secondaryHref="${p.cta.sec.href}" secondaryLabel="${p.cta.sec.label}" />

        <p className="mt-8 text-xs text-text-secondary/60"><em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team.</em></p>
      </div>
    </>
  );
}
`;
  writeFileSync(join(dir, 'page.tsx'), file);
  console.log(`✅ ${slug}`);
}

// Export for use by batch scripts
export { gen };

// If run directly with data from stdin, process it
if (process.argv[2] === '--inline') {
  const { pages } = await import(process.argv[3]);
  for (const [slug, p] of Object.entries(pages)) gen(slug, p);
}
