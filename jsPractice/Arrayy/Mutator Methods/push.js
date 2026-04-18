//  Mutator Methods (CHANGE the Original Array)

// pus() add in End of the Array

// JS Example
let fruits = ['apple', 'banana'];
fruits.push('orange'); // Adds to end
console.log(fruits); // ['apple', 'banana', 'orange']



// playwright Example
test('Collect all button texts', async ({ page }) => {
  const buttonTexts = [];
  
  // Add texts one by one
  buttonTexts.push(await page.textContent('#btn1'));
  buttonTexts.push(await page.textContent('#btn2'));// push in buttonTexts array
  
  console.log(buttonTexts); // ['Login', 'Register']
});