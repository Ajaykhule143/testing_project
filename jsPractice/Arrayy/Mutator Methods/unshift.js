//unshift() - Adds to START

// JS Example
let tasks = ['task2', 'task3'];
tasks.unshift('task1'); // Adds to beginning
console.log(tasks); // ['task1', 'task2', 'task3']


// playwright Example
test('Add prerequisite step', async ({ page }) => {
  const testSteps = ['fill form', 'submit'];
  testSteps.unshift('navigate to page'); // Always first
  
  for (let step of testSteps) {
    console.log(`Executing: ${step}`);
  }
});

