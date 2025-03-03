const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;  
  }

  // Loop to check divisibility from 2 to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return true;  
}

rl.question('Enter a number: ', (input) => {
  const num = parseInt(input);

  // Check if the number is prime and display the result
  if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is not a prime number.`);
  }

  rl.close();
});
