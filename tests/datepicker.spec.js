const { test, expect } = require('@playwright/test');

test('datepicker', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/#");
    await page.waitForTimeout(3000);

    const datepickerLocator = await page.locator("//p[text()='Date Picker 1 (mm/dd/yyyy): ']");
    await datepickerLocator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);

    const year = "2023";
    const month = "March";
    const day = "10";

    await page.locator("//input[@id='datepicker']").click();
    await page.waitForTimeout(3000);

    while (true) {
        const presentyear = await page.locator("//span[@class='ui-datepicker-year']").textContent();
        const presentmonth = await page.locator("//span[@class='ui-datepicker-month']").textContent();

        if (presentyear === year && presentmonth === month) {
            break;
        }
        await page.locator("//a[@title='Prev']").click();
    }
 
    await page.waitForTimeout(3000); 
    const dates = await page.$$("//a[@class='ui-state-default']");
    for (const dt of dates) {

        if (dt.textContent() == day) {
            await dt.click();
            break;

        }
    }
    await page.waitForTimeout(3000);

});