import {expect, test} from '@playwright/test';

test('renders the English Navbar and Hero at /', async ({page}) => {
  await page.goto('/');

  await expect(page.getByTestId('site-header')).toBeVisible();
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Software Engineer building scalable distributed systems.'
    })
  ).toBeVisible();
  await expect(page.getByText("Hello, I'm David.")).toBeVisible();
  await expect(
    page.getByText(
      'Backend-focused engineer specialized in Java, cloud-native architectures and modern web applications.'
    )
  ).toBeVisible();
  await expect(
    page.getByText('Java · Spring · Quarkus · Kafka · AWS', {exact: true})
  ).toBeVisible();
  await expect(page.getByRole('link', {name: 'Explore my work'})).toHaveCount(0);
  const englishResume = page.getByTestId('hero').locator('a[download]');
  await expect(englishResume).toHaveCount(1);
  await expect(englishResume).toHaveAttribute(
    'href',
    '/resume/david-marquez-en.pdf'
  );
});

test('renders the Spanish Navbar and Hero at /es', async ({page}) => {
  await page.goto('/es');

  await expect(page.getByTestId('site-header')).toBeVisible();
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Ingeniero de Software construyendo sistemas distribuidos escalables.'
    })
  ).toBeVisible();
  await expect(page.getByText('Hola, soy David.')).toBeVisible();
  await expect(
    page.getByText(
      'Ingeniero orientado a backend, especializado en Java, arquitecturas cloud-native y aplicaciones web modernas.'
    )
  ).toBeVisible();
  await expect(
    page.getByText('Java · Spring · Quarkus · Kafka · AWS', {exact: true})
  ).toBeVisible();
  await expect(page.getByRole('link', {name: 'Ver mi trabajo'})).toHaveCount(0);
  const spanishResume = page.getByTestId('hero').locator('a[download]');
  await expect(spanishResume).toHaveCount(1);
  await expect(spanishResume).toHaveAttribute(
    'href',
    '/resume/david-marquez-es.pdf'
  );
});

test('links only to portfolio sections that are implemented', async ({page}) => {
  await page.goto('/');

  const navigation = page.getByRole('navigation', {name: 'Primary navigation'});

  const aboutLink = navigation.getByRole('link', {name: 'About'});
  await expect(aboutLink).toHaveAttribute('href', '#about');
  await aboutLink.click();
  await expect(page).toHaveURL(/#about$/);
  await expect(page.locator('#about')).toBeVisible();

  const experienceLink = navigation.getByRole('link', {name: 'Experience'});
  await expect(experienceLink).toHaveAttribute('href', '#experience');
  await experienceLink.click();
  await expect(page).toHaveURL(/#experience$/);
  await expect(page.locator('#experience')).toBeVisible();

  const contactLink = navigation.getByRole('link', {name: 'Contact'});
  await expect(contactLink).toHaveAttribute('href', '#contact');
  await contactLink.click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator('#contact')).toBeVisible();

  await expect(page.locator('a[href="#work"]')).toHaveCount(0);
});
