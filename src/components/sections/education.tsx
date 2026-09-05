import {getTranslations} from 'next-intl/server';

import type {AppLocale} from '@/i18n/routing';

type EducationProps = {
  locale: AppLocale;
};

const educationItems = [
  'westminster',
  'mentoring',
  'platzi'
] as const;

export async function Education({locale}: EducationProps) {
  const translations = await getTranslations({locale, namespace: 'Education'});

  return (
    <section
      id="education"
      data-testid="education"
      aria-labelledby="education-title"
      className="scroll-mt-20 border-t border-border px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[var(--content-width)]">
        <header className="grid gap-5 pb-8 sm:pb-10 lg:grid-cols-12 lg:gap-8 lg:pb-12">
          <h2
            id="education-title"
            className="flex items-center gap-3 self-start text-xs font-semibold uppercase tracking-[0.14em] text-accent lg:col-span-4"
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
            {translations('heading')}
          </h2>
          <p className="max-w-[34ch] text-[clamp(1.65rem,2.6vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.035em] lg:col-span-8">
            {translations('lead')}
          </p>
        </header>

        <ul className="grid border-b border-border md:grid-cols-3 md:gap-x-8 lg:gap-x-10">
          {educationItems.map((item) => (
            <li key={item} className="border-t border-border py-6 sm:py-7">
              <h3 className="text-base font-semibold tracking-[-0.015em] sm:text-lg">
                {translations(`items.${item}.institution`)}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-[0.9375rem]">
                {translations(`items.${item}.details`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
