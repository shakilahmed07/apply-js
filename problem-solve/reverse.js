function reverseAlphabet(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    reverse = char + reverse;
  }
  return reverse;
}
let alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
let result = reverseAlphabet(alphabet);
console.log(result);
