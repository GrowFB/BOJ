const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);
let arr = input[1].split(" ").map(Number);

//spread 연산자 ...말 그대로 배열의 요소를 펼쳐놓개 만들어준다

console.log(Math.min(...arr),Math.max(...arr));