const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let num = parseInt(input);

let a = 0 ;
let b = 1 ;
let temp = 0;

for(let i = 2 ; i<=num ; i++){
    temp = a ;
    a = b;
    b = temp+ b;
}console.log(a,b);