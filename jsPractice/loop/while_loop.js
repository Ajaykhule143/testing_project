let count = 1;
while (count <= 3) {
  console.log(`Count: ${count}`);
  count++;
}
// Output: 1, 2, 3
// "Condition true असेपर्यंत loop चालू राहतो"
// ⚠️ Important:
// 👉Agar count++ nahi likha → infinite loop ho jayega ❌



//playwright example
let tries = 0;
while (tries < 5) {
  if (await page.locator('#popup').isVisible()) {
    await page.click('#close');
    break;
  }
  await page.waitForTimeout(1000);
  tries++;
}