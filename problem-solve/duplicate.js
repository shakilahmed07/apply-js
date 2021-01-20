let _name = [1, 5, 2, 3, 5, 3, 9, 8, 7, 5, 7, 9];
let uniqueName = [];
for (let i = 0; i < _name.length; i++) {
  const element = _name[i];
  let index = uniqueName.indexOf(element);
  if (index == -1) {
    uniqueName.push(element);
  }
}
console.log(uniqueName);
