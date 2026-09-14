import { expect, test } from '@playwright/test';

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`layout e navegação em ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toContainText('escuta.');
    await expect(page.locator('.health-card')).toHaveCount(7);
    for (const image of await page.locator('.health-card img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toBeVisible();
      await expect(image).toHaveJSProperty('complete', true);
      expect(await image.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
    }
    await expect(page.locator('#depoimentos article')).toHaveCount(1);
    await expect(page.locator('#depoimentos .badge')).toHaveText(['Relato de paciente']);
    await expect(page.locator('body')).not.toContainText('Depoimento fictício');
    await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);
    await expect(page.locator('body')).not.toContainText('Prévia local');
    await expect(page.locator('body')).not.toContainText('em validação');
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    for (const link of await page.locator('a[href^="#"]').all()) {
      const target = await link.getAttribute('href');
      await expect(page.locator(target!)).toHaveCount(1);
    }
    for (const link of await page.locator('a[target="_blank"]').all()) {
      expect(await link.getAttribute('href')).toMatch(/^https:\/\/(www.instagram.com\/dralilianleal.otorrino\/|sandieu.com.br\/corpoclinico\/dra-lilian-leal\/|bvsms.saude.gov.br\/|www.google.com\/maps\/search\/)/);
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
    await expect(page.locator('a[href*="wa.me"], form')).toHaveCount(0);
    await expect(page.locator('a[href="tel:+558534578288"]')).toHaveCount(1);
    await expect(page.locator('.photo-window img')).toBeVisible();
    expect(await page.locator('.photo-window img').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
    const question = page.locator('#duvidas summary').first();
    await question.click();
    await expect(page.locator('#duvidas details').first()).toHaveAttribute('open', '');
    await question.click();
    if (width < 761) {
      const toggle = page.getByRole('button', { name: /Menu|Fechar/ });
      await toggle.click();
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');
      await page.keyboard.press('Escape');
      await expect(toggle).toBeFocused();
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
      await toggle.click();
      await page.getByRole('navigation').getByRole('link', { name: 'A médica', exact: true }).click();
      await expect(page.locator('#sobre')).toBeFocused();
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    }
    await page.emulateMedia({ reducedMotion: 'reduce' });
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
    await page.evaluate(() => scrollTo(0, 1200));
    expect(await page.locator('app-site-header').evaluate(el => el.getBoundingClientRect().top)).toBe(0);
    if (width < 761) await page.getByRole('button', { name: /Menu/ }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Dúvidas', exact: true }).click();
    await expect(page.locator('#duvidas')).toBeFocused();
    const headerBottom = await page.locator('app-site-header').evaluate(el => el.getBoundingClientRect().bottom);
    expect(await page.locator('#duvidas h2').evaluate(el => el.getBoundingClientRect().top)).toBeGreaterThanOrEqual(headerBottom);
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: `tmp/qa/${width}.png`, fullPage: true });
    await page.screenshot({ path: `tmp/qa/${width}-viewport.png` });
    await page.locator('#depoimentos').screenshot({ path: `tmp/qa/${width}-depoimentos.png` });
    await page.locator('#atuacao').screenshot({ path: `tmp/qa/${width}-temas.png` });
    await expect(page.locator('#localizacao address')).toContainText('Rua Carolina Sucupira, 1151');
    const mapLink = page.getByRole('link', { name: /Abrir no Google Maps/ });
    expect(new URL((await mapLink.getAttribute('href'))!).searchParams.get('query')).toContain('Clínica Otos, Rua Carolina Sucupira, 1151');
    await page.locator('#localizacao').screenshot({ path: `tmp/qa/${width}-localizacao.png` });
    expect(errors).toEqual([]);
    const favicon = await page.request.get('/brand/favicon.svg');
    expect(favicon.ok()).toBe(true);
  });
}

test('conteúdo e navegação móvel sem JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(page.locator('h1')).toContainText('escuta.');
  await expect(page.getByRole('navigation')).toBeVisible();
  await page.getByRole('navigation').getByRole('link', { name: 'Temas de saúde', exact: true }).click();
  await expect(page).toHaveURL(/#atuacao$/);
  await expect(page.locator('#atuacao')).toBeVisible();
  await context.close();
});

test('depoimento de Gabriel: três frases e expansão por teclado sem JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(baseURL!);
  const story = page.locator('.patient-story');
  await expect(story.getByRole('heading')).toHaveText('Gabriel Castro');
  expect((await story.locator('blockquote > p').innerText()).split(/(?<!Dra)\.\s|\.$/).filter(Boolean)).toHaveLength(3);
  const fullText = story.locator('details p');
  await expect(fullText).not.toBeVisible();
  await story.locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(fullText).toBeVisible();
  await expect(fullText).toContainText('Foi ela quem realizou minha cirurgia.');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.screenshot({ path: 'tmp/qa/depoimento-gabriel-expandido.png' });
  await page.keyboard.press('Enter');
  await expect(fullText).not.toBeVisible();
  await context.close();
});

test('galeria de saúde: filtros, leitura, teclado e foco', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Sono', exact: true }).click();
  await expect(page.locator('.health-card')).toHaveCount(2);
  await expect(page.getByRole('button', { name: 'Sono', exact: true })).toHaveAttribute('aria-pressed', 'true');
  const open = page.getByRole('button', { name: 'Explorar tema: Ronco e apneia: atenção à respiração à noite', exact: true });
  await open.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Fechar tema' })).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('button', { name: 'Próximo tema' })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Fechar tema' })).toBeFocused();
  await page.getByRole('dialog').screenshot({ path: 'tmp/qa/tema-modal-desktop.png' });
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#reader-title')).toContainText('Sono reparador');
  await page.getByRole('button', { name: 'Tema anterior' }).click();
  await expect(page.locator('#reader-title')).toContainText('Ronco e apneia');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(open).toBeFocused();
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
  await page.getByRole('button', { name: 'Todos', exact: true }).click();
  await expect(page.locator('.health-card')).toHaveCount(7);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: /Explorar tema: Nariz/ }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('dialog').screenshot({ path: 'tmp/qa/tema-modal-mobile.png' });
  await page.getByRole('button', { name: 'Fechar tema' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
});
