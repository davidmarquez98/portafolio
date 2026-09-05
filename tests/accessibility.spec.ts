import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';

for (const route of ['/', '/es']) {
  test(`${route} has no automatically detectable accessibility violations`, async ({
    page
  }) => {
    await page.goto(route);
    const results = await new AxeBuilder({page}).analyze();

    expect(results.violations).toEqual([]);
  });
}
