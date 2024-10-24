// Example: Write a function itsGiving(string) that takes in a string name 
// and returns a string saying "It's giving" with the string at the end.
function itsGiving(string) {
  // your code here...
  let result = "It's giving " + string;
  return result;
}

// Tests                         // Expected Output
console.log(itsGiving("coder!"));          // "It's giving coder!"
 console.log(itsGiving("scholar!"));        // "It's giving scholar!"
 console.log(itsGiving("low-effort..."));   // "It's giving low-effort..."

// #1 Write a function goodbye(name) that takes in a string name 
// and returns a string saying "bye" to that name. 
function goodbye(name) {
  // your code here...
  let result = "Bye " +  name
  return result;
}

// Tests                         // Expected Output
console.log(goodbye("Daniel"));  // => "Bye Daniel."
 console.log(goodbye("Mark"));    // => "Bye Mark."
 console.log(goodbye("Beyonce")); // => "Bye Beyonce."


// #2 Write a function plusFive that takes in a number as an argument 
// and returns the sum of that number and 5.
function plusFive(num) {
  // your code here...
  let plusFive= 5 + num
  return plusFive
}

// Tests                       // Expected Output
console.log(plusFive(10));  // => 15
 console.log(plusFive(2));   // => 7
 console.log(plusFive(-8));  // => -3



// #3 We have provided a function named isCool. The isCool function will take a 
// string argument and console.log and return a sentence saying that the given string "is cool!". 
function isCool(string) {
  let coolSentence = string + " is cool!"

  return coolSentence
}

console.log(isCool("Music"));
console.log (isCool("JavaScript"));
console.log(isCool("The world"));
// Call the isCool function with the arguments listed below:
// Music
// JavaScript
// The world



// #4 Write a function averageOfTwo(num1, num2) that returns the average of two numbers.
function averageOfTwo(num1, num2) {
  return (num1 + num2) / 2;
}


console.log(averageOfTwo(3, 7)); // => 5.0
 console.log(averageOfTwo(16, 5)); // => 10.5
 console.log(averageOfTwo(2, 7.5)); // => 4.75

// #5 Write a function scream(str) that takes in a string 
// and returns a "screamed" version of that string.
// HINT: try using the .toUpperCase() method on a string to see what it does! 
// You may also want to look up .toUpperCase() in the MDN documentation.
 function scream(text) {
  return text.toUpperCase() + "!!!";
}
 console.log(scream("Hey Buddy")); // => "HEY BUDDY!!!"
 console.log(scream("YEA! that was fun")); // => "YEA! THAT WAS FUN!!!"


