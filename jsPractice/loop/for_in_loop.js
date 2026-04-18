const person = { name: 'Amit', age: 25, city: 'Delhi' };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output: name: Amit, age: 25, city: Delhi

// "Object मधील प्रत्येक key आणि त्याची value print करत आहे"

// ⚠️ Important (Interview):
// for...in → keys (property names) deta hai
// for...of → values deta hai (array me use hota hai)



//playwright example
const fields = { email: 'test@gmail.com', pass: '123' };
for (const field in fields) {
  await page.fill(`#${field}`, fields[field]);
}