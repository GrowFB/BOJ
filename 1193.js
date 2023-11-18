const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();


let a = 1;
let b = 1;
let cnt = 0
let line = 0

while(cnt < input){
  line += 1
  cnt += line
  
}
cnt -= line

if(line%2 == 0){
  a = input - cnt
  b = line - a + 1
}else {
  a = line - (input - cnt) + 1
  b = input - cnt
}
console.log(`${a}/${b}`)