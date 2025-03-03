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

// Function to find all prime numbers in the given range
function findPrimesInRange(start, end) {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);  
    }
  }
  return primes;
}

// Prompt the user for the range
rl.question('Enter the start of the range: ', (startInput) => {
  rl.question('Enter the end of the range: ', (endInput) => {
    const start = parseInt(startInput);
    const end = parseInt(endInput);

    // Find and display prime numbers in the range
    const primes = findPrimesInRange(start, end);
    if (primes.length > 0) {
      console.log(`Prime numbers between ${start} and ${end}:`, primes.join(', '));
    } else {
      console.log(`There are no prime numbers between ${start} and ${end}.`);
    }

    rl.close();
  });
});
