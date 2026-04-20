0. Complete Playwright Class Example
js

Copy code
class EcommerceTester {
  // Fields
  baseUrl = 'https://example-ecommerce.com';
  selectors = {
    loginBtn: '#login',
    cart: '.cart',
    checkout: '#checkout'
  };
  
  // Constructor
  constructor(page) {
    this.page = page;
    this.testResults = [];
  }
  
  // Static utility
  static async launchBrowser() {
    // Launch logic
  }
  
  // Main methods
  async gotoHome() {
    await this.page.goto(this.baseUrl);
  }
  
  async addToCart(productName) {
    await this.page.fill('#search', productName);
    await this.page.click('.add-to-cart');
    this.testResults.push(`Added ${productName}`);
  }
  
  async checkout() {
    await this.page.click(this.selectors.cart);
    await this.page.click(this.selectors.checkout);
  }
  
  // Getter
  get cartCount() {
    return this.testResults.length;
  }
  
  // Report
  getReport() {
    return {
      testsRun: this.cartCount,
      results: this.testResults
    };
  }
}

// USAGE
test('Full e-commerce flow', async ({ page }) => {
  const tester = new EcommerceTester(page);
  
  await tester.gotoHome();
  await tester.addToCart('laptop');
  await tester.addToCart('mouse');
  await tester.checkout();
  
  console.log(tester.getReport());
});
🎯 Quick Class Reference
js

Copy code
class MyClass {
  // 1. Fields
  field = 'value';
  #private = 123;
  
  // 2. Constructor
  constructor(param) {
    this.param = param;
  }
  
  // 3. Methods
  method() { }
  
  // 4. Getters/Setters
  get prop() { }
  set prop(value) { }
  
  // 5. Static
  static util() { }
}

// Inheritance
class Child extends MyClass { }