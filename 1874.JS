const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let num = input.shift();
let stack = [];
let answer = "";
let temp = [];

for (let i = 0; i < num; i++) {
  stack[i] = i + 1;
}
for (let i = 0; i < input.length; i++) {
  var j = 1;
  while (j <= num && input[i] != temp[temp.length - 1]) {
    temp.push(stack.shift());
    answer = answer + "+\n";
    j++;
  }

  if (input[i] == temp[temp.length - 1]) {
    temp.pop();
    answer = answer + "-\n";
  } else {
    answer = "NO";
    break;
  }
}
console.log(answer);
