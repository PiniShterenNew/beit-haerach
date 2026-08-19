/**
 * מפריד קשת דקורטיבי.
 *
 * חצי-קשת פתוחה כלפי מטה — המעטפת שמתחתיה נכנס התוכן. משמש רק במעברים
 * editorial משמעותיים (ציטוט הכבוד, ה-CTA לתרומה), לא בין כל שני מקטעים.
 */
export function SectionDivider({
  tone = "default",
  className,
}: {
  /** "gold" נשאר למקטעי מורשת בלבד. "terra" הוא האקסנט הכללי החדש. */
  tone?: "default" | "gold" | "terra" | "inverse";
  className?: string;
}) {
  const color =
    tone === "gold"
      ? "text-(--color-gold-600)"
      : tone === "terra"
        ? "text-(--color-action-secondary)"
        : tone === "inverse"
          ? "text-(--color-accent-on-deep)"
          : "text-(--color-border-default)";

  return <div aria-hidden="true" className={`arch-divider ${color} ${className ?? ""}`} />;
}
