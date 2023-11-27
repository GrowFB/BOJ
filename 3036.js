const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let one = input.shift();

let a = input.join(" ").split(" ").map(Number);
let result = [];

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

for (let i = 1; i < one; i++) {
  let nng = gcd(a[0], a[i]);
  result.push(`${a[0] / nng}/${a[i] / nng}`);
}
console.log(result.join("\n").trim());
