import {setRequestLocale} from 'next-intl/server';

import {SiteHeader} from '@/components/layout/site-header';
import {About} from '@/components/sections/about';
import {Experience} from '@/components/sections/experience';
import {Expertise} from '@/components/sections/expertise';
import {Education} from '@/components/sections/education';
import {Contact} from '@/components/sections/contact';
import {SiteFooter} from '@/components/layout/site-footer';
import {Hero} from '@/components/sections/hero';
import type {AppLocale} from '@/i18n/routing';

type HomePageProps = {params: Promise<{locale: AppLocale}>};

export default async function HomePage({params}: HomePageProps) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main-content" tabIndex={-1}>
        <Hero locale={locale} />
        <About locale={locale} />
        <Experience locale={locale} />
        <Expertise locale={locale} />
        <Education locale={locale} />
        <Contact locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
