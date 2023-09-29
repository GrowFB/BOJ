const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let count = new Set(input.map(x=>x%42)).size;
//map은 주어진괄호의 조건에 맞추어 새로운 배열을 재생성 해줌
console.log(count);

