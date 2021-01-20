function getArrySum(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    const element = n[i];
    sum = sum + element;
  }
  return sum;
}
var n = [147, 123, 369, 789, 159, 753, 654];
let result = getArrySum(n);
console.log(`Tottal Number : `, result);
// Function Another Way Ans
let result2 = getArrySum([9654, 4123, 8963]);
console.log(`Tottal Another Number: `, result2);
