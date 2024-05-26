"use strict";
let string1 = 'Usman';
let string2 = 'Shaikh';
let num1 = 5;
let num2 = 10;
let Arr = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("tests for equality and inequality with strings:");
console.log(string1 === 'Usman');
console.log(string1 === string2);
//  Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log(string1.toLowerCase() === "usman");
console.log(string2.toLowerCase() === "Shaikh");
// • Numerical tests 
console.log("\nNumerical tests:");
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num2 !== 10);
//  Tests using "and" and "or" operators
console.log("\n Tests using 'and' and 'or' operators");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) || (num2 > 15));
//  Test whether an item is in a array
console.log("\nTest whether an item is in a array");
console.log(Arr.includes(3));
console.log(Arr.includes(6));
//  Test whether an item is not in a array
console.log("\nTest whether an item is not in a array");
console.log(!Arr.includes(6));
console.log(!Arr.includes(2));
