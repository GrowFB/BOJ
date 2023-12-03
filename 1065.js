const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let cnt = 0;

for (let i = 1; i <= input; i++) {
  let Arr = String(i);
  if (i < 100) {
    cnt++;
    continue;
  }
  let A = parseInt(Arr[0]) - parseInt(Arr[1]);
  let B = parseInt(Arr[1]) - parseInt(Arr[2]);

  if (A === B) {
    cnt++;
  }
}
console.log(cnt);
