const names = ['Ram', 'Shyam', 'Geeta'];
names.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});
// Output: 1. Ram, 2. Shyam, 3. Geeta

//Ye array ke har element par ek-ek baar run hota hai

// Important Points (Interview)
// forEach() array ka built-in loop hai
// Ye automatically sab elements pe run hota hai
// Isme break ya continue use nahi kar sakte ❌
// Mostly data print/iterate ke liye use hota hai


//playwright example

const links = await page.locator('a').all();
links.forEach(async (link, i) => {
  const href = await link.getAttribute('href');
  console.log(`${i + 1}. ${href}`);
});


// Short & clear explanation:

// page.locator('a').all() → page ke saare links (elements) ek list me le raha hai
// forEach → har link par loop chala raha hai
// link.getAttribute('href') → har link ka URL nikal raha hai
// ${i + 1} → numbering 1 se start kar raha hai

// ⚠️ Important:
// 👉 forEach async ke saath sahi kaam nahi karta ❌
// 👉 Better hai for...of use karo ✅