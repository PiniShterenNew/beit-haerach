import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * תמונה בצורת קשת — ה-signature element.
 *
 * כל עוד לא הוזנה תמונה אמיתית, מוצג בלוק placeholder מכוון: משטח בגוון
 * הזרוע ובתוכו קשת מלאה בגוון עמוק יותר, עם תווית מפורשת של מה שאמור לשבת
 * כאן. לפי הבריף — בלי stock photos ובלי גרדיאנטים שמסתירים היעדר art
 * direction. הניגודיות בין שתי השכבות היא מה שגורם לבלוק להיקרא ככוונה
 * ולא כשטח ריק.
 *
 * יחסי גובה-רוחב לפי הבריף: 3:4 דסקטופ · 1:1 טאבלט · 4:5 מובייל.
 */
export function ArchImage({
  src,
  alt,
  label,
  tint = "var(--color-stone-100)",
  shape = "var(--color-stone-300)",
  ink = "var(--color-navy-600)",
  priority = false,
  ratio = "responsive",
  className,
}: {
  src?: string;
  alt?: string;
  /** תווית ה-placeholder — מה אמור להיות כאן */
  label?: string;
  /** רקע הבלוק */
  tint?: string;
  /** מילוי הקשת הפנימית — חייב להיות עמוק יותר מ-tint */
  shape?: string;
  /** קו המתאר והתווית */
  ink?: string;
  priority?: boolean;
  ratio?: "responsive" | "square" | "portrait" | "tall";
  className?: string;
}) {
  const ratioClass =
    ratio === "square"
      ? "aspect-square"
      : ratio === "portrait"
        ? "aspect-[3/4]"
        : ratio === "tall"
          ? "aspect-[4/5]"
          : "aspect-[4/5] md:aspect-square lg:aspect-[3/4]";

  const style: CSSProperties = { background: src ? undefined : tint };

  return (
    <div
      className={`arch-image relative w-full ${ratioClass} ${className ?? ""}`}
      style={style}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : (label ?? "תמונה בהמתנה")}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover"
        />
      ) : (
        <>
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 130"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* קשת פנימית מלאה — נותנת דמות-רקע במקום שטח ריק */}
            <path
              d="M26,130 L26,50 C26,34 36,23 50,23 C64,23 74,34 74,50 L74,130"
              fill={shape}
            />
            {/* קו מתאר חיצוני */}
            <path
              d="M12,130 L12,46 C12,24 29,10 50,10 C71,10 88,24 88,46 L88,130"
              fill="none"
              stroke={ink}
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              opacity="0.45"
            />
          </svg>

          {label ? (
            <span
              className="absolute inset-x-5 bottom-6 text-center text-caption"
              style={{ color: ink, opacity: 0.75 }}
            >
              {label}
            </span>
          ) : null}
        </>
      )}
    </div>
  );
}
