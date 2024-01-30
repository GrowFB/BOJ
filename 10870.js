const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let arr = [0, 1, 1];

for (let i = 3; i <= parseInt(input); i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

console.log(arr[input]);
