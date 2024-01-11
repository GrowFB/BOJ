const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input.shift();
let cnt = -1;
for (let i = 0; i < input.length; i++) {
  let cloud = input[i].split("");
  cnt = -1;
  for (let j = 0; j < cloud.length; j++) {
    if (cloud[j] === ".") {
      if (cnt !== -1) {
        cnt += 1;
        cloud[j] = cnt;
      } else {
        cloud[j] = cnt;
        cnt = -1;
      }
    } else if (cloud[j] === "c") {
      cloud[j] = 0;
      cnt = 0;
    }
  }
  console.log(cloud.join(" "));
}
