"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const TIERS = [
  { name: "Plankton", emoji: "🫧", min: 0, max: 10, color: "#4a9eff", depth: "Surface", message: "Every ocean giant started microscopic" },
  { name: "Seahorse", emoji: "🪸", min: 10, max: 100, color: "#00d4aa", depth: "Tidal Pools", message: "Small but steady in the current" },
  { name: "Starfish", emoji: "⭐", min: 100, max: 500, color: "#a855f7", depth: "Reef Zone", message: "Five arms reaching for more" },
  { name: "Swordfish", emoji: "🐡", min: 500, max: 1000, color: "#22d3ee", depth: "Open Water", message: "Cutting through the waves" },
  { name: "Barracuda", emoji: "🐟", min: 1000, max: 5000, color: "#3b82f6", depth: "Deep Blue", message: "Fast, fierce, and focused" },
  { name: "Orca", emoji: "🐋", min: 5000, max: 10000, color: "#6366f1", depth: "The Abyss", message: "Apex of the ocean hierarchy" },
  { name: "Megalodon", emoji: "🦈", min: 10000, max: 50000, color: "#1e40af", depth: "Mariana Trench", message: "Ancient power, modern dominance" },
  { name: "Kraken", emoji: "🐙", min: 50000, max: Infinity, color: "#0f172a", depth: "The Void", message: "Legendary. Unstoppable. Mythical." },
];

export { TIERS };

function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const bubbles: { x: number; y: number; r: number; speed: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();

    for (let i = 0; i < 40; i++) {
      bubbles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        r: Math.random() * 4 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      bubbles.forEach((b) => {
        b.y -= b.speed;
        b.x += Math.sin(b.y * 0.02) * 0.3;
        if (b.y < -10) {
          b.y = canvas.offsetHeight + 10;
          b.x = Math.random() * canvas.offsetWidth;
        }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 163, 255, ${b.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export default function TierChart() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative mt-10 rounded-3xl overflow-hidden"
      aria-label="XRP Holder Tiers"
    >
      {/* Ocean gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a1628 0%, #041220 15%, #020c1a 40%, #010814 65%, #000510 85%, #00030a 100%)",
        }}
      />
      <BubbleCanvas />

      <div className="relative z-10 px-4 py-12 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            XRP Holder Tiers
          </h2>
          <p className="text-sm text-blue-300/70 mt-2">
            Dive deeper to discover your rank in the ocean
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="group relative"
            >
              <div
                className="relative flex items-center gap-4 rounded-2xl border border-white/[0.06] p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${tier.color}10 0%, transparent 60%)`,
                }}
              >
                {/* Depth indicator line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: `linear-gradient(180deg, ${tier.color}80, ${tier.color}20)` }}
                />

                {/* Emoji */}
                <div className="text-3xl sm:text-4xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {tier.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-display text-lg font-bold text-white">{tier.name}</span>
                    <span className="text-[10px] uppercase tracking-widest font-mono" style={{ color: `${tier.color}aa` }}>
                      {tier.depth}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 mt-0.5">{tier.message}</p>
                </div>

                {/* Range */}
                <div className="text-right flex-shrink-0">
                  <span className="font-mono text-sm font-semibold text-white/80">
                    {tier.max === Infinity
                      ? `${tier.min.toLocaleString()}+`
                      : tier.min === 0
                        ? `< ${tier.max.toLocaleString()}`
                        : `${tier.min.toLocaleString()} – ${tier.max.toLocaleString()}`}
                  </span>
                  <span className="block text-[10px] text-white/30 font-mono">XRP</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
