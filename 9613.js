const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function gcd(a, b) {
  while (b != 0) {
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}

let app = input.shift();
let hap = 0;
let result = 0;
for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(" ").map(Number);

  for (let j = 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      hap = gcd(arr[j], arr[k]);
      result += hap;
    }
  }
  console.log(result);
  result = 0;
}
