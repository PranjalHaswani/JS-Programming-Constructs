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
  
  // Function to find the 2nd largest and 2nd smallest numbers without sorting
  function findSecondLargestAndSmallest(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of numbers) {
      // Update largest and second largest
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
  
      // Update smallest and second smallest
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num > smallest) {
        secondSmallest = num;
      }
    }
  
    return { secondLargest, secondSmallest };
  }
  
  // Main function to execute the program
  function main() {
    let randomNumbers = generateRandomNumbers();
    console.log("Generated Random Numbers: ", randomNumbers);
  
    let result = findSecondLargestAndSmallest(randomNumbers);
    console.log("Second Largest Number: ", result.secondLargest);
    console.log("Second Smallest Number: ", result.secondSmallest);
  }
  
  main();
  