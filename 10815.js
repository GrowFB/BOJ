const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num1 = parseInt(input[0]);
let num2 = parseInt(input[2]);

let arr = input[1].split(" ").map(Number);
let arr2 = input[3].split(" ").map(Number);
function start(){
for(let i = 0 ; i<num2 ; i++){
  for(let j = 0 ; j<num1 ; j++){
    if(arr2[i] != arr[j]){
       continue;
    }else if(arr2[i] == arr[j]){
      arr2[i] = 1 ;
    }
    

  }
  if(arr2[i] != 1){
    arr2[i] = 0;
  }
}
console.log(...arr2);
}

start();

