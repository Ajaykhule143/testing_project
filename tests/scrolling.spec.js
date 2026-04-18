import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
        window.scrollBy(0, 500);
    })
    await page.waitForTimeout(3000);
    await page.evaluate(()=> {
        window.scrollBy(0, -500);


     })

const downpage = await page.locator("//h2[text()='Visitors']");
await downpage.scrollIntoViewIfNeeded();
await page.waitForTimeout(3000);

const upside = await page.locator("#Wikipedia1");
await upside.scrollIntoViewIfNeeded();
await page.waitForTimeout(3000);

});
