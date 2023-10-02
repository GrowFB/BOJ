const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input[0];
let str = input[1];
let sum = 0;

for(let i = 0 ; i < num ; i++){


  sum += parseInt(str[i]);
  
}console.log(sum);