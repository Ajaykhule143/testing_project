// tests/annotations/fixme-demo.spec.js

import { test, expect } from '@playwright/test';

const URL = 'https://www.saucedemo.com';


// ─── SCENARIO 1 ───────────────────────────────────────────────
// BUG-101 → Temporarily skipped using fixme()
// ──────────────────────────────────────────────────────────────
test.fixme('BUG-101 | locked_out_user error message mismatch', async ({ page }) => {

  test.info().annotations.push(
    { type: 'JIRA',     description: 'BUG-101' },
    { type: 'Severity', description: 'Medium'  },
    { type: 'Reporter', description: 'Ajay Khule' }
  );

  await page.goto(URL);
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password',  'secret_sauce');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Your account has been locked.');
});


// ─── SCENARIO 2 ───────────────────────────────────────────────
// BUG-102 → Skip until sorting is fixed
// ──────────────────────────────────────────────────────────────
test.fixme('BUG-102 | price sort low-to-high returns wrong order', async ({ page }) => {

  test.info().annotations.push(
    { type: 'JIRA',     description: 'BUG-102' },
    { type: 'Severity', description: 'High'    },
    { type: 'Module',   description: 'Product Listing' }
  );

  await page.goto(URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password',  'secret_sauce');
  await page.click('#login-button');

  await page.selectOption('.product_sort_container', 'lohi');

  const priceTexts = await page.locator('.inventory_item_price').allTextContents();
  const prices = priceTexts.map(p => parseFloat(p.replace('$', '')));

  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
  }
});


// ─── SCENARIO 3 ───────────────────────────────────────────────
// BUG-103 → Regression issue → skip for now
// ──────────────────────────────────────────────────────────────
test.fixme('BUG-103 | cart badge persists after checkout completion', async ({ page }) => {

  test.info().annotations.push(
    { type: 'JIRA',        description: 'BUG-103' },
    { type: 'Severity',    description: 'High'    },
    { type: 'Module',      description: 'Checkout' },
    { type: 'Regression',  description: 'v2.3 release' }
  );

  await page.goto(URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password',  'secret_sauce');
  await page.click('#login-button');

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.locator('.shopping_cart_link').click();
  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'Ajay');
  await page.fill('[data-test="lastName"]',  'Khule');
  await page.fill('[data-test="postalCode"]', '411018');
  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

  await expect(page.locator('.shopping_cart_badge')).toBeHidden();
});


// ─── PASSING TEST ─────────────────────────────────────────────
test('PASS | standard_user can login successfully', async ({ page }) => {

  test.info().annotations.push(
    { type: 'Type', description: 'Smoke Test' }
  );

  await page.goto(URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password',  'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});