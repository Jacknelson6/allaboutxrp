export default function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-mark" aria-hidden="true" data-compact={compact ? "true" : "false"}>
      <span className="brand-mark-rule">I · II · X</span>
      <span className="brand-mark-name">ALL ABOUT XRP</span>
    </span>
  );
}
