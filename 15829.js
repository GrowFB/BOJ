const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);
let apb = input[1].split("");
let str = [];
for (let i = 0; i < num; i++) {
  str[i] = apb[i].charCodeAt() - 96;
}

let ans = str[0];

for (let j = 1; j < num; j++) {
  ans += (str[j] * 31 ** j) % 1234567891;
}
console.log(ans % 1234567891);
