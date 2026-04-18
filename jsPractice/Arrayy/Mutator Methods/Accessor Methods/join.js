// join() - Convert Array to STRING

// JS Example
// JS Example
let words = ['hello', 'world'];
let sentence = words.join(' '); // 'hello world'
console.log(sentence);


// playwright Example
test('Search with multiple keywords', async ({ page }) => {
  const keywords = ['laptop', 'cheap', 'gaming'];
  const searchQuery = keywords.join(' '); // 'laptop cheap gaming'
  
  await page.fill('#search', searchQuery);
  await page.click('#search-btn');
});