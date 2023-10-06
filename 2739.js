const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let num = parseInt(input);

for(let i = 1 ; i < 10 ; i++){
  console.log(`${num} * ${i} = ${num*i} `);
}