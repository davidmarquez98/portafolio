import {expect, test} from '@playwright/test';

const locales = [
  {
    route: '/',
    heading: 'Selected work',
    subtitle: 'Booking & Payments Platform',
    action: 'View live project'
  },
  {
    route: '/es',
    heading: 'Trabajo seleccionado',
    subtitle: 'Plataforma de Turnos y Pagos',
    action: 'Ver proyecto'
  }
] as const;

for (const locale of locales) {
  test(`publishes Alisados Maca in ${locale.route}`, async ({page}) => {
    await page.goto(locale.route);

    const selectedWork = page.getByTestId('selected-work');
    await expect(selectedWork).toBeVisible();
    await expect(
      selectedWork.getByRole('heading', {level: 2, name: locale.heading})
    ).toBeVisible();
    await expect(
      selectedWork.getByRole('heading', {level: 3, name: 'Alisados Maca'})
    ).toBeVisible();
    await expect(selectedWork.getByText(locale.subtitle)).toBeVisible();
    await expect(
      selectedWork.getByText(
        'Next.js · TypeScript · PostgreSQL · Supabase · Mercado Pago · Vercel'
      )
    ).toBeVisible();

    const liveProject = selectedWork.getByRole('link', {name: locale.action});
    await expect(liveProject).toHaveAttribute(
      'href',
      'https://alisados-maca.vercel.app/'
    );
    await expect(liveProject).toHaveAttribute('target', '_blank');
    await expect(liveProject).toHaveAttribute('rel', 'noreferrer');
    await expect(
      selectedWork.locator(
        'a[href*="github.com"], a[href*="gitlab.com"], a[href*="bitbucket.org"]'
      )
    ).toHaveCount(0);
  });
}
