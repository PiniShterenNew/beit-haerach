import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArchImage } from "@/components/ui/ArchImage";
import { BentoGrid, BentoCell } from "@/components/ui/BentoGrid";
import { Stat } from "@/components/ui/Stat";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/icon";
import { BRANCH_DETAIL, CTA, type Branch } from "@/lib/content/site";

/**
 * תבנית עמוד זרוע.
 *
 * כל ארבע הזרועות חולקות מבנה אחד — hero פנימי בצבע הזרוע, תיאור editorial,
 * מה כולל, סטטיסטיקות, עדויות ו-CTA ייעודי — כדי שהאתר לא ייקרא כארבעה
 * אתרים נפרדים. מה שמשתנה בין הזרועות הוא הצבע והתוכן בלבד.
 */
export function BranchPage({ branch }: { branch: Branch }) {
  const detail = BRANCH_DETAIL[branch.id];

  return (
    <>
      <PageHero
        eyebrow="תחומי פעילות"
        title={branch.name}
        lede={branch.tagline}
        accent={branch.textColor}
        breadcrumb={[{ href: "/programs", label: "תחומי פעילות" }]}
      />

      {/* תיאור הפעילות */}
      <Section tone="canvas">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            {detail.intro.map((paragraph) => (
              <p key={paragraph} className="text-body text-(--color-text-secondary)">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal index={1} className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <ArchImage
              tint={branch.tint}
              shape={branch.shade}
              ink={branch.textColor}
              label={detail.imageLabel}
            />
          </Reveal>
        </div>
      </Section>

      {/* מה כולל */}
      <Section tone="surface">
        <Reveal className="mb-10 flex max-w-2xl flex-col gap-3 md:mb-14">
          <Eyebrow>מה כולל</Eyebrow>
          <h2 className="font-display text-h2">איך זה עובד בפועל</h2>
        </Reveal>

        <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {detail.highlights.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              index={i}
              className="flex items-start gap-4 border-b border-(--color-border-subtle) py-6"
            >
              <span
                className="arch-badge shrink-0"
                style={{ background: branch.tint, color: branch.textColor }}
                aria-hidden="true"
              >
                <Icon name={item.icon as IconName} className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-display text-h3">{item.title}</h3>
                <p className="mt-1 text-body-sm text-(--color-text-secondary)">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* סטטיסטיקות */}
      <Section tone="deep">
        <Reveal className="mb-10 flex flex-col gap-3 text-center md:max-w-2xl md:text-start">
          <Eyebrow tone="inverse">במספרים</Eyebrow>
          <h2 className="font-display text-h2 text-white">היקף הפעילות</h2>
        </Reveal>

        <BentoGrid>
          {detail.stats.map((stat, i) => (
            <BentoCell
              key={stat.label}
              span="narrow"
              fill="deep"
              index={i}
              className="border border-white/10 !bg-white/[0.04]"
            >
              <Stat stat={stat} tone="dark" needs={`${branch.id}-stat-${i}`} />
            </BentoCell>
          ))}
        </BentoGrid>

        <Reveal className="mt-8">
          <p className="text-caption text-(--color-navy-300) text-center md:text-start">
            * נתונים המסומנים בקו מקווקו טרם אומתו רשמית ויעודכנו עם אישורם.
          </p>
        </Reveal>
      </Section>

      {/* עדויות — בהמתנה לחומר מאושר */}
      <Section tone="warm" width="narrow" className="text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <SectionDivider />
          <h2 className="font-display text-h2">סיפורים מהשטח</h2>
          <p className="text-body text-(--color-text-secondary)">
            עדויות של אנשים שקיבלו סיוע מ{branch.name} יפורסמו כאן רק באישורם המפורש. עד אז אנחנו
            בוחרים שלא לפרסם תיאור שניתן לזהות לפיו אדם — זה חלק מאותו כבוד שהמעטפת נבנתה סביבו.
          </p>
          <Button href="/stories" variant="ghost" blockOnMobile>
            לסיפורים שפורסמו באישור
          </Button>
        </Reveal>
      </Section>

      {/* CTA ייעודי */}
      <Section tone="canvas" width="default" className="text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-display text-h2 text-balance">
            תרומה ל{branch.name} נכנסת ישירות לפעילות
          </h2>
          <p className="max-w-lg text-body text-(--color-text-secondary)">
            אפשר לתרום לזרוע הזו באופן ייעודי, או לכלל הפעילות של המעטפת.
          </p>
          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:justify-center">
            <Button href="/donate" variant="donate" blockOnMobile>
              {CTA.donate}
            </Button>
            <Button href="/volunteer" variant="ghost" blockOnMobile>
              להתנדב ב{branch.name}
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
