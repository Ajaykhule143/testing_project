// tests/annotations/fail-demo.spec.js

import { test, expect } from '@playwright/test';

const URL = 'https://www.saucedemo.com';

// ─── SCENARIO 1 ───────────────────────────────────────────────
// Known Bug: 'locked_out_user' shows a generic error message.
// Business expects: "Your account has been locked."
// Actual result:    "Epic sadface: Sorry, this user has been locked out."
// Status: Bug raised in JIRA → BUG-101 (not yet fixed)
// ──────────────────────────────────────────────────────────────
test.fail('BUG-101 | locked_out_user error message mismatch', async ({ page }) => {

  test.info().annotations.push(
    { type: 'JIRA',     description: 'BUG-101' },
    { type: 'Severity', description: 'Medium'  },
    { type: 'Reporter', description: 'Ajay Khule' }
  );

  await page.goto(URL);
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password',  'secret_sauce');
  await page.click('#login-button');

  // ❌ This assertion WILL fail — actual message differs from expected
  // test.fail() tells Playwright: "I know this fails, it's a known bug"
  await expect(page.locator('[data-test="error"]'))
    .toHaveText('Your account has been locked.');
  //  ↑ Expected (business requirement)
  //  ↓ Actual: "Epic sadface: Sorry, this user has been locked out."
});


// ─── SCENARIO 2 ───────────────────────────────────────────────
// Known Bug: Product sort "Price (low to high)" is broken.
// Business expects: items sorted lowest → highest price.
// Actual result:    sort order is incorrect on SauceDemo.
// Status: Bug raised in JIRA → BUG-102
// ──────────────────────────────────────────────────────────────
test.fail('BUG-102 | price sort low-to-high returns wrong order', async ({ page }) => {

  test.info().annotations.push(
    { type: 'JIRA',     description: 'BUG-102' },
    { type: 'Severity', description: 'High'    },
    { type: 'Module',   description: 'Product Listing' }
  );

  await page.goto(URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password',  'secret_sauce');
  await page.click('#login-button');

  // Apply sort: Price low → high
  await page.selectOption('.product_sort_container', 'lohi');

  // Grab all prices from the page
  const priceTexts = await page.locator('.inventory_item_price').allTextContents();
  const prices = priceTexts.map(p => parseFloat(p.replace('$', '')));

  console.log('Actual prices on page:', prices);

  // ❌ This assertion WILL fail — prices are NOT in sorted order
  // We verify by checking each price is <= the next one
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
  }
});


// ─── SCENARIO 3 ───────────────────────────────────────────────
// Known Bug: Cart badge count does NOT reset after checkout.
// Business expects: badge disappears after successful order.
// Actual result:    badge still shows item count post-checkout.
// Status: Bug raised → BUG-103 (regression from last release)
// ──────────────────────────────────────────────────────────────
test.fail('BUG-103 | cart badge persists after checkout completion', async ({ page }) => {

  test.info().annotations.push(
    { type: 'JIRA',        description: 'BUG-103'    },
    { type: 'Severity',    description: 'High'        },
    { type: 'Module',      description: 'Checkout'    },
    { type: 'Regression',  description: 'v2.3 release' }
  );

  await page.goto(URL);
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password',  'secret_sauce');
  await page.click('#login-button');

  // Add an item to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Verify badge shows 1
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Go through full checkout flow
  await page.locator('.shopping_cart_link').click();
  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'Ajay');
  await page.fill('[data-test="lastName"]',  'Khule');
  await page.fill('[data-test="postalCode"]', '411018');
  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  // Verify we reached the confirmation page
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

  // ❌ This assertion WILL fail — badge still shows "1" instead of disappearing
  await expect(page.locator('.shopping_cart_badge')).toBeHidden();
});


// ─── PASSING TEST (for contrast) ──────────────────────────────
// This one PASSES normally — showing test.fail() only where needed
// ──────────────────────────────────────────────────────────────
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