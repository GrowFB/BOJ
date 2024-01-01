const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.shift();
let arr = input[0].split(" ").map(Number);
let dp = new Array(num).fill(0);
let maxNum = 0;

for (let i = 0; i < num; i++) {
  dp[i] = arr[i];
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[i] < dp[j] + arr[i]) {
      dp[i] = dp[j] + arr[i];
    }
  }
  maxNum = Math.max(dp[i], maxNum);
}

console.log(maxNum);
