// lastIndexOf() - Find LAST POSITION

// JS Example
let duplicates = ['a', 'b', 'a'];
console.log(duplicates.lastIndexOf('a')); // 2 (last occurrence)

// playwright Example

test('Find last occurrence', async ({ page }) => {
  const history = ['login', 'dashboard', 'login'];
  const lastLogin = history.lastIndexOf('login'); // 2
});