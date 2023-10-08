const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = parseInt(input[0]);
let temp = 0;

for(let i = 0 ; i < n ; i++){
  
  let num = input[1].split("").map(Number);
  
  temp += num[i];

}console.log(temp);