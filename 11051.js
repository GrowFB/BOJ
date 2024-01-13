const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let n = BigInt(input[0]);
let k = BigInt(input[1]);

let top = function (n, k) {
  let result = BigInt(1);
  for (let i = n; i > n - k; i--) {
    result = result * BigInt(i);
  }
  return result;
};

let bottom = function (k) {
  let result = BigInt(1);
  for (let i = k; i > 0; i--) {
    result = result * BigInt(i);
  }
  return result;
};
let ans = BigInt(top(n, k) / bottom(k)) % BigInt(10007);
console.log(ans.toString());
