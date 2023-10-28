const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = input[0].split(" ").map(Number);
let num = input[1].split(" ").map(Number);

let ans = n[1];
let sum = 0;
let result = 0;
num.sort((a, b) => a - b);

for (let i = 0; i < n[0]; i++) {
  for (let j = i + 1; j < num.length; j++) {
    for (let k = j + 1; k < num.length; k++) {
      sum = num[i] + num[j] + num[k];
      if (sum <= ans) {
        if (sum > result) {
          result = sum;
        }
      }
    }
  }
}
console.log(result);
