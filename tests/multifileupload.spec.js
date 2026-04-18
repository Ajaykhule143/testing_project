const {test, expect} = require('@playwright/test');

test('Multiple File Upload Test', async ({page}) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.waitForTimeout(3000);

    await page.locator("//input[@type='file']")
    .setInputFiles(["tests/uploadfile/playwright all.txt"
        ,"tests/uploadfile/QA_Automation_Roadmap.pdf"
        ,"tests/uploadfile/QA_Automation_Tracker.xlsx"
    ]);
    await page.waitForTimeout(3000);


    });