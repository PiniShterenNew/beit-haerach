import type { Metadata } from "next";
import { ProgramPageTemplate } from "@/components/sections/program-page-template";
import { PROGRAMS } from "@/lib/content/site";

const program = PROGRAMS.find((p) => p.id === "guesthouse")!;

export const metadata: Metadata = {
  title: program.name,
  description: program.summary,
};

export default function GuesthousePage() {
  return (
    <ProgramPageTemplate
      program={program}
      heroAssetId="img.program.guesthouse.hero"
      intro={[
        "בית הארחה הוא הפעילות הוותיקה והמוכרת ביותר של המרכז — מטבח פעיל שמבשל ומחלק ארוחות חמות מדי יום, לכל מי שזקוק, ללא תיוג וללא בירוקרטיה מיותרת.",
        "בערבי שבת וחג הפעילות גדלה משמעותית, כדי לוודא שגם אז יש לכל אחד שולחן וארוחה.",
      ]}
      highlights={[
        { icon: "cooking", title: "בישול יומיומי", description: "מטבח פעיל שמכין ארוחות חמות מדי יום בשנה." },
        { icon: "candles", title: "שבתות וחגים", description: "היערכות מוגברת לקראת כל שבת וחג, כולל פסח." },
        { icon: "delivery", title: "חלוקה ומשלוחים", description: "איסוף במקום או משלוח למי שאינו יכול להגיע." },
        { icon: "family", title: "ללא תיוג", description: "הסיוע פתוח למי שזקוק לו, מעבר להגדרה סטריאוטיפית של עוני." },
        { icon: "volunteer", title: "מבוסס מתנדבים", description: "חלק ניכר מהפעילות מתאפשר הודות למתנדבים קבועים." },
        { icon: "home", title: "שולחן וכבוד", description: "לא רק אוכל — נוכחות אנושית וכבוד." },
      ]}
      faq={[
        { question: "מי יכול לפנות לבית ההארחה?", answer: "כל מי שזקוק לארוחה — בלי צורך בהוכחת זכאות מורכבת. לפרטים ותיאום, ראו את עמוד קבלת הסיוע." },
        { question: "האם יש חלוקה גם בחגים?", answer: "כן — בערבי שבת וחג ההיקף גדל משמעותית, כולל היערכות מיוחדת לקראת פסח." },
        { question: "איך אפשר להתנדב?", answer: "יש טופס התנדבות ייעודי בעמוד ההתנדבות, עם אפשרות לבחור תחום: בישול, אריזה, חלוקה או אירועי חג." },
      ]}
    />
  );
}
