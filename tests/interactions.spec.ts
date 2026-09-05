import {expect, test} from '@playwright/test';

test('skip link moves keyboard focus to the main content', async ({page}) => {
  await page.goto('/');

  await page.keyboard.press('Tab');
  const skipLink = page.getByRole('link', {name: 'Skip to content'});
  await expect(skipLink).toBeFocused();
  await page.keyboard.press('Enter');

  await expect(page.locator('#main-content')).toBeFocused();
});

test('theme toggle changes and persists the selected theme', async ({page}) => {
  await page.emulateMedia({colorScheme: 'light'});
  await page.goto('/');

  const themeToggle = page.getByTestId('theme-toggle').first();
  await expect(themeToggle).toBeEnabled();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');

  await themeToggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('mobile menu opens, closes, and restores focus', async ({page}) => {
  await page.setViewportSize({width: 390, height: 844});
  await page.goto('/');

  const openButton = page.getByRole('button', {name: 'Open menu'});
  const dialog = page.getByRole('dialog', {name: 'Mobile navigation'});

  await openButton.click();
  await expect(dialog).toBeVisible();
  await expect(openButton).toHaveAttribute('aria-expanded', 'true');
  await expect(dialog.getByRole('link', {name: 'About'})).toHaveAttribute(
    'href',
    '#about'
  );
  await expect(dialog.getByRole('link', {name: 'Experience'})).toHaveAttribute(
    'href',
    '#experience'
  );
  await expect(dialog.locator('a[href="#work"]')).toHaveCount(0);
  await expect(dialog.locator('a[href="#contact"]')).toHaveCount(1);

  await page.getByRole('button', {name: 'Close menu'}).click();
  await expect(dialog).not.toBeVisible();
  await expect(openButton).toBeFocused();
});

test('Escape closes the mobile menu and restores focus', async ({page}) => {
  await page.setViewportSize({width: 390, height: 844});
  await page.goto('/');

  const openButton = page.getByRole('button', {name: 'Open menu'});
  const dialog = page.getByRole('dialog', {name: 'Mobile navigation'});

  await openButton.click();
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');

  await expect(dialog).not.toBeVisible();
  await expect(openButton).toBeFocused();
});
