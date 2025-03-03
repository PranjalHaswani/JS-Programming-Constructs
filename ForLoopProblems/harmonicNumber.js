const n = parseInt(process.argv[2]);

// Check if the input is valid
if (isNaN(n) || n <= 0) {
  console.log("Please provide a valid positive integer n.");
} else {
  // Variable to store the harmonic number
  let harmonicNumber = 0;

  // Loop to calculate the nth harmonic number
  for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
  }

  // Print the nth harmonic number
  console.log(`The ${n}th harmonic number is: ${harmonicNumber}`);
}
