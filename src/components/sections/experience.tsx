import {getTranslations} from 'next-intl/server';

import {experiences} from '@/content/experience';
import type {AppLocale} from '@/i18n/routing';

type ExperienceProps = {
  locale: AppLocale;
};

export async function Experience({locale}: ExperienceProps) {
  const translations = await getTranslations({locale, namespace: 'Experience'});

  return (
    <section
      id="experience"
      data-testid="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-20 border-t border-border px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[var(--content-width)]">
        <header className="grid gap-6 pb-10 sm:pb-12 lg:grid-cols-12 lg:gap-8 lg:pb-14">
          <h2
            id="experience-title"
            className="flex items-center gap-3 self-start text-xs font-semibold uppercase tracking-[0.14em] text-accent lg:col-span-4"
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
            {translations('heading')}
          </h2>
          <p className="max-w-[25ch] text-[clamp(1.9rem,3.2vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.04em] text-balance lg:col-span-8">
            {translations('lead')}
          </p>
        </header>

        <ol className="border-b border-border">
          {experiences.map((experience) => (
            <li key={experience.id}>
              <article
                className={`relative grid gap-7 border-t px-0 pb-10 pt-10 sm:pb-12 sm:pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-14 ${
                  experience.current
                    ? 'border-t-accent lg:pt-10'
                    : 'border-border lg:pt-14'
                }`}
              >
                <div className="lg:col-span-4">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {translations(`roles.${experience.id}.dates`)}
                  </p>
                  <h3 className="mt-3 flex items-center gap-2.5 text-[1.375rem] font-semibold leading-tight tracking-[-0.03em] sm:text-2xl">
                    {experience.current ? (
                      <span
                        aria-hidden="true"
                        className="size-2 shrink-0 rounded-full bg-accent"
                      />
                    ) : null}
                    {translations(`roles.${experience.id}.company`)}
                  </h3>
                </div>

                <div className="lg:col-span-8 xl:col-span-7">
                  <p className="text-sm font-semibold tracking-[0.02em] text-foreground">
                    {translations(`roles.${experience.id}.role`)}
                  </p>
                  <p className="mt-4 max-w-[62ch] text-[1.0625rem] leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    {translations(`roles.${experience.id}.summary`)}
                  </p>

                  <ul className="mt-7 grid gap-3 md:grid-cols-2 md:gap-x-8">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-[0.9375rem] leading-7 text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.65rem] size-1 shrink-0 rounded-full bg-accent"
                        />
                        <span>
                          {translations(
                            `roles.${experience.id}.highlights.${highlight}`
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul
                    aria-label={translations('technologiesLabel')}
                    className="mt-8 flex flex-wrap gap-x-2 gap-y-2 text-[0.8125rem] font-medium leading-5 tracking-[0.025em] text-foreground sm:text-xs"
                  >
                    {experience.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="after:ml-2 after:text-border after:content-['·'] last:after:hidden"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
