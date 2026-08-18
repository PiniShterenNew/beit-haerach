import { Mark } from "./mark";

export function Logo({
  tone = "brand",
  programLabel,
  className,
}: {
  tone?: "brand" | "mono" | "inverse";
  programLabel?: string;
  className?: string;
}) {
  const isInverse = tone === "inverse";
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <Mark tone={tone} className="h-10 w-auto shrink-0" titleId="logo-mark" />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[0.68rem] tracking-[0.18em] ${
            isInverse ? "text-(--color-gold-400)" : "text-(--color-gold-600)"
          }`}
        >
          מרכז קהילתי
        </span>
        <span
          className={`font-display text-xl font-medium ${
            isInverse ? "text-(--color-text-inverse)" : "text-(--color-text-primary)"
          }`}
        >
          עזרת ישראל
        </span>
        {programLabel ? (
          <span
            className={`mt-0.5 text-xs ${
              isInverse ? "text-(--color-text-inverse-muted)" : "text-(--color-text-secondary)"
            }`}
          >
            {programLabel}
          </span>
        ) : null}
      </span>
    </span>
  );
}

export function LogoCompact({
  tone = "brand",
  className,
}: {
  tone?: "brand" | "mono" | "inverse";
  className?: string;
}) {
  return <Mark tone={tone} className={className ?? "h-9 w-auto"} titleId="logo-mark-compact" />;
}
