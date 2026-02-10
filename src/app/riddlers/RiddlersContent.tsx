"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Hash, Sparkles, MessageCircle, User, Clock, ChevronDown } from "lucide-react";

const sections = [
  { id: "what-are-riddlers", label: "Overview" },
  { id: "bg123", label: "BG123" },
  { id: "mr-pool", label: "Mr. Pool" },
  { id: "589", label: "The 589" },
  { id: "schwartz", label: "David Schwartz" },
  { id: "garlinghouse", label: "Brad Garlinghouse" },
  { id: "symbols", label: "Symbol Guide" },
  { id: "numbers", label: "Key Numbers" },
];

const symbolsData = [
  { symbol: "Phoenix", meaning: "XRP rising from ashes of old financial system" },
  { symbol: "Broken Crown", meaning: "Fall of the Federal Reserve / existing monetary order" },
  { symbol: "Three Pillars", meaning: "Three surviving currencies (XRP, BTC, USD/digital)" },
  { symbol: "Clock Times", meaning: "Dates, countdowns, or price targets" },
  { symbol: "Smiling Faces", meaning: "Imminent price pump" },
  { symbol: "Red String", meaning: "XRP as the solution (Theseus's thread)" },
  { symbol: "Snowballs", meaning: "Currencies/assets; count changes = which survive" },
  { symbol: "Castle", meaning: "New financial infrastructure being built" },
  { symbol: "Satellite", meaning: "Global reach of XRP's payment network" },
  { symbol: "Triskelion", meaning: "Cycles, progression, triple-phase transformation" },
  { symbol: "Purple Beret", meaning: "BG123's identity marker; perseverance" },
];

const numbersData = [
  { num: "589", meaning: "The iconic price prediction / cultural totem" },
  { num: "123", meaning: "BG123's signature; three phases of appreciation" },
  { num: "7211", meaning: "Mr. Pool's account; decoded as dates, prices, or references" },
  { num: "44 / 77", meaning: "Countdown days in Mr. Pool's riddles" },
  { num: "11:13", meaning: "Clock time in both Mr. Pool and Schwartz's posts" },
  { num: "113", meaning: "November 3 or January 13 depending on date format" },
];

const coincidences589 = [
  { what: "Ripple USPTO Trademark", detail: "Registration #4,458,993 contains '589' within digits" },
  { what: "Brad's Twitter Follows", detail: "Maintained exactly 589 follows for extended period" },
  { what: "Hidden Road HQ", detail: "Located at 589 Fifth Avenue, New York" },
  { what: "RLUSD Serial", detail: "Application #98537677 decoded to contain 589 pattern" },
  { what: "COMEX Rule 589", detail: "Governs price limits for metals futures" },
  { what: "ISO 4217 Slot", detail: "Slot 589 is unassigned — speculated reserved for XRP" },
];

const schwartzPosts = [
  { post: '"10x times" bubble can image', interpretation: "10x price increase for XRP" },
  { post: '"Lock In" (Dec 8, 2024)', interpretation: "XRP staking feature incoming" },
  { post: "Math problem equaling 5", interpretation: "$5 XRP price target" },
  { post: '"Jackpot!" slot machine $11,106.78', interpretation: "$11+ XRP price target" },
  { post: "Retirement joke (Jan 2026)", interpretation: "Coincided with 20% pump to $2.40" },
];

