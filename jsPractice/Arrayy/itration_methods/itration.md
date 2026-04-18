3. Iteration Methods (Loop Through Array)
forEach() - Loop (No Return Value)
js

Copy code
// JS Example
[1, 2, 3].forEach(num => console.log(num * 2)); // 2, 4, 6
Playwright Example:

js

Copy code
test('Click all buttons', async ({ page }) => {
  const buttons = await page.$$('button');
  buttons.forEach(async (button, index) => {
    await button.click();
    console.log(`Clicked button ${index}`);
  });
});
map() - Transform Each Item (NEW Array)
js

Copy code
// JS Example
let doubled = [1, 2, 3].map(x => x * 2); // [2, 4, 6]
Playwright Example:

js

Copy code
test('Extract clean URLs', async ({ page }) => {
  const rawUrls = await page.$$eval('a', els => els.map(el => el.href));
  const cleanUrls = rawUrls.map(url => url.replace(/\/$/, '')); // Remove trailing slash
  
  console.log(cleanUrls);
});
filter() - Keep Items Matching Condition
js

Copy code
// JS Example
let bigNums = [1, 5, 3, 8, 2].filter(x => x > 3); // [5, 8]
Playwright Example:

js

Copy code
test('Filter expensive products', async ({ page }) => {
  const products = await page.$$eval('.product', els => 
    els.map(el => ({
      name: el.textContent,
      price: parseFloat(el.querySelector('.price')?.textContent || 0)
    }))
  );
  
  const expensive = products.filter(p => p.price > 100);
  console.log('Expensive:', expensive);
});
reduce() - Combine All Items
js

Copy code
// JS Example
let sum = [1, 2, 3].reduce((total, num) => total + num, 0); // 6
Playwright Example:

js

Copy code
test('Calculate cart total', async ({ page }) => {
  const prices = await page.$$eval('.cart-item .price', els => 
    els.map(el => parseFloat(el.textContent.replace('$', '')))
  );
  
  const total = prices.reduce((sum, price) => sum + price, 0);
  expect(total).toBeGreaterThan(50);
});
