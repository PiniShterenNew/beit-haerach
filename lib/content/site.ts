/* ==========================================================================
   שכבת תוכן — עזרת ישראל

   כלל ברזל: אין המצאת מידע. כל נתון שלא אומת מסומן `pending: true` ומוצג
   דרך <Placeholder>, שמסמן אותו ויזואלית כמידע בהשלמה.
   ========================================================================== */

export const SITE = {
  name: "עזרת ישראל",
  fullName: "מרכז קהילתי עזרת ישראל",
  url: "https://www.ezrat-israel.org.il",
  description:
    "מעטפת קהילתית לאדם — בגוף, ברוח ובחיים היומיומיים. בית הארחה, מרפאות שיניים, תורה וחינוך ופעילות קהילתית, בחיפה.",
  tagline: "מעטפת לאדם ולקהילה",
  city: "חיפה",
  /* פרטים משפטיים — בהשלמה */
  legalName: { value: "עמותת עזרת ישראל", pending: true },
  registrationNumber: { value: "58-0000000", pending: true },
  section46: { value: "אישור סעיף 46 בתוקף", pending: true },
  properManagement: { value: "אישור ניהול תקין בתוקף", pending: true },
  address: { value: "רח׳ הרב הרצוג 8, חיפה", pending: true },
  phone: { value: "04-000-0000", pending: true },
  email: { value: "info@ezrat-israel.org.il", pending: true },
} as const;

/* -------------------------------------------------------------------------- */

export type BranchId = "hospitality" | "dental" | "torah" | "community";

export interface Branch {
  id: BranchId;
  slug: string;
  name: string;
  /** משפט אחד — מה הזרוע עושה */
  tagline: string;
  /** פסקה קצרה לכרטיס */
  summary: string;
  /** מפתח הצבע הסמנטי: --color-branch-{token} */
  token: BranchId;
  /** משתנה צבע מלא לשימוש ישיר בסגנון */
  color: string;
  /** רקע רך לכרטיס */
  tint: string;
  /** גוון ביניים — מילוי הקשת ב-ArchImage. חייב לשבת בין tint לבין color. */
  shade: string;
  /** גוון כהה — לכל טקסט בצבע הזרוע, ולמשטחים מלאים שנושאים טקסט לבן. */
  textColor: string;
  href: string;
}

export const BRANCHES: Branch[] = [
  {
    id: "hospitality",
    slug: "hospitality",
    name: "בית הארחה",
    tagline: "ארוחה מלאה, כבוד מלא — כמעט כל ימות השנה.",
    summary:
      "מטבח שמבשל, אורז ומחלק ארוחות מלאות למי שזקוק — בבית, בבית החולים, או ליד שולחן ערוך כאן.",
    token: "hospitality",
    color: "var(--color-branch-hospitality)",
    textColor: "var(--color-branch-hospitality-text)",
    tint: "var(--color-gold-50)",
    shade: "var(--color-gold-200)",
    href: "/programs/hospitality",
  },
  {
    id: "dental",
    slug: "dental",
    name: "מרפאות שיניים",
    tagline: "בריאות שהיא לא מותרות.",
    summary:
      "טיפולי שיניים בהישג ידה של משפחה, באווירה מכבדת ובלי שצריך להסביר למה.",
    token: "dental",
    color: "var(--color-branch-dental)",
    textColor: "var(--color-branch-dental-text)",
    tint: "var(--color-calm-50)",
    shade: "var(--color-calm-200)",
    href: "/programs/dental",
  },
  {
    id: "torah",
    slug: "torah",
    name: "תורה וחינוך",
    tagline: "כוללים וישיבה — מסגרת קבועה, יום אחר יום.",
    summary:
      "בית מדרש פתוח בשעות קבועות וישיבה שנותנת לצעיר מסגרת, ליווי אישי ומקום להיות בו.",
    token: "torah",
    color: "var(--color-branch-torah)",
    textColor: "var(--color-branch-torah-text)",
    tint: "var(--color-sage-50)",
    shade: "var(--color-sage-200)",
    href: "/programs/torah",
  },
  {
    id: "community",
    slug: "community",
    name: "פעילות קהילתית",
    tagline: "מה שנופל בין הכיסאות.",
    summary:
      "סיוע נקודתי למשפחות ויחידים ברגע קשה — לפני חג, אחרי אשפוז, או כשפשוט אין למי לפנות.",
    token: "community",
    color: "var(--color-branch-community)",
    textColor: "var(--color-branch-community-text)",
    tint: "var(--color-terra-50)",
    shade: "var(--color-terra-200)",
    href: "/programs/community",
  },
];

