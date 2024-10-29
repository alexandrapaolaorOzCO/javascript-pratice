// Example: Write a function, greaterThanThree(num) that returns "Greater" if the given num is greater than 3,
// returns "Less" if num is less than 3, and "Equal" if num is exactly 3.
function greaterThanThree(num){
  if(num > 3 ){
    return "Greater";
  } else if ( num ==3 ){
    return "Less"
  } else {
    return "Equal"
  } 
}


//Tests
console.log(greaterThanThree(3)); // => "Equal"
console.log(greaterThanThree(5)); // => "Greater"
console.log(greaterThanThree(2.9)); // => "Less"

// ------------------------------------------------------------------------------------------------------------

// #1 Create a function canVote(age) that returns "Eligible to vote" if the age is 18 or older 
// and "Not eligible to vote" if it’s less than 18.

function canVote(age){
  if(age < 18){
    return "Not eligible to vote";
   }else if (age== 18){
     return "Eligible to vote"
   } else {
     return "Eligible to vote"
  }
}

//Tests
 console.log(canVote(5));    // => Not eligible to vote
 console.log(canVote(18));    // => Eligible to vote
 console.log(canVote(17.9));    // => Not eligible to vote
 console.log(canVote(52));    // => Eligible to vote

// ------------------------------------------------------------------------------------------------------------

// #2 Create a function isEven(num) that returns "Even" if the number is even
// and "Odd" if the number is odd.
//Note: You have to define this function using the `function` keyword.
function isEven(num) {
  if(num < 18) {
    return "Odd";
   }else if (num= 18){
     return "undefined"
   } else {
     return "Even"
  }
}


//Tests
 console.log(isEven(5));    // => Odd
 console.log(isEven(18));    // => Even
 console.log(isEven(17.9));    // => undefined
console.log(isEven(52));    // => Even

// ------------------------------------------------------------------------------------------------------------

// #3 Make a function checkTemperature(temp) that returns "Hot" if the temperature is above 70, 
// "Warm" if it’s between 50 and 70, and "Cold" if it’s below 50.

function checkTemperature(temp) {
  if(temp > 70) {
    return "Hot";
   }else if (temp <= 70 && temp>= 50){
    return "Warm"
   } else {
     return "Cold";
  }
}

//Tests
 console.log(checkTemperature(90)); // => Hot
 console.log(checkTemperature(70)); // => Warm
 console.log(checkTemperature(55)); // => Warm
 console.log(checkTemperature(10)); // => Cold

// ------------------------------------------------------------------------------------------------------------

// # 4 Create a function checkSign(number) that returns "Positive" if a number is greater than 0, 
// "Negative" if less than 0, and "Zero" if it’s exactly 0.


//Tests
console.log(checkSign(0));    // => Zero
 console.log(checkSign(12));   // => Positive
 console.log(checkSign(-2.5)); // => Negative

// ------------------------------------------------------------------------------------------------------------

// #5 Write a function maxOfTwo(num1, num2) that returns the greater of two numbers. If they are equal, 
// it should return "Both are equal."



//Tests
console.log(maxOfTwo(10, 15)); // => 15
console.log(maxOfTwo(22, 13)); // => 22
console.log(maxOfTwo(100, 100)); // => Both are equal.
console.log(maxOfTwo(-2, -5)); // => -2