// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`Number: ${i}`);
}
// Output: 1, 2, 3, 4, 5


//playwright example

// Read table rows
const rows = await page.locator('table tr').count();
for (let i = 1; i <= rows; i++) {
  const text = await page.locator(`table tr:nth-child(${i})`).textContent();
  console.log(`Row ${i}: ${text}`);
}