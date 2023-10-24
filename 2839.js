const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let num = parseInt(input);

let sg1 = 3;
let sg2 = 5;
let sum = 0;

// while (true) {
//   num = num - sg1;
//   sum++;
//   if (num % sg2 != 0) {
//     num = num - sg1;
//     sum++;
//     if (num < 0) {
//       num = parseInt(input);
//       if (num % sg2 != 0) {
//         sum = -1;
//         break;
//       } else if (num % sg2 == 0) {
//         sum = 0;
//         sum = sum + num / sg2;
//         break;
//       }
//     }
//   } else if (num % sg2 == 0) {
//     sum = sum + num / sg2;
//     break;
//   }
// }
// console.log(sum);

while (true) {
  if (num % sg2 === 0) {
    console.log(num / sg2 + sum);
    break;
  }

  if (0 > num) {
    console.log(-1);
    break;
  }

  sum++;
  num = num - sg1;
}
