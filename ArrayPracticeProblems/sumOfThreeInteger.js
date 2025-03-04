// Function to find all unique triplets that sum to zero
function findTriplets(nums) {
    let triplets = [];
    // sort the array to make it easier to find triplets
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicates to avoid repeating triplets
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
  
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (sum === 0) {
          triplets.push([nums[i], nums[left], nums[right]]);
          // Skip duplicates for the left and right pointers
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return triplets;
  }
  
  // Main function to execute the program
  function main() {
    let nums = [-1, 0, 1, 2, -1, -4]; 
    console.log("Triplets that sum to zero:");
  
    let result = findTriplets(nums);
    if (result.length === 0) {
      console.log("No triplets found that sum to zero.");
    } else {
      result.forEach(triplet => {
        console.log(triplet);
      });
    }
  }
  
  main();
  