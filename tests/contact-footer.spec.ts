import {expect, test} from '@playwright/test';

for (const width of [320, 390]) {
  test(`keeps Contact usable at ${width}px`, async ({page}) => {
    await page.setViewportSize({width, height: 900});
    await page.goto('/');

    const contact = page.getByTestId('contact');
    await expect(contact.getByRole('heading', {level: 2})).toBeVisible();
    await expect(contact.getByRole('link', {name: 'Email me'})).toBeVisible();
    await expect(contact.getByText('davidarielmarquez@outlook.com')).toBeVisible();
    await expect(contact.getByRole('link', {name: 'LinkedIn'})).toBeVisible();
    await expect(contact.getByRole('link', {name: 'GitHub'})).toBeVisible();

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });
}
