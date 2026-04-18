// pop() - Removes from END

// JS Example
let numbers = [1, 2, 3];
let last = numbers.pop(); // Removes 3, returns 3
console.log(numbers); // [1, 2]
console.log(last); // 3




// playwright Example
test('Process URLs one by one', async ({ page }) => {
  const urls = ['/home', '/products', '/checkout'];
  const lastUrl = urls.pop(); // '/checkout'
  
  await page.goto(lastUrl);
});