const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to start the Magic Number game
function magicNumberGame(lowerBound, upperBound) {
  let guess = Math.floor((lowerBound + upperBound) / 2);

  rl.question(`Is the number you're thinking of less than, greater than, or equal to ${guess}? (Enter 'less', 'greater', or 'equal'): `, (response) => {
    if (response.toLowerCase() === 'equal') {
      console.log(`Yay! The magic number is ${guess}!`);
      rl.close();
    } else if (response.toLowerCase() === 'greater') {
      magicNumberGame(guess + 1, upperBound); 
    } else if (response.toLowerCase() === 'less') {
      magicNumberGame(lowerBound, guess - 1); 
    } else {
      console.log("Please respond with 'less', 'greater', or 'equal'.");
      magicNumberGame(lowerBound, upperBound); 
    }
  });
}

// Start the game
console.log("Think of a number between 1 and 100, and I will try to guess it!");
magicNumberGame(1, 100);

