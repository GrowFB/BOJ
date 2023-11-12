const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let i  = 0 ;
let num = 666
let start = [num].toString();

while( i < input){
    start =  [num].toString();
 
    num++

    if(start.includes('666')){
      i = i + 1
     
    }

    
} console.log(start)