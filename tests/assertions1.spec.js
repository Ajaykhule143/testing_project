const { test, expect } = require('@playwright/test');

test('assertions1', async ({ page }) => {

await page.goto("https://demo.nopcommerce.com/register");
await page.waitForTimeout(4000);
await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
await expect(page).toHaveTitle("nopCommerce demo store. Register");
await page.waitForTimeout(3000);
const logo = await page.locator("//div[@class='header-logo']");
await expect(logo).toBeVisible();
const serchBox = await page.locator("//input[@id='small-searchterms']");
await expect(serchBox).toBeVisible();
await page.waitForTimeout(3000);

const male_radio_button = await page.locator("//input[@id='gender-male']");
await male_radio_button.click();
await expect(male_radio_button).toBeChecked();

const regbutton = await page.locator("#register-button");
await expect(regbutton).toHaveAttribute('type','submit');

const text = await page.locator("//div[@class='page-title']");
await expect(text).toHaveText("Register");
await expect(text).toContainText('Regi');

const firstname = await page. locator("#FirstName");
await firstname.fill("Ajay");
await expect(firstname) .toHaveValue("Ajay");

await page. locator("//a[text()='Computers']") . click();
await page.waitForTimeout(2000);

//this assertion is not working  because the website has been not responding next

// const options=await page. locator("//h2//a");
// await expect(options).toHaveCount(3);
// await page.waitForTimeout(5000);

});