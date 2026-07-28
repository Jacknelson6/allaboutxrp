export interface HomeFaqItem {
  question: string;
  answer: string;
  guideHref: string;
  guideLabel: string;
  sourceHref: string;
  sourceLabel: string;
}

/**
 * Evergreen homepage answers shared by the visible FAQ and FAQPage schema.
 * Keep volatile market figures out of this list so visible copy and JSON-LD
 * cannot drift apart between editorial reviews.
 */
export const HOME_FAQ_ITEMS: HomeFaqItem[] = [
  {
    question: "What is XRP?",
    answer:
      "XRP is the native digital asset of the public, open-source XRP Ledger. It is used to pay transaction costs on the network and can bridge value between currencies and tokens.",
    guideHref: "/learn/what-is-xrp",
    guideLabel: "Read the complete XRP guide",
    sourceHref: "https://xrpl.org/about/xrp",
    sourceLabel: "Verify with XRPL.org",
  },
  {
    question: "Is XRP the same as Ripple?",
    answer:
      "No. XRP is a digital asset on the XRP Ledger. Ripple is a private technology company that builds payment and digital-asset infrastructure. Ripple contributes to the XRP ecosystem, but it does not own or operate the public ledger.",
    guideHref: "/learn/what-is-ripple",
    guideLabel: "Compare Ripple and XRP",
    sourceHref: "https://xrpl.org/about/xrp",
    sourceLabel: "Review the XRPL overview",
  },
  {
    question: "How long does an XRP Ledger transaction take?",
    answer:
      "The XRP Ledger generally closes a new validated ledger in about three to five seconds. A transaction result is final when it is included in a validated ledger.",
    guideHref: "/learn/how-does-xrp-work",
    guideLabel: "See how XRPL transactions work",
    sourceHref: "https://xrpl.org/docs/concepts/transactions/finality-of-results",
    sourceLabel: "Read the finality documentation",
  },
  {
    question: "Can XRP be mined?",
    answer:
      "No. XRP does not use proof-of-work mining. The XRP Ledger uses a consensus process in which independent validators agree on the transactions included in each validated ledger.",
    guideHref: "/learn/can-xrp-be-mined",
    guideLabel: "Learn about XRPL consensus",
    sourceHref: "https://xrpl.org/docs/concepts/consensus-protocol",
    sourceLabel: "Read the consensus documentation",
  },
  {
    question: "How many XRP can exist?",
    answer:
      "The XRP Ledger began with a fixed supply of 100 billion XRP. No additional XRP can be created, and the small transaction cost that is destroyed with each transaction gradually reduces the total supply.",
    guideHref: "/learn/xrp-supply-explained",
    guideLabel: "Understand XRP supply",
    sourceHref: "https://xrpl.org/about/xrp",
    sourceLabel: "Verify the supply facts",
  },
  {
    question: "Does an XRP wallet require a reserve?",
    answer:
      "Yes. As of July 2026, an XRP Ledger account on Mainnet must hold a 1 XRP base reserve, plus 0.2 XRP for each owner-reserve object. Network validators can vote to change these amounts, so check the live documentation before funding a wallet.",
    guideHref: "/learn/xrpl-reserves-explained",
    guideLabel: "Understand XRPL reserves",
    sourceHref: "https://xrpl.org/docs/concepts/accounts/reserves",
    sourceLabel: "Check the current reserve",
  },
];
