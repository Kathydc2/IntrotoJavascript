//Part:0 Initial Example Code
//
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// Part 1: Math Problems

// Check if all numbers are divisble by 5. Cache the result in a variable
const isDivisbleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log("are all numbers divisible by 5?" + isDivisbleBy5);

// Check if the first number is largr than the last. Cache the result in a varible
const ifFirstNumLargerThanLast = n1 > n4;
console.log("Is the first number greater than the last number?" + ifFirstNumLargerThanLast);

//Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
let arithmeticChain = n2 - n2;
arithmeticChain = arithmeticChain * n3;
arithmeticChain = arithmeticChain % n4;
console.log(`The result for this arithmetic chain is: ${arithmeticChain}`);

// Change the way that isOver25 calculates so that we do not need to use,
//  the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isNotOver25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log("all numbers are below 25?" + isNotOver25) 

//Part 2:Practical Math

// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

//car's fuel efficiency
const tripTotalMiles = 1500;
const totalBudget =  175;
const costPerGallon = 3;

//at 55 mph you get 30 mpg
let mph1 = tripTotalMiles / 55;
console.log("At 55MPH it will take how many hours?" + mph1)
let mpg1 = tripTotalMiles / 30;
console.log("At 30 MPG it will take how many gallons?" + mpg1)
let budget1 = ((mpg1 * 3) <= totalBudget);
console.log("Do you have enough budget to cover this fuel efficiency?" + budget1);

//at 60 mph you get 28 mpg
let mph2 = tripTotalMiles / 60;
console.log("At 60MPH it will take how many hours?" + mph2)
let mpg2 = tripTotalMiles / 28;
console.log("At 28 MPG it will take how many gallons" + mpg2)
let budget2 = ((mpg2 * 3) <= totalBudget);
console.log("Do you have enough budget to cover this fuel efficiency?" + budget2);

//at 75 mph you get 23 mpg
let mph3 = tripTotalMiles / 75;
console.log("At 75MPH it will take how many hours?" + mph3)
let mpg3 = tripTotalMiles / 23;
console.log("At 23 MPG it will take how many gallons?" + mpg3)
let budget3 = ((mpg3 * 3) <= totalBudget);
console.log("Do you have enough budget to cover this fuel efficiency?" + budget3);
















    