const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = Number(input[0]);
let count = n;
let word ;

for(let i = 1 ; i<= n; i++){
  word = input[i];
  for(let j = 0 ; j<word.length; j++){
    if(word[j]!= word[j+1] && word.slice(j+1).includes(word[j])){
      count--;
      break;
    }
  }
}console.log(count);
