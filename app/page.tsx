import { Hero } from "@/components/sections/Hero";
import { MissionStrip } from "@/components/sections/MissionStrip";
import { FourBranches } from "@/components/sections/FourBranches";
import { HospitalityDeep } from "@/components/sections/HospitalityDeep";
import { DignityQuote } from "@/components/sections/DignityQuote";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { ImpactNumbers } from "@/components/sections/ImpactNumbers";
import { Legacy } from "@/components/sections/Legacy";
import { Transparency } from "@/components/sections/Transparency";
import { DonateCTA } from "@/components/sections/DonateCTA";

/**
 * עמוד הבית.
 *
 * הקצב בנוי כספר שנפתח: פתיחה כהה (hero) → משפט מפתח כהה קצר → רוחב הפעילות
 * על קנבס בהיר (bento) → עומק בזרוע אחת על לבן → נשימה חמה (ציטוט) → מי
 * מקבל עזרה → מספרים על כהה → מורשת על זהב → שקיפות → סגירה כהה.
 *
 * אף שני מקטעים סמוכים אינם באותו משטח ובאותה עוצמה — זה מה שמונע מהעמוד
 * להיקרא כרצף של בלוקים זהים.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionStrip />
      <FourBranches />
      <HospitalityDeep />
      <DignityQuote />
      <WhoWeHelp />
      <ImpactNumbers />
      <Legacy />
      <Transparency />
      <DonateCTA />
    </>
  );
}
