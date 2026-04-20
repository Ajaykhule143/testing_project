// get - Like Property (Read)

class User {
  constructor(name) {
    this._name = name;
  }
  
  get name() {
    return this._name.toUpperCase();
  }
  
  set name(value) {
    this._name = value.toLowerCase();
  }
}

const user = new User('John');
console.log(user.name); // 'JOHN'
user.name = 'alice'; // Sets lowercase internally


// playwright example
class TestStatus {
  constructor() {
    this._passed = 0;
    this._failed = 0;
  }
  
  get total() {
    return this._passed + this._failed;
  }
  
  get passRate() {
    return this.total > 0 ? (this._passed / this.total) * 100 : 0;
  }
  
  pass() {
    this._passed++;
  }
  
  fail() {
    this._failed++;
  }
}