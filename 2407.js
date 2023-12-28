const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let n = BigInt(input[0]);
let m = BigInt(input[1]);

function ft(num) {
  if (num < BigInt(0)) return -BigInt(1);
  else if (num == BigInt(0)) return BigInt(1);
  else {
    return num * ft(num - BigInt(1));
  }
}
let ans = ft(n) / (ft(n - m) * ft(m));
console.log(ans + "");
