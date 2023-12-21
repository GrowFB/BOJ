const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let com = parseInt(input[0]);

let isUsedNum = Array.from({ length: com + 1 }, () => false);
dfs();
function dfs() {
  for (let k = 0; k < com; k++) {
    for (let i = 2; i < input.length; i++) {
      let vrus = input[i].split(" ").map(Number);
      if (vrus[0] == 1 || vrus[1] == 1) {
        isUsedNum[vrus[0]] = true;
        isUsedNum[vrus[1]] = true;
      }
      if (isUsedNum[vrus[0]] == true) {
        isUsedNum[vrus[1]] = true;
      } else if (isUsedNum[vrus[1]] == true) {
        isUsedNum[vrus[0]] = true;
      }
    }

    for (let j = input.length - 1; j >= 2; j--) {
      let vrus = input[j].split(" ").map(Number);
      if (vrus[0] == 1 || vrus[1] == 1) {
        isUsedNum[vrus[0]] = true;
        isUsedNum[vrus[1]] = true;
      }
      if (isUsedNum[vrus[0]] == true) {
        isUsedNum[vrus[1]] = true;
      } else if (isUsedNum[vrus[1]] == true) {
        isUsedNum[vrus[0]] = true;
      }
    }
  }
}

let cnt = 0;
isUsedNum[1] = false;
for (let a in isUsedNum) {
  if (isUsedNum[a] == true) {
    cnt++;
  }
}
console.log(cnt);
