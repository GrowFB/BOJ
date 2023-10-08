const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

 let word = input[0];
  word.split(" ");
 let num = input[1];

console.log(word[num-1]);