import type { ReactNode } from "react";

/**
 * מידע שטרם אומת.
 *
 * לפי הבריף — כל מספר, שם או פרט משפטי שלא אושר חייב להיראות כמו מה שהוא.
 * קו מקווקו + title מסבירים לקורא שהערך זמני, בלי לשבור את זרימת המשפט,
 * ו-`data-needs` משאיר לצוות עקבה למה בדיוק צריך להשלים.
 */
export function Placeholder({
  children,
  needs,
  note = "נתון בהשלמה — טרם אומת רשמית",
}: {
  children: ReactNode;
  needs?: string;
  note?: string;
}) {
  return (
    <span className="placeholder" data-needs={needs} title={note}>
      {children}
    </span>
  );
}
