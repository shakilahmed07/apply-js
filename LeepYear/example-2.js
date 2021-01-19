// Example 2
function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return `Yes! Leap year`;
  } else {
    return `No! Not a Leap Year`;
  }
}

let result = checkLeapYear(2021);
console.log(result);
