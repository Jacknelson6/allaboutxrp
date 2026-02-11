"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AcquisitionsContent from "@/app/acquisitions/AcquisitionsContent";

export default function AcquisitionsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <Link href="/people" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-[#0085FF] transition-colors mb-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to People
        </Link>
      </div>
      <AcquisitionsContent />
    </div>
  );
}
