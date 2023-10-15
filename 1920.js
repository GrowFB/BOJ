const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);
let m = parseInt(input[2]);

let arr1 = input[1].split(" ").map(Number);
let arr2 = input[3].split(" ").map(Number);

arr1.sort((a,b) => a-b);
let result = [];

arr2.forEach(el => {
  let check = 0 ; 
  let low = 0 ; 
  let high = num - 1;
  while(low <= high){
    let mid = parseInt((low+high)/2);
    if(el === arr1[mid]){
      check = 1;
      break;
    }
    if(el < arr1[mid]){
      high = mid -1 ;
    }else if(el > arr1[mid]){
      low = mid + 1;
    }
  }
  result.push(check);
})

console.log(result.join("\n"));