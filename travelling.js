function travelling(depth) {
  let animal = 0;
  if (depth <= 10) {
    animal = depth * 50;
  } else if (depth <= 20) {
    let firstPart = 10 * 50;
    let remining = depth - 10;
    let secondPart = remining * 100;
    animal = firstPart + secondPart;
  } else {
    let firstPart = 10 * 50;
    let secondPart = 10 * 100;
    let remining = depth - 20;
    let thirdPart = remining * 300;
    animal = firstPart + secondPart + thirdPart;
  }
  return animal;
}
let animalShow = 27;
let count = travelling(animalShow);
console.log(count);
