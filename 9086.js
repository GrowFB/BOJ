const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input[0];

for(let i = 1 ; i <= num ; i++){
  let word = input[i].trim();
  
  let a = word.charAt(0);
  let b = word.charAt(word.length-1);
  if(word.length < 2){
    console.log(a+a);
  }else{
    console.log(a+b);
  }
}