// Factorial For Loop
// Low -
// 1x2x3x4x5x6x7
// 2! = 1x2 = 2
// 3! = 1x2x3 = 6
// 4! = 1x2x3x4 = 24
// 5! = 1x2x3x4x5 = 120
// 6! = 5!x6 = 720

function loopFacto(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

let result = loopFacto(5);
console.log(result);
