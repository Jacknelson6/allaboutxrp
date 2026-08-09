const DESKTOP_ART = [
  "┌────────────────────────────────────────────────────────────┐",
  "│  XRPL / PUBLIC LEDGER                         LIVE RECORD   │",
  "├────────────────────────────────────────────────────────────┤",
  "│                                                            │",
  "│      ╲        ╱        CONSENSUS PATH                       │",
  "│       ╲      ╱         ────────────────────────────●        │",
  "│        ╲    ╱          proposal  →  validation  →  final   │",
  "│         ╲  ╱                                               │",
  "│          ╳             ┌──────────┐     ┌──────────┐        │",
  "│         ╱  ╲           │ account 01├─────┤account 02 │       │",
  "│        ╱    ╲          └──────────┘     └──────────┘        │",
  "│       ╱      ╲                 ╲             ╱              │",
  "│      ╱        ╲                 ╲─── XRP ───╱               │",
  "│                                                            │",
  "├────────────────────────────────────────────────────────────┤",
  "│  CLOSE TIME     3–5 SEC       SUPPLY CAP     100,000,000,000│",
  "│  NATIVE ASSET   XRP           MINING         NOT APPLICABLE │",
  "└────────────────────────────────────────────────────────────┘",
].join("\n");

const MOBILE_ART = [
  "┌──────────────────────────────┐",
  "│ XRPL / PUBLIC LEDGER         │",
  "├──────────────────────────────┤",
  "│       ╲      ╱               │",
  "│        ╲    ╱    proposal    │",
  "│         ╲  ╱       ↓         │",
  "│          ╳      validation   │",
  "│         ╱  ╲       ↓         │",
  "│        ╱    ╲     final      │",
  "│                              │",
  "│ [account]──XRP──[account]    │",
  "├──────────────────────────────┤",
  "│ CLOSE  3–5 SEC               │",
  "│ CAP    100 BILLION XRP       │",
  "└──────────────────────────────┘",
].join("\n");

export default function AsciiLedger() {
  return (
    <figure className="ascii-ledger" aria-labelledby="ascii-ledger-caption">
      <div className="ascii-ledger-scan" aria-hidden="true" />
      <pre className="hidden sm:block" aria-hidden="true">{DESKTOP_ART}</pre>
      <pre className="block sm:hidden" aria-hidden="true">{MOBILE_ART}</pre>
      <figcaption id="ascii-ledger-caption" className="ascii-ledger-caption">
        <span><span className="ascii-status" aria-hidden="true" />Network model</span>
        <span>Illustrative, not a live transaction feed</span>
      </figcaption>
    </figure>
  );
}
