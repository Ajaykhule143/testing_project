const { test, expect } = require('@playwright/test');

test('amazon project', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(3000);
    await page.locator("#twotabsearchtextbox").fill("iPhone 17 Pro Max");
    await page.waitForTimeout(3000);
    await page.locator("#nav-search-submit-button").click();

    const downpage = await page.locator("//span[text()='Reno15Pro mini 5G (Cocoa Brown, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers']");
    await downpage.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);

    await page.locator("//span[text()='Reno15Pro mini 5G (Cocoa Brown, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers']").click();
    await page.waitForTimeout(3000);

    await page.waitForTimeout(3000);
    const element = await page.locator("#a-autoid-5");
    await element.screenshot({ path: 'screenshot/' + 'oppo.png' });

});