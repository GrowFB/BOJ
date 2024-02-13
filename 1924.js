const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let [inputMon, inputDate] = input.map(Number);

const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

for (let i = 1; i < inputMon; i++) {
  inputDate += month[i];
}

console.log(days[inputDate % 7]);
