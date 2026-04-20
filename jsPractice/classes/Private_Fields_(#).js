//#privateField - Truly Private

class BankAccount {
  #balance = 0; // Private field
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // ERROR!


//Playwright example
class SecureSession {
  #sessionToken = null;
  
  async startSession(page) {
    this.#sessionToken = await page.evaluate(() => localStorage.getItem('token'));
  }
  
  async isAuthenticated() {
    return !!this.#sessionToken;
  }
}