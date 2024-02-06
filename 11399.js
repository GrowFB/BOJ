const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);
let time = 0;

for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    time += arr[j];
  }
}
console.log(time);
