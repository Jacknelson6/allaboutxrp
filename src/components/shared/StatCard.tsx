interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  icon?: React.ReactNode;
}

export default function StatCard({ label, value, change, positive, icon }: StatCardProps) {
  return (
    <div className="rounded-xl border border-surface-border bg-surface-card p-5 transition-colors hover:bg-surface-elevated">
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-secondary">{label}</span>
        {icon && <span className="text-text-secondary">{icon}</span>}
      </div>
      <div className="mt-2 text-2xl font-bold font-display text-text-primary">{value}</div>
      {change && (
        <div className={`mt-1 text-sm font-medium ${positive ? "text-success" : "text-danger"}`}>
          {change}
        </div>
      )}
    </div>
  );
}
