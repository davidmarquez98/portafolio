import {getTranslations} from 'next-intl/server';

import type {AppLocale} from '@/i18n/routing';

type ExpertiseProps = {
  locale: AppLocale;
};

const expertiseAreas = [
  'backend',
  'distributed',
  'data',
  'security',
  'testing',
  'frontend',
  'delivery'
] as const;

export async function Expertise({locale}: ExpertiseProps) {
  const translations = await getTranslations({locale, namespace: 'Expertise'});

  return (
    <section
      id="expertise"
      data-testid="expertise"
      aria-labelledby="expertise-title"
      className="scroll-mt-20 border-t border-border px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:pb-28 lg:pt-24"
    >
      <div className="mx-auto max-w-[var(--content-width)]">
        <header className="grid gap-6 pb-10 sm:pb-12 lg:grid-cols-12 lg:gap-8 lg:pb-14">
          <h2
            id="expertise-title"
            className="flex items-center gap-3 self-start text-xs font-semibold uppercase tracking-[0.14em] text-accent lg:col-span-4"
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
            {translations('heading')}
          </h2>
          <p className="max-w-[32ch] text-[clamp(1.9rem,3.2vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.04em] text-balance lg:col-span-8">
            {translations('lead')}
          </p>
        </header>

        <ul className="grid border-b border-border md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-10">
          {expertiseAreas.map((area) => (
            <li key={area} className="border-t border-border py-7 sm:py-8 lg:py-9">
              <h3 className="text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                {translations(`areas.${area}.title`)}
              </h3>
              <p className="mt-3 max-w-[32ch] text-[0.9375rem] leading-8 text-muted-foreground sm:text-base sm:leading-7">
                {translations(`areas.${area}.technologies`)}
              </p>
            </li>
          ))}
        </ul>

        <div className="border-b border-border py-7 sm:py-8 lg:flex lg:items-baseline lg:gap-8 lg:py-9">
          <h3 className="text-sm font-semibold tracking-[-0.015em] text-muted-foreground lg:w-[calc((100%-5rem)/3)]">
            {translations('additional.title')}
          </h3>
          <p className="mt-3 max-w-[58ch] text-sm leading-7 text-muted-foreground lg:mt-0">
            {translations('additional.technologies')}
          </p>
        </div>
      </div>
    </section>
  );
}
