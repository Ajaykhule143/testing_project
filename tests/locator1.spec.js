const { test, expect } = require('@playwright/test');

test('Locator1', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(4000);
    let logo = page.getByAltText('company-branding');
    await expect(logo).toBeVisible();
    await page.waitForTimeout(4000);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.waitForTimeout(4000);
    await page.getByRole('button', { type: 'submit' }).click();
    await page.waitForTimeout(4000);
    const username = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(username)).toBeVisible();





});