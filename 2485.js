const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let num = input.shift();

const gcd = (x, y) => {
  if (y == 0) return x;
  else return gcd(y, x % y);
};

let list = [];

for (let i = 0; i < input.length - 1; i++) {
  list.push(input[i + 1] - input[i]);
}

let minNum = Math.min(...list);
let maxNum = Math.max(...list);

let GCD = parseInt(gcd(maxNum, minNum));
let result = 0;
for (let i = 0; i < list.length; i++) {
  let a = list[i];

  if (a !== GCD) {
    result += a / GCD - 1;
  }
}

console.log(parseInt(result));
