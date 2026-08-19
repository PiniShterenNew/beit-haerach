import type { Metadata } from "next";
import localFont from "next/font/local";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/content/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* פונט המותג — Suez One (SIL OFL 1.1, ראו app/fonts/suez-one/OFL.txt).
   משמש רק דרך --font-brand: שם המותג, H1, כותרות Section מרכזיות. */
const suezOne = localFont({
  src: "./fonts/suez-one/SuezOne-Regular.ttf",
  weight: "400",
  variable: "--font-suez-one",
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
      className={`${suezOne.variable} ${heebo.variable} ${inter.variable}`}
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
