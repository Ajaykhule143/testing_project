// shift() remove from start of  array

// JS Example
let queue = ['first', 'second'];
let first = queue.shift(); // Removes 'first'
console.log(queue); // ['second']


// playwright Example
test('Process test steps sequentially', async ({ page }) => {
  const steps = ['login', 'search', 'add-to-cart'];
  const currentStep = steps.shift(); // 'login'
  
  if (currentStep === 'login') {
    await page.fill('#username', 'user');
  }
});