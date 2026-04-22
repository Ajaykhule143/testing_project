// tests/assertions/03-toBeEnabled.spec.js
import { test, expect } from '@playwright/test';
const URL = 'https://www.saucedemo.com';

test('toBeEnabled | verifies login button is enabled', async ({ page }) => {
  await page.goto(URL);
  
  await expect(page.locator('#login-button')).toBeEnabled();
});