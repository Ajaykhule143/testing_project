import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(3000);   // Optional: Wait for a moment before entering the username
    await page.getByRole('textbox', { name: 'Enter Name' }).fill('ajay');
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Enter EMail' }).fill('ajkhule@gmail.com');
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Enter Phone' }).fill('9876541234');
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Address:' }).fill('asfdgb');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await page.locator('.form-group > div:nth-child(9)').click();
    await page.waitForTimeout(3000);   

    await page.getByLabel('Country:').selectOption('brazil');
    await page.getByLabel('Colors:').selectOption('green');
    await page.getByLabel('Sorted List:').selectOption('deer');
    await page.waitForTimeout(3000);
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
   
    await page.getByRole('button', { name: 'Simple Alert' }).click();
   
});