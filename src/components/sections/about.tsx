import {getTranslations} from 'next-intl/server';

import type {AppLocale} from '@/i18n/routing';

type AboutProps = {
  locale: AppLocale;
};

export async function About({locale}: AboutProps) {
  const translations = await getTranslations({locale, namespace: 'About'});

  return (
    <section
      id="about"
      data-testid="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 border-t border-border px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-[var(--content-width)] gap-10 lg:grid-cols-12 lg:gap-8">
        <header className="lg:col-span-4">
          <h2
            id="about-title"
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent"
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
            {translations('heading')}
          </h2>
        </header>

        <div className="lg:col-span-8 xl:col-span-7">
          <p className="max-w-[24ch] text-[clamp(1.9rem,3.2vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.04em] text-balance">
            {translations('lead')}
          </p>

          <p className="mt-7 max-w-[66ch] text-[1.0625rem] leading-7 text-muted-foreground sm:mt-8 sm:text-lg sm:leading-8">
            {translations('body')}
          </p>

          <dl className="mt-8 grid gap-6 border-y border-border py-7 sm:grid-cols-2 sm:gap-8 sm:py-8">
            <div>
              <dt className="text-sm leading-6 text-muted-foreground">
                {translations('facts.experience.label')}
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-[-0.035em]">
                {translations('facts.experience.value')}
              </dd>
            </div>
            <div>
              <dt className="text-sm leading-6 text-muted-foreground">
                {translations('facts.english.label')}
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-[-0.035em]">
                {translations('facts.english.value')}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
