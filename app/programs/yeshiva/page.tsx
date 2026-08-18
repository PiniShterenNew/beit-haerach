import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/sections/program-page-template";
import { PROGRAMS } from "@/lib/content/site";

const program = PROGRAMS.find((p) => p.id === "yeshiva")!;

export const metadata: Metadata = {
  title: program.name,
  description: program.summary,
};

export default function YeshivaPage() {
  return (
    <ProgramPageTemplate
      program={program}
      heroAssetId="img.program.yeshiva.hero"
      intro={[
        "הישיבה מהווה מסגרת חינוכית-תורנית לצעירים, המשלבת לימוד תורה, ליווי אישי וחינוך לחיים, ומספקת בית תורני קבוע לתלמידיה.",
        "[נדרש אימות: מספר תלמידים, מסלולי לימוד, וגילאי קבלה].",
      ]}
      highlights={[
        { icon: "graduation", title: "מסגרת חינוכית", description: "שילוב בין לימוד תורה לליווי אישי וחינוכי." },
        { icon: "torah", title: "לימוד תורני", description: "סדרי לימוד קבועים לאורך היום." },
        { icon: "family", title: "ליווי אישי", description: "[נדרש אימות: מבנה הליווי האישי לתלמידים]." },
      ]}
      faq={[
        { question: "איך נרשמים לישיבה?", answer: "לפרטי הרשמה ותנאי קבלה, ניתן לפנות דרך עמוד יצירת הקשר." },
        { question: "מהם מסלולי הלימוד?", answer: "[נדרש אימות: פירוט מסלולי הלימוד הקיימים]." },
      ]}
    />
  );
}
