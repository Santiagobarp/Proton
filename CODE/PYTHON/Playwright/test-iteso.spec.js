import { test, expect } from '@playwright/test';

test('La página de Calendario del ITESO carga correctamente', async ({ page }) => {
  // Ir a la página principal del ITESO
  await page.goto('https://www.iteso.mx/');

  // Hacer clic en el enlace que dice "Calendario"
  await page.getByRole('link', { name: 'Calendario' }).click();

  // Esperar a que la página cambie y se cargue completamente
  await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

  // Esperar que el título de la página contenga "Calendario"
  await expect(page).toHaveTitle(/Calendario/);
});