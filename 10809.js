const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let arr = new Array(26).fill(-1);

for(let i = 0 ; i <input.length ; i++){
  if(arr[input.charCodeAt(i)-97] == -1){
    arr[input.charCodeAt(i)-97] =i;
  }
}console.log(...arr);