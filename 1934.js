const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function GCD(n, m) {
  if (m === 0) return n;
  return n > m ? GCD(m, n % m) : GCD(n, m % n);
}

let gcdd = 0;
let num = input.shift();

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(" ").map(Number);

  gcdd = GCD(arr[0], arr[1]);
  console.log((arr[0] * arr[1]) / gcdd);
}
