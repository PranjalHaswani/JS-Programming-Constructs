
const inches = 42;
const feet = inches / 12;
console.log(`${inches} inches is equal to ${feet} feet.`);

const lengthFeet = 60;
const widthFeet = 40;
const feetToMeters = 0.3048; // Conversion factor

const lengthMeters = lengthFeet * feetToMeters;
const widthMeters = widthFeet * feetToMeters;

console.log(`Rectangular plot dimensions in meters:`);
console.log(`Length: ${lengthMeters} meters`);
console.log(`Width: ${widthMeters} meters`);

// c. Calculate area of 25 such plots in acres
// First, calculate the area of one plot in square feet
const areaFeet = lengthFeet * widthFeet;
const areaAcres = areaFeet / 43560; // Convert square feet to acres
const totalAreaAcres = areaAcres * 25; // Area for 25 plots

console.log(`Area of one plot in acres: ${areaAcres} acres`);
console.log(`Total area of 25 plots in acres: ${totalAreaAcres} acres`);
