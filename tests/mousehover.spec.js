const {test, expect}=require ('@playwright/test');

test('mouse hover action',async ({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.waitForTimeout(3000);
    await page.locator("//span[@role='button']").click();
    await page.waitForTimeout(3000);
    const login = await page.locator("//span[text()='Login']");
    await login.hover();
    await page.waitForTimeout(3000);
    await page.locator("//div[text()='Orders']").click();
    await page.waitForTimeout(3000);
    
});
