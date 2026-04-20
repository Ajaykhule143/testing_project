//static - Call on Class (Not Instance)

class MathUtils {
  static PI = 3.14159;
  
  static circleArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtils.circleArea(5)); // 78.54








// playwright example
class TestUtils {
  static async wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }
  
  static generateId() {
    return 'test-' + Date.now();
  }
}

// Usage - NO instance needed!
await TestUtils.wait(2);
const testId = TestUtils.generateId();