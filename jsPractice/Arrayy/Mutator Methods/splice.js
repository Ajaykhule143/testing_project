//  splice() - Remove/Replace/Insert ANYWHERE

// JS Example
let colors = ['red', 'green', 'blue'];
colors.splice(1, 1, 'yellow'); // Start at index 1, remove 1, add 'yellow'
console.log(colors); // ['red', 'yellow', 'blue']

// array.splice(startIndex, deleteCount, newItems...)

// startIndex	kaha se start karna
// deleteCount	kitne elements remove karne
// newItems	kya add/replace karna hai

// playwright Example
test('Replace failed test selector', async ({ page }) => {
  const selectors = ['.btn-old', '.btn-submit'];
  selectors.splice(0, 1, '.btn-new'); // Replace first selector
  
  await page.click(selectors[0]); // Now uses '.btn-new'
});