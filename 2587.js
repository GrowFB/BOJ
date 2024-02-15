const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.sort((a, b) => a - b).map(Number);

let ans = [];

let hap = num.reduce((a, b) => a + b, 0) / num.length;
let mid = num[Math.round(num.length / 2 - 1)];

ans[0] = hap;
ans[1] = mid;

console.log(ans.join("\n"));
