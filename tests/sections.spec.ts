import {expect, test} from '@playwright/test';

const locales = [
  {
    route: '/',
    aboutHeading: 'About',
    aboutLead:
      'I build software for systems where reliability, scalability and maintainability matter.',
    experienceHeading: 'Experience',
    expertiseHeading: 'Expertise',
    backendHeading: 'Backend Engineering',
    additionalHeading: 'Additional familiarity',
    macroUnsupportedClaims: ['AWS S3', 'Apigee', 'reactive programming'],
    bymaArchitectureText:
      'Implemented services according to architecture defined by the technical team.'
  },
  {
    route: '/es',
    aboutHeading: 'Sobre mí',
    aboutLead:
      'Construyo software para sistemas donde la confiabilidad, escalabilidad y mantenibilidad importan.',
    experienceHeading: 'Experiencia',
    expertiseHeading: 'Especialidades',
    backendHeading: 'Ingeniería Backend',
    additionalHeading: 'Conocimientos adicionales',
    macroUnsupportedClaims: ['AWS S3', 'Apigee', 'programación reactiva'],
    bymaArchitectureText:
      'Implementé servicios según la arquitectura definida por el equipo técnico.'
  }
] as const;

for (const locale of locales) {
  const language = locale.route === '/' ? 'English' : 'Spanish';

  test(`renders About in ${language}`, async ({page}) => {
    await page.goto(locale.route);

    const about = page.getByTestId('about');
    await expect(
      about.getByRole('heading', {level: 2, name: locale.aboutHeading})
    ).toBeVisible();
    await expect(about.getByText(locale.aboutLead)).toBeVisible();
    await expect(about.getByText('B2+')).toBeVisible();
  });

  test(`renders corrected Experience content in ${language}`, async ({page}) => {
    await page.goto(locale.route);

    const experience = page.getByTestId('experience');
    await expect(
      experience.getByRole('heading', {
        level: 2,
        name: locale.experienceHeading
      })
    ).toBeVisible();

    for (const employer of [
      'Banco Macro',
      'Banco Hipotecario',
      'FLEX TECH ARG',
      'BYMA'
    ]) {
      await expect(
        experience.getByRole('heading', {level: 3, name: new RegExp(employer)})
      ).toBeVisible();
    }

    await expect(experience.getByText('35%', {exact: true})).toHaveCount(0);
    await expect(experience.getByText('20%', {exact: true})).toHaveCount(0);

    const macro = experience.locator('article').filter({hasText: 'Banco Macro'});
    for (const claim of locale.macroUnsupportedClaims) {
      await expect(macro.getByText(claim, {exact: false})).toHaveCount(0);
    }

    const byma = experience.locator('article').filter({hasText: 'BYMA'});
    await expect(byma.getByText('React', {exact: false})).toHaveCount(0);
    await expect(byma.getByText(locale.bymaArchitectureText)).toBeVisible();
  });

  test(`renders reclassified Expertise in ${language}`, async ({page}) => {
    await page.goto(locale.route);

    const expertise = page.getByTestId('expertise');
    await expect(
      expertise.getByRole('heading', {level: 2, name: locale.expertiseHeading})
    ).toBeVisible();
    await expect(
      expertise.getByRole('heading', {level: 3, name: locale.backendHeading})
    ).toBeVisible();
    await expect(expertise.getByText(locale.additionalHeading)).toBeVisible();
    await expect(
      expertise.getByText(
        'React · Docker · Kubernetes · AWS S3 · DynamoDB · MySQL · Nginx'
      )
    ).toBeVisible();
    await expect(expertise.getByText('Apigee', {exact: false})).toHaveCount(0);
  });

  test(`renders Education and Contact in ${language}`, async ({page}) => {
    await page.goto(locale.route);

    const education = page.getByTestId('education');
    const contact = page.getByTestId('contact');
    await expect(education).toBeVisible();
    await expect(contact).toBeVisible();
    await expect(
      education.getByRole('heading', {
        level: 2,
        name:
          locale.route === '/'
            ? 'Education & continuous learning'
            : 'Educación y aprendizaje continuo'
      })
    ).toBeVisible();
    await expect(
      contact.getByRole('link', {
        name: locale.route === '/' ? 'Email me' : 'Escribime'
      })
    ).toHaveAttribute('href', 'mailto:davidarielmarquez@outlook.com');
    await expect(contact.getByRole('link', {name: 'LinkedIn'})).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/david-ariel-marquez'
    );
    await expect(contact.getByRole('link', {name: 'GitHub'})).toHaveAttribute(
      'href',
      'https://github.com/davidmarquez98'
    );
    await expect(page.locator('footer')).toContainText('David Marquez');
    await expect(page.locator('footer')).not.toContainText('Argentina');
  });
}
