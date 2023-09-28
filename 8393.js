const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let n = parseInt(input);

let sum = 0;

for( let i = 1 ; i <= n ; i++){
    sum = sum + i;
  }
console.log(sum);
