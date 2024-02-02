const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let arr2 = input[1].split(" ");
let arr = [...new Set(arr2)].sort((a, b) => a - b);

console.log(arr.join(" "));
