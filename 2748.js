const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let arr = [0, 1];

for (let i = 2; i <= input; i++) {
  for (let j = 0; j < i; j++) {
    arr[i] = BigInt(arr[i - 1]) + BigInt(arr[i - 2]);
  }
}

console.log(arr[input].toString());
