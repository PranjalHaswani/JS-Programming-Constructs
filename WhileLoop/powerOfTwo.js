const n = parseInt(process.argv[2]);

// Check if the input is valid
if (isNaN(n) || n < 0) {
  console.log("Please provide a valid positive integer n.");
} else {
  let power = 1;
  let i = 0;

  console.log(`Table of powers of 2 less than or equal to 2^${n} until 256 is reached:`);

  // While loop to print powers of 2 until the value reaches 256 
  while (power <= 256 && i <= n) {
    console.log(`2^${i} = ${power}`);
    i++;
     // Calculate the next power of 2
    power = Math.pow(2, i);
  }
}
