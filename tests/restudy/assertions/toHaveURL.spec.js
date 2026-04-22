// tests/assertions/01-toHaveURL.spec.js
import { test, expect } from '@playwright/test';
const URL = 'https://www.saucedemo.com';

test('toHaveURL | verifies login redirects to inventory page', async ({ page }) => {
  await page.goto(URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  await expect(page).toHaveURL(/saucedemo/);
});