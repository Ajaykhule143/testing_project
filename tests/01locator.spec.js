const { test , expect } = require ('@playwright/test');

test('Locator Test',async ({page}) => {    

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.waitForLoadState('networkidle'); // ✅ Fixed: replaced waitForTimeout with waitForLoadState
const logo = page.getByAltText("company-branding"); // ✅ Fixed: removed unnecessary await
await expect(logo).toBeVisible();
await page.waitForTimeout(4000);
await page.getByPlaceholder('username').fill('Admin');
await page.waitForTimeout(3000);
await page.getByPlaceholder('password').fill('admin123');
await page.waitForTimeout(3000);
await page.getByRole('button', {name:'Login'}).click(); // ✅ Fixed: changed type:'submit' to name:'Login'
    

}); 