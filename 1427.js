const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim("");

let temp = 0;
let arr = [...input];
let i = 0;
let j = 0;
while (j < 100) {
  for (i = 0; i < input.length; i++) {
    if (arr[i] - arr[i + 1] < 0) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    } else {
      continue;
    }
  }

  i = 0;
  j++;
}
console.log(arr.join(""));
