const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input[0].split(" ");
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(arr[num[1] - 1]);
