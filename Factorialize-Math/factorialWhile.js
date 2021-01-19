// Factorial While Loop
// Low -
// 1x2x3x4x5x6x7
// 2! = 1x2 = 2
// 3! = 1x2x3 = 6
// 4! = 1x2x3x4 = 24
// 5! = 1x2x3x4x5 = 120
// 6! = 5!x6 = 720
function whileFacto(n) {
  let i = 1;
  let fact = 1;
  while (i <= n) {
    fact = fact * i;
    i++;
  }
  return fact;
}
let whileResult = whileFacto(6);
console.log(whileResult);
