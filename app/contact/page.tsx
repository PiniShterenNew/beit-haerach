import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import { Icon, type IconName } from "@/components/ui/icon";
import { ContactForm } from "@/components/forms/contact-form";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "צור קשר",
  description: "פרטי התקשרות ופנייה ישירה לעזרת ישראל, חיפה.",
};

const channels: { icon: IconName; label: string; value: string; href?: string; needs: string }[] = [
  { icon: "phone", label: "טלפון", value: SITE.phone.value, href: `tel:${SITE.phone.value}`, needs: "phone" },
  { icon: "mail", label: "דוא״ל", value: SITE.email.value, href: `mailto:${SITE.email.value}`, needs: "email" },
  { icon: "location", label: "כתובת", value: SITE.address.value, needs: "address" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="צור קשר"
        title="נשמח לשמוע מכם"
        lede="לפנייה כללית, לשאלה על התנדבות, או לבקשת סיוע — אפשר להשאיר הודעה כאן ואנחנו נחזור אליכם."
      />

      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <h2 className="font-display text-h2">דרכי התקשרות</h2>

            <ul className="flex flex-col gap-1">
              {channels.map((channel) => (
                <li
                  key={channel.label}
                  className="flex items-start gap-4 border-b border-(--color-border-subtle) py-4"
                >
                  <span className="arch-badge shrink-0 bg-(--color-surface-gold) text-(--color-text-accent)" aria-hidden="true">
                    <Icon name={channel.icon} className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-caption text-(--color-text-tertiary)">{channel.label}</p>
                    <p className="text-body font-medium">
                      {channel.href ? (
                        <a href={channel.href} className="transition-colors hover:text-(--color-text-accent)">
                          <Placeholder needs={channel.needs}>{channel.value}</Placeholder>
                        </a>
                      ) : (
                        <Placeholder needs={channel.needs}>{channel.value}</Placeholder>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-body-sm text-(--color-text-secondary)">
              פרטי ההתקשרות מסומנים כמידע בהשלמה עד לאישורם הסופי מול הארגון.
            </p>
          </Reveal>

          <Reveal index={1} className="rounded-xl border border-(--color-border-subtle) bg-(--color-surface) p-6 shadow-bento md:p-8">
            <h2 className="mb-6 font-display text-h2">שליחת הודעה</h2>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
