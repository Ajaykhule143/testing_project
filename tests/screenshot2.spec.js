import { test } from '@playwright/test';

test('amazon page screenshot', async ({ page }) => {

  // Open website
  await page.goto('https://www.amazon.in/');

  // Wait for 3 seconds
  await page.waitForTimeout(3000);
  const element = await page.locator("//img[@alt='Apay_Travel']");
  await element.screenshot({path: 'screenshot/' + 'element_screenshot.png'});

});