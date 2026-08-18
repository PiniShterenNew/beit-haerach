export function ImpactMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-4xl text-(--color-navy-950) md:text-5xl">{value}</span>
      <span className="text-sm text-(--color-text-secondary)">{label}</span>
    </div>
  );
}
