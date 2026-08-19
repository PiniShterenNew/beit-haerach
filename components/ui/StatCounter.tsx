"use client";

import { useEffect, useRef, useState } from "react";

/** מפרק "~1,000" ל-{prefix:"~", target:1000, suffix:""} כדי שרק המספר יספור. */
function parse(value: string) {
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  if (!match) return null;
  const digits = Number(match[2].replace(/,/g, ""));
  if (!Number.isFinite(digits)) return null;
  return { prefix: match[1], target: digits, suffix: match[3] };
}

/**
 * מספר גדול שסופר כשהוא נכנס ל-viewport.
 *
 * requestAnimationFrame בלבד — בלי ספריות.
 *
 * הערך ההתחלתי הוא הערך הסופי, לא אפס: כך ה-HTML המוגש מהשרת נכון, ומשתמש
 * בלי JS, עם prefers-reduced-motion, או בדפדפן ללא IntersectionObserver רואה
 * את המספר האמיתי במקום "0" תקוע. האיפוס לאפס קורה רק כשידוע שהאנימציה
 * אכן תרוץ, ובפריים נפרד — לא באופן סינכרוני בתוך האפקט.
 */
export function StatCounter({
  value,
  className,
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!parsed) return;

    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const format = (n: number) =>
      `${parsed.prefix}${n.toLocaleString("he-IL")}${parsed.suffix}`;

    let frame = requestAnimationFrame(() => setDisplay(format(0)));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.disconnect();

          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(format(Math.round(parsed.target * eased)));
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} className={className} dir="ltr">
      {display}
    </span>
  );
}
