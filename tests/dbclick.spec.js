const{test,expect}=require('@playwright/test');

test('Double Click Test',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/#");
    await page.waitForTimeout(3000);
    const doubleclick = await page.locator("//h2[text()='Double Click']");
    await doubleclick.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    const doubleclickbutton = await page.locator("//button[text()='Copy Text']");
    await doubleclickbutton.dblclick();
    await page.waitForTimeout(3000);
    const pestedtext = await page.locator("#field2");
    await expect(pestedtext).toHaveValue("Hello World!");
    await page.waitForTimeout(3000);
    const mousehover = await page.locator("//button[text()='Point Me']");
    await mousehover.hover();
    await page.waitForTimeout(3000);
    await page.locator("//a[text()='Mobiles']").click();
    await page.waitForTimeout(3000);

});