const { test, expect } = require('@playwright/test');

test('Simple dropdown', async ({ page }) =>{

await page.goto("https://testautomationpractice.blogspot.com/#");
await page.waitForTimeout(2000);
const countryDropdown = await page.locator("//select[@id='country']");
await countryDropdown.scrollIntoViewIfNeeded();
await page.waitForTimeout(3000);
await countryDropdown.selectOption({ label: 'Brazil' });
await page.waitForTimeout(3000);
const parent = await page.locator("//select[@id='country']")
await parent.selectOption("Japan"); //text
await page.waitForTimeout(3000);
await parent.selectOption({ value: 'india' });
await page.waitForTimeout(3000);
await parent.selectOption({ index: 4 });
await page.waitForTimeout(3000);
await page.selectOption("//select[@id='country']", "Australia");
await page.waitForTimeout(2000);

});