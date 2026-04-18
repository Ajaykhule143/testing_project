const { test, expect } = require('@playwright/test');
test('Assertions', async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/register");
    await page.waitForTimeout(4000);
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
    await expect(page).toHaveTitle("nopCommerce demo store. Register");
    await page.waitForTimeout(4000);
    const logo = page.locator("//div[@class='header-logo']");
    await expect(logo).toBeVisible();
    await page.waitForTimeout(4000);
    const searchbox = page.locator("//input[@id='small-searchterms']");
    await expect(searchbox).toBeEnabled();
    await page.waitForTimeout(2000);
    const Male_Radio_Button = await page.locator("//input[@id='gender-male']");
    await Male_Radio_Button.click();
    await expect(Male_Radio_Button).toBeChecked();
    const regbutton = await page.locator("#register-button");
    await expect(regbutton).toHaveAttribute('type', 'submit');

    const text = await page.locator("//div[@class='page-title']")
    await expect(text).toHaveText('Register');
    await expect(text).toContainText('Regi');

    const firstname = await page.locator("#FirstName");
    await firstname.fill("Ashok");
    await expect(firstname).toHaveValue("Ashok")

    await page.locator("//a[text()='Computers']").click();
    await page.waitForTimeout(2000);
    const options = await page.locator("//h2//a")
    await expect(options).toHaveCount(3);
    await page.waitForTimeout(2000);
});