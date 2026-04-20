//Regular Methods


class Calculator {
  add(a, b) {
    return a + b;
  }
  
  multiply(a, b) {
    return a * b;
  }
}

const calc = new Calculator();
console.log(calc.add(29, 3));   // Output: 32
console.log(calc.multiply(29, 3)); // Output: 87


// playwright example
class FormFiller {
  constructor(page) {
    this.page = page;
  }
  
  async fillLogin(username, password) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
  }
  
  async submit() {
    await this.page.click('#submit');
  }
}
