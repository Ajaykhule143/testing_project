 // super() - Call Parent Constructor/Method

 class Vehicle {
  constructor(make) {
    this.make = make;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make); // Call parent constructor
    this.model = model;
  }
}


// playwright example
class BaseTest {
  constructor(page, testName) {
    this.page = page;
    this.testName = testName;
    this.startTime = Date.now();
  }
  
  async beforeTest() {
    console.log(`Starting ${this.testName}`);
  }
}

class E2ETest extends BaseTest {
  constructor(page, testName, url) {
    super(page, testName); // Parent constructor
    this.url = url;
  }
  
  async beforeTest() {
    super.beforeTest(); // Parent method
    await this.page.goto(this.url);
  }
}