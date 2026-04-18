//slice() - Copy PART of Array 

// JS Example
// JS Example
let full = [1, 2, 3, 4, 5];
let part = full.slice(1, 4); // From index 1, up to (not including) 4
console.log(part); // [2, 3, 4]
console.log(full); // [1, 2, 3, 4, 5] - unchanged!

// playwright Example
test('Get middle products only', async ({ page }) => {
  const allProducts = await page.$$eval('.product', els => els.map(el => el.textContent));
  const featured = allProducts.slice(1, -1); // Skip first and last
  
  console.log('Featured products:', featured);
});