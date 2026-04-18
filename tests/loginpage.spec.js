const { test, expect } = require('@playwright/test');

test('OrangeHRM Login Test', async ({ page }) => {

  // 1. Open URL
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(3000); // Optional: Wait for a moment to ensure the page is fully loaded
  await page.locator("//input[@name='username']").fill("Admin");
  await page.waitForTimeout(3000); // Optional: Wait for a moment before entering the password
  await page.locator("//input[@name='password']").fill("admin123");
  await page.waitForTimeout(3000); // Optional: Wait for a moment before clicking the login button
  await page.locator("//button[@type='submit']").click();

});
 


























//   // 2. Wait for username field
//   await page.waitForSelector('input[name="username"]', { timeout: 3000 });

//   // 3. Enter Username
//   await page.fill('input[name="username"]', 'Admin');
//   await page.waitForTimeout(3000); // Optional: Wait for a moment before entering the password
//   // 4. Enter Password
//   await page.fill('input[name="password"]', 'admin123');

//   // 5. Click Login button
//   await page.click('button[type="submit"]');

//   // 6. Validate successful login (Dashboard visible)
//   await expect(page).toHaveURL(/dashboard/, { timeout: 3000 });

// });