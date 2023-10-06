const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let n = parseInt(input);

let num = n/4;
let word = '';
for(let i = 1 ; i <=num ; i++){
     word += 'long ';
}
console.log(`${word}int`);