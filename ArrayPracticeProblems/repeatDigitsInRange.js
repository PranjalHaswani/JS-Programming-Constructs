// Function to find numbers with repeated digits in a given range
function findRepeatedDigitsInRange(start, end) {
    let repeatedDigitsNumbers = [];
  
    // Loop through the range of numbers
    for (let num = start; num <= end; num++) {
      let numStr = num.toString();
  
      // Check if the number has repeated digits 
      if (numStr.length === 2 && numStr[0] === numStr[1]) {
        repeatedDigitsNumbers.push(num);
      }
    }
  
    return repeatedDigitsNumbers;
  }
  
  // Main function to execute the program
  function main() {
    let start = 0;
    let end = 100;
  
    let result = findRepeatedDigitsInRange(start, end);
    console.log("Numbers with repeated digits (from 0 to 100):", result);
  }
  
  main();
  