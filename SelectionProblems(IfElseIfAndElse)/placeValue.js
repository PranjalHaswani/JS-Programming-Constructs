const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert the number to its place value 
function numberToPlaceValue(num) {
  const placeValues = [
    "Unit", "Ten", "Hundred", "Thousand", "Ten Thousand", "Lakh", "Ten Lakh", "Crore"
  ];
  
  let placeValueIndex = Math.log10(num);
  
  // Check if the number is a power of 10
  if (Number.isInteger(placeValueIndex) && num > 0) {
    return placeValues[placeValueIndex] || "Place value not found";
  } else {
    return "Please enter a valid power of 10 number (1, 10, 100, 1000, ...)";
  }
}

rl.question('Enter a number (1, 10, 100, 1000, etc.): ', (input) => {
  const num = parseInt(input);

  // Convert the number to place value and display it
  console.log('The corresponding place value is:', numberToPlaceValue(num));

  rl.close();
});
