import {getTranslations} from 'next-intl/server';

import {LanguageSwitcher} from '@/components/ui/language-switcher';
import {ThemeToggle} from '@/components/ui/theme-toggle';
import {
  homepageSections,
  type HomepageSection
} from '@/content/homepage-sections';
import type {AppLocale} from '@/i18n/routing';

import {MobileMenu} from './mobile-menu';

type SiteHeaderProps = {
  locale: AppLocale;
};

const navigationTargets: HomepageSection[] = [
  'about',
  'experience',
  'expertise',
  'work',
  'contact'
];

export async function SiteHeader({locale}: SiteHeaderProps) {
  const translations = await getTranslations({locale, namespace: 'Navigation'});
  const navigationItems = navigationTargets
    .filter((target) => homepageSections[target])
    .map((target) => ({
      href: `#${target}`,
      label: translations(target)
    }));

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-control bg-foreground px-4 py-3 text-sm font-semibold text-page transition-transform focus:translate-y-0"
      >
        {translations('skipToContent')}
      </a>

      <header
        data-testid="site-header"
        className="sticky top-0 z-40 border-b border-border/80 bg-page/90 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-[var(--content-width)] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#main-content"
            aria-label={translations('homeLabel')}
            className="group inline-flex min-h-11 items-center gap-3 rounded-control pr-2"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-control border border-border bg-surface text-xs font-bold tracking-[0.08em] transition-colors group-hover:border-foreground/30">
              DM
            </span>
            <span className="hidden text-sm font-semibold tracking-[-0.01em] sm:block">
              David Marquez
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigationItems.length > 0 ? (
              <nav aria-label={translations('primaryLabel')}>
                <ul className="flex items-center gap-1">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="inline-flex min-h-11 items-center rounded-control px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}

            <div className="flex items-center gap-2 border-l border-border pl-5">
              <LanguageSwitcher
                label={translations('languageLabel')}
                locale={locale}
              />
              <ThemeToggle label={translations('themeLabel')} />
            </div>
          </div>

          <MobileMenu
            closeLabel={translations('closeMenu')}
            languageLabel={translations('languageLabel')}
            locale={locale}
            menuLabel={translations('mobileLabel')}
            navigationItems={navigationItems}
            openLabel={translations('openMenu')}
            themeLabel={translations('themeLabel')}
          />
        </div>
      </header>
    </>
  );
}
