const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let num = parseInt(input.shift());
let result = [];
for (let i = 0; i < input.length; i++) {
  const len = Number(input[i]) + 1;
  const number = new Array(len).fill(0);

  number[1] = 1;
  number[2] = 1;
  number[3] = 1;
  number[4] = 2;
  number[5] = 2;

  for (let j = 6; j < number.length; j++) {
    number[j] = number[j - 1] + number[j - 5];
  }
  result.push(number[input[i]]);
}

console.log(result.join("\n"));
