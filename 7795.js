const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.shift();
let cnt = 0;
for (let i = 0; i < input.length; i = i + 3) {
  let arr = input[i + 1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  let arr2 = input[i + 2]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr[j] > arr2[k]) {
        cnt++;
      } else if (arr[j] <= arr2[k]) {
        continue;
      }
    }
  }
  console.log(cnt);
  cnt = 0;
}
