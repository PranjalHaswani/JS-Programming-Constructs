// Function to generate birth months of 50 individuals
function generateBirthMonths() {

    let birthMonths = [];
  
    // Generate birth months for 50 individuals 
    for (let i = 0; i < 50; i++) {
      let birthMonth = Math.floor(Math.random() * 12) + 1; 
      birthMonths.push(birthMonth);
    }
  
    return birthMonths;
  }
  
  // Function to group individuals by birth month
  function groupByMonth(birthMonths) {
    let groupedByMonth = {};
  
    // Group the individuals by their birth month
    birthMonths.forEach((month, index) => {
      if (!groupedByMonth[month]) {
        groupedByMonth[month] = [];
      }
      groupedByMonth[month].push(`Individual ${index + 1}`);
    });
  
    return groupedByMonth;
  }
  
  // Main function to execute the program
  function main() {
    let birthMonths = generateBirthMonths();
    let groupedIndividuals = groupByMonth(birthMonths);
  
    // Print the individuals that share the same birth month
    console.log("Individuals grouped by their birth month:");
    for (let month in groupedIndividuals) {
      console.log(`Month ${month}: ${groupedIndividuals[month].join(", ")}`);
    }
  }
  
  // Execute 
  main();
  