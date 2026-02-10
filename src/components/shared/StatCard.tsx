"use client";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  icon?: React.ReactNode;
  delay?: number;
}

export default function StatCard({ label, value, change, positive, icon }: StatCardProps) {
  return (
    <div className="rounded-xl border border-surface-border p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-text-secondary">{label}</span>
        {icon && <span className="text-text-secondary">{icon}</span>}
      </div>
      <div className="mt-2 font-mono text-2xl font-bold text-text-primary">{value}</div>
      {change && (
        <div className={`mt-1.5 text-xs font-semibold ${positive ? "text-success" : "text-danger"}`}>
          {change}
        </div>
      )}
    </div>
  );
}
