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
    <div className="rounded-xl border border-white/[0.06] bg-[#0A0A0B] p-5 transition-all duration-200 hover:border-white/[0.1] hover:translate-y-[-1px]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-widest text-white/30">{label}</span>
        {icon && <span className="text-white/20">{icon}</span>}
      </div>
      <div className="mt-2 font-mono text-2xl font-bold text-text-primary tracking-tight">{value}</div>
      {change && (
        <div className={`mt-1.5 text-xs font-medium ${positive ? "text-success" : "text-danger"}`}>
          {change}
        </div>
      )}
    </div>
  );
}
