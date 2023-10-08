const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let n = Number(input);

let sum ;
let i = 0;

while(true){
  i++
  sum = Math.floor(n/10)+ n%10;
  n = (n%10)*10 + sum%10;
  if(Number(input) === n){
    break;
  }
}
console.log(i);