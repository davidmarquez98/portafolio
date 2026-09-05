import type {AppLocale} from '@/i18n/routing';

type LanguageSwitcherProps = {
  label: string;
  locale: AppLocale;
};

const languages: Array<{locale: AppLocale; label: string}> = [
  {locale: 'en', label: 'EN'},
  {locale: 'es', label: 'ES'}
];

const localePaths: Record<AppLocale, string> = {
  en: '/',
  es: '/es'
};

export function LanguageSwitcher({label, locale}: LanguageSwitcherProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-control border border-border/70 bg-transparent p-0.5"
    >
      {languages.map((language) => (
        <a
          key={language.locale}
          href={localePaths[language.locale]}
          hrefLang={language.locale}
          aria-current={locale === language.locale ? 'page' : undefined}
          className="relative inline-flex size-11 items-center justify-center rounded-[calc(var(--radius-control)-0.2rem)] text-xs font-medium tracking-[0.1em] text-muted-foreground transition-colors after:absolute after:bottom-1.5 after:h-px after:w-4 after:origin-center after:scale-x-0 after:bg-current after:transition-transform hover:bg-surface hover:text-foreground aria-[current=page]:font-semibold aria-[current=page]:text-foreground aria-[current=page]:after:scale-x-100"
        >
          {language.label}
        </a>
      ))}
    </div>
  );
}
