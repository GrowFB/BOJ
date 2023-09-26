const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

let sum = 0;

if( a == b && a == c){
  sum = 10000 + (a*1000);
}else if( a == b || a == c || b == c){
  if( a == b || a == c){
    sum = 1000 + a*100 ;
  }else{
    sum = 1000 + b*100 ;
  }
}else{
  sum = Math.max(a,b,c)*100
}
console.log(sum);