import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface LearnLink {
  href: string;
  title: string;
  description: string;
}

interface ContinueLearningProps {
  links: LearnLink[];
}

export default function ContinueLearning({ links }: ContinueLearningProps) {
  return (
    <section className="mt-16 mb-8">
      <div className="flex items-center gap-2.5 mb-6">
        <BookOpen className="h-5 w-5 text-[#0085FF]" />
        <h2 className="text-xl font-bold text-white">Continue Learning</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative rounded-xl border border-[#2F3336] bg-[#16181C] p-5 transition-all overflow-hidden"
          >
            {/* Hover: white overlay */}
            <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
            {/* Hover: blue gradient glow from top-left */}
            <div className="absolute -inset-px bg-gradient-to-br from-[#0085FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-sm font-semibold text-white group-hover:text-[#0085FF] transition-colors">
                {link.title}
              </h3>
              <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                {link.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-sm text-[#0085FF]/70 hover:text-[#0085FF] hover:gap-2.5 transition-all"
        >
          View All Learn Pages <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
