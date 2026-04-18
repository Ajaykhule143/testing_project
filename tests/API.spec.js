
const { test, expect } = require("@playwright/test");
var userid;

test('API Testing using get request', async ({ request }) => {
    const response = await request.get("https://api.restful-api.dev/objects/5");
    const data = await response.json();
    expect(response.status()).toBe(200);
    console.log(data);
});

test('API Testing using post request', async ({ request }) => {
    const data = {
        "id": "7",
        "name": "Apple MacBook Pro 16",
        "data": {
            "year": 2019,
            "price": 2049.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
            "color": "silver"
        },
        "updatedAt": "2022-12-25T21:08:41.986Z"
    };

    const response = await request.post("https://api.restful-api.dev/objects", {
        data: data
    });

    const responseData = await response.json();
    expect(response.status()).toBe(200);
    console.log(responseData);
    userid = responseData.id;
});


test('API Testing using put request', async ({ request }) => {
    const data = {
        "id": "7",
        "name": "Apple MacBook Pro 16",
        "data": {
            "year": 2000,
            "price": 2049.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
            "color": "silver"
        },
        "updatedAt": "2022-12-25T21:08:41.986Z"
    };


    const response = await request.put("https://api.restful-api.dev/objects/" + "ff8081819d62221a019d70afb17c153a", {
        data: data
    });

    console.log(await response.json());
    expect(response.status()).toBe(200);
});


test('API Testing using delete request', async ({ request }) => {
    const response = await request.delete("https://api.restful-api.dev/objects/" + "ff8081819d62221a019d70afb17c153a");
    expect(response.status()).toBe(404);
});


//404 Not Found	      Not Found	        Update करण्यासाठी दिलेला resource अस्तित्वात नाही.
//200 OK              Success           Resource यशस्वीरित्या update झाला आणि response body परत दिली जाते.