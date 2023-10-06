const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let s = '';
for(let i = 0 ; i <input ; i++){
  s = s +'*';
  console.log(s);
}