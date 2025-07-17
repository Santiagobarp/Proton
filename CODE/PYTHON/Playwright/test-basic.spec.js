// test-basic.spec.js
const { test, expect } = require('@playwright/test');

test('Página de ejemplo tiene título correcto', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});