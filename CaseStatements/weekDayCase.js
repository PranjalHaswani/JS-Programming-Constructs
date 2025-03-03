const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert the number to its corresponding weekday using a switch case
function numberToWeekday(num) {
  let weekday;
  
  switch (num) {
    case 1:
      weekday = "Sunday";
      break;
    case 2:
      weekday = "Monday";
      break;
    case 3:
      weekday = "Tuesday";
      break;
    case 4:
      weekday = "Wednesday";
      break;
    case 5:
      weekday = "Thursday";
      break;
    case 6:
      weekday = "Friday";
      break;
    case 7:
      weekday = "Saturday";
      break;
    default:
      weekday = "Please enter a valid number between 1 and 7.";
  }
  
  return weekday;
}

rl.question('Enter a number between 1 and 7: ', (input) => {
  const num = parseInt(input);

  // Convert the number to weekday and display it
  console.log('The corresponding weekday is:', numberToWeekday(num));

  rl.close();
});
