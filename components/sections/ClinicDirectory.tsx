import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/icon";
import { DENTAL_CLINICS } from "@/lib/content/site";

/**
 * מדריך המרפאות — צפת וביתר עילית.
 *
 * כרטיס לכל סניף: זהות הסניף (עיר + טלפון) ממורכזת במובייל, ורשימת הצוות
 * מתחתיה נשארת RTL ומיושרת להתחלה — זו תוכן קריאה, לא תוכן הצגה.
 */
export function ClinicDirectory() {
  return (
    <Section tone="warm">
      <Reveal className="section-head mx-auto flex max-w-2xl flex-col items-center gap-3 text-center sm:items-start sm:text-start">
        <Eyebrow>המרפאות שלנו</Eyebrow>
        <h2 className="font-display text-h2">הצוות בכל סניף</h2>
        <p className="max-w-[38ch] text-body text-(--color-text-secondary) sm:max-w-none">
          שני סניפים, כל אחד עם צוות רופאים קבוע. אפשר להתקשר ישירות לסניף הקרוב.
        </p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {DENTAL_CLINICS.map((clinic, i) => (
          <Reveal
            key={clinic.city}
            index={i}
            className="flex flex-col gap-6 rounded-xl border border-(--color-border-subtle) bg-(--color-surface) p-6 shadow-bento md:p-8"
          >
            {/* זהות הסניף — ממורכז במובייל */}
            <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-start">
              <span className="arch-badge bg-(--color-surface-accent) text-(--color-text-accent)" aria-hidden="true">
                <Icon name="location" className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="font-heading text-h3">מרפאת {clinic.city}</h3>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <a
                  href={`tel:${clinic.phoneDigits}`}
                  dir="ltr"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-(--color-border-default) px-3 text-body-sm font-semibold text-(--color-text-primary) transition-colors hover:bg-(--color-surface-warm)"
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-(--color-text-accent)" />
                  {clinic.phone}
                </a>
                {clinic.whatsapp ? (
                  <a
                    href={`https://wa.me/972${clinic.phoneDigits.replace(/^0/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-md border border-(--color-border-default) px-3 text-body-sm font-semibold text-(--color-text-primary) transition-colors hover:bg-(--color-surface-warm)"
                  >
                    <Icon name="whatsapp" className="h-4 w-4 shrink-0 text-(--color-branch-community-text)" />
                    וואטסאפ
                  </a>
                ) : (
                  <span className="text-caption text-(--color-text-tertiary)">שיחות טלפון בלבד</span>
                )}
              </div>
            </div>

            {/* צוות הסניף — תוכן קריאה, RTL מיושר להתחלה */}
            <ul className="flex flex-col gap-2.5 border-t border-(--color-border-subtle) pt-5">
              {clinic.staff.map((member) => (
                <li key={member.name} className="flex flex-col gap-0.5 text-body-sm">
                  <span className="font-medium text-(--color-text-primary)">{member.name}</span>
                  <span className="text-(--color-text-secondary)">{member.role}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <p className="text-caption text-(--color-text-tertiary)">
          פרטי הצוות מבוססים על רשימה פנימית שנמסרה לצורך האתר, ויעודכנו בהתאם לאישור הארגון.
        </p>
      </Reveal>
    </Section>
  );
}
