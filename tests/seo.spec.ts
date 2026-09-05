import {expect, test} from '@playwright/test';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

test.describe('SEO metadata', () => {
  test('serves exact English metadata at the canonical root', async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveTitle('David Marquez | Software Engineer');
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      'Software Engineer specializing in Java backend and distributed systems, with experience in Spring Boot, Quarkus, Kafka, AWS SQS and financial software.'
    );
  });

  test('serves exact Spanish metadata at /es', async ({page}) => {
    await page.goto('/es');
    await expect(page).toHaveTitle('David Marquez | Desarrollador de Software');
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      'Desarrollador de Software especializado en backend Java y sistemas distribuidos, con experiencia en Spring Boot, Quarkus, Kafka, AWS SQS y software financiero.'
    );
  });

  test('keeps canonical and language alternates locale-aware', async ({page}) => {
    await page.goto('/');

    if (siteUrl) {
      const origin = siteUrl.replace(/\/$/, '');
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', origin);
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
        'href',
        origin
      );
      await expect(page.locator('link[rel="alternate"][hreflang="es"]')).toHaveAttribute(
        'href',
        `${siteUrl}/es`
      );
      await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute(
        'href',
        origin
      );
    } else {
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
      await expect(page.locator('link[rel="alternate"]')).toHaveCount(0);
    }
  });

  test('exposes Open Graph and Twitter metadata when a site URL is configured', async ({page}) => {
    await page.goto('/');

    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'website');
    await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute(
      'content',
      'David Marquez'
    );
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'en_US');
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      siteUrl ? 'summary_large_image' : 'summary'
    );

    if (siteUrl) {
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        'content',
        `${siteUrl}/opengraph-image`
      );
      await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
        'content',
        `${siteUrl}/opengraph-image`
      );
    }
  });

  test('publishes only real locale routes in robots and sitemap', async ({request}) => {
    const robots = await request.get('/robots.txt');
    expect(robots.ok()).toBeTruthy();
    const robotsBody = await robots.text();
    expect(robotsBody).toContain('Allow: /');
    if (siteUrl) expect(robotsBody).toContain(`${siteUrl}/sitemap.xml`);

    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.ok()).toBeTruthy();
    const sitemapBody = await sitemap.text();
    if (siteUrl) {
      expect(sitemapBody).toContain(`${siteUrl}/`);
      expect(sitemapBody).toContain(`${siteUrl}/es`);
    }
    expect(sitemapBody).not.toContain('/resume/');
    expect(sitemapBody).not.toContain('/work');
  });

  test('includes factual Person structured data', async ({page}) => {
    await page.goto('/');
    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLd).toBeTruthy();
    const person = JSON.parse(jsonLd ?? '{}');
    expect(person).toMatchObject({
      '@type': 'Person',
      name: 'David Marquez',
      jobTitle: 'Software Engineer'
    });
    expect(person.sameAs).toEqual([
      'https://github.com/davidmarquez98',
      'https://www.linkedin.com/in/david-ariel-marquez'
    ]);
  });
});
