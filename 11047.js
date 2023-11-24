const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let arr = input.shift().split(" ");
let goal = parseInt(arr[1]);
let cnt = 0;

for (let i = arr[0] - 1; i >= 0; i--) {
  if (input[i] <= goal) {
    cnt += Math.floor(goal / input[i]);
    goal %= input[i];
  }
  if (goal <= 0) {
    continue;
  }
}
console.log(cnt);
