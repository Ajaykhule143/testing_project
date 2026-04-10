const {test,expect}=require('@playwright/test')

test('sample test', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await page.waitForTimeout(3000);
        await dialog.accept();
    });

    const alertbutton = await page.locator("//button[text()='Simple Alert']");
    await alertbutton.click();

});