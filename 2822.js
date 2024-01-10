const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let arr = input.map((x) => parseInt(x)).sort((a, b) => b - a);
let arr2 = input.map((x) => parseInt(x));

let high = arr.slice(0, 5);
let sum = high.reduce((a, b) => a + b, 0);
let idx = [];
let cnt = 0;
for (let i = 0; i < high.length; i++) {
  idx.push(arr2.indexOf(high[i]) + 1);
}
idx.sort((a, b) => a - b);

console.log(sum);
console.log(idx.join(" "));
