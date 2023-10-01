const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split(" ");



if (input.length === 1 && input[0] === "") {
  result = 0;
} else {
  result = input.length;
}
console.log(result);