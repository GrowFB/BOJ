const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let num = input.shift();

let arr = input.sort((a, b) => b - a);

console.log(arr.join("\n"));
