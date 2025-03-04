// Function to generate 10 random 3-digit numbers
function generateRandomNumbers() {
    let randomNumbers = [];
    
    for (let i = 0; i < 10; i++) {
        // Generates numbers between 100 and 999
      let randomNumber = Math.floor(Math.random() * 900) + 100; 
      randomNumbers.push(randomNumber);
    }
    
    return randomNumbers;
  }
  
  // Function to sort the array and find the 2nd largest and 2nd smallest numbers
  function findSecondLargestAndSmallestSorted(numbers) {
    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);
  
    let secondSmallest = numbers[1];
    let secondLargest = numbers[numbers.length - 2];
  
    return { secondLargest, secondSmallest };
  }
  
  // Main function to execute the program
  function main() {
    let randomNumbers = generateRandomNumbers();
    console.log("Generated Random Numbers: ", randomNumbers);
  
    let result = findSecondLargestAndSmallestSorted(randomNumbers);
    console.log("Second Largest Number: ", result.secondLargest);
    console.log("Second Smallest Number: ", result.secondSmallest);
  }
  
  main();
  