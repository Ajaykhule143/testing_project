let num = 1;
do {
  console.log(`Number: ${num}`);
  num++;
} while (num <= 10);
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// 🔥 Difference (while vs do...while):
// 👉 while loop:
// Pehle condition check, phir run
// 👉 do...while loop:
// Pehle run, phir condition check

// "हा loop किमान एकदा तरी नक्की चालतो"
// ⚠️ Important:
// 👉 Chahe condition false ho, fir bhi ek baar run hoga


//playwright example
const btn = page.locator('#spin-wheel');
do {
  await btn.click();
  await page.waitForTimeout(2000);
  console.log('Spinning...');
} while (await btn.isEnabled());


