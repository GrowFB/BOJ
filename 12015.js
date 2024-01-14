const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.shift();
let arr = input[0].split(" ").map(Number);
let cnt = new Array(num).fill(1);

for (let i = 0; i < num; i++) {
  let maxcnt = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      maxcnt = Math.max(maxcnt, cnt[j]);
    }
  }
  cnt[i] = maxcnt + 1;
}
console.log(Math.max(...cnt));