/* --------------------------------------------------------------------------
   ניווט
   -------------------------------------------------------------------------- */

export const NAV = [
  { href: "/about", label: "אודות" },
  {
    href: "/programs",
    label: "תחומי פעילות",
    children: BRANCHES.map((b) => ({ href: b.href, label: b.name })),
  },
  { href: "/impact", label: "השפעה" },
  { href: "/legacy", label: "מורשת" },
  { href: "/contact", label: "צור קשר" },
] as const;

export const FOOTER_LINKS = [
  { href: "/about", label: "אודות" },
  { href: "/programs", label: "תחומי פעילות" },
  { href: "/impact", label: "השפעה" },
  { href: "/legacy", label: "מורשת" },
  { href: "/transparency", label: "שקיפות" },
  { href: "/stories", label: "סיפורים" },
  { href: "/volunteer", label: "התנדבות" },
  { href: "/get-help", label: "קבלת סיוע" },
  { href: "/contact", label: "צור קשר" },
] as const;

/* --------------------------------------------------------------------------
   עמוד הבית — תוכן המקטעים
   -------------------------------------------------------------------------- */

export const HERO = {
  eyebrow: "כמעט ארבעה עשורים של מעטפת לאדם ולקהילה",
  headline: ["מעטפת לאדם.", "בגוף, ברוח", "ובחיים היומיומיים."],
  body: "מזון, בריאות, תורה וחינוך — הכל תחת קורת גג אחת של ארגון שנבנה כדי לתפוס אדם ברגע שהוא צריך עזרה.",
} as const;

export const MISSION = "לא צדקה. מעטפת קהילתית שתופסת אדם ברגע שהוא צריך.";

/** בית הארחה — הזרוע המתועדת ביותר */
export const HOSPITALITY = {
  eyebrow: "בית הארחה",
  headline: "345 ימים בשנה. ארוחה מלאה. כבוד מלא.",
  body: [
    "המטבח פועל כמעט בכל ימות השנה. מבשלים, אורזים, ומחלקים — לבתים, לבתי חולים, ולמי שמגיע לאכול כאן ליד שולחן ערוך.",
    "התכנון נעשה לפי משפחות ולא לפי מנות: כמה נפשות, מה מתאים, ולאן זה צריך להגיע. מתנדבים לוקחים חלק בכל שלב, מהבישול ועד הכתובת האחרונה.",
  ],
  stats: [
    { value: "~1,000", label: "מנות במבצע פסח", pending: true },
    { value: "~10,000", label: "פריטי מזון", pending: true },
    { value: "~100", label: "כתובות לחלוקה", pending: true },
  ],
} as const;

export const DIGNITY_QUOTE = {
  text: "דגים, מרק, עופות, בשר, תוספות, סלטים, קינוחים. לא נותנים לאדם ״משהו לאכול״ — נותנים לו ארוחה, ביתיות, והרגשה שמישהו דואג.",
  caption: "מתוך התיעוד הפנימי של הארגון",
} as const;

export const WHO_WE_HELP = {
  eyebrow: "למי אנחנו עוזרים",
  headline: "לא רק מי שאתם חושבים.",
  items: [
    { icon: "elder", label: "קשישים", note: "שנשארו לבד עם מטבח שקשה להם להפעיל." },
    { icon: "person", label: "אנשים בודדים", note: "שאין להם למי להגיד שהיה יום קשה." },
    { icon: "hospital", label: "חולים ומאושפזים", note: "ובני משפחה שמלווים אותם ולא יוצאים לאכול." },
    { icon: "family", label: "משפחות בתקופה קשה", note: "פיטורים, מחלה, גירושין — תקופה, לא גזר דין." },
    { icon: "meal", label: "מי שזמנית לא יכול", note: "אחרי ניתוח, אחרי לידה, בזמן שיפוץ שהשתבש." },
    { icon: "hands", label: "כל מי שצריך עזרה", note: "ברגע שהוא צריך אותה — לא אחרי מבחן זכאות." },
  ],
  note: "היה צעיר שלא נתפס כ׳עני׳, אבל לא הייתה לו אפשרות להכין לעצמו ולאשתו ארוחה לחג.",
} as const;

