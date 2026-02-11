"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, UserCircle, ExternalLink } from "lucide-react";

const keyPeople = [
  {
    name: "Brad Garlinghouse",
    title: "Chief Executive Officer",
    bio: "Former Yahoo and Hightail executive. Public face of Ripple, led the company through the SEC lawsuit and into a $50B+ valuation.",
    initials: "BG",
  },
  {
    name: "David Schwartz",
    title: "Chief Technology Officer",
    bio: "Co-creator of the XRP Ledger. Known as 'JoelKatz' in the community. Now CTO Emeritus, continuing to shape XRPL's technical direction.",
    initials: "DS",
  },
  {
    name: "Monica Long",
    title: "President",
    bio: "Joined Ripple in 2013. Oversees product, marketing, and business development. One of the longest-serving executives at the company.",
    initials: "ML",
  },
  {
    name: "Stuart Alderoty",
    title: "Chief Legal Officer",
    bio: "Former HSBC, CIT Group, and American Express. Led Ripple's defense in the landmark SEC lawsuit resulting in partial victory.",
    initials: "SA",
  },
];

export default function KeyPeoplePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-20">
        <Link href="/people" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#0085FF] transition-colors mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to People
        </Link>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-[#0085FF]/10 p-2"><UserCircle className="h-5 w-5 text-[#0085FF]" /></div>
            <div>
              <h1 className="text-[28px] font-bold tracking-[-0.03em] text-text-primary md:text-[32px]">Key People</h1>
              <p className="mt-0.5 text-text-secondary text-sm">Ripple&apos;s leadership team driving the XRP ecosystem</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {keyPeople.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-white/[0.06] bg-black p-6 hover:border-[#0085FF]/20 transition-colors"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-[#0085FF]/20 to-[#0085FF]/5 flex items-center justify-center">
                <span className="text-xl font-bold text-[#0085FF]">{person.initials}</span>
              </div>
              <h3 className="mt-4 text-center font-bold text-text-primary">{person.name}</h3>
              <p className="mt-1 text-center text-xs font-medium text-[#0085FF]">{person.title}</p>
              <p className="mt-3 text-xs text-text-secondary leading-relaxed text-center">{person.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/learn/leadership"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0085FF] hover:gap-2 transition-all"
          >
            View full leadership team <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
