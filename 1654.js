const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = []
num = input.shift().split(' ')

let arr = input.map(Number)

let start = 0 ; 
let end = Math.max(...arr)
let length = 0;

while(start <= end){
  const mid = Math.floor((start+end)/2)
let cnt = arr.reduce((number , cur) => number + Math.floor(cur/mid) , 0)

if(cnt < num[1]){
  end = mid - 1
}else{
  length = Math.max(length , mid)
  start = mid + 1
}

}console.log(length)