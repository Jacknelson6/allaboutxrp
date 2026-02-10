"use client";

interface ContentSectionProps {
  title: string;
  html: string;
  id: string;
}

export default function ContentSection({ title, html, id }: ContentSectionProps) {
  return (
    <section
      id={id}
      className="py-12 scroll-mt-20"
      aria-label={title}
    >
      <div className="section-divider mb-8" />
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
      <div
        className="prose-editorial mt-5 [&_p]:mb-4 [&_strong]:text-text-primary [&_a]:text-xrp-accent [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
