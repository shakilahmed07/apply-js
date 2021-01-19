// Example 1
function isLeapYear(_year) {
  return _year % 100 === 0 ? _year % 400 === 0 : _year % 4 === 0;
}

let result = isLeapYear(2021);
console.log(result);
