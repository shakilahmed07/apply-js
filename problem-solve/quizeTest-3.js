// question:
/* 
Search online and find another solution to reverse a string in one line. And try to understand it. 

var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse()____?_______;
console.log(reverse)

#? ____ .join("");
*/

// Ans :
let sentence = "I am hardworking. I am serious. I am sure I will do it";
let reverse = sentence.split("").reverse().join("");
console.log(reverse);
