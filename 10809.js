const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let array = new Array(26).fill(-1);

for(let i = 0 ; i < input.length ; i++){
  let asc = input[i].charCodeAt(0);
  if(array[asc-97] !== -1){
    continue;
  }
  array[asc-97] = i
}console.log(...array);