const {test , expect} = require('@playwright/test');        

test ('Right Click Test', async ({page}) => {

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    await page.waitForTimeout(3000);

    const rightclick = await page.locator("//span[text()='right click me']");
    await rightclick.click({ button: 'right' });
    await page.waitForTimeout(3000);

});