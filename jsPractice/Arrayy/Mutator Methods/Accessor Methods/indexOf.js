//indexOf() - Find FIRST POSITION

// JS Example
let animals = ['cat', 'dog', 'cat'];
console.log(animals.indexOf('cat')); // 0 (first occurrence)

// playwright Example
test('Find menu item position', async ({ page }) => {
  const menu = ['Home', 'Products', 'About'];
  const homeIndex = menu.indexOf('Home'); // 0
  
  await page.click(`nav li:nth-child(${homeIndex + 1})`);
});