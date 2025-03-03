const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to simulate the coin flip game
function flipCoin() {
  let headsCount = 0;
  let tailsCount = 0;

  // Function to simulate flipping the coin
  function flip() {
    // Randomly choose either 'Heads' or 'Tails'
    return Math.random() < 0.5 ? 'Heads' : 'Tails';
  }

  // While loop to continue flipping until either Heads or Tails reaches 11
  while (headsCount < 11 && tailsCount < 11) {
    const result = flip();
    
    if (result === 'Heads') {
      headsCount++;
    } else {
      tailsCount++;
    }

    console.log(`Heads: ${headsCount} | Tails: ${tailsCount}`);

    // Check if we have a winner
    if (headsCount === 11) {
      console.log('Heads wins 11 times!');
      rl.close();
      return;
    } else if (tailsCount === 11) {
      console.log('Tails wins 11 times!');
      rl.close();
      return;
    }
  }
}

// Start the game
console.log("Starting the coin flip game. Either Heads or Tails must win 11 times!");
flipCoin();
