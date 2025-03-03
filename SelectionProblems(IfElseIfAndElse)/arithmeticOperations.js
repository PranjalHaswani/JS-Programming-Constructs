const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform the arithmetic operations and find the max and min
function findMaxMin(a, b, c) {
  const result1 = a + (b * c); 
  const result2 = (a % b) + c;
  const result3 = c + (a / b); 
  const result4 = (a * b) + c; 

  // Calculate max and min
  const maxResult = Math.max(result1, result2, result3, result4);
  const minResult = Math.min(result1, result2, result3, result4);

  // Return the results
  return {
    result1,
    result2,
    result3,
    result4,
    maxResult,
    minResult
  };
}

rl.question('Enter the first number (a): ', (inputA) => {
  const a = parseFloat(inputA);

  rl.question('Enter the second number (b): ', (inputB) => {
    const b = parseFloat(inputB);

    rl.question('Enter the third number (c): ', (inputC) => {
      const c = parseFloat(inputC);

      // Perform the operations and find the max and min
      const { result1, result2, result3, result4, maxResult, minResult } = findMaxMin(a, b, c);

      // Display the results
      console.log(`Result 1 (a + b * c): ${result1}`);
      console.log(`Result 2 (a % b + c): ${result2}`);
      console.log(`Result 3 (c + a / b): ${result3}`);
      console.log(`Result 4 (a * b + c): ${result4}`);
      console.log(`Maximum result: ${maxResult}`);
      console.log(`Minimum result: ${minResult}`);

      rl.close();
    });
  });
});
