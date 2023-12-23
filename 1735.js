const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let x = input[0].split(" ");
let y = input[1].split(" ");

let mother = x[1] * y[1];
let son = x[0] * y[1] + x[1] * y[0];
let GCD = (num1, num2) => {
  while (num2 > 0) {
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
  }

  return num1;
};

console.log(son / GCD(son, mother), mother / GCD(son, mother));
