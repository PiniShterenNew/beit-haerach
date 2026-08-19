import { SITE } from "@/lib/content/site";

/**
 * הסמל: קשת בתוך קשת — מעטפת שבתוכה נפתח פתח.
 *
 * גיאומטרי בלבד, לפי ה-anti-traits בבריף: בלי לב, בלי ידיים, בלי ניצוצות.
 * הקשת החיצונית היא ההגנה, הפנימית היא הדלת שנשארת פתוחה.
 * צבעים: נייבי + טרה בלבד — אין זהב בסמל הראשי.
 *
 * TODO — לוגו סופי: זהו placeholder גיאומטרי, לא ה-asset הסופי. כשיתקבל
 * public/assets/brand/logo-mark.svg, יש להחליף את ה-<svg> כאן ב-<Image>
 * שטוען את הקובץ (או NEXT_PUBLIC אחר), בלי לשנות את חתימת הקומפוננטה —
 * כל קריאה ל-<Logo>/<LogoMark> בשאר האתר תמשיך לעבוד ללא שינוי.
 * יש להבטיח תמיכה בארבע הגרסאות: brand · monochrome navy · white/inverse · mark only.
 */
export function LogoMark({ className, tone = "brand" }: { className?: string; tone?: "brand" | "inverse" }) {
  const shell = tone === "inverse" ? "var(--color-stone-50)" : "var(--color-navy-900)";
  const door = tone === "inverse" ? "var(--color-terra-300)" : "var(--color-terra-accessible)";

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
}: {
  tone?: "brand" | "inverse";
  className?: string;
}) {
  const nameColor = tone === "inverse" ? "text-(--color-text-inverse)" : "text-(--color-text-primary)";
  const subColor = tone === "inverse" ? "text-(--color-accent-on-deep)" : "text-(--color-text-accent)";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark tone={tone} className="h-9 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold tracking-tight ${nameColor}`}>
          {SITE.name}
        </span>
        {/* Tagline: בדסקטופ בלבד. ב-navbar המובייל מוצג רק סמל + שם. */}
        <span className={`mt-1 hidden text-[0.6875rem] font-medium tracking-[0.06em] sm:block ${subColor}`}>
          {SITE.tagline}
        </span>
      </span>
    </span>
  );
}
