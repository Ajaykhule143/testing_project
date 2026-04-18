const {test,expect}=require('@playwright/test')

test('sample test', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain("Harry Potter")
        await page.waitForTimeout(3000);
        await dialog.accept(" codewithAJ ");
    });

    const alertbutton = await page.locator("//button[text()='Prompt Alert']");
    await alertbutton.click();
    await page.waitForTimeout(3000);

});