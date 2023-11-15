const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let n = parseInt(input[0]);
let k = parseInt(input[1]);

let top = function (n, k) {
  let result = 1;
  for (let i = n; i > n - k; i--) {
    result = result * i;
  }
  return result;
};

let bottom = function (k) {
  let result = 1;
  for (let i = k; i > 0; i--) {
    result = result * i;
  }
  return result;
};

console.log(parseInt(top(n, k) / bottom(k)));
