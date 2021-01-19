// Factorial Recursive
// Low -
// 1x2x3x4x5x6x7
// 2! = 1x2 = 2
// 3! = 1x2x3 = 6
// 4! = 1x2x3x4 = 24
// 5! = 1x2x3x4x5 = 120
// 6! = 5!x6 = 720

function fact(_n) {
  if (_n == 0) {
    return 1;
  } else {
    return _n * fact(_n - 1);
  }
}

let result = fact(4);
console.log(result);
