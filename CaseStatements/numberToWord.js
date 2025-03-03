const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert the number to its word representation using switch
function numberToWord(num) {
  let word;
  switch(num) {
    case 0:
      word = "Zero";
      break;
    case 1:
      word = "One";
      break;
    case 2:
      word = "Two";
      break;
    case 3:
      word = "Three";
      break;
    case 4:
      word = "Four";
      break;
    case 5:
      word = "Five";
      break;
    case 6:
      word = "Six";
      break;
    case 7:
      word = "Seven";
      break;
    case 8:
      word = "Eight";
      break;
    case 9:
      word = "Nine";
      break;
    default:
      word = "Please enter a valid single digit number.";
  }
  return word;
}

rl.question('Enter a single digit number: ', (input) => {
  const num = parseInt(input);

  // Convert the number to word and display it
  console.log('The number in words is:', numberToWord(num));

  rl.close();
});
