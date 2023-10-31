const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let up = parseInt(input[0]);
let down = parseInt(input[1]);
let goal = parseInt(input[2]);

console.log(Math.ceil((goal - down) / (up - down)));
let count = 0;
let num = 0;
// while (true) {
//   if (count != goal) {
//     count = count + up;
//     num++;
//     if (count != goal) {
//       count = count - down;
//     }
//   } else if (count == goal) {
//     break;
//   }
// }
// console.log(num);
