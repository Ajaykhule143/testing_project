// tests/assertions/02-toHaveTitle.spec.js
import { test, expect } from '@playwright/test';
const URL = 'https://www.saucedemo.com';

test('toHaveTitle | verifies page title after login', async ({ page }) => {
  await page.goto(URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  await expect(page).toHaveTitle(/Products/);
});