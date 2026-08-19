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
  tone?: "default" | "gold" | "inverse";
  className?: string;
}) {
  const color =
    tone === "gold"
      ? "text-(--color-action-secondary)"
      : tone === "inverse"
        ? "text-(--color-gold-300)"
        : "text-(--color-border-default)";

  return <div aria-hidden="true" className={`arch-divider ${color} ${className ?? ""}`} />;
}
