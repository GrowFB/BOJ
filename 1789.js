const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

let sum = 0;

let current = 0;

while (sum <= N) {
  current += 1;
  sum += current;
}

console.log(current - 1);
