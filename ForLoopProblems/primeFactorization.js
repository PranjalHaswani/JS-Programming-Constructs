const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to compute and print prime factors of a number
function primeFactors(n) {
  let factors = [];

  // Check for 2 as a factor (the only even prime)
  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }

  // Check for odd factors from 3 upwards
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }

  // If n is a prime number greater than 2, add it to factors
  if (n > 2) {
    factors.push(n);
  }

  return factors;
}

// Prompt the user for a number
rl.question('Enter a number to find its prime factors: ', (input) => {
  const num = parseInt(input);

  // Validate the input
  if (isNaN(num) || num <= 1) {
    console.log("Please enter a valid number greater than 1.");
  } else {
    // Compute and display the prime factors
    const factors = primeFactors(num);
    console.log(`Prime factors of ${num}: ${factors.join(', ')}`);
  }

  rl.close();
});
