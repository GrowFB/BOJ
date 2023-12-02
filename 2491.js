const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.shift();
let cnt = 1;
let cnt2 = 1;
let arr = input[0].split(" ");
let result = 1;
let result2 = 1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= arr[i + 1]) {
    cnt++;
    if (result < cnt) {
      result = cnt;
    }
  } else {
    cnt = 1;
  }

  if (arr[i] >= arr[i + 1]) {
    cnt2++;
    if (result2 < cnt2) {
      result2 = cnt2;
    }
  } else {
    cnt2 = 1;
  }
}

if (result <= result2) {
  console.log(result2);
} else {
  console.log(result);
}
