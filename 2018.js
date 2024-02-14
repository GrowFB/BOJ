const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = parseInt(input[0]);
let count = 1;
let max = Math.ceil(n / 2);

for (let start = 1; start <= max; start++) {
  let sum = start;
  for (let end = start + 1; start <= max; end++) {
    sum += end;
    if (sum === n) {
      count++;
    } else if (sum > n) {
      break;
    }
  }
}

console.log(count);
