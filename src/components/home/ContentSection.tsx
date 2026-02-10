"use client";

import { motion } from "framer-motion";

interface ContentSectionProps {
  title: string;
  html: string;
  id: string;
}

export default function ContentSection({ title, html, id }: ContentSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-14 scroll-mt-20"
      aria-label={title}
    >
      <div className="section-divider mb-10" />
      <h2 className="font-display text-2xl font-bold tracking-tight text-text-primary md:text-3xl">{title}</h2>
      <div
        className="prose-editorial mt-6 [&_p]:mb-4 [&_strong]:text-text-primary [&_a]:text-xrp-accent [&_a]:underline [&_a]:decoration-xrp-accent/30 [&_a]:underline-offset-3 [&_a:hover]:decoration-xrp-accent [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </motion.section>
  );
}
