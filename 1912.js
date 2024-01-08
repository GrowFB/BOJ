const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.shift();
let arr = input[0].split(" ").map(Number);
let maxnum = new Array(num).fill(0);
maxnum[0] = arr[0];

for (let i = 1; i < num; i++) {
  maxnum[i] = Math.max(arr[i], maxnum[i - 1] + arr[i]);
}
console.log(Math.max(...maxnum));
