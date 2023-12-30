const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

const lz = input.split("");
const stack = [];
let result = 0;

for (let i = 0; i < lz.length; i++) {
  if (lz[i] === "(") {
    stack.push(lz[i]);
  } else {
    stack.pop();

    if (lz[i - 1] === "(") {
      result += stack.length;
    } else {
      result++;
    }
  }
}
console.log(result);
