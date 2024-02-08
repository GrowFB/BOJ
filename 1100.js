const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let cnt = 0;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (i % 2 === 0 && j % 2 == 0) {
      if (input[i][j] !== ".") {
        cnt++;
      }
    }

    if (i % 2 !== 0 && j % 2 !== 0) {
      if (input[i][j] !== ".") {
        cnt++;
      }
    }
  }
}

console.log(cnt);
