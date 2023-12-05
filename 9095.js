const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let num = input.shift();

let memory = [0, 1, 2, 4];

for (let i = 4; i < 11; i++) {
  memory[i] = memory[i - 1] + memory[i - 2] + memory[i - 3];
}

for (let i = 0; i < num; i++) {
  console.log(memory[input[i]]);
}
