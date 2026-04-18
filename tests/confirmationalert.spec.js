const {test,expect}=require('@playwright/test')

test('sample test', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await page.waitForTimeout(3000);
        await dialog.dismiss();
    });

    const alertbutton = await page.locator("//button[text()='Confirmation Alert']");
    await alertbutton.click();
    await expect(page.locator("//p[text()='You pressed Cancel!']")).toHaveText("You pressed Cancel!");
    await page.waitForTimeout(3000);

});