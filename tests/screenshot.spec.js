const {test, expect} = require('@playwright/test');

test('screenshot', async ({page}) => {  
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(4000);
    await page.screenshot({path:'screenshot/'+'homepage.png'});

});
test('screenshot2', async ({page}) => {  
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(4000);
    await page.screenshot({path:'screenshot/'+'fullpage.png', fullPage:true});
    
});