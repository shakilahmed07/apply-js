// Kelvin To Celsius
// Low - K - 273.15 = C
function kelvinToCels(n) {
  const kelvin = n - 273.15;
  return kelvin;
}

let result = kelvinToCels(75);
console.log(result);
