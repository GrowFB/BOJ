const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = parseInt(input[0]);
let sum ='';

for(let i = 1 ; i <= n ; i++){
  let a = input[i].split(" ").map(Number);
  sum += a[0]+a[1]+'\n';
} console.log(sum);