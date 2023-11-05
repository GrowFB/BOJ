const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input.shift());

for (let i = 0; i < num; i++) {
  let k = parseInt(input.shift());
  let n = parseInt(input.shift());
  let room = [];

  for (let j = 0; j <= k; j++) {
    room.push([1]);
    for (let k = 1; k <= n; k++) {
      if (j == 0) {
        room[j].push(k);
        continue;
      } else if (j >= 1)
        room[j].push(k == 1 ? 1 : room[j - 1][k] + room[j][k - 1]);
    }
  }
  console.log(room[k][n]);
}
