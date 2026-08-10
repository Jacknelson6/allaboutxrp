export default function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-mark" aria-hidden="true" data-compact={compact ? "true" : "false"}>
      <span className="brand-mark-monogram">A/X</span>
      <span className="brand-mark-name"><span>ALL ABOUT</span><strong>XRP</strong></span>
    </span>
  );
}
