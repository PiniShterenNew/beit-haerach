import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { StoryCard } from "@/components/sections/story-card";
import { Quote } from "@/components/sections/quote";

export const metadata: Metadata = {
  title: "סיפורים",
  description: "עדויות וסיפורים מהפעילות היומיומית של מרכז קהילתי עזרת ישראל.",
};

export default function StoriesPage() {
  return (
    <>
      <Section className="pt-12 md:pt-16">
        <SectionHeader
          level="h1"
          eyebrow="סיפורים"
          title="מאחורי כל ארוחה, כל טיפול וכל שיעור — יש אדם"
          lede="אנו בוחרים לשמור על כבודם ופרטיותם של מי שנעזרים בנו. הסיפורים הבאים יפורסמו רק לאחר אישור מפורש לפרסום."
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <StoryCard
            assetId="img.story.placeholder.01"
            tag="[נדרש אימות]"
            title="סיפור בהמתנה לאישור פרסום"
            excerpt="עם קבלת אישור מפורש מהמסופר/ת, יעודכן כאן סיפור אמיתי מהפעילות."
          />
          <StoryCard
            assetId="img.story.placeholder.02"
            tag="[נדרש אימות]"
            title="סיפור בהמתנה לאישור פרסום"
            excerpt="עם קבלת אישור מפורש מהמסופר/ת, יעודכן כאן סיפור אמיתי מהפעילות."
          />
          <StoryCard
            assetId="img.story.placeholder.03"
            tag="[נדרש אימות]"
            title="סיפור בהמתנה לאישור פרסום"
            excerpt="עם קבלת אישור מפורש מהמסופר/ת, יעודכן כאן סיפור אמיתי מהפעילות."
          />
        </div>
      </Section>

      <Section tone="muted">
        <div className="mx-auto max-w-2xl">
          <Quote text="הסיפור המשמעותי ביותר הוא זה שממשיך לקרות כל יום, גם כשאף אחד לא מצלם אותו." />
        </div>
      </Section>
    </>
  );
}
