const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let a = parseInt(input[0]);

for(let i = 1 ; i<10 ; i++){
   let r = a * i ;
  console.log(`${a} * ${i} = ${r}`);
}