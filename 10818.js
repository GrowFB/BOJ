const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);

console.log(Math.min(...arr) ,Math.max(...arr));