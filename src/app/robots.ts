import type {MetadataRoute} from 'next';

import {getSiteUrl} from '@/lib/site-url';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {userAgent: '*', allow: '/'},
    host: siteUrl?.href,
    sitemap: siteUrl ? new URL('/sitemap.xml', siteUrl).href : undefined
  };
}
