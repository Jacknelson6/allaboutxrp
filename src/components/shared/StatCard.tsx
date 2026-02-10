"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  icon?: React.ReactNode;
  delay?: number;
}

export default function StatCard({ label, value, change, positive, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="card-glow group relative rounded-2xl border border-surface-border/50 bg-surface-card/60 p-6 backdrop-blur-sm"
    >
      {/* Subtle top accent line */}
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-xrp-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-secondary/60">{label}</span>
        {icon && <span className="text-xrp-accent/30 group-hover:text-xrp-accent/60 transition-colors duration-300">{icon}</span>}
      </div>
      <div className="mt-3 font-mono text-2xl font-bold text-text-primary md:text-3xl tracking-tight">{value}</div>
      {change && (
        <div className={`mt-2.5 inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-bold ${
          positive ? "bg-success/8 text-success" : "bg-danger/8 text-danger"
        }`}>
          {change}
        </div>
      )}
    </motion.div>
  );
}
