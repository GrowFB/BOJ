const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.shift();

let arr = input.sort((a, b) => a - b);

console.log(arr.join("\n"));
