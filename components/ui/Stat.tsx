import { StatCounter } from "./StatCounter";
import { Placeholder } from "./Placeholder";

export interface StatData {
  value: string;
  label: string;
  pending: boolean;
}

/** נתון שעדיין אין לו ערך — הקומפוננטה מציגה state מכוון ולא מספר מדומה. */
export function isEmpty(stat: StatData): boolean {
  return !stat.value || stat.value === "—";
}

type Tone = "light" | "dark" | "branch";
type Size = "lg" | "sm";

/**
 * יחידת נתון — מספר, תווית, ומצב "טרם פורסם".
 *
 * שני כללים שהיא אוכפת בכל מקום שבו מוצג נתון:
 *
 * 1. במובייל היחידה כולה ממורכזת — מספר, תווית והקונטיינר עצמו — כי מספר
 *    הוא תוכן שסורקים, לא תוכן שקוראים. מדסקטופ ומעלה היא חוזרת ליישור
 *    לתחילת השורה, כדי לא לשבור את הגריד הקיים.
 *
 * 2. נתון שטרם פורסם לא מוצג כמקף בגודל של מספר. מקף כזה נראה כמו נתון
 *    אמיתי שנשבר. במקומו מוצג תג "טרם פורסם" בטיפוגרפיה קטנה ומושתקת,
 *    שברור ממנו שזהו מצב ולא ערך.
 */
export function Stat({
  stat,
  tone = "light",
  size = "lg",
  color,
  needs,
  centerOnMobile = true,
}: {
  stat: StatData;
  tone?: Tone;
  size?: Size;
  /** צבע המספר כשה-tone הוא "branch" */
  color?: string;
  needs?: string;
  centerOnMobile?: boolean;
}) {
  const empty = isEmpty(stat);

  const align = centerOnMobile
    ? "items-center text-center md:items-start md:text-start"
    : "items-start text-start";

  const valueColor =
    tone === "dark"
      ? "text-(--color-gold-400)"
      : tone === "branch"
        ? undefined
        : "text-(--color-text-accent)";

  const labelColor = tone === "dark" ? "text-(--color-navy-200)" : "text-(--color-text-secondary)";

  const valueSize = size === "lg" ? "text-stat" : "text-h3";

  return (
    <div className={`flex flex-col gap-2 ${align}`}>
      {empty ? (
        <span
          className={`inline-flex items-center rounded-pill border px-3 py-1 text-caption font-medium ${
            tone === "dark"
              ? "border-white/25 text-(--color-navy-200)"
              : "border-(--color-border-default) text-(--color-text-tertiary)"
          }`}
        >
          טרם פורסם
        </span>
      ) : (
        <span
          className={`font-display font-black ${valueSize} ${valueColor ?? ""}`}
          style={tone === "branch" && color ? { color } : undefined}
        >
          <StatCounter value={stat.value} />
        </span>
      )}

      <span className={`text-body-sm ${labelColor}`}>
        {stat.pending && !empty ? (
          <Placeholder needs={needs}>{stat.label}</Placeholder>
        ) : (
          stat.label
        )}
      </span>
    </div>
  );
}
