interface FAQItem {
  question: string;
  answer: string;
  slug: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="mt-8 divide-y divide-surface-border border-y border-surface-border">
      {items.map((item) => (
        <details key={item.slug} className="group py-1">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-lg px-3 py-4 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-xrp-accent-bright">
            <h2 className="font-sans text-base font-semibold text-text-primary transition-colors group-open:text-xrp-accent-bright">
              {item.question}
            </h2>
            <span className="font-mono text-lg text-text-secondary transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="max-w-3xl px-3 pb-5 pr-12">
            <p className="text-base leading-7 text-text-secondary">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
