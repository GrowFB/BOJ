const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");


for(let i = 0 ; i <input.length; i++){
   let arr = input[i].split(" ").map(Number);
  let arr1 = parseInt(arr[0]);
  let arr2 = parseInt(arr[1]);
  
  if(arr[0] == 0 || arr[1]==0){
    break;
  }
  console.log(arr[0]+arr[1]);
}