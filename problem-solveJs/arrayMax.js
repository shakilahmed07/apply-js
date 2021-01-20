let marks = [
  23,
  44,
  55,
  68,
  98,
  52,
  47,
  20,
  14,
  17,
  99,
  95,
  36,
  32,
  94,
  100,
  20,
  33,
  44,
  97,
];

let max = marks[0];
for (let i = 0; i < marks.length; i++) {
  const element = marks[i];
  if (element > max) {
    max = element;
  }
}

console.log(`Hight Marks is: `, max);
