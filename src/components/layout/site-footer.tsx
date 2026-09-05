import {getTranslations} from 'next-intl/server';

import type {AppLocale} from '@/i18n/routing';

type SiteFooterProps = {
  locale: AppLocale;
};

export async function SiteFooter({locale}: SiteFooterProps) {
  const translations = await getTranslations({locale, namespace: 'Footer'});
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[var(--content-width)] flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-foreground">David Marquez</p>
        <p>© {year} {translations('rights')}</p>
      </div>
    </footer>
  );
}
