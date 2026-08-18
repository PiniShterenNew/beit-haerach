import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/sections/program-page-template";
import { PROGRAMS } from "@/lib/content/site";

const program = PROGRAMS.find((p) => p.id === "kollels")!;

export const metadata: Metadata = {
  title: program.name,
  description: program.summary,
};

export default function KollelsPage() {
  return (
    <ProgramPageTemplate
      program={program}
      heroAssetId="img.program.kollels.hero"
      intro={[
        "הכוללים מהווים בית קבוע ללימוד תורה יומיומי, ומאפשרים לאברכים לשמור על מסגרת לימוד רציפה תוך תמיכה קהילתית.",
        "[נדרש אימות: מספר הכוללים הפעילים, מספר הלומדים, ולוח הזמנים המדויק].",
      ]}
      highlights={[
        { icon: "torah", title: "לימוד יומיומי", description: "מסגרת לימוד קבועה, יום אחר יום." },
        { icon: "community", title: "מרקם קהילתי", description: "חיזוק הקשר הקהילתי סביב לימוד משותף." },
        { icon: "calendar", title: "סדר יום קבוע", description: "[נדרש אימות: סדרי הלימוד ולוחות הזמנים]." },
      ]}
      faq={[
        { question: "איך מצטרפים ללימוד בכולל?", answer: "ניתן לפנות דרך עמוד יצירת הקשר לקבלת פרטים על הצטרפות." },
        { question: "כמה כוללים פועלים כיום?", answer: "[נדרש אימות: מספר הכוללים הפעילים כיום]." },
      ]}
    />
  );
}
