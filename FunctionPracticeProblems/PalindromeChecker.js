function isPalindrome(num) {
    // Convert number to a string
    const numStr = num.toString();
    
    // Reverse the string and check if it's equal to the original string
    const reversedStr = numStr.split('').reverse().join('');
    
    return numStr === reversedStr;
  }
  
  // Function to check if both numbers are palindromes
  function checkPalindromes(num1, num2) {
    if (isPalindrome(num1)) {
      console.log(`${num1} is a palindrome.`);
    } else {
      console.log(`${num1} is not a palindrome.`);
    }
  
    if (isPalindrome(num2)) {
      console.log(`${num2} is a palindrome.`);
    } else {
      console.log(`${num2} is not a palindrome.`);
    }
  }
  
  // Example Usage
//   checkPalindromes(121, 12321);  
//   checkPalindromes(123, 121);    
//   checkPalindromes(456, 789);    
  