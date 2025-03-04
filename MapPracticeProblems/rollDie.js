// Function to simulate rolling a die and store the results in a map
function rollDieAndTrack() {
    // Initialize a map to track the count of each die roll
    let dieResults = new Map();
  
    // Initialize the counts for each die face (1-6)
    for (let i = 1; i <= 6; i++) {
      dieResults.set(i, 0);
    }
  
    // Variable to track whether a number has reached 10 times
    let rollCount = 0;
  
    while (true) {
      // Roll the die (random number between 1 and 6)
      let roll = Math.floor(Math.random() * 6) + 1;
  
      // Increment the count of the rolled number
      dieResults.set(roll, dieResults.get(roll) + 1);
      rollCount++;
  
      // Check if any number has reached 10 rolls
      if (Array.from(dieResults.values()).includes(10)) {
        break;
      }
    }
  
    // Find the number with the maximum count and the minimum count
    let maxRoll = Math.max(...dieResults.values());
    let minRoll = Math.min(...dieResults.values());
  
    // Get the numbers corresponding to the max and min counts
    let maxNumber = [...dieResults].find(([key, value]) => value === maxRoll)[0];
    let minNumber = [...dieResults].find(([key, value]) => value === minRoll)[0];
  
    // Output the results
    console.log("Die roll results:", dieResults);
    console.log("Number that reached maximum times:", maxNumber, "with", maxRoll, "rolls.");
    console.log("Number that reached minimum times:", minNumber, "with", minRoll, "rolls.");
  }
  
  // Execute the program
  rollDieAndTrack();
  