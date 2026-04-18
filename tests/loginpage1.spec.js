import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    


    await page.waitForTimeout(3000);   // Optional: Wait for a moment before entering the username
    await page.getByRole('textbox').nth(1).fill('Admin');
    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
    await page.getByRole('option', { name: 'Admin' }).click();
   
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Dr.');
    await page.getByText('Dr.tft Ács Ferenc').click();
    await page.getByText('-- Select --').click();
    await page.getByRole('option', { name: 'Enabled' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
});