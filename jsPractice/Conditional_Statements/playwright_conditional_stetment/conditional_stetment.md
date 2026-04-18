
## 🟢 **Playwright Conditional Statements**

### 1. **Conditional Element Check**
```javascript
const { expect } = require('@playwright/test');

if (await page.locator('#login-button').isVisible()) {
  await page.click('#login-button');
} else {
  console.log('Login button not found');
}
```

### 2. **Conditional with Expect**
```javascript
// Check if element exists before interacting
if (await page.locator('.error-message').count() > 0) {
  await expect(page.locator('.error-message')).toBeVisible();
} else {
  await page.click('button[type="submit"]');
}
```

### 3. **Using `isVisible()` / `isEnabled()`**
```javascript
const submitButton = page.locator('button[type="submit"]');

if (await submitButton.isEnabled()) {
  await submitButton.click();
} else {
  console.log('Submit button is disabled');
}
```

### 4. **Conditional Navigation**
```javascript
const url = page.url();

if (url.includes('/login')) {
  await page.fill('#username', 'user@example.com');
  await page.fill('#password', 'password123');
  await page.click('#login');
} else if (url.includes('/dashboard')) {
  console.log('Already logged in');
}
```

### 5. **Advanced: Wait + Conditional**
```javascript
await page.waitForSelector('[data-testid="modal"]', { state: 'visible', timeout: 5000 }).catch(() => {
  // Modal didn't appear
  console.log('Modal not found');
});

if (await page.locator('[data-testid="modal"]').isVisible()) {
  await page.click('[data-testid="close-modal"]');
}
```

## 🔄 **Practical Example: Combined**

```javascript
// Check login status and act accordingly
const isLoggedIn = await page.locator('.user-profile').isVisible();

if (isLoggedIn) {
  console.log('User already logged in');
  await page.click('.user-profile');
} else {
  // Regular login flow
  await page.fill('#email', 'test@example.com');
  await page.click('#login-submit');
  
  // Verify login success
  await expect(page.locator('.welcome-message')).toContainText('Welcome!');
}
```

**Key Playwright conditionals:**
- `await locator.isVisible()`
- `await locator.isEnabled()`
- `await locator.count() > 0`
- `page.url().includes()`
- `try/catch` with `waitForSelector()`

Choose based on your testing needs! 🚀