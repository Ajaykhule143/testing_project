const {test, expect} = require('@playwright/test');

test('assertions', async ({page}) => {

    await page.goto("https://demo.nopcommerce.com/register");
    await page.waitForTimeout(4000);
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
    await expect(page).toHaveTitle("nopCommerce demo store. Register");
    await page.waitForTimeout(3000);
})