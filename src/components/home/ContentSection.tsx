interface ContentSectionProps {
  title: string;
  html: string;
  id: string;
}

export default function ContentSection({ title, html, id }: ContentSectionProps) {
  return (
    <section id={id} className="py-12" aria-label={title}>
      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">{title}</h2>
      <div
        className="prose-custom mt-6 text-text-secondary leading-relaxed [&_p]:mb-4 [&_strong]:text-text-primary [&_a]:text-xrp-accent [&_a]:underline"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
