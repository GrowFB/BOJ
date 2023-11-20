const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let e = parseInt(input[0])
let s = parseInt(input[1])
let m = parseInt(input[2])
let cnt = 1
while(true){
  if((cnt-e)%15 == 0 && (cnt-s)%28 == 0 && (cnt-m)%19 == 0){
    console.log(cnt)
    break
  }else{
    cnt++
  }
}