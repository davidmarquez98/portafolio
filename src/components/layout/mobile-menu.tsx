'use client';

import {Menu, X} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';

import {LanguageSwitcher} from '@/components/ui/language-switcher';
import {ThemeToggle} from '@/components/ui/theme-toggle';
import type {AppLocale} from '@/i18n/routing';

type NavigationItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  closeLabel: string;
  languageLabel: string;
  locale: AppLocale;
  menuLabel: string;
  navigationItems: NavigationItem[];
  openLabel: string;
  themeLabel: string;
};

export function MobileMenu({
  closeLabel,
  languageLabel,
  locale,
  menuLabel,
  navigationItems,
  openLabel,
  themeLabel
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={openLabel}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
        className="inline-flex size-11 items-center justify-center rounded-control text-foreground transition-colors hover:bg-surface"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label={menuLabel}
        onCancel={handleClose}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-page p-0 text-foreground backdrop:bg-foreground/20"
      >
        <div className="mx-auto flex min-h-full max-w-[var(--content-width)] flex-col px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between border-b border-border">
            <span className="text-sm font-semibold tracking-[-0.01em]">
              David Marquez
            </span>
            <button
              type="button"
              autoFocus
              aria-label={closeLabel}
              onClick={handleClose}
              className="inline-flex size-11 items-center justify-center rounded-control text-foreground transition-colors hover:bg-surface"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          {navigationItems.length > 0 ? (
            <nav aria-label={menuLabel} className="flex flex-1 items-center py-10">
              <ul className="w-full">
                {navigationItems.map((item, index) => (
                  <li key={item.href} className="border-b border-border">
                    <a
                      href={item.href}
                      onClick={handleClose}
                      className="group flex min-h-16 items-center justify-between py-3 text-2xl font-medium tracking-[-0.025em]"
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden="true"
                        className="text-xs font-medium tabular-nums text-muted-foreground"
                      >
                        0{index + 1}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <div className="flex-1" />
          )}

          <div className="flex items-center justify-between border-t border-border py-4">
            <LanguageSwitcher label={languageLabel} locale={locale} />
            <ThemeToggle label={themeLabel} />
          </div>
        </div>
      </dialog>
    </div>
  );
}