export default function RiddlersContent() {
  const [expandedRiddler, setExpandedRiddler] = useState<string | null>("bg123");

  return (
    <div className="relative">
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 bg-black" />
      <div className="pointer-events-none absolute inset-0 " />
      <div className="pointer-events-none absolute inset-0 " />

      <div className="relative mx-auto max-w-5xl px-4 py-16">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-purple-500/10 p-2.5">
              <Eye className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-[32px] font-bold tracking-[-0.04em] text-text-primary md:text-[40px]">
                The XRP <span className="bg-gradient-to-r from-purple-400 to-xrp-accent bg-clip-text text-transparent">Riddlers</span>
              </h1>
              <p className="mt-1 text-text-secondary">
                Cryptic figures, coded predictions, and the mythology that defines XRP culture
              </p>
            </div>
          </div>
        </motion.div>

        {/* Nav */}
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Page sections">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-lg border border-white/[0.06] bg-black px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-purple-400/30 hover:text-purple-400"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Intro */}
        <Section id="what-are-riddlers" title="What Are the XRP Riddlers?" index={1} total={8}>
          <p className="text-text-secondary leading-relaxed">
            The XRP Riddlers are anonymous and pseudonymous figures who post cryptic images, riddles, numerical codes, and symbolic artwork — all centered around XRP, Ripple, and the broader financial system. This phenomenon is <strong className="text-text-primary">unique to XRP</strong>. No other digital asset has developed such an elaborate, mythology-driven culture of cryptic puzzle-solving.
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            The tradition blends numerology, symbolism, geopolitics, and financial speculation into something that resembles part treasure hunt, part prophecy, part community folklore. It emerged around 2017–2018 and has sustained itself through years of the SEC lawsuit, price suppression, and the long wait for what believers call XRP&apos;s inevitable &ldquo;moment.&rdquo;
          </p>

          {/* Why XRP box */}
          <div className="mt-8 rounded-xl border border-purple-400/20 bg-purple-500/[0.03] p-6">
            <h3 className="font-semibold text-purple-400 flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Why This Only Exists in XRP
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { title: "The SEC Lawsuit", desc: "Years of enforced silence created an information vacuum that Riddlers filled" },
                { title: "Suppressed Price", desc: "Patient holders needed narrative frameworks to sustain belief during the wait" },
                { title: "Institutional Use Case", desc: "Real utility gives Riddler narratives more surface area to work with" },
                { title: "Company Behind the Coin", desc: "Real executives on social media create opportunities for pattern matching" },
              ].map((item) => (
                <div key={item.title} className="rounded-lg bg-black p-3">
                  <p className="font-semibold text-text-primary text-sm">{item.title}</p>
                  <p className="text-xs text-text-secondary mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* BG123 */}
        <Section id="bg123" title="BearableGuy123 (BG123)" index={2} total={8}>
          <RiddlerCard
            name="BearableGuy123"
            alias="BG123"
            icon={<User className="h-5 w-5 text-purple-400" />}
            tagline="The Original XRP Riddler"
            isOpen={expandedRiddler === "bg123"}
            onToggle={() => setExpandedRiddler(expandedRiddler === "bg123" ? null : "bg123")}
          >
            <p className="text-text-secondary leading-relaxed text-sm">
              Active primarily on Twitter and Reddit during 2017–2019, BG123 posted cryptic comic-style images, hand-drawn panels, and coded messages. The community has long speculated BG123 is a <strong className="text-text-primary">Ripple insider</strong> based on the perceived accuracy of certain predictions.
            </p>

            <h4 className="mt-6 font-semibold text-text-primary text-sm">The Famous $589 Prediction</h4>
            <div className="mt-2 rounded-lg border border-warning/20 bg-warning/[0.03] p-4">
              <p className="font-mono text-3xl font-bold text-warning">$589</p>
              <p className="mt-1 text-xs text-text-secondary">
                Derived from decoded visual symbolism — sequences reading &ldquo;5-8-9.&rdquo; Originally tied to December 31, 2018. Despite the timing miss, it became a cultural totem for the entire XRP community.
              </p>
            </div>

            <h4 className="mt-6 font-semibold text-text-primary text-sm">Recurring Symbols</h4>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {[
                "Three colored pillars — XRP, BTC, USD",
                "A broken crown — fall of existing financial order",
                "Figure chiseling stone — patient building",
                "The Phoenix rising — new world currency",
                "The Triskelion — cycles and transformation",
                "Purple beret — perseverance and identity",
              ].map((s) => (
                <div key={s} className="flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-xs text-text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                  {s}
                </div>
              ))}
            </div>

            <h4 className="mt-6 font-semibold text-text-primary text-sm flex items-center gap-2">
              <Clock className="h-4 w-4 text-text-secondary" /> Timeline
            </h4>
            <div className="mt-3 space-y-2">
              {[
                { period: "Late 2017 – Early 2018", event: "Emerges on Twitter and Reddit with cryptic comics" },
                { period: "Mid 2018", event: "Peak activity; the $589 prediction gains traction" },
                { period: "Late 2018", event: "r/Rippled shuts down; BG123 goes quiet" },
                { period: "Early 2019", event: "Subreddit reopens; Lodestar Messages released" },
                { period: "2019 onwards", event: "Largely disappears; legacy lives on" },
              ].map((t) => (
                <div key={t.period} className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-sm">
                  <span className="font-mono text-xs text-purple-400 whitespace-nowrap sm:w-40 shrink-0">{t.period}</span>
                  <span className="text-text-secondary">{t.event}</span>
                </div>
              ))}
            </div>
          </RiddlerCard>
        </Section>

        {/* Mr. Pool */}
        <Section id="mr-pool" title="Mr. Pool" index={3} total={8}>
          <RiddlerCard
            name="Mr. Pool"
            alias="@looP_rM311_7211"
            icon={<MessageCircle className="h-5 w-5 text-blue-400" />}
            tagline="The Cryptic Image Master"
            isOpen={expandedRiddler === "mr-pool"}
            onToggle={() => setExpandedRiddler(expandedRiddler === "mr-pool" ? null : "mr-pool")}
          >
            <p className="text-text-secondary leading-relaxed text-sm">
              Posts cryptic images, timestamps, symbols, and numerical patterns interpreted as predictions about XRP price, regulatory events, and financial system resets. The account name itself is a riddle — &ldquo;looP&rdquo; reversed is &ldquo;Pool,&rdquo; and 7211 has been decoded in various ways.
            </p>

            <h4 className="mt-6 font-semibold text-text-primary text-sm">The Style</h4>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {[
                "Images with embedded clues (clocks, calendars, symbols)",
                "Numerical patterns decoded through multiplication",
                "Timeline predictions (44 days, 77 days, Plan B)",
                "Minimal or no text — images speak for themselves",
              ].map((s) => (
                <div key={s} className="flex items-center gap-2 rounded-lg bg-black px-3 py-2 text-xs text-text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                  {s}
                </div>
              ))}
            </div>

            <h4 className="mt-6 font-semibold text-text-primary text-sm">Key Predictions</h4>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Community decodings suggest phased price surges: double digits ($10+) → triple digits ($100+) → quadruple digits ($1,000+) → five-digit levels. Smiling faces signal upcoming pumps. Clock times match Ripple executive posts.
            </p>

            <div className="mt-4 rounded-lg border border-blue-400/20 bg-blue-500/[0.03] p-4">
              <h4 className="text-sm font-semibold text-blue-400">Connections to Ripple</h4>
              <ul className="mt-2 space-y-1 text-xs text-text-secondary">
                <li>• Ripple&apos;s X account imagery mirrors Mr. Pool&apos;s visual language</li>
                <li>• David Schwartz&apos;s tweets echo Mr. Pool&apos;s numerical patterns</li>
                <li>• Timing correlations between posts and Ripple announcements</li>
              </ul>
              <p className="mt-2 text-xs text-text-secondary/60 italic">No direct connection has ever been confirmed.</p>
            </div>
          </RiddlerCard>
        </Section>

        {/* 589 */}
        <Section id="589" title="The Number 589" index={4} total={8}>
          <div className="text-center py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="font-mono text-7xl font-bold bg-gradient-to-r from-warning via-xrp-accent to-purple-400 bg-clip-text text-transparent md:text-8xl">
                589
              </span>
              <p className="mt-2 text-text-secondary text-sm">The most iconic number in XRP culture</p>
            </motion.div>
          </div>

          <p className="text-text-secondary leading-relaxed text-sm">
            What began as one community&apos;s interpretation of BG123&apos;s artwork has become the single most iconic number in XRP culture — a phenomenon independent of its origin. For the community, 589 functions as something between a price target, a lucky number, and a statement of faith.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-text-primary">The Coincidences</h3>
          <div className="mt-4 space-y-2">
            {coincidences589.map((c, i) => (
              <motion.div
                key={c.what}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex gap-4 rounded-xl border border-white/[0.06] bg-black p-4"
              >
                <Hash className="h-4 w-4 shrink-0 text-warning mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary text-sm">{c.what}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{c.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-white/[0.06] bg-black p-4">
            <p className="text-xs text-text-secondary">
              <strong className="text-text-primary">Note:</strong> A purported <em>Simpsons</em> screenshot showing $589 XRP has been <strong className="text-danger">debunked as a forgery</strong>, though it contributed to the cultural momentum.
            </p>
          </div>
        </Section>

        {/* Schwartz */}
        <Section id="schwartz" title="David Schwartz: The Accidental Riddler" index={5} total={8}>
          <p className="text-text-secondary leading-relaxed text-sm">
            Ripple&apos;s former CTO (now CTO Emeritus) has become integral to Riddler lore through cryptic tweets. He typically responds to community decodings with humor and denial — which, of course, the community interprets as further confirmation.
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl border border-white/[0.06] -mx-4 sm:mx-0">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead className="border-b border-white/[0.06] bg-[#0A0A0B]">
                <tr>
                  <th className="px-4 py-3 font-medium text-text-secondary">Post</th>
                  <th className="px-4 py-3 font-medium text-text-secondary">Community Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {schwartzPosts.map((p) => (
                  <tr key={p.post} className="bg-black transition-colors hover:bg-[#0A0A0B]">
                    <td className="px-4 py-3 text-text-primary text-xs">{p.post}</td>
                    <td className="px-4 py-3 text-text-secondary text-xs">{p.interpretation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Garlinghouse */}
        <Section id="garlinghouse" title="Brad Garlinghouse: The 589 Connection" index={6} total={8}>
          <div className="rounded-xl border border-warning/20 bg-warning/[0.03] p-6 text-center">
            <p className="text-xs uppercase tracking-wider text-text-secondary">Twitter/X Follow Count</p>
            <p className="mt-2 font-mono text-5xl font-bold text-warning">589</p>
            <p className="mt-2 text-xs text-text-secondary">Maintained for an extended period — considered deliberately chosen by the community</p>
          </div>

          <div className="mt-6 space-y-3">
            {[
              { quote: "The XRP family has and always will be top of mind for Ripple", interpretation: "XRP remains central to Ripple's vision" },
              { quote: "Be fearful when others are greedy and greedy when others are fearful", interpretation: "Buy signal during XRP volatility" },
              { quote: "We're firing on all cylinders. It's happening.", interpretation: "Confirmation of community's timeline expectations" },
            ].map((q) => (
              <div key={q.quote} className="rounded-xl border border-white/[0.06] bg-black p-4">
                <p className="text-sm text-text-primary italic">&ldquo;{q.quote}&rdquo;</p>
                <p className="mt-2 text-xs text-text-secondary">→ {q.interpretation}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Symbols Reference */}
        <Section id="symbols" title="Symbol Reference Guide" index={7} total={8}>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06] -mx-4 sm:mx-0">
            <table className="w-full min-w-[400px] text-left text-sm">
              <thead className="border-b border-white/[0.06] bg-[#0A0A0B]">
                <tr>
                  <th className="px-4 py-3 font-medium text-text-secondary">Symbol</th>
                  <th className="px-4 py-3 font-medium text-text-secondary">Common Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {symbolsData.map((s) => (
                  <tr key={s.symbol} className="bg-black transition-colors hover:bg-[#0A0A0B]">
                    <td className="px-4 py-3 font-semibold text-purple-400 text-xs whitespace-nowrap">{s.symbol}</td>
                    <td className="px-4 py-3 text-text-secondary text-xs">{s.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Key Numbers */}
        <Section id="numbers" title="Key Numbers" index={8} total={8}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {numbersData.map((n, i) => (
              <motion.div
                key={n.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-xl border border-white/[0.06] bg-black p-4"
              >
                <p className="font-mono text-2xl font-bold text-xrp-accent">{n.num}</p>
                <p className="mt-1 text-xs text-text-secondary">{n.meaning}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/[0.04] to-transparent p-8"
        >
          <h2 className="text-xl font-bold text-text-primary">A Note on Interpretation</h2>
          <p className="mt-3 text-sm text-text-secondary leading-relaxed">
            The XRP Riddler tradition is one of the most fascinating cultural phenomena in cryptocurrency. Whether the Riddlers are genuine insiders, clever community members, or something in between — their impact on XRP culture is undeniable.
          </p>
          <p className="mt-3 text-sm text-text-secondary leading-relaxed">
            The content here documents what the community believes, discusses, and theorizes. Stories shape behavior, build communities, and sustain conviction through uncertainty. <strong className="text-text-primary">The reader is invited to explore, decode, and decide for themselves.</strong>
          </p>
          <p className="mt-4 text-xs text-text-secondary/60 italic">Last updated: February 2026</p>
        </motion.div>
      </div>
    </div>
  );
}

function Section({ id, title, children, index, total }: { id: string; title: string; children: React.ReactNode; index?: number; total?: number }) {
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
      {index !== undefined && total !== undefined && (
        <div className="flex items-center gap-3 mb-4">
          <span className="section-number">
            <span className="current">{String(index).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(total).padStart(2, "0")}</span>
          </span>
          <span className="text-[11px] font-medium uppercase tracking-widest text-white/20">·</span>
          <span className="text-[11px] font-medium uppercase tracking-widest text-white/20">{title}</span>
        </div>
      )}
      <h2 className="text-[26px] font-bold tracking-[-0.03em] text-text-primary md:text-[30px]">{title}</h2>
      <div className="mt-7">{children}</div>
    </motion.section>
  );
}

function RiddlerCard({ name, alias, icon, tagline, isOpen, onToggle, children }: {
  name: string; alias: string; icon: React.ReactNode; tagline: string;
  isOpen: boolean; onToggle: () => void; children: React.ReactNode;
}) {
  return (
    <div className={`rounded-xl border transition-colors ${isOpen ? "border-purple-400/30 bg-purple-500/[0.02]" : "border-white/[0.06] bg-black"}`}>
      <button onClick={onToggle} className="flex w-full items-center gap-4 p-5 text-left">
        <div className="rounded-lg bg-black p-2">{icon}</div>
        <div className="flex-1">
          <p className="font-bold text-text-primary">{name}</p>
          <p className="text-xs text-text-secondary">{alias} — {tagline}</p>
        </div>
        <ChevronDown className={`h-5 w-5 text-text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="border-t border-white/[0.04] px-5 py-5">{children}</div>}
    </div>
  );
}
