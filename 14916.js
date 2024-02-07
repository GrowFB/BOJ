const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let coin = [5, 2];
let num = parseInt(input);
let i = 0;
let ans = 0;

while (num > 0) {
  if (num % 5 == 0) {
    ans += num / 5;
    num /= 5;
    break;
  } else {
    num -= 2;
    ans++;
  }
}

num < 0 ? console.log(-1) : console.log(ans);
