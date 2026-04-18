const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright'); // Browser module

test.describe('OrangeHRM Login - Complete Playwright Features', () => {
  let browser, context, page;

  test.beforeAll(async () => {
    // BROWSER & CONTEXT MANAGEMENT
    browser = await chromium.launch({ 
      headless: false, 
      slowMo: 500,
      args: ['--start-maximized']
    });
    context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      permissions: ['geolocation']
    });
  });

  test.beforeEach(async () => {
    // PAGE MANAGEMENT
    page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  // 1. BASIC INTERACTIONS
  test('01 - Basic Login with all interaction methods', async () => {
    // fill(), type(), click(), press()
    await page.fill('xpath=//input[@name="username"]', 'Admin');
    await page.type('xpath=//input[@name="password"]', 'admin123');
    await page.press('xpath=//input[@name="password"]', 'Enter'); // Enter key
    await page.waitForURL(/.*dashboard/);
  });

  // 2. ASSERTIONS & EXPECTATIONS
  test('02 - Complete Assertions', async () => {
    await page.fill('xpath=//input[@name="username"]', 'Admin');
    await page.fill('xpath=//input[@name="password"]', 'admin123');
    await page.click('xpath=//button[@type="submit"]');

    // URL, Visibility, Text, Attributes, Count
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.locator('xpath=//h6[contains(text(),"Dashboard")]')).toBeVisible();
    await expect(page.locator('xpath=//h6[contains(text(),"Dashboard")]')).toContainText('Dashboard');
    await expect(page.locator('xpath=//input[@name="username"]')).toHaveAttribute('placeholder', 'Username');
    await expect(page.locator('xpath=//div[contains(@class,"oxd-topbar")]')).toHaveCount(1);
  });

//   // 3. WAIT STRATEGIES
//   test('03 - All Wait Methods', async () => {
//     await page.waitForLoadState('networkidle');
//     await page.waitForSelector('xpath=//input[@name="username"]', { state: 'visible' });
//     await page.waitForFunction(() => document.readyState === 'complete');
    
//     await page.fill('xpath=//input[@name="username"]', 'Admin');
//     await page.waitForTimeout(2000); // Explicit wait
//   });

//   // 4. SCREENSHOTS & VIDEO
//   test('04 - Screenshots & Video Recording', async ({ page }) => {
//     await page.screenshot({ path: 'login-page.png', fullPage: true });
    
//     await page.fill('xpath=//input[@name="username"]', 'Admin');
//     await page.fill('xpath=//input[@name="password"]', 'admin123');
//     await page.screenshot({ path: 'form-filled.png' });
    
//     await page.click('xpath=//button[@type="submit"]');
//     await expect(page).toHaveURL(/.*dashboard/);
//   });

//   // 5. NETWORK INTERCEPTIONS
//   test('05 - Network Mocking & Interceptions', async ({ page }) => {
//     // Mock API response
//     await page.route('**/api/**', route => {
//       route.fulfill({
//         status: 200,
//         body: JSON.stringify({ success: true })
//       });
//     });

//     await page.fill('xpath=//input[@name="username"]', 'Admin');
//     await page.fill('xpath=//input[@name="password"]', 'admin123');
//     await page.click('xpath=//button[@type="submit"]');
//   });

//   // 6. FRAME HANDLING (Even though no iframe, demo structure)
//   test('06 - Frame Locators & Handling', async ({ page }) => {
//     // Check for frames/iframes
//     const frames = page.frames();
//     console.log(`Total frames: ${frames.length}`);
    
//     // Frame locator demo (if any)
//     const frame = page.frameLocator('xpath=//iframe');
//     if (await frame.locator('body').count() > 0) {
//       await frame.locator('body').click();
//     }
//   });

//   // 7. LOCATOR STRATEGIES (All types)
//   test('07 - All Locator Strategies', async ({ page }) => {
//     // CSS, XPath, Text, Role, TestID, getBy*
//     await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//     await page.getByLabel('Username').fill('Admin');
//     await page.getByPlaceholder('Username').fill('Admin');
//     await page.getByTestId('username').fill('Admin'); // if exists
    
//     await page.locator('text=Login').click();
//     await page.locator('css=input[name="password"]').fill('admin123');
//     await page.locator('xpath=//button[@type="submit"]').click();
//   });

//   // 8. VISUAL TESTING & PIXELMATCH
//   test('08 - Visual Regression Testing', async ({ page }) => {
//     await page.emulateMedia({ reducedMotion: 'reduce' });
    
//     // Baseline comparison (requires baseline images)
//     await expect(page).toHaveScreenshot('login-form.png', { 
//       maxDiffPixels: 100,
//       threshold: 0.2 
//     });
//   });

//   // 9. MOBILE EMULATION
//   test('09 - Mobile Viewport Testing', async ({ page }) => {
//     await page.setViewportSize({ width: 375, height: 667 });
//     await expect(page.locator('xpath=//h5[contains(text(),"Login")]')).toBeVisible();
//   });

//   // 10. GEOLOCATION & PERMISSIONS
//   test('10 - Geolocation Testing', async ({ page, context }) => {
//     await context.setGeolocation({ latitude: 40.7128, longitude: -74.0060 });
//     await context.grantPermissions(['geolocation']);
    
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   });

//   // 11. PDF GENERATION
//   test('11 - Generate PDF', async ({ page }) => {
//     await page.pdf({
//       path: 'login-page.pdf',
//       format: 'A4',
//       printBackground: true
//     });
//   });

//   // 12. CONSOLE & NETWORK MONITORING
//   test('12 - Console Logs & Network Events', async ({ page }) => {
//     page.on('console', msg => console.log('PAGE LOG:', msg.text()));
//     page.on('pageerror', error => console.log('PAGE ERROR:', error));
//     page.on('request', request => console.log('REQUEST:', request.url()));
//     page.on('response', response => console.log('RESPONSE:', response.status()));
    
//     await page.fill('xpath=//input[@name="username"]', 'Admin');
//   });

//   // 13. STORAGE & COOKIES
//   test('13 - LocalStorage, SessionStorage, Cookies', async ({ page, context }) => {
//     // Set storage
//     await context.addInitScript(() => {
//       localStorage.setItem('test', 'value');
//       sessionStorage.setItem('session', 'data');
//     });

//     // Get cookies
//     const cookies = await context.cookies();
//     console.log('Cookies:', cookies.length);

//     // Clear storage
//     await page.evaluate(() => {
//       localStorage.clear();
//       sessionStorage.clear();
//     });
//   });

//   // 14. FILE UPLOAD (Demo structure)
//   test('14 - File Upload Handling', async ({ page }) => {
//     const fileChooserPromise = page.waitForEvent('filechooser');
//     await page.click('xpath=//input[@type="file"]'); // if exists
//     const fileChooser = await fileChooserPromise;
//     await fileChooser.setFiles('test-file.txt');
//   });

//   // 15. DRAG & DROP (Demo)
//   test('15 - Drag & Drop', async ({ page }) => {
//     const source = page.locator('xpath=//div[@draggable="true"]');
//     const target = page.locator('xpath=//div[@data-drop-target]');
//     await source.dragTo(target);
//   });

//   // 16. TOOLTIP & HOVER TESTING
//   test('16 - Hover & Tooltip', async ({ page }) => {
//     await page.hover('xpath=//button[@type="submit"]');
//     await page.waitForSelector('xpath=//div[contains(@class,"tooltip")]', { state: 'visible' });
//   });
});