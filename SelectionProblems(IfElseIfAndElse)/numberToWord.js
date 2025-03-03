const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert the number to its word representation
function numberToWord(num) {
  const words = [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
  ];
  
  if (num >= 0 && num <= 9) {
    return words[num];
  } else {
    return "Please enter a valid single-digit number.";
  }
}

rl.question('Enter a single-digit number: ', (input) => {
  const num = parseInt(input);

  // Convert the number to word and display it
  console.log('The number in words is:', numberToWord(num));

  rl.close();
});
