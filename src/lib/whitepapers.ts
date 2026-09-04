import {
  DOCUMENT_TYPES,
  WHITEPAPER_REVIEW_DATE,
  WHITEPAPER_URL,
  WHITEPAPERS,
  type Whitepaper,
} from "@/data/whitepapers";

export type LibraryFilters = {
  query: string;
  collection: string;
  type: string;
  year: string;
  sort: string;
};

export const DEFAULT_LIBRARY_FILTERS: LibraryFilters = {
  query: "", collection: "all", type: "all", year: "all", sort: "recommended",
};

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function filterWhitepapers(papers: Whitepaper[], filters: LibraryFilters): Whitepaper[] {
  const terms = normalize(filters.query.trim()).split(/\s+/).filter(Boolean);
  const filtered = papers.filter((paper) => {
    const searchable = normalize([
      paper.title, paper.displayTitle, paper.summary, paper.topic, paper.collection,
      paper.publisher, ...paper.authors, paper.id, DOCUMENT_TYPES[paper.type],
    ].join(" "));
    return terms.every((term) => searchable.includes(term))
      && (filters.collection === "all" || paper.collection === filters.collection)
      && (filters.type === "all" || paper.type === filters.type)
      && (filters.year === "all" || (paper.date?.slice(0, 4) ?? "undated") === filters.year);
  });

  if (filters.sort === "title") filtered.sort((a, b) => a.displayTitle.localeCompare(b.displayTitle, "en"));
  if (filters.sort === "newest" || filters.sort === "oldest") {
    filtered.sort((a, b) => {
      // Undated resources always follow dated records in either direction.
      if (!a.date) return b.date ? 1 : 0;
      if (!b.date) return -1;
      return filters.sort === "newest" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date);
    });
  }
  return filtered;
}

export function formatPaperDate(date: string | null): string {
  if (!date) return "Date not stated";
  if (date.length === 4) return date;
  return new Intl.DateTimeFormat("en-US", {
    month: "short", year: "numeric", ...(date.length === 10 ? { day: "numeric" } : {}), timeZone: "UTC",
  }).format(new Date(`${date.length === 7 ? `${date}-01` : date}T12:00:00Z`));
}

export function paperPermalink(paper: Whitepaper): string {
  return `${WHITEPAPER_URL}#paper-${paper.id}`;
}

export function paperCitation(paper: Whitepaper): string {
  const credit = paper.authors.length ? paper.authors.join(", ") : paper.publisher;
  const date = paper.date ? `${paper.dateBasis.toLowerCase()} ${formatPaperDate(paper.date)}` : "date not stated";
  const source = paper.documentUrl ?? paperPermalink(paper);
  return `${credit}. ${paper.title}. ${date}. ${source}${paper.sourceStatus === "moved" ? " Original source moved; historical catalog record." : ""}`;
}

export const WHITEPAPER_FAQS = [
  {
    question: "What is the original XRP whitepaper?",
    answer: "The Ripple Protocol Consensus Algorithm, published in 2014 by David Schwartz, Noah Youngs, and Arthur Britto, is the foundational consensus paper commonly called the XRP whitepaper. It describes the original consensus design. The separate 2018 analysis by Brad Chase and Ethan MacBrough examines the protocol’s safety and liveness in greater detail.",
    source: "https://xrpl.org/docs/concepts/consensus-protocol/consensus-research",
    sourceLabel: "XRPL consensus research index",
  },
  {
    question: "Where can I read XRP and Ripple whitepapers?",
    answer: "Use the original publisher’s PDF, official documentation, or the authors’ research repository. This library brings those sources together for XRP Ledger consensus, RLUSD, tokenization, and related ecosystem projects. Each record identifies its document type and source. The Read PDF and Read source links open the original material rather than a rewritten copy.",
    source: "#library",
    sourceLabel: "Browse the document library",
  },
  {
    question: "Are XRP, Ripple, and RLUSD covered by the same paper?",
    answer: "No. XRP is the XRP Ledger’s native asset, Ripple is a company, and RLUSD is a separate stablecoin. Consensus papers explain the ledger’s agreement process; the RLUSD whitepaper describes Ripple’s stablecoin. A paper about one does not establish the properties, risks, or current operating details of the others.",
    source: "https://docs.ripple.com/products/stablecoin/overview/rlusd",
    sourceLabel: "Ripple’s RLUSD documentation",
  },
  {
    question: "What is the difference between a whitepaper and an XLS specification?",
    answer: "A whitepaper explains a design, proposal, or project at its publication date. An XRP Ledger Standard, or XLS, specifies particular protocol or ecosystem behavior. Standards can be revised and have editorial states such as Draft or Final. That status is distinct from whether a corresponding amendment is enabled on the live network.",
    source: "https://xls.xrpl.org/",
    sourceLabel: "XRP Ledger Standards",
  },
  {
    question: "Are Xahau, Evernode, and Flare part of XRPL mainnet?",
    answer: "They are related ecosystem subjects, but their networks and features are not interchangeable with XRPL mainnet. Xahau is a separate network, Evernode uses Xahau for coordination, and Flare operates its own network. The library labels these collections separately so a project paper is not mistaken for native XRP Ledger functionality.",
    source: "https://evernode.org/",
    sourceLabel: "Evernode’s network description",
  },
  {
    question: "Does an old whitepaper describe how a network works today?",
    answer: "Not necessarily. Whitepapers preserve a design at a point in time, while implementations, amendments, and product terms can change. Check the publication or revision date and read the record’s context note. For present-day protocol behavior, follow current official documentation and amendment records as well as the historical paper.",
    source: "https://xrpl.org/docs/concepts/consensus-protocol",
    sourceLabel: "Current XRPL consensus documentation",
  },
];

export function buildWhitepaperCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${WHITEPAPER_URL}#collection`,
    url: WHITEPAPER_URL,
    name: "XRP Whitepapers & Research Library",
    description: "A curated library of XRP, Ripple, and XRPL ecosystem whitepapers, research papers, specifications, and reports with original sources and reading notes.",
    inLanguage: "en-US",
    dateModified: WHITEPAPER_REVIEW_DATE,
    publisher: { "@id": "https://allaboutxrp.com/#organization" },
    isPartOf: { "@id": "https://allaboutxrp.com/#website" },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: WHITEPAPERS.length,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: WHITEPAPERS.map((paper, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: paperPermalink(paper),
        item: {
          "@type": paper.type === "research-paper" ? "ScholarlyArticle" : "CreativeWork",
          "@id": paperPermalink(paper),
          name: paper.title,
          description: paper.summary,
          genre: DOCUMENT_TYPES[paper.type],
          about: paper.topic,
          ...(paper.documentUrl ? { url: paper.documentUrl } : {}),
          ...(paper.authors.length ? { author: paper.authors.map((name) => ({ "@type": "Person", name })) } : {}),
          ...(paper.date?.length === 10 && paper.dateBasis === "Published" ? { datePublished: paper.date } : {}),
          ...(paper.date?.length === 10 && paper.dateBasis === "Updated" ? { dateModified: paper.date } : {}),
          ...(paper.format === "PDF" && paper.documentUrl ? {
            encoding: { "@type": "MediaObject", contentUrl: paper.documentUrl, encodingFormat: "application/pdf" },
          } : {}),
        },
      })),
    },
  };
}
