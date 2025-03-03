const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert the number to its weekday name
function numberToWeekday(num) {
  const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  
  // Check if the number is between 1 and 7
  if (num >= 1 && num <= 7) {
    return weekdays[num - 1]; 
  } else {
    return "Please enter a valid number between 1 and 7.";
  }
}

rl.question('Enter a number between 1 and 7: ', (input) => {
  const num = parseInt(input);

  // Convert the number to weekday and display it
  console.log('The corresponding weekday is:', numberToWeekday(num));

  rl.close();
});
