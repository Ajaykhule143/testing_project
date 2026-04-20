// class Keyword - Create Class

// Basic Structure
class MyClass {
  constructor(name) {
    this.name = name;
  }
  
  sayHello() {
    return `Hello ${this.name}`;
  }
}

// Usage
const obj = new MyClass('John');
console.log(obj.sayHello()); // "Hello John"





// playwright example
class PageHelper {
  constructor(page) {
    this.page = page;
  }
  
  async clickButton(selector) {
    await this.page.click(selector);
  }
}

// Usage
test('Use PageHelper', async ({ page }) => {
  const helper = new PageHelper(page);
  await helper.clickButton('#login');
});