const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let a = parseInt(input[0]);
let b = parseInt(input[1]);

let c = input[1].split("").map(Number);

console.log(a*c[2]);
console.log(a*c[1]);
console.log(a*c[0]);
console.log(a*b);