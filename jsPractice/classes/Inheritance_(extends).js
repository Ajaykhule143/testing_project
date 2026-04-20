//extends - Inherit from Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}

const dog = new Dog('Rex');
console.log(dog.speak()); // 'Rex barks'






// playwright example
  class BasePage {
  constructor(page) {
    this.page = page;
  }
  
  async goto(url) {
    await this.page.goto(url);
  }
  
  async takeScreenshot(name) {
    await this.page.screenshot({ path: `${name}.png` });
  }
}

class LoginPage extends BasePage {
  async login(username, password) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-btn');
  }
}

// Usage
test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto('/login');
  await loginPage.login('user', 'pass');
  await loginPage.takeScreenshot('login-success');
});
