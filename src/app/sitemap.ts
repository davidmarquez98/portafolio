import type {MetadataRoute} from 'next';

import {getSiteUrl} from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) return [];

  const englishUrl = new URL('/', siteUrl).href;
  const spanishUrl = new URL('/es', siteUrl).href;
  const languages = {en: englishUrl, es: spanishUrl, 'x-default': englishUrl};

  return [
    {url: englishUrl, alternates: {languages}},
    {url: spanishUrl, alternates: {languages}}
  ];
}
