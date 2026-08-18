import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/sections/program-page-template";
import { PROGRAMS } from "@/lib/content/site";

const program = PROGRAMS.find((p) => p.id === "dental")!;

export const metadata: Metadata = {
  title: program.name,
  description: program.summary,
};

export default function DentalPage() {
  return (
    <ProgramPageTemplate
      program={program}
      heroAssetId="img.program.dental.hero"
      intro={[
        "טיפול שיניים פרטי הוא לעיתים קרובות מחוץ להישג ידן של משפחות רבות. מרפאות השיניים של המרכז הקהילתי מספקות מענה נגיש, מקצועי ומכבד.",
        "[נדרש אימות: היקף שירותים נוכחי, מחירון, וזמינות תורים].",
      ]}
      highlights={[
        { icon: "dental", title: "טיפולים נגישים", description: "[נדרש אימות: סוגי טיפולים ומחירים נוכחיים]." },
        { icon: "family", title: "למשפחות וליחידים", description: "מענה למי שעבורו טיפול שיניים פרטי אינו בהישג יד." },
        { icon: "document", title: "תיאום פשוט", description: "תהליך קביעת תור פשוט ומכבד — ללא סבך בירוקרטי." },
      ]}
      faq={[
        { question: "איך קובעים תור?", answer: "ניתן לפנות דרך עמוד יצירת הקשר או קבלת הסיוע, ונציג/ה יחזרו עם פרטי תיאום." },
        { question: "מהם הטיפולים הכלולים?", answer: "[נדרש אימות: פירוט טיפולים כלולים ומחירון עדכני]." },
      ]}
    />
  );
}
