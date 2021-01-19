function isPrime(n) {
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return `Not! It's Not a Prime Number`;
    }
  }
  return `Yes! It's Prime Number`;
}

let Number = isPrime(17);
console.log(Number);
