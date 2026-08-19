"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Scroll reveal — fade-up עדין.
 *
 * IntersectionObserver בלבד, בלי ספריות אנימציה. כל אלמנט נחשף פעם אחת
 * ומנתק את המשקיף, כדי שגלילה חוזרת לא תריץ שוב את התנועה.
 * `index` יוצר stagger של 100ms (80ms בתוך bento) עד מקסימום 6 אלמנטים,
 * כך שסדרה ארוכה לא נגררת לאיטיות.
 */
export function Reveal({
  children,
  index = 0,
  stagger = 100,
  as: Tag = "div",
  className,
  style,
}: {
  children: ReactNode;
  index?: number;
  stagger?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* דפדפן ללא IntersectionObserver — חושפים בפריים הבא ולא באופן
       סינכרוני, כדי לא לגרור רינדור מדורג. */
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-revealed={revealed ? "" : undefined}
      className={`reveal ${className ?? ""}`}
      style={{ "--reveal-delay": `${Math.min(index, 5) * stagger}ms`, ...style } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
