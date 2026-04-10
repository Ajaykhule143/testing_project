const { test, expect } = require('@playwright/test');

test('built_in_locators', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(4000);
    const logo = await page.getByAltText("company-branding");
    await expect(logo).toBeVisible();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.waitForTimeout(3000);    
    await page.getByRole('button', { name:'login'}).click();
    await page.waitForTimeout(3000);
    const userName = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(userName)).toBeVisible();
})