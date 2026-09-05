import {expect, test} from '@playwright/test';

const resumes = [
  {
    route: '/',
    path: '/resume/david-marquez-en.pdf',
    label: 'Download résumé'
  },
  {
    route: '/es',
    path: '/resume/david-marquez-es.pdf',
    label: 'Descargar CV'
  }
] as const;

for (const resume of resumes) {
  test(`has a working resume link at ${resume.route}`, async ({page, request}) => {
    await page.goto(resume.route);

    const link = page.getByTestId('hero').getByRole('link', {
      name: resume.label
    });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', resume.path);
    await expect(link).toHaveAttribute('download', '');

    const response = await request.get(resume.path);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/pdf');
  });
}
