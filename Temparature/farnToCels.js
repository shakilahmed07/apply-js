// Fahrenheit To Celsius
// Low - (F-32) x (5/9) = C
function farnToCels(n) {
  const cels = (n - 32) * (5 / 9);
  return cels;
}

let result = farnToCels(200);
console.log(result);
