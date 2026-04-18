const {test, expect} = require('@playwright/test');

test('Drag and Drop Test', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/#");
    await page.waitForTimeout(3000);
    const draganddrop = await page.locator("//h2[text()='Drag and Drop']");
    await draganddrop.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    const source = await page.locator("//div[@id='draggable']");
    const target = await page.locator("//div[@id='droppable']");
    await source.dragTo(target);
    await page.waitForTimeout(3000);
    



});
