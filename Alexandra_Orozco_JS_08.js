// Example: Define a function isFive that will return true if a number is equal to 5 and false if it is not.

function isFive(num) {
// Your code here!
if(num==5){
  return true;
} else if (num==55){
  return "That's a double 5!";
 } else {
return false;
 }
}

// Tests
console.log(isFive(5)); // => true
console.log(isFive(13)); // => false


// #1 Write a function isOdd that takes in a number as an argument and returns true 
// if the number is odd and returns false otherwise.

function isOdd(num) {
  // your code here!
  if(num==2){
    return false;
  }else if (num==22){
    return "That's a double 2!";
  } else {
    return false;
  }
}

// Tests
console.log(isOdd(2)); // => false
 console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true


// #2 Define a function fizzBuzz(num) that takes a number and prints "Fizz" if it is divisible by 3,
// prints "Buzz" if it is divisible by 5, and prints "FizzBuzz" if it is divisible by both 3 and 5.
// Return null if it is divisible by neither 3 nor 5.

function fizzBuzz(num) {
  // your code here!
}

// Tests
console.log(6) ; // => "Fizz"
console.log(10); // => "Buzz"
console.log(15); // => "FizzBuzz"


 console.log(17); // => null
