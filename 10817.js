const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let arr = input.sort((a, b) => a - b);
console.log(arr[1]);
