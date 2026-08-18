export const SITE = {
  name: "מרכז קהילתי עזרת ישראל",
  shortName: "עזרת ישראל",
  url: "https://www.ezrat-israel.org.il",
  description:
    "מרכז קהילתי עזרת ישראל בחיפה — בית הארחה, מרפאות שיניים, כוללים וישיבה. פעילות קהילתית רציפה שמבוססת על כבוד אדם, המשכיות ואחריות.",
  city: "חיפה",
  legalName: "[נדרש אימות: שם משפטי מלא של העמותה]",
  registrationNumber: "[נדרש אימות: מספר עמותה]",
  section46: "[נדרש אימות: סטטוס סעיף 46]",
  phone: "[נדרש אימות: מספר טלפון]",
  whatsapp: "[נדרש אימות: מספר וואטסאפ]",
  email: "[נדרש אימות: כתובת דוא\"ל]",
  address: "[נדרש אימות: כתובת מלאה, חיפה]",
} as const;

export const PRIMARY_NAV = [
  { href: "/programs", label: "התוכניות שלנו" },
  { href: "/about", label: "מי אנחנו" },
  { href: "/stories", label: "סיפורים" },
  { href: "/transparency", label: "שקיפות" },
  { href: "/volunteer", label: "התנדבות" },
  { href: "/get-help", label: "קבלת סיוע" },
  { href: "/contact", label: "יצירת קשר" },
] as const;

export type ProgramId = "guesthouse" | "dental" | "kollels" | "yeshiva";

export interface Program {
  id: ProgramId;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  colorVar: string; // css var prefix, e.g. "sage"
  href: string;
}

export const PROGRAMS: Program[] = [
  {
    id: "guesthouse",
    slug: "guesthouse",
    name: "בית הארחה",
    shortName: "בית הארחה",
    tagline: "ארוחה חמה, שולחן, וכבוד אנושי — כל השנה.",
    summary:
      "מטבח פעיל שמבשל, אורז ומחלק ארוחות באופן קבוע, כולל ערבי שבת וחגים, לכל מי שזקוק לכך — ללא תיוג וללא בירוקרטיה מיותרת.",
    colorVar: "sage",
    href: "/programs/guesthouse",
  },
  {
    id: "dental",
    slug: "dental",
    name: "מרפאות שיניים",
    shortName: "מרפאות שיניים",
    tagline: "טיפול שיניים נגיש, באווירה מכבדת.",
    summary:
      "מרפאות המספקות טיפולי שיניים במחירים נגישים למשפחות ויחידים שעבורם טיפול שיניים פרטי אינו בהישג יד.",
    colorVar: "clinic",
    href: "/programs/dental",
  },
  {
    id: "kollels",
    slug: "kollels",
    name: "כוללים",
    shortName: "כוללים",
    tagline: "מרחב קבוע ללימוד תורה יומיומי.",
    summary:
      "כוללי לימוד המהווים בית קבוע לאברכים הלומדים תורה מדי יום, ומחזקים את המרקם הקהילתי סביב לימוד משותף.",
    colorVar: "kollel",
    href: "/programs/kollels",
  },
  {
    id: "yeshiva",
    slug: "yeshiva",
    name: "ישיבה",
    shortName: "ישיבה",
    tagline: "מסגרת חינוכית-תורנית לצעירים.",
    summary:
      "מסגרת לימודית המשלבת תורה, ליווי אישי וחינוך לחיים, ומהווה בית תורני קבוע לתלמידיה.",
    colorVar: "yeshiva",
    href: "/programs/yeshiva",
  },
];

export const CONVERSION = {
  donatePrimary: "לתרומה",
  donateSecondary: "עוזרים להכין את הארוחה הבאה",
  learnMore: "הכירו את הפעילות",
  howItWorks: "איך זה עובד",
  volunteer: "אני רוצה להתנדב",
  getHelp: "אני צריך עזרה",
} as const;
