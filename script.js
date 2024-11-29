// calculate moon orbit around Earth
// it takes 27 Erth days for the Moon to orbit the Earth

function calculateMoonOrbitDays(days) {
    const ORBIT = 27.3;
    //return Number((days / ORBIT).toFixed(3));
    return Math.floor((days / ORBIT) * 1000) / 1000;
}

console.log(calculateMoonOrbitDays(54));
console.log(calculateMoonOrbitDays(365));

// Write a function that takes the radius of a circle and return its area.
// Write a function that takes the radius of a circle and return its perimeter.

function getArea(radius) {
    const pi = Math.PI;
    return (pi * radius ** 2).toFixed(2);
}

function getPerimeter(radius) {
    const pi = Math.PI;
    return (2 * pi * radius).toFixed(2);
}

console.log(getArea(10));
console.log(getPerimeter(10));

// Challenge: Years to Days & Seconds
// MVP
// Create a function that takes your age in years and returns your age in days.
// Create a function that takes your age in years and returns your age in seconds.

function convertYearToDays(age) {
    const yearDays = 365.25;
    return age * yearDays;
}

function convertYearToSeconds(age) {
    const yearSeconds = 3.154e+7;
    return age * yearSeconds;
}

console.log(convertYearToDays(32));
console.log(convertYearToSeconds(32));


// Challenge: Return the Remainder from Two Numbers
// MVP
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0

function getRemainder(num1, num2) {
    return num1 % num2;
} 

console.log(getRemainder(1, 3));
console.log(getRemainder(3, 4));
console.log(getRemainder(-9, 45));
console.log(getRemainder(5, 5));

// Challenge: Basketball Points
// MVP
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function countFinalPoints(twoPointers, threPointers){
    return twoPointers * 2 + threPointers * 3;
}

console.log(countFinalPoints(1, 1));
console.log(countFinalPoints(10, 10));

// Challenge: Less Than 100?
// MVP
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function isLessThanHundred(num1, num2) {
    return num1+num2 < 100 ? true : false;
}

console.log(isLessThanHundred(22, 15));
console.log(isLessThanHundred(83, 34));



/*
MVP
Create an array with 3 of your hobbies
Print in the console the first hobby in the array
Remove that first hobby from the array and store that hobby in a variable
Store the length of the array in a variable
Add another hobby at the end of the array
Print that last hobby in the console
Bonus:

Join all your hobbies in a single string each hobby being comma separated (i.e. "My hobbies are: hobby1, hobby2, hobby2")
*/

const hobbies = ["dragon-boating", "tennis", "soccer"];
console.log(hobbies[0]);
const firstHobby = hobbies.shift();
const length = hobbies.length;
hobbies.push("swimming");
console.log(hobbies[hobbies.length - 1]);
// array to string
const result = `My hobbies are: ${hobbies.join(', ')}`;
console.log(result);

const groseryList = ["milk", "butter", "tomatoes", "capsicum"];
console.log(groseryList.join("|"));