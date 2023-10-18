const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().toUpperCase();

const alpha = [];

for(let i of input){
  alpha[i] ? alpha[i]++ : alpha[i] = 1 ;
}

const max = Math.max(...Object.values(alpha));

let count = 0;
let maxword = '';

for(let i in alpha){
  if(max === alpha[i]){
    count++;
    maxword = i;
  }
}
count > 1 ? console.log('?') : console.log(maxword);