# 📚 **JavaScript Loops + Playwright - All in One Guide**

## 🎯 **What are Loops?**
**Loops** repeat code multiple times. Like repeating "Hello" 5 times without writing 5 lines!


## **🔥 Quick Cheat Sheet**

| Loop | Simple Use | Playwright Use | Best For |
|------|------------|----------------|----------|
| `for` | Numbers 1-10 | Table rows | Fixed count |
| `for...of` | Array items | Element list | Clean code |
| `forEach()` | Array process | Links/Buttons | One-time |
| `while` | Unknown count | Retry logic | Conditions |
| `do...while` | Min 1 run | Games/Spins | Guaranteed |

## **⚡ Pro Tips**
```javascript
// ✅ Always use await in Playwright loops
for (const item of await page.locator('.item').all()) {
  await item.click();  // Correct!
}

// ❌ Never do this
for (const item of page.locator('.item').all()) {  // Error!
```

## **🎮 Real Project Example**
```javascript
// E-commerce: Add all items under ₹500 to cart
const products = await page.locator('.product').all();
for (const product of products) {
  const price = await product.locator('.price').textContent();
  if (parseInt(price) < 500) {
    await product.click();
  }
}
```

**Loops = Automation Magic! 🪄 Save hours of work!*