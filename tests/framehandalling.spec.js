// const { test, expect } = require('@playwright/test');

// test('frame handling', async ({ page }) => {

//     page.goto("https://ui.vision/demo/webtest/frames/");
//     await page.waitForTimeout(3000);

//     let all_frames = page.frames();
//     console.log("Total frames in the page: ", all_frames.length);
//     //Handaling frame with URl 
//     let frame2 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_2.html" });
//     await frame2.fill("xpath=//input[@type='text']", "Ajay the QA Engineer");
//     await page.waitForTimeout(3000);

//     let frame3 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });
//     await frame3.fill("xpath=//input[@type='text']", "Ajay the QA test Engineer");
//     await page.waitForTimeout(3000);

//     //Handalling frame with a frame name and frame locator

//     let frame1 = await page.frameLocator("//frame[@src='frame_1.html']")
//     await frame1.locator("//input[@name='mytext1']").fill("I am aajju don ");
//     await page.waitForTimeout(3000);

// });
const { test, expect } = require('@playwright/test');

test('frame handling', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForTimeout(3000);

    let all_frames = page.frames();
    console.log("Total frames in the page: ", all_frames.length);
    
    // Handling frame with URL 
    const frame2 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_2.html" });
    await frame2.fill("xpath=//input[@type='text']", "Ajay the QA Engineer");
    await page.waitForTimeout(3000);

    const frame3 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });
    await frame3.fill("xpath=//input[@type='text']", "Ajay the QA test Engineer");
    await page.waitForTimeout(3000);

    // Handling frame with frameLocator
    const frame1 = page.frameLocator("//frame[@src='frame_1.html']");
    await frame1.locator("//input[@name='mytext1']").fill("I am aajju don ");
    await page.waitForTimeout(3000);
});