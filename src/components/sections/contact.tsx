import {getTranslations} from 'next-intl/server';

import type {AppLocale} from '@/i18n/routing';

type ContactProps = {
  locale: AppLocale;
};

const email = 'davidarielmarquez@outlook.com';
const linkedIn = 'https://www.linkedin.com/in/david-ariel-marquez';
const github = 'https://github.com/davidmarquez98';

export async function Contact({locale}: ContactProps) {
  const translations = await getTranslations({locale, namespace: 'Contact'});

  return (
    <section
      id="contact"
      data-testid="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 border-t border-border px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-[var(--content-width)] gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {translations('eyebrow')}
          </p>
          <h2
            id="contact-title"
            className="mt-5 max-w-[16ch] text-[clamp(2.4rem,5.2vw,5rem)] font-medium leading-[1.02] tracking-[-0.05em] text-balance"
          >
            {translations('title')}
          </h2>
          <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-7 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8">
            {translations('body')}
          </p>
        </div>

        <div className="flex flex-col items-start justify-end lg:col-span-5 lg:pb-1">
          <a
            href={`mailto:${email}`}
            className="inline-flex min-h-11 items-center rounded-control border border-foreground bg-foreground px-6 py-3.5 text-sm font-semibold text-page transition-colors hover:bg-transparent hover:text-foreground"
          >
            {translations('emailCta')}
          </a>
          <p className="mt-3 text-sm text-muted-foreground">{email}</p>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm font-medium">
            <li>
              <a
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-control text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
              >
                {translations('linkedIn')}
                <span className="sr-only"> {translations('opensInNewTab')}</span>
              </a>
            </li>
            <li>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-control text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
              >
                {translations('github')}
                <span className="sr-only"> {translations('opensInNewTab')}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
