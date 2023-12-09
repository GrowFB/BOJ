const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let N = parseInt(input[0]);
let M = parseInt(input[1]);

let result = [];
let arr = Array.from({ length: M }, () => 0);
let isUsedNum = Array.from({ length: N + 1 }, () => false);
dfs(0);

function dfs(n) {
  if (n == M) {
    result.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (n > 0 && arr[n - 1] > i) {
      continue;
    }
    arr[n] = i;
    dfs(n + 1);
  }
}

console.log(result.join("\n"));
