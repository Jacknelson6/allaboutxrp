"use client";

const TIERS = [
  { name: "Plankton", emoji: "🫧", min: 0, max: 10, color: "#0085FF" },
  { name: "Seahorse", emoji: "🪸", min: 10, max: 100, color: "#00BA7C" },
  { name: "Starfish", emoji: "⭐", min: 100, max: 500, color: "#a855f7" },
  { name: "Swordfish", emoji: "🐡", min: 500, max: 1000, color: "#22d3ee" },
  { name: "Barracuda", emoji: "🐟", min: 1000, max: 5000, color: "#3b82f6" },
  { name: "Orca", emoji: "🐋", min: 5000, max: 10000, color: "#6366f1" },
  { name: "Megalodon", emoji: "🦈", min: 10000, max: 50000, color: "#1e40af" },
  { name: "Kraken", emoji: "🐙", min: 50000, max: Infinity, color: "#71767B" },
];

export { TIERS };

export default function TierChart() {
  return (
    <section className="mt-8 rounded-xl border border-white/[0.06] p-6" aria-label="XRP Holder Tiers">
      <h2 className="text-xl font-bold text-text-primary mb-1">XRP Holder Tiers</h2>
      <p className="text-sm text-text-secondary mb-6">Community-created XRP holder rankings</p>

      <div className="space-y-2">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className="flex items-center gap-4 rounded-lg border border-white/[0.06] p-3 hover:bg-white/[0.02] transition-colors"
          >
            <div className="text-2xl shrink-0">{tier.emoji}</div>
            <div className="flex-1 min-w-0">
              <span className="font-bold text-text-primary">{tier.name}</span>
            </div>
            <div className="text-right shrink-0">
              <span className="font-mono text-sm text-text-secondary">
                {tier.max === Infinity
                  ? `${tier.min.toLocaleString()}+`
                  : tier.min === 0
                    ? `< ${tier.max.toLocaleString()}`
                    : `${tier.min.toLocaleString()} – ${tier.max.toLocaleString()}`}
              </span>
              <span className="block text-[10px] text-text-secondary/60 font-mono">XRP</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
