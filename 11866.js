const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let n = input[0];
let num = parseInt(input[1]);
let arr = [];
let result = [];

for (let i = 0; i < n; i++) {
  arr[i] = i + 1;
}

let count = 0;
while (arr.length !== 0) {
  count++;

  if (count !== num) {
    arr.push(arr.shift());
  } else if (count === num) {
    result.push(arr.shift());
    count = 0;
  }
}

console.log(`<${result.join(", ")}>`);
