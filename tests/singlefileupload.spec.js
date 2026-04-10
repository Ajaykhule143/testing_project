const {test, expect} = require('@playwright/test');

test('Single File Upload Test', async ({page}) => {
    await page.goto("https://www.automationtesting.co.uk/fileupload.html");
    await page.waitForTimeout(3000);

    await page.locator("//input[@name='fileToUpload']").setInputFiles("tests/uploadfile/playwright all.txt");
    await page.waitForTimeout(3000);

    pore_bhagyashree_29

});