export const IMPACT = {
  eyebrow: "ההשפעה שלנו",
  headline: "המספרים שמאחורי המעטפת.",
  stats: [
    { value: "~40", label: "שנות פעילות", pending: true },
    { value: "345", label: "ימים בשנה", pending: false },
    { value: "—", label: "ארוחות שחולקו", pending: true },
    { value: "—", label: "משפחות מלוות", pending: true },
  ],
  note: "* חלק מהנתונים מבוססים על מסמכים היסטוריים. נתוני 2026 בעדכון.",
} as const;

export const LEGACY = {
  eyebrow: "מורשת",
  headline: "התפיסה שממשיכה עד היום.",
  body: [
    "הרב אברהם אטלס זצ״ל לא ניהל את הפעילות מהמשרד. הוא היה הולך לבדוק את מצב האנשים לפני שמתחילים את הסדר — כי אי אפשר לדעת מה מישהו צריך בלי ללכת ולראות.",
    "הגישה הזו נשארה ה-DNA של הארגון: קודם רואים את האדם, אחר כך בונים את המענה. לא הפוך.",
  ],
  transition: "זו לא היסטוריה. זו תפיסת עולם שפועלת כל יום.",
} as const;

export const TRANSPARENCY = {
  eyebrow: "שקיפות ואמון",
  headline: "ארגון פתוח. דלת פתוחה.",
  cards: [
    {
      icon: "document",
      title: "ניהול תקין",
      body: "אישור ניהול תקין מרשם העמותות",
      detail: SITE.properManagement,
    },
    {
      icon: "receipt",
      title: "סעיף 46",
      body: "זיכוי מס לתורם על פי סעיף 46 לפקודת מס הכנסה",
      detail: SITE.section46,
    },
    {
      icon: "location",
      title: "פועלים בחיפה",
      body: "המטבח, המרפאות ובית המדרש פועלים מהעיר",
      detail: SITE.address,
    },
  ],
} as const;

export const DONATE_CTA = {
  headline: "אפשר להיות חלק מהמעטפת.",
  body: "תרומה, התנדבות, או פנייה — כל דרך טובה.",
} as const;

export const CTA = {
  donate: "לתרומה",
  learnMore: "הכירו אותנו",
  contact: "צרו קשר",
} as const;

/* --------------------------------------------------------------------------
   עמודי הזרועות — תוכן מלא לכל עמוד פנימי
   -------------------------------------------------------------------------- */

export interface BranchDetail {
  intro: string[];
  highlights: { icon: string; title: string; body: string }[];
  stats: { value: string; label: string; pending: boolean }[];
  imageLabel: string;
}

export const BRANCH_DETAIL: Record<BranchId, BranchDetail> = {
  hospitality: {
    intro: [
      "בית הארחה הוא הזרוע הרחבה ביותר של המעטפת, והיא פועלת כמעט בכל ימות השנה. המטבח מבשל ארוחה מלאה — לא מנה, לא חטיף — ואורז אותה כך שתגיע חמה ושלמה.",
      "התכנון נעשה לפי משפחות: כמה נפשות, מה מתאים, ולאן זה צריך להגיע. מתנדבים לוקחים חלק בכל שלב, מהבישול ועד הכתובת האחרונה. לפני חגים ההיקף גדל משמעותית.",
    ],
    highlights: [
      { icon: "cooking", title: "בישול יומי", body: "מטבח פעיל שמכין ארוחות מלאות, כולל היערכות מוגברת לפני שבתות וחגים." },
      { icon: "package", title: "אריזה לפי משפחה", body: "כל חבילה נבנית לפי מספר הנפשות והצרכים, ולא לפי מנה סטנדרטית." },
      { icon: "delivery", title: "חלוקה עד הבית", body: "משלוחים לבתים ולבתי חולים, לצד אפשרות איסוף ואכילה במקום." },
      { icon: "hospital", title: "ליווי מאושפזים", body: "ארוחות לחולים ולבני משפחה שמלווים אותם ולא יוצאים לאכול." },
      { icon: "volunteer", title: "מתנדבים בכל שלב", body: "צוות מתנדבים קבוע לצד מתנדבים שמצטרפים לפני מועדים." },
      { icon: "calendar", title: "רציפות", body: "לא מבצע חד-פעמי — פעילות קבועה שנמשכת לאורך כל השנה." },
    ],
    stats: [
      { value: "~1,000", label: "מנות במבצע פסח", pending: true },
      { value: "~10,000", label: "פריטי מזון", pending: true },
      { value: "~100", label: "כתובות לחלוקה", pending: true },
    ],
    imageLabel: "תמונה — המטבח בזמן בישול ואריזה",
  },
  dental: {
    intro: [
      "טיפול שיניים הוא מהדברים הראשונים שנופלים כשהתקציב נגמר — והראשונים שנראים כלפי חוץ. אדם שנמנע מטיפול במשך שנים משלם על כך בבריאות, בביטחון ובתעסוקה.",
      "המרפאות מאפשרות טיפול במחיר שמשפחה יכולה לעמוד בו, באווירה מקצועית ומכבדת, בלי שהמטופל יצטרך להסביר למה הוא כאן.",
    ],
    highlights: [
      { icon: "dental", title: "טיפול מקצועי", body: "צוות רפואי מוסמך, בסטנדרט זהה לכל מרפאה — ההנחה היא במחיר, לא באיכות." },
      { icon: "family", title: "מחיר בהישג יד", body: "תמחור שנבנה כדי שמשפחה תוכל לטפל בכל בני הבית, ולא לבחור במי לטפל." },
      { icon: "home", title: "אווירה מכבדת", body: "בלי תורים משפילים ובלי מבחני זכאות מיותרים." },
    ],
    stats: [
      { value: "—", label: "מטופלים בשנה", pending: true },
      { value: "—", label: "טיפולים שבוצעו", pending: true },
      { value: "—", label: "כיסאות טיפול", pending: true },
    ],
    imageLabel: "תמונה — חדר הטיפולים",
  },
  torah: {
    intro: [
      "הכוללים והישיבה הם המסגרת הקבועה של המעטפת. בית מדרש שפתוח בשעות קבועות, ומסגרת לימודית לצעירים שמשלבת לימוד, ליווי אישי וחינוך לחיים.",
      "המסגרת הזו היא גם מה שמחזיק את הקהילה סביב הארגון — ומה שמאפשר לדעת מי צריך עזרה עוד לפני שהוא מבקש אותה.",
    ],
    highlights: [
      { icon: "torah", title: "בית מדרש קבוע", body: "לימוד יומי בשעות קבועות, עם מסגרת שמחזיקה אנשים לאורך שנים." },
      { icon: "graduation", title: "ישיבה לצעירים", body: "מסגרת יומית מלאה — שיעורים, חברותות, וליווי אישי לכל תלמיד." },
      { icon: "community", title: "עוגן קהילתי", body: "הלימוד המשותף הוא מה שמייצר את הרשת האנושית שמזהה מי זקוק לעזרה." },
    ],
    stats: [
      { value: "—", label: "אברכים בכוללים", pending: true },
      { value: "—", label: "תלמידי הישיבה", pending: true },
      { value: "—", label: "שעות לימוד שבועיות", pending: true },
    ],
    imageLabel: "תמונה — בית המדרש",
  },
  community: {
    intro: [
      "לא כל צורך נכנס לקטגוריה. משפחה אחרי אשפוז, אדם שנשאר לבד, צעיר שלא נתפס כ׳נזקק׳ אבל אין לו אפשרות להכין ארוחה לחג — אלה המקרים שנופלים בין הכיסאות.",
      "הזרוע הזו קיימת בדיוק בשבילם: סיוע נקודתי, מהיר ודיסקרטי, בלי בירוקרטיה ובלי שהפונה יצטרך להוכיח שמגיע לו.",
    ],
    highlights: [
      { icon: "hands", title: "סיוע נקודתי", body: "מענה מהיר לתקופה קשה — לא התחייבות לכל החיים, אלא גשר מעל רגע." },
      { icon: "candles", title: "לקראת מועדים", body: "היערכות מיוחדת לפני חגים, כשההוצאות גדלות והפערים נפתחים." },
      { icon: "transparency", title: "דיסקרטיות מלאה", body: "פנייה נשארת בין הפונה לבין הצוות. בלי רשימות ובלי חשיפה." },
    ],
    stats: [
      { value: "—", label: "פניות שטופלו", pending: true },
      { value: "—", label: "משפחות מלוות", pending: true },
      { value: "—", label: "מועדים בשנה", pending: true },
    ],
    imageLabel: "תמונה — פעילות קהילתית",
  },
};

export function getBranch(slug: string): Branch | undefined {
  return BRANCHES.find((b) => b.slug === slug);
}
