import {existsSync} from 'node:fs';
import {join} from 'node:path';

import type {AppLocale} from '@/i18n/routing';

const resumePaths: Record<AppLocale, string> = {
  en: '/resume/david-marquez-en.pdf',
  es: '/resume/david-marquez-es.pdf'
};

export function getAvailableResume(locale: AppLocale): string | undefined {
  const publicPath = resumePaths[locale];
  const filePath = join(process.cwd(), 'public', ...publicPath.split('/').slice(1));

  return existsSync(filePath) ? publicPath : undefined;
}
