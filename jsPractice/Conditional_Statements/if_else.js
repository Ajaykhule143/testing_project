const age = 20;

if (age >= 18) {
  console.log("Adult"); // If the age is 18 or above, it will print "Adult"
} else if (age >= 13) {
  console.log("Teenager"); // If the age is between 13 and 17, it will print "Teenager"
} else {
  console.log("Child"); // If the age is below 13, it will print "Child"
}


const ajay = 10;
if (ajay >= 60) {
  console.log("Senior Citizen"); // If the age is 60 or above, it will print "Senior Citizen"
} else if (ajay >= 18) {
  console.log("Adult"); // If the age is between 18 and 59, it will print "Adult"
} else {
  console.log("Minor"); // If the age is below 18, it will print "Minor"
}


// playwright ex
const { expect } = require('@playwright/test');

if (await page.locator('#login-button').isVisible()) {
  await page.click('#login-button');
} else {
  console.log('Login button not found');
}