const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);
let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    continue;
  } else {
    let cnt = 0;
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        cnt++;
      }
    }
    if (cnt === 0) {
      result++;
    }
  }
}
console.log(result);
