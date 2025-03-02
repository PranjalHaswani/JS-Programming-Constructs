// Generate 5 random two-digit numbers between 10 and 99
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 90) + 10); 
}
// Calculate the sum of the random numbers
let sum = randomNumbers.reduce((acc, num) => acc + num, 0);

// Calculate the average
let average = sum / randomNumbers.length;

// Print the random numbers, their sum, and their average
console.log("Random Numbers: " + randomNumbers.join(", "));
console.log("Sum of the numbers: " + sum);
console.log("Average of the numbers: " + average);
