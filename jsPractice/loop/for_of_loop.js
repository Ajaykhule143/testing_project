const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(`Color: ${color}`);
}
// Output: red, green, blue

//playwright example
const buttons = await page.locator('button').all();
for (const button of buttons) {
  const text = await button.textContent();
  console.log(`Button: ${text}`);
}