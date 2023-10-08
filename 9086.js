const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);
let temp = '';
for(let i = 1 ; i<= num ; i++){
  let word = input[i].trim();
 
  let word1 = word.charAt(word.length-1);
  let word2 = word.charAt(0);
  temp = word2 ;
  temp += word1 ;
  console.log(temp);
} 

