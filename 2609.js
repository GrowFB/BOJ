const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let a = input[0];
let b = input[1];

let result = [];

while (a % b != 0) {
  let ans1 = a % b;
  a = b;
  b = ans1;
}
result.push(b);
result.push((input[0] * input[1]) / b);
console.log(result.join("\n"));
