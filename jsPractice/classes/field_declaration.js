//Field Declarations

 class Config {
  apiUrl = 'https://api.example.com'; // Public field
  #debug = true; // Private field
  
  constructor() {
    this.version = '1.0.0';
  }
}

//Playwright example
class TestConfig {
  browser = 'chromium';
  headless = true;
  timeout = 30000;
  baseUrl = 'https://example.com';
  
  constructor(testName) {
    this.testName = testName;
  }
}