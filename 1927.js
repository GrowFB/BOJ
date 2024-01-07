const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let arr = [];
let num = input.shift();
let ans = [];
let k = 0;

function Min(n) {
  let j = 0;
  while (j < n.length) {
    k = n[0];
    if (k < n[j]) {
      break;
    } else if (k >= n[j]) {
      k = n[j];
    }
    j++;
  }
  return k;
}

for (let i = 0; i < input.length; i++) {
  if (input[i] > 0) {
    arr.push(input[i]);
  } else if (input[i] == 0) {
    if (arr.length == 0) {
      ans.push("0");
    } else {
      arr.sort((a, b) => a - b);
      ans.push(Min(arr));
      arr.shift();
    }
  }
}

console.log(ans.join("\n").trim());
