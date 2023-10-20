const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = parseInt(input[0]);
let temp = 0;
let result = 0;

for (let i = 0; i < n; i++) {
  let arr = input[i + 1].split("").toString();
  temp = 0;
  result = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == "O") {
      temp++;
      result = result + temp;
    } else if (arr[j] == "X") {
      temp = 0;
    }
  }
  console.log(result);
}
