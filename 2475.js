const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split(" ").map(Number);

for(let i = 0 ; i < input.length ; i ++){
  input[i] = input[i]*input[i];
}

const sum = input.reduce((a,b) => a+b);
console.log(sum%10);

