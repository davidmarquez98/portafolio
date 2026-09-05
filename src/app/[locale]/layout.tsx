import type {Metadata} from 'next';
import {hasLocale} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';

import {routing} from '@/i18n/routing';
import {getSiteUrl} from '@/lib/site-url';
import {ThemeProvider} from '@/providers/theme-provider';

import '../globals.css';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function getLocalePath(locale: string) {
  return locale === routing.defaultLocale ? '/' : `/${locale}`;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: Omit<LocaleLayoutProps, 'children'>): Promise<Metadata> {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const translations = await getTranslations({locale, namespace: 'Metadata'});
  const siteUrl = getSiteUrl();
  const localePath = getLocalePath(locale);

  return {
    title: translations('title'),
    description: translations('description'),
    metadataBase: siteUrl,
    alternates: siteUrl
      ? {
          canonical: localePath,
          languages: {en: '/', es: '/es', 'x-default': '/'}
        }
      : undefined,
    openGraph: {
      title: translations('title'),
      description: translations('description'),
      type: 'website',
      siteName: 'David Marquez',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      alternateLocale: locale === 'es' ? ['en_US'] : ['es_AR'],
      url: siteUrl ? localePath : undefined,
      images: siteUrl
        ? [{url: '/opengraph-image', alt: 'David Marquez — Software Engineer'}]
        : undefined
    },
    twitter: {
      card: siteUrl ? 'summary_large_image' : 'summary',
      title: translations('title'),
      description: translations('description'),
      images: siteUrl ? ['/opengraph-image'] : undefined
    }
  };
}

export default async function LocaleLayout({children, params}: LocaleLayoutProps) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const siteUrl = getSiteUrl();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'David Marquez',
              jobTitle: 'Software Engineer',
              ...(siteUrl
                ? {url: new URL(getLocalePath(locale), siteUrl).href}
                : {}),
              sameAs: [
                'https://github.com/davidmarquez98',
                'https://www.linkedin.com/in/david-ariel-marquez'
              ]
            })
          }}
        />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
