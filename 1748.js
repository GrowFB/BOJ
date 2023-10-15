const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let num = parseInt(input);

let result = 0;

for(let i = 1 ; i <= num ; i++)
  if( i < 10 ){
  result += 1 ;
  }else if( 10<=i && i<100){
    result += 2;
  }else if( 100<=i && i<1000){
    result += 3;
  }else if( 1000<=i && i<10000){
    result += 4;
  }else if( 10000<=i && i<100000){
    result += 5;
  }else if( 100000<=i && i<1000000){
    result += 6;
  }else if( 1000000<=i && i<10000000){
    result += 7;
  }else if( 10000000<=i && i<100000000){
    result += 8;
  }else if( 100000000<=i && i<10000000000){
    result += 9;
  }

console.log(result);