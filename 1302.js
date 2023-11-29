const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let obj = {};
let num = input.shift();
let arr = input.sort();

let max = arr[0];
for (let i of arr) {
  if (!obj[i]) {
    obj[i] = 1;
  } else if (obj[i]) {
    obj[i]++;
  }

  if (obj[max] < obj[i]) max = i;
}
console.log(max);
