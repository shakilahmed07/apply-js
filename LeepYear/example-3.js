// Example 3
function leapCheck(num) {
  const leap = new Date(num, 1, 29).getDate() === 29;
  if (leap) {
    return `Yes! It a Leap Year`;
  } else {
    return `No! it's Not Leap Year`;
  }
}

let result = leapCheck(2028);
console.log(result);
