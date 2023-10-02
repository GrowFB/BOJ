const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let word = input[0];
let num = input[1];

word.split("");
for(let i = 0 ; i < word.length ; i++){
  if(i + 1 == num ){
    console.log(word[i]);
  }
}