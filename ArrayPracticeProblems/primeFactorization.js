// Function to find prime factors of a number and store them in an array
function primeFactorization(n) {
    let primeFactors = [];
  
    // Divide n by 2 to handle even numbers first
    while (n % 2 === 0) {
      primeFactors.push(2);
      n = n / 2;
    }
  
    // Check for odd numbers starting from 3
    for (let i = 3; i * i <= n; i += 2) {
      // While i divides n, store i and divide n
      while (n % i === 0) {
        primeFactors.push(i);
        n = n / i;
      }
    }
  
    // If n is a prime number greater than 2
    if (n > 2) {
      primeFactors.push(n);
    }
  
    return primeFactors;
  }
  
  // Main function to execute the program
  function main() {
    let n = 315; 
    console.log(`Prime factorization of ${n}:`);
  
    let factors = primeFactorization(n);
    console.log("Prime Factors: ", factors);
  }
 
  main();
  