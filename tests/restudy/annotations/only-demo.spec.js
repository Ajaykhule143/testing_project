// tests/annotations/only-demo.spec.js

import { test, expect } from '@playwright/test';

const URL = 'https://www.saucedemo.com';


// ─── SCENARIO 1 ───────────────────────────────────────────────
// Debugging login issue → run ONLY this test
// ──────────────────────────────────────────────────────────────
test.only('ONLY-101 | debug locked_out_user issue', async ({ page }) => {

  test.info().annotations.push(
    { type: 'Debug', description: 'Investigating error message' }
  );

  await page.goto(URL);
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password',  'secret_sauce');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});


// ─── SCENARIO 2 ───────────────────────────────────────────────
// This will NOT run because of test.only above
// ──────────────────────────────────────────────────────────────
test.only('ONLY-102 | price sorting check', async ({ page }) => {

  await page.goto(URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password',  'secret_sauce');
  await page.click('#login-button');

  await page.selectOption('.product_sort_container', 'lohi');
});


// ─── PASSING TEST ─────────────────────────────────────────────
// This will also NOT run
// ──────────────────────────────────────────────────────────────
test('PASS | standard_user login', async ({ page }) => {

  await page.goto(URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);
});