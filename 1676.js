const fs = require('fs'); 
var input = fs.readFileSync("input.txt").toString().trim();

input = parseInt(input);

let answer = 0;
while (input >= 5){
  answer += parseInt(input/5);
  input /= 5;
}console.log(answer);