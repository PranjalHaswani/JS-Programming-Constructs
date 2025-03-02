// Generate 5 random three-digit numbers
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 900) + 100); // Generates a number between 100 and 999
}

// Calculate the minimum and maximum values
let minValue = Math.min(...randomNumbers);
let maxValue = Math.max(...randomNumbers);

// Print the random numbers, the minimum and maximum values
console.log("Random Numbers: " + randomNumbers.join(", "));
console.log("Minimum value: " + minValue);
console.log("Maximum value: " + maxValue);
