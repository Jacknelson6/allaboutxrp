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
      className="card-glow rounded-xl border border-surface-border bg-surface-card/80 p-5 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-text-secondary">{label}</span>
        {icon && <span className="text-xrp-accent/50">{icon}</span>}
      </div>
      <div className="mt-3 font-mono text-2xl font-bold text-text-primary md:text-3xl">{value}</div>
      {change && (
        <div className={`mt-2 inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ${
          positive ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
        }`}>
          {change}
        </div>
      )}
    </motion.div>
  );
}
