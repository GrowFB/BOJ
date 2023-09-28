const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let n = parseInt(input);
let aa = n/4 ;
let hap = "";
for( let i = 1 ; i < aa + 1 ; i++){

     hap += 'long ';
    
} 
hap += 'int';
console.log(hap);
