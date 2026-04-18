//reverse() - Flip Array BACKWARDS

// JS Example
let abc = ['a', 'b', 'c'];
abc.reverse();
console.log(abc); // ['c', 'b', 'a']


// playwright Example
test('Test navigation in reverse order', async ({ page }) => {
  const menuItems = await page.$$eval('nav a', els => els.map(el => el.textContent));
  menuItems.reverse(); // Test from last menu to first
  
  for (let item of menuItems) {
    console.log(`Testing: ${item}`);
  }
});

// $$eval()
// Multiple elements se data extract karne ke liye use hota hai
// map()
// Array ko transform karta hai
// reverse()
// Order change karne ke liye (last → first)