const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let result = 0;
let start = 1;
let xx = 10;
let i = 1;
while(start <= input){
  if(Math.floor(start/xx)==0){
    start ++;
    result += i;
  }else{
    xx *= 10;
    i++;
  }
  
}console.log(result);

// for(let i = 1 ; i <= num ; i++)
//   if( i < 10 ){
//   result += 1 ;
//   }else if( 10<=i && i<100){
//     result += 2;
//   }else if( 100<=i && i<1000){
//     result += 3;
//   }else if( 1000<=i && i<10000){
//     result += 4;
//   }else if( 10000<=i && i<100000){
//     result += 5;
//   }else if( 100000<=i && i<1000000){
//     result += 6;
//   }else if( 1000000<=i && i<10000000){
//     result += 7;
//   }else if( 10000000<=i && i<100000000){
//     result += 8;
//   }else if( 100000000<=i && i<10000000000){
//     result += 9;
//   }

// console.log(result);