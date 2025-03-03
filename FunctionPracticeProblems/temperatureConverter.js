function celsiusToFahrenheit(degC) {
    return (degC * 9 / 5) + 32;
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5 / 9;
  }
  
  // Function to handle the conversion based on user choice
  function convertTemperature() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    // Ask the user for their choice
    rl.question("Enter 1 to convert from Celsius to Fahrenheit\nEnter 2 to convert from Fahrenheit to Celsius: ", (choice) => {
      // Handle the choice
      if (choice === '1') {
        rl.question("Enter temperature in Celsius (0°C to 100°C): ", (degC) => {
          degC = parseFloat(degC);
          if (degC >= 0 && degC <= 100) {
            const degF = celsiusToFahrenheit(degC); 
            console.log(`${degC}°C is equal to ${degF}°F`);
          } else {
            console.log("Please enter a value between 0°C and 100°C.");
          }
          rl.close();
        });
      } else if (choice === '2') {
        rl.question("Enter temperature in Fahrenheit (32°F to 212°F): ", (degF) => {
          degF = parseFloat(degF);
          if (degF >= 32 && degF <= 212) {
            const degC = fahrenheitToCelsius(degF); 
            console.log(`${degF}°F is equal to ${degC.toFixed(2)}°C`);
          } else {
            console.log("Please enter a value between 32°F and 212°F.");
          }
          rl.close();
        });
      } else {
        console.log("Invalid choice! Please enter 1 or 2.");
        rl.close();
      }
    });
  }
  
  // Start the temperature conversion process
  convertTemperature();
  