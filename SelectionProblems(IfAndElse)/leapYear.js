const year = parseInt(process.argv[2]);

// Function to check if the year is a leap year
function isLeapYear(year) {
 
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

// Output the result
if (isLeapYear(year)) {
    console.log(year + " is a Leap Year.");
} else {
    console.log(year + " is not a Leap Year.");
}
