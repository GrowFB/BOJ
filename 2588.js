const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");


const[a,b] = parseInt(input[0,1]);

console.log(a*(b%10));
console.log(a*(parseInt(b/10)%10));
console.log(a*(parseInt(b/100)));
console.log(a*b);