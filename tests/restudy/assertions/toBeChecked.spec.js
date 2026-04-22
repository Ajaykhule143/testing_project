// tests/assertions/04-toBeChecked-orangehrm-simple.spec.js
import { test, expect } from '@playwright/test';

test('toBeChecked | OrangeHRM remember me checkbox', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(3000); // Optional: Wait for a moment to ensure the page is fully loaded
    await page.locator("//input[@name='username']").fill("Admin");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='password']").fill("admin123");
    await page.waitForTimeout(3000);
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(3000);
    // 🧪 SINGLE ASSERTION: "Remember Me" checkbox is unchecked by default
    await expect(page.locator('input[name="remember"]')).not.toBeChecked();
});