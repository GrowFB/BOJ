const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = input[0];
let m = input[1];
let cnt = 0;

while (n.indexOf(m) !== -1) {
  n = n.replace(m, "0");
  cnt++;
}

console.log(cnt);
