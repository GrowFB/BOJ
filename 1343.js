const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let n = input[0];

function fast(n) {
  n = n.replace(/XXXX/g, "AAAA");
  n = n.replace(/XX/g, "BB");

  if (n.split("").includes("X")) {
    n = -1;
  } else {
    n = n;
  }

  return n;
}

let ans = fast(n);
console.log(ans);
