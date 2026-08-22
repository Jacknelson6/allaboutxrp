import Image from "next/image";
import Link from "next/link";
import { Card, SectionHeader } from "@/components/ui";
import { LEARN_HUBS } from "@/data/learn-hubs";
import { LABEL } from "./home-style";

const featuredGuides = [
  {
    image: "/guides/ultimate-guide-xrp-2026-card.webp",
    label: "The complete guide to XRP",
    eyebrow: "Foundations",
    href: "/learn/what-is-xrp",
  },
  {
    image: "/guides/ultimate-guide-buying-xrp-2026-card.webp",
    label: "How to buy XRP safely",
    eyebrow: "Practical guide",
    href: "/learn/how-to-buy-xrp",
  },
  {
    image: "/guides/xrp-2026-outlook-card.webp",
    label: "The 2026 XRP outlook",
    eyebrow: "Research",
    href: "/learn/xrp-2026-outlook",
  },
];

/**
 * Education pathways: the seven learn hubs as a Card grid with guide counts,
 * followed by the three featured research paths that open the learning centre.
 */
export default function HomeEducationPaths() {
  return (
    <section className="border-b border-hairline bg-paper" aria-labelledby="pathways-heading">
      <div className="site-container py-12 sm:py-16">
        <SectionHeader
          eyebrow="Education pathways"
          title={<span id="pathways-heading">What are you trying to find out?</span>}
          href="/learn"
          linkLabel="Browse the learning center"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEARN_HUBS.map((hub, index) => (
            <Card
              key={hub.slug}
              href={`/learn/${hub.slug}`}
              variant="default"
              eyebrow={`Path ${String(index + 1).padStart(2, "0")}`}
              title={hub.title}
              meta={<span className="tabular-nums">{hub.guides.length} guides</span>}
            >
              <p className="text-sm leading-6 text-text-secondary">{hub.description}</p>
            </Card>
          ))}
          <Card
            href="/learn"
            variant="muted"
            eyebrow="Full index"
            title="Every XRP guide"
            meta={<span className="tabular-nums">{LEARN_HUBS.reduce((total, hub) => total + hub.guides.length, 0)} guides</span>}
          >
            <p className="text-sm leading-6 text-text-secondary">
              The complete learning center, sorted by topic, with review dates on every
              time-sensitive guide.
            </p>
          </Card>
        </div>

        <div className="mt-12 border-t border-hairline pt-10">
          <h3 className={LABEL}>Start here / featured research paths</h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((item) => (
              <Link key={item.href} href={item.href} className="group block">
                <span className="relative block aspect-[16/9] w-full overflow-hidden border border-hairline bg-paper-muted transition-colors duration-150 group-hover:border-ink">
                  <Image
                    src={item.image}
                    alt=""
                    width={768}
                    height={432}
                    unoptimized
                    loading="lazy"
                    fetchPriority="low"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </span>
                <span className={`${LABEL} mt-3 block`}>{item.eyebrow}</span>
                <h4 className="mt-1.5 block font-display text-lg leading-snug font-normal text-ink transition-colors duration-150 group-hover:text-cobalt">
                  {item.label}
                </h4>
              </Link>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-6 text-text-secondary">
            Each guide opens with the short answer, then shows the evidence, context, and limits
            behind it.
          </p>
        </div>
      </div>
    </section>
  );
}
