import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/content/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* כותרות — סריף כבד, עברית ואנגלית מאותה משפחה */
const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-frank-ruhl",
  display: "swap",
});

/* גוף עברי */
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-heebo",
  display: "swap",
});

/* גוף אנגלי */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — מעטפת לאדם ולקהילה`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  /* canonical יחסי — Next פותר אותו מול metadataBase לכל נתיב בנפרד,
     כך שכל עמוד מקבל canonical משלו בלי לחזור על עצמו בכל קובץ. */
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/assets/brand/app-icon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frankRuhlLibre.variable} ${heebo.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="skip-link">
          דילוג לתוכן הראשי
        </a>
        <Navbar />
        <main id="main" className="relative z-[2] flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
