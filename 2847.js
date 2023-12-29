const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let num = input.shift();

let maxNum = input[input.length - 1];
let result = 0;
for (let i = 2; i <= input.length; i++) {
  if (input[input.length - i] >= maxNum) {
    maxNum--;
    result += input[input.length - i] - maxNum;
  } else {
    maxNum = input[input.length - i];
  }
}
console.log(result);
