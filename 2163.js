const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);

let ans = a * b - 1;
console.log(ans);
