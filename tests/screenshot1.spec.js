import { test } from '@playwright/test';

test('amazon page screenshot', async ({ page }) => {

  // Open website
  await page.goto('https://www.amazon.in/');

  // Wait for 3 seconds
  await page.waitForTimeout(3000);

  // Get current timestamp
  const time = Date.now();

  // Take screenshot with unique name
  await page.screenshot({
    path: `screenshot/${time}_homepage.png`
  });

});