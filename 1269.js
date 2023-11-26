const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.shift().split(" ");
let arr1 = input[0].split(" ").map(Number);
let arr2 = input[1].split(" ").map(Number);

const obj = {};

for (let i of arr1) {
  if (!obj[i]) {
    obj[i] = 1;
  }
}
for (let i of arr2) {
  if (!obj[i]) {
    obj[i] = 1;
  } else {
    delete obj[i];
  }
}

console.log(Object.keys(obj).length);
