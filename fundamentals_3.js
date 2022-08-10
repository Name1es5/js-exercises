//Fundamentals Part 3 Assignment
//1. Write a function called add7 that takes one number and returns that number + 7.

function add7(number) {
    return number + 7;
}

//2. Write a function called multiply that takes 2 numbers and returns their product.

function multiply(num1, num2) {
    return num1 * num2;
}

//3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(str) {
    let firstLetter = str.charAt(0);
    return firstLetter.toUpperCase();
}

/*4. Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d" */

function lastLetter(str) {
    let lastChar = str;
   return lastChar.charAt(lastChar.length - 1);
}