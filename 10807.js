
const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let count = 0;
let n = parseInt(input[0]);
let a = parseInt(input[2]);
let arr = input[1].split(" ").map(Number);


for( let i = 0 ; i < n ; i++){

    if(arr[i] == a){
      count++
    }

}
console.log(count);