const { test, expect } = require('@playwright/test');

test.beforeAll(async () => {
    console.log("This is before all test cases")
});

test.beforeEach(async () => {
    console.log("This is before each test case")
});
test.afterAll(async () => {
    console.log("This is after all test cases")
});


test.describe('Login test cases', () => {
    test('test 1', async ({ page }) => {
        console.log("This is test 1")
    });
    test('test 2', async ({ page }) => {
        console.log("This is test 2")
    });
});

test.describe('Product test cases', () => {
    test('test 3', async ({ page }) => {
        console.log("This is test 3")
    });
    test('test 4', async ({ page }) => {
        console.log("This is test 4")
    });

});
