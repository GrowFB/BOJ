const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let arr = [];

for (let i = 1; i <= parseInt(input); i++) {
  arr[i - 1] = i;
}

let temp = [];
let i = 0;
while (arr.length !== 0) {
  if (i == 0) {
    temp.push(arr.shift());
    i++;
  } else if (i == 1) {
    arr.push(arr.shift());
    i--;
  }
}

console.log(temp.join(" "));
