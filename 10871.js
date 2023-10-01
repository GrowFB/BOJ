const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = input[0].split(" ").map(Number);

let arr = input[1].split(" ").map(Number);
let t = '';

for( let i = 0 ; i < num[0] ; i++){

    if(arr[i] < num[1]){
      t = t + arr[i] + ' ';
    
    }
    
}
console.log(t);