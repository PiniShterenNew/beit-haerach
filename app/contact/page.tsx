import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import { Icon } from "@/components/ui/icon";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "יצירת קשר",
  description: "פרטי התקשרות למרכז קהילתי עזרת ישראל בחיפה.",
};

export default function ContactPage() {
  return (
    <Section className="pt-12 md:pt-16">
      <SectionHeader level="h1" eyebrow="יצירת קשר" title="נשמח לשמוע מכם" />
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-6">
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-base text-(--color-text-primary)">
            <Icon name="phone" className="h-5 w-5 text-(--color-gold-600)" />
            {SITE.phone}
          </a>
          <a href={`https://wa.me/${SITE.whatsapp}`} className="flex items-center gap-3 text-base text-(--color-text-primary)">
            <Icon name="whatsapp" className="h-5 w-5 text-(--color-gold-600)" />
            וואטסאפ: {SITE.whatsapp}
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-base text-(--color-text-primary)">
            <Icon name="mail" className="h-5 w-5 text-(--color-gold-600)" />
            {SITE.email}
          </a>
          <div className="flex items-center gap-3 text-base text-(--color-text-primary)">
            <Icon name="location" className="h-5 w-5 text-(--color-gold-600)" />
            {SITE.address}
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
