let speech =
  "Fames Ad Convallis Enim Eget Felis Curae Sed A Metus Commodo Cursus Euismod Nisl Platea Habitant Dolor Pharetra Pellentesque Convallis  Eros Mauris Quisque Condimentum Ipsum Ligula Dapibus Sed Luctus Pretium Etiam Ac Est Nisl Nunc Inceptos Porta Interdum Sit Eleifend";

let count = 0;
for (let i = 0; i < speech.length; i++) {
  const char = speech[i];
  if (char == " ") {
    count++;
  }
}
count++;
console.log(count);
