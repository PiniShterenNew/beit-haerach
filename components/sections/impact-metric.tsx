import { revealStyle } from "@/lib/motion";

export function ImpactMetric({
  value,
  label,
  index = 0,
}: {
  value: string;
  label: string;
  index?: number;
}) {
  return (
    <div className="reveal-item flex flex-col gap-1" style={{ ...revealStyle(index)}}>
      <span className="font-display text-3xl leading-[1.1] tracking-[-0.01em] text-(--color-navy-950) break-words md:text-4xl lg:text-5xl">{value}</span>
      <span className="text-sm text-(--color-text-secondary)">{label}</span>
    </div>
  );
}
