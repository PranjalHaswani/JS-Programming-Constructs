const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function for unit conversion based on the choice
function convertLength(choice, value) {
  let result;
  switch (choice) {
    case 1:
      // Feet to Inches
      result = value * 12;
      break;
    case 2:
      // Feet to Meters
      result = value * 0.3048;
      break;
    case 3:
      // Inches to Feet
      result = value / 12;
      break;
    case 4:
      // Meters to Feet
      result = value / 0.3048;
      break;
    default:
      result = "Invalid choice. Please select a valid option.";
  }
  return result;
}

// Prompt the user for a conversion choice
rl.question('Choose a conversion option:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\nEnter your choice: ', (choiceInput) => {
  const choice = parseInt(choiceInput);

  // Prompt the user for the value to convert
  rl.question('Enter the value to convert: ', (valueInput) => {
    const value = parseFloat(valueInput);

    // Perform the conversion and display the result
    const result = convertLength(choice, value);
    console.log('Converted value:', result);

    rl.close();
  });
});
