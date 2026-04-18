//concat() - JOIN Two Arrays 
// JS Example
let arr1 = ['a', 'b'];
let arr2 = ['c', 'd'];
let combined = arr1.concat(arr2);
console.log(combined); // ['a', 'b', 'c', 'd']

// playwright Example
test('Combine desktop + mobile selectors', async ({ page }) => {
  const desktopSelectors = ['#desktop-btn', '#menu'];
  const mobileSelectors = ['#mobile-menu'];
  
  const allSelectors = desktopSelectors.concat(mobileSelectors);
  await page.$$eval(allSelectors.join(','), els => els.forEach(el => el.click()));
});