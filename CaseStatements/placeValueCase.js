const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert the number to its place value using switch case
function numberToPlaceValue(num) {
  let placeValue;
  
  switch (num) {
    case 1:
      placeValue = "Unit";
      break;
    case 10:
      placeValue = "Ten";
      break;
    case 100:
      placeValue = "Hundred";
      break;
    case 1000:
      placeValue = "Thousand";
      break;
    case 10000:
      placeValue = "Ten Thousand";
      break;
    case 100000:
      placeValue = "Lakh";
      break;
    case 1000000:
      placeValue = "Ten Lakh";
      break;
    case 10000000:
      placeValue = "Crore";
      break;
    default:
      placeValue = "Please enter a valid power of 10 number (1, 10, 100, 1000, ...)";
  }
  
  return placeValue;
}

rl.question('Enter a number (1, 10, 100, 1000, etc.): ', (input) => {
  const num = parseInt(input);

  // Convert the number to place value and display it
  console.log('The corresponding place value is:', numberToPlaceValue(num));

  rl.close();
});
