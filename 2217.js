const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let num = input.shift();
let result = [];
input.sort((a, b) => a - b);
for (let i = 0; i < input.length; i++) {
  result.push(input[i] * num);
  num--;
}
console.log(Math.max(...result));
