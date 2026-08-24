interface Source {
  label: string;
  href: string;
  note?: string;
}

interface SourceListProps {
  sources: Source[];
}

export default function SourceList({ sources }: SourceListProps) {
  return (
    <section className="mt-10 border-t border-white/[0.08] pt-6" aria-labelledby="primary-sources-heading">
      <h2 id="primary-sources-heading" className="text-lg font-bold text-text-primary">Primary sources</h2>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        Use these first-party references to verify protocol details and time-sensitive platform information.
      </p>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <li key={source.href} className="text-sm leading-relaxed">
            <a href={source.href} data-source-link="true" rel="noopener noreferrer" className="font-medium text-xrp-accent underline decoration-xrp-accent/30 hover:decoration-xrp-accent">
              {source.label}
            </a>
            {source.note ? <span className="text-text-secondary">: {source.note}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
