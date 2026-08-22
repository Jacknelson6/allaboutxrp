import { SITE_URL } from "@/lib/editorial";

export interface RecoveryLink {
  href: string;
  label: string;
  note: string;
}

/**
 * The recovery map offered on every 404, in both representations: the HTML
 * page renders these links, and the Markdown 404 body lists the same set. An
 * agent that lands on a dead URL should be able to re-orient from either one
 * without a second guess at the site structure.
 */
export const MACHINE_INDEX_LINKS: RecoveryLink[] = [
  { href: "/sitemap.xml", label: "Sitemap", note: "Every canonical URL on the site." },
  { href: "/news-sitemap.xml", label: "News sitemap", note: "Recently published reporting." },
  { href: "/llms.txt", label: "llms.txt", note: "Curated index of the pages worth citing." },
  { href: "/llms-full.txt", label: "llms-full.txt", note: "One line per page, with descriptions." },
];

export const SECTION_LINKS: RecoveryLink[] = [
  { href: "/learn", label: "Learning center", note: "Source-led guides, grouped into topic hubs." },
  { href: "/answers", label: "Answers", note: "Short answers to the questions readers arrive with." },
  { href: "/news", label: "News", note: "Dated reporting on XRP, Ripple, and the XRP Ledger." },
  { href: "/live-chart", label: "Live chart", note: "Price, ranges, and volume with the feed stated." },
  { href: "/tools", label: "Tools", note: "Calculators and ledger trackers with stated methodology." },
  { href: "/holders", label: "Holder distribution", note: "Major balances and concentration methodology." },
];

export const TRUST_LINKS: RecoveryLink[] = [
  { href: "/about", label: "About", note: "Mission, scope, and independence policy." },
  { href: "/contact", label: "Contact", note: "Editorial desk and general inbox." },
  { href: "/editorial", label: "Editorial standards", note: "Sourcing, review, and corrections policy." },
  { href: "/corrections", label: "Corrections log", note: "Public record of material corrections." },
];

function renderGroup(heading: string, links: RecoveryLink[]): string {
  const lines = links.map((link) => `- [${link.label}](${SITE_URL}${link.href}): ${link.note}`);
  return `## ${heading}\n\n${lines.join("\n")}`;
}

/**
 * The Markdown body served with a 404 when the client asked for Markdown.
 * Short on purpose: what failed, then where to look next.
 */
export function buildNotFoundMarkdown(pathname: string): string {
  const requested = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return [
    "# 404 — Page not found",
    `No page exists at \`${requested}\` on AllAboutXRP. Nothing was moved silently: retired URLs redirect to their canonical replacement, so a 404 here means the path was never published or was mistyped.`,
    renderGroup("Machine-readable indexes", MACHINE_INDEX_LINKS),
    renderGroup("Main sections", SECTION_LINKS),
    renderGroup("Publisher and trust pages", TRUST_LINKS),
    [
      "## Fetching Markdown",
      "",
      "Every page on this site serves a Markdown representation: send `Accept: text/markdown`,",
      "or append `.md` to the path. Responses carry `Vary: Accept`.",
    ].join("\n"),
    `---\n\n_AllAboutXRP — independent, source-led XRP reference. ${SITE_URL}_`,
  ].join("\n\n");
}
