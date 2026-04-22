// tests/annotations/skip-demo.spec.js

import { test, expect } from '@playwright/test';

const URL = 'https://www.saucedemo.com';


// ─── SCENARIO 1 ───────────────────────────────────────────────
// Feature not ready → skipping test
// ──────────────────────────────────────────────────────────────
test.skip('SKIP-101 | locked_out_user validation pending fix', async ({ page }) => {

  test.info().annotations.push(
    { type: 'Reason',   description: 'Bug not fixed yet' },
    { type: 'Severity', description: 'Medium' }
  );

  await page.goto(URL);
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password',  'secret_sauce');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Your account has been locked.');
});


// ─── SCENARIO 2 ───────────────────────────────────────────────
// Module under maintenance → skip
// ──────────────────────────────────────────────────────────────
test.skip('SKIP-102 | price sorting feature under maintenance', async ({ page }) => {

  test.info().annotations.push(
    { type: 'Module', description: 'Product Listing' }
  );

  await page.goto(URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password',  'secret_sauce');
  await page.click('#login-button');

  await page.selectOption('.product_sort_container', 'lohi');
});


// ─── PASSING TEST ─────────────────────────────────────────────
test('PASS | standard_user login works', async ({ page }) => {

  await page.goto(URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);
});