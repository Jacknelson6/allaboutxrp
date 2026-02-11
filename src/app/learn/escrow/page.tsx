import type { Metadata } from "next";
import EscrowContent from "@/app/escrow/EscrowContent";

export const metadata: Metadata = {
  title: "XRP Escrow — How Ripple's Escrow System Works",
  description: "Learn how Ripple's XRP escrow system works, its monthly release schedule, and its impact on XRP supply.",
  alternates: { canonical: "https://allaboutxrp.com/learn/escrow" },
};

export default function EscrowLearnPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-20">
        <EscrowContent />
      </div>
    </div>
  );
}
