const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let Numb = input[0].split(" ");
let N = parseInt(Numb[0]);
let M = parseInt(Numb[1]);
let num = input[1].split(" ").map(Number);

num.sort((a, b) => a - b);

let result = [];
let arr = Array.from({ length: M }, () => 0);
let isUsedNum = Array.from({ length: N + 1 }, () => false);
dfs(0);

function dfs(n) {
  if (n === M) {
    result.push(arr.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (n > 0 && arr[n - 1] > num[i]) {
      continue;
    }
    if (!isUsedNum[i]) {
      arr[n] = num[i];
      isUsedNum[i] = true;
      dfs(n + 1);
      isUsedNum[i] = false;
    }
  }
}
console.log(result.join("\n"));
