
const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split(" ");


let a = input[0].split("").reverse().map(Number);
let b = input[1].split("").reverse().map(Number);

if( a < b){
  console.log(b.join(''));
}else if( a > b){
  console.log(a.join(''));
}

