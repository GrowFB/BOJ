const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("")
  .map(Number);

let result = [];
let arr = Array.from({ length: parseInt(input) }, () => 0);
let isUsedNum = Array.from({ length: parseInt(input) }, () => false);

dfs(0);

function dfs(n) {
  if (n == input) {
    result.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= parseInt(input); i++) {
    if (!isUsedNum[i]) {
      arr[n] = i;
      isUsedNum[i] = true;
      dfs(n + 1);
      isUsedNum[i] = false;
    }
  }
}

console.log(result.join("\n"));
