// constructor() - Initialize Object

class Person {
  constructor(name, age) { 
    this.name = name;       // name value this.name me store hogi
    this.age = age;         //age value this.age me store hogi
  }                         //👉 this = current object
}

const person = new Person('Alice', 25);
console.log(person.name); // 'Alice'
console.log(person.age); // 25



// playwright example
class TestData {
  constructor(browserName, url) {
    this.browser = browserName;
    this.baseUrl = url;
    this.testId = Date.now();
  }
  
  get fullUrl() {
    return `${this.baseUrl}/test/${this.testId}`;       //${} = variable ko string me daalna
  }
}

// Usage
const data = new TestData('chromium', 'https://example.com');
console.log(data.fullUrl);

//Whenever you see ${...} inside backticks, it just means: "put the value of this variable 
// right here in the string."