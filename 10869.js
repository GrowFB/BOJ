const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);

var c = parseInt(a/b);
console.log(c);
console.log(a%b);