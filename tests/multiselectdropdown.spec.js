const { test, expect } = require('@playwright/test');

test('Multiselect dropdown', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    await page.locator("//label[text()='Colors:']").scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.selectOption("//select[@id='colors']", ["red", "Yellow", "Green"]);
    await page.waitForTimeout(3000);
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('alert');
await page.waitForTimeout(3000);


    });

});