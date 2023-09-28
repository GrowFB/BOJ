const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);

let sum = "";

for(let i = 1 ; i < num + 1 ; i++){
  
  let arr = input[i].split(" ").map(Number);
  sum += arr[0] + arr[1] + '\n';
}
console.log(sum);