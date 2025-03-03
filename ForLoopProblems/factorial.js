const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate the factorial of a number
function factorial(n) {
  let result = 1;
  
  // Loop to calculate the factorial
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

rl.question('Enter a number to calculate its factorial: ', (input) => {
  const num = parseInt(input);

  // Check if the input is a valid positive integer
  if (isNaN(num) || num < 0) {
    console.log("Please enter a valid non-negative integer.");
  } else {
    // Calculate and display the factorial
    const fact = factorial(num);
    console.log(`${num}! = ${fact}`);
  }

  rl.close();
});
