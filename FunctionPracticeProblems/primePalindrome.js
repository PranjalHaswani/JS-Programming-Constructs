function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; 
      }
    }
    return true; 
  }
  
  // Function to get the palindrome of a number
  function getPalindrome(num) {
    
    return parseInt(num.toString().split('').reverse().join(''));
  }
  
  // Function to check if a number and its palindrome are both prime
  function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
      console.log(`${num} is a prime number.`);
      
      const palindrome = getPalindrome(num);
      console.log(`The palindrome of ${num} is ${palindrome}.`);
  
      if (isPrime(palindrome)) {
        console.log(`The palindrome ${palindrome} is also a prime number.`);
      } else {
        console.log(`The palindrome ${palindrome} is not a prime number.`);
      }
    } else {
      console.log(`${num} is not a prime number.`);
    }
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Take number input from the user
  rl.question('Enter a number: ', (num) => {
    num = parseInt(num); 
    checkPrimeAndPalindrome(num); 
    rl.close();
  });
  