// question:
/* 
Count how many times you have the letter a in a string.
This is similar to the previous video. In the previous video, we were checking whitespaces. Now, instead of whitespace, you will check for the letter a. 
Can you do it? Give it a thought. Give it a try.

var sentence = "I am hardworking. I am serious. I am sure I will do it";
var count = 0;
for(var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    if(________?______){
        count++;
    }
}
console.log(count)

# if___ leter == 'a'
*/
// Ans :
let sentence = "I am hardworking. I am serious. I am sure I will do it";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  if (letter == "a") {
    count++;
  }
}

console.log(count);
