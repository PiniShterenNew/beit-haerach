import { SITE } from "@/lib/content/site";

/**
 * הסמל: קשת בתוך קשת — מעטפת שבתוכה נפתח פתח.
 *
 * גיאומטרי בלבד, לפי ה-anti-traits בבריף: בלי לב, בלי ידיים, בלי ניצוצות.
 * הקשת החיצונית היא ההגנה, הפנימית היא הדלת שנשארת פתוחה.
 */
export function LogoMark({ className, tone = "brand" }: { className?: string; tone?: "brand" | "inverse" }) {
  const shell = tone === "inverse" ? "var(--color-stone-50)" : "var(--color-navy-900)";
  const door = tone === "inverse" ? "var(--color-gold-400)" : "var(--color-gold-600)";

  return (
    <svg viewBox="0 0 48 56" className={className} fill="none" aria-hidden="true">
      {/* קשת חיצונית — המעטפת */}
      <path
        d="M4 54V24C4 12.954 12.954 4 24 4C35.046 4 44 12.954 44 24V54"
        stroke={shell}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* קשת פנימית — הפתח */}
      <path d="M17 54V27C17 23.134 20.134 20 24 20C27.866 20 31 23.134 31 27V54Z" fill={door} />
    </svg>
  );
}

export function Logo({
  tone = "brand",
  className,
  compact = false,
}: {
  tone?: "brand" | "inverse";
  className?: string;
  /** מסתיר את שורת התיאור מתחת ל-380px, שם היא דוחפת את הכותרת מעבר לרוחב */
  compact?: boolean;
}) {
  const nameColor = tone === "inverse" ? "text-(--color-text-inverse)" : "text-(--color-text-primary)";
  const subColor = tone === "inverse" ? "text-(--color-gold-300)" : "text-(--color-text-accent)";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark tone={tone} className="h-9 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold tracking-tight ${nameColor}`}>
          {SITE.name}
        </span>
        <span
          className={`mt-1 text-[0.6875rem] font-medium tracking-[0.06em] ${subColor} ${
            compact ? "hidden min-[380px]:block" : ""
          }`}
        >
          {SITE.tagline}
        </span>
      </span>
    </span>
  );
}
