const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.shift();

let don = [25, 10, 5, 1];
let ans = new Array(4).fill(0);
let cnt = -1;

for (let i = 0; i < num; i++) {
  for (let j = 0; j < don.length; j++) {
    if (input[i] >= 0) {
      input[i] = input[i] - don[j];
      j = j - 1;
      cnt++;
    } else if (input[i] < 0) {
      input[i] = input[i] + don[j];
      ans[j] = cnt;
      cnt = -1;
    }
  }
  console.log(ans.join(" "));
}
