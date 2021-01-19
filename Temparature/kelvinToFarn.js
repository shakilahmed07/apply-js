// Kelvin To Fahrenheit
// Low - (K-273.15) x (9/5) + 32 = F

function kelvinToFahr(n) {
  const kelvin = (n - 273) * (9 / 5) + 32;
  return kelvin;
}

let result = kelvinToFahr(300);
console.log(result);
