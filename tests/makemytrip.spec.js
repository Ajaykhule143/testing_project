const { test, expect } = require('@playwright/test');

test('Make My Trip dropdown handling', async ({ page }) => {

    // Step 1: Open website
    await page.goto("https://www.makemytrip.com/");
    await page.waitForTimeout(3000);

    // Step 2: Wait for page load
    await page.waitForLoadState('domcontentloaded');

    // Step 3: Close login popup (IMPORTANT FIX)
    await page.locator('body').click();

    // Step 4: Click on From City field
    await page.locator("//input[@data-cy='fromCity']").click();

    // Step 5: Type city name (optional but better)
    await page.locator("//input[@data-cy='fromCity']").fill("Mumbai");

    // Step 6: Wait for dropdown suggestions
    await page.waitForSelector("//p[@class='revampedAirportName']");

    // Step 7: Capture all options
    const options = await page.$$("//p[@class='revampedAirportName']");

    // Step 8: Loop through options and select Mumbai
    for (let option of options) {
        const text = await option.textContent();
        console.log(text);

        if (text && text.includes("Mumbai")) {
            await option.click();
            break;
        }
    }

    // Step 9: Wait to see result
    await page.waitForTimeout(3000);

});