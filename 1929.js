const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");


let num1 = parseInt(input[0])
let num2 = parseInt(input[1])


for (let i = num1; i <=num2; i++) {
   let cnt = 0;
    if (i === 1) {
    continue;
  } else {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    if (cnt === 0) {
      console.log(i);
    }
  }
}

