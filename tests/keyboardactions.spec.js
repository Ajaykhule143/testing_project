const { test, expect } = require('@playwright/test');

test('built_in_locators', async ({ page }) => {
    await page.goto("https://gotranscript.com/text-compare");
    await page.waitForTimeout(4000);
    await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("Hello, World!");
    await page.waitForTimeout(3000);
   
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.waitForTimeout(4000);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(4000);
    await page.keyboard.press('Control+V');
    

    
});           