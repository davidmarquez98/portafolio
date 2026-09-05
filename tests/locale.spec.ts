import {expect, test} from '@playwright/test';

test('serves English at / and Spanish at /es', async ({page}) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');

  await page.goto('/es');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
});

test('redirects the prefixed English route to the canonical root', async ({
  page
}) => {
  await page.goto('/en');

  await expect(page).toHaveURL('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});
