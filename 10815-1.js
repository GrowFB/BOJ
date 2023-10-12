const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);
let arr2 = input[3].split(" ").map(Number);

function bs(n ,m){
  let low = 0;
  let high = m.length - 1;

  while(low <= high){
    let mid = Math.floor((high+low)/2);
    let guess = m[mid];

    if(guess === n){
      return guess;
    }else if(guess > n){
      high = mid -1;
    }else{
      low = mid + 1;
    }
    
  }  
}

for(let i = 0 ; i<arr2.length ; i++){
  if(arr.includes(arr2[i])){
    arr2[i] = 1;
  }else{
    arr2[i] = 0;
  }
}console.log(...arr2);

 bs(arr,arr2);

