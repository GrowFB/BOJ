const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input.shift());
let arr = input[0].split(" ").map(Number);
let temp = new Array(num).fill(0);

for (let i = 0; i < num; i++) {
  let left = arr[i];

  for (let j = 0; j < num; j++) {
    if (left === 0 && temp[j] === 0) {
      temp[j] = i + 1;
      break;
    } else if (temp[j] === 0) {
      left--;
    }
  }
}

console.log(temp.join(" "));
