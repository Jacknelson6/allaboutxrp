import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const standards = [
  { code: "SOURCE", title: "Claims you can check", description: "Important facts link to official documentation, records, or first-party reporting." },
  { code: "METHOD", title: "Data with methodology", description: "Ledger and market views disclose source, timestamp, limitations, and calculation method." },
  { code: "REVIEW", title: "Updates that are visible", description: "Time-sensitive guides show review dates and distinguish facts from scenarios or opinion." },
];

export default function FeatureGrid() {
  return (
    <section className="ascii-standard border-y border-surface-border" aria-labelledby="research-standard-heading">
      <div className="site-container py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="ascii-section-label">EDITORIAL PROTOCOL</p>
            <h2 id="research-standard-heading" className="mt-4 text-4xl leading-tight text-text-primary sm:text-5xl">Information is only useful when you can verify it.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary">Crypto coverage often collapses fact, promotion, and speculation into one stream. Our publishing protocol keeps them separate.</p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-1"><Link href="/editorial" className="text-link text-sm">Read the full protocol <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link><Link href="/learn/trusted-sources" className="text-link text-sm text-text-secondary">Inspect trusted sources</Link></div>
          </div>
          <div>
            <div className="ascii-protocol-map" aria-hidden="true"><span>[claim]</span><i>────→</i><span>[source]</span><i>────→</i><span>[review]</span><i>────→</i><span>[publish]</span></div>
            <ol className="ascii-standard-list">
              {standards.map((item) => <li key={item.code}><span>[{item.code}]</span><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
