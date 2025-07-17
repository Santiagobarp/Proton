# Test info

- Name: La página de Calendario del ITESO carga correctamente
- Location: /Users/santiagobarragan/Desktop/CODE/PYTHON/Playwright/test-iteso.spec.js:3:5

# Error details

```
Error: page.waitForNavigation: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "domcontentloaded"
============================================================
    at /Users/santiagobarragan/Desktop/CODE/PYTHON/Playwright/test-iteso.spec.js:11:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('La página de Calendario del ITESO carga correctamente', async ({ page }) => {
   4 |   // Ir a la página principal del ITESO
   5 |   await page.goto('https://www.iteso.mx/');
   6 |
   7 |   // Hacer clic en el enlace que dice "Calendario"
   8 |   await page.getByRole('link', { name: 'Calendario' }).click();
   9 |
  10 |   // Esperar a que la página cambie y se cargue completamente
> 11 |   await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
     |              ^ Error: page.waitForNavigation: Test timeout of 30000ms exceeded.
  12 |
  13 |   // Esperar que el título de la página contenga "Calendario"
  14 |   await expect(page).toHaveTitle(/Calendario/);
  15 | });
```