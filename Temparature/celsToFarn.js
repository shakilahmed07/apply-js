// Celsius To Fahrenheit
// low - C x (9/5) + 32 = F
function celstoFarn(n) {
  const farn = n * (9 / 5) + 32;
  return farn;
}

let result = celstoFarn(50);
console.log(result);
