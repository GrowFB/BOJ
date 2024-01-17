const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.shift();

for (let i = 0; i < num; i++) {
  let arr = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  console.log(arr[2]);
}
