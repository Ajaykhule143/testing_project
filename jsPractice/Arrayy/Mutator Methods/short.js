//sort() - Sort Array
// JS Example
let nums = [5, 2, 10, 1];
nums.sort((a, b) => a - b); // Ascending
console.log(nums); // [1, 2, 5, 10]

// (a, b) => a - b

// Ye decide karta hai kaun pehle aayega

// Condition	Return Value	Result
// a - b < 0	negative	    a pehle aayega
// a - b > 0	positive	    b pehle aayega
// a - b = 0	same	        order same rahega

// playwright Example
test('Sort products by price', async ({ page }) => {
  const prices = await page.$$eval('.price', els => 
    els.map(el => parseFloat(el.textContent.replace('$', '')))
  );
  
  prices.sort((a, b) => a - b); // Cheapest first
  console.log('Sorted prices:', prices);
});