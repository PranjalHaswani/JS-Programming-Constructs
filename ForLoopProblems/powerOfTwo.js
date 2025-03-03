const n = parseInt(process.argv[2]);

// Check if the input is valid
if (isNaN(n) || n < 0) {
  console.log("Please provide a valid positive integer n.");
} else {
  // Loop to calculate and print powers of 2
  console.log(`Table of powers of 2 less than or equal to 2^${n}:`);
  for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
  }
}
