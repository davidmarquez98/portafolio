import {ArrowUpRight} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

import {selectedWork, selectedWorkState} from '@/content/selected-work';
import type {AppLocale} from '@/i18n/routing';

type SelectedWorkProps = {
  locale: AppLocale;
};

export async function SelectedWork({locale}: SelectedWorkProps) {
  const translations = await getTranslations({locale, namespace: 'SelectedWork'});

  if (selectedWorkState !== 'published') return null;

  return (
    <section
      id="work"
      data-testid="selected-work"
      aria-labelledby="selected-work-title"
      className="scroll-mt-20 border-t border-border px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[var(--content-width)]">
        <header className="grid gap-6 pb-10 sm:pb-12 lg:grid-cols-12 lg:gap-8 lg:pb-14">
          <h2
            id="selected-work-title"
            className="flex items-center gap-3 self-start text-xs font-semibold uppercase tracking-[0.14em] text-accent lg:col-span-4"
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
            {translations('heading')}
          </h2>
          <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground lg:col-span-8">
            {translations('index')}
          </p>
        </header>

        <article className="border-y border-border py-10 sm:py-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:py-14">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold tracking-[0.02em] text-accent">
              {translations('subtitle')}
            </p>
            <h3 className="mt-3 text-[clamp(2.1rem,4vw,4rem)] font-medium leading-[1] tracking-[-0.05em] text-balance">
              {translations('name')}
            </h3>
          </div>

          <div className="mt-8 lg:col-span-8 lg:mt-0 xl:col-span-7">
            <p className="max-w-[62ch] text-[1.0625rem] leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {translations('description')}
            </p>

            <dl className="mt-8 grid gap-6 border-y border-border py-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7 sm:py-8">
              <div>
                <dt className="text-sm text-muted-foreground">
                  {translations('metadata.role.label')}
                </dt>
                <dd className="mt-1 text-base font-semibold tracking-[-0.02em]">
                  {translations('metadata.role.value')}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">
                  {translations('metadata.status.label')}
                </dt>
                <dd className="mt-1 flex items-center gap-2 text-base font-semibold tracking-[-0.02em]">
                  <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
                  {translations('metadata.status.value')}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm text-muted-foreground">
                  {translations('metadata.stack')}
                </dt>
                <dd className="mt-2 text-sm font-medium leading-7 text-foreground sm:text-base">
                  {selectedWork.stack.join(' · ')}
                </dd>
              </div>
            </dl>

            <a
              href={selectedWork.url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-control border border-foreground bg-foreground px-5 py-3 text-sm font-semibold text-page transition-colors hover:bg-transparent hover:text-foreground"
            >
              {translations('liveProject')}
              <ArrowUpRight aria-hidden="true" className="size-4" />
              <span className="sr-only"> {translations('opensInNewTab')}</span>
            </a>
          </div>
        </article>

        <div className="grid border-b border-border py-10 sm:py-12 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold tracking-[-0.025em] sm:text-xl">
              {translations('challenge.heading')}
            </h3>
          </div>
          <div className="mt-4 grid gap-7 lg:col-span-8 lg:mt-0 xl:col-span-7 xl:grid-cols-2 xl:gap-8">
            <p className="text-[0.9375rem] leading-7 text-muted-foreground sm:text-base">
              {translations('challenge.body')}
            </p>
            <div>
              <h3 className="text-sm font-semibold tracking-[-0.015em] text-foreground">
                {translations('solution.heading')}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-7 text-muted-foreground sm:text-base">
                {translations('solution.body')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid border-b border-border py-10 sm:py-12 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <h3 className="text-lg font-semibold tracking-[-0.025em] sm:text-xl lg:col-span-4">
            {translations('highlights.heading')}
          </h3>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7 lg:col-span-8 lg:mt-0 xl:col-span-7">
            {selectedWork.highlights.map((highlight, index) => (
              <li key={highlight} className="border-t border-border pt-4">
                <p className="text-xs font-medium tabular-nums tracking-[0.1em] text-accent">
                  0{index + 1}
                </p>
                <p className="mt-2 text-[0.9375rem] leading-7 text-muted-foreground sm:text-base">
                  {translations(`highlights.${highlight}`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
