const{test, expect}=require('@playwright/test');
test('test 1',async({page})=>{
console.log("This is test 1")
});

test('test 2',async({page})=>{
  test.fail();
console.log("This is test 2")
});
test('test 3',async({page})=>{
  test.fixme();
console.log("This is test 3")
});

test.skip('test 4',async({page})=>{
console.log("This is test 4")
});
test.only('test 5',async({page})=>{
//
  page.goto("https://www.amazon.in/");
console.log("This is test 5")
});
