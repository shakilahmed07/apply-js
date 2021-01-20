// Random Number Low :
/*
1. Math.floor(); // number down
2. Math.ceil(); // number up
3. Math.round(); // number down+up mixed
4. math/random(); // Diffrent Number
*/

// Random Number For Loop
/*
for (i = 0; i < 1; i++) {
  let randomNum = Math.random() * 100;
  let output = Math.round(randomNum);
  console.log(output);
}
*/

// Function Random Number
function randomNum(n) {
  let rand = Math.random() * 100000000;
  let output = Math.round(rand);
  return output;
}

let result = randomNum();
console.log(result);
