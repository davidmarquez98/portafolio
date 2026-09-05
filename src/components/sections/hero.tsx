import {ArrowDownRight, Download} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

import {homepageSections} from '@/content/homepage-sections';
import type {AppLocale} from '@/i18n/routing';
import {getAvailableResume} from '@/lib/resume';

type HeroProps = {
  locale: AppLocale;
};

export async function Hero({locale}: HeroProps) {
  const translations = await getTranslations({locale, namespace: 'Hero'});
  const resumePath = getAvailableResume(locale);

  return (
    <section
      data-testid="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-clip px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[var(--content-width)] grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-10 xl:col-span-9">
          <p className="mb-6 flex items-center gap-2.5 text-xs font-medium tracking-[0.06em] text-accent/90 sm:mb-8">
            <span aria-hidden="true" className="h-px w-6 bg-accent/70" />
            {translations('eyebrow')}
          </p>

          <h1
            id="hero-title"
            className="max-w-[17.5ch] text-[clamp(2.35rem,calc(4.5vw+1.5rem),5.35rem)] font-semibold leading-[0.99] tracking-[-0.045em] text-balance"
          >
            {translations('headline')}
          </h1>

          <p className="mt-6 max-w-[62ch] text-base leading-7 text-muted-foreground sm:mt-8 sm:text-lg sm:leading-8">
            {translations('supportingCopy')}
          </p>

          <p className="mt-4 text-sm font-semibold tracking-[0.02em] text-foreground sm:mt-5 sm:text-base">
            {translations('technologies')}
          </p>

          {homepageSections.work || resumePath ? (
            <div className="mt-9 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:items-center sm:mt-11">
              {homepageSections.work ? (
                <a
                  href="#work"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-control bg-foreground px-5 py-3 text-sm font-semibold text-page transition-[transform,background-color] hover:-translate-y-0.5"
                >
                  {translations('primaryCta')}
                  <ArrowDownRight aria-hidden="true" className="size-4" />
                </a>
              ) : null}

              {resumePath ? (
                <a
                  href={resumePath}
                  download
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-control border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-[transform,border-color] hover:-translate-y-0.5 hover:border-foreground/40"
                >
                  {translations('resumeCta')}
                  <Download aria-hidden="true" className="size-4" />
                </a>
              ) : null}
            </div>
          ) : null}

          <p className="mt-7 flex max-w-md items-start gap-3 text-sm leading-6 text-muted-foreground sm:mt-9">
            <span
              aria-hidden="true"
              className="mt-[0.45rem] size-2 shrink-0 rounded-full bg-accent"
            />
            {translations('availability')}
          </p>
        </div>
      </div>
    </section>
  );
}
