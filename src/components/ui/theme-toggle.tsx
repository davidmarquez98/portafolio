'use client';

import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';
import {useSyncExternalStore} from 'react';

type ThemeToggleProps = {
  label: string;
};

const subscribe = () => () => undefined;

export function ThemeToggle({label}: ThemeToggleProps) {
  const {resolvedTheme, setTheme} = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  return (
    <button
      type="button"
      aria-label={label}
      data-testid="theme-toggle"
      disabled={!mounted}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="inline-flex size-11 items-center justify-center rounded-control text-muted-foreground transition-colors hover:bg-surface hover:text-foreground disabled:cursor-wait disabled:opacity-60"
    >
      <Moon aria-hidden="true" className="size-[1.125rem] dark:hidden" />
      <Sun aria-hidden="true" className="hidden size-[1.125rem] dark:block" />
    </button>
  );
}
