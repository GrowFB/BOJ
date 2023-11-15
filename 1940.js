const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = parseInt(input[0]);
let amr = parseInt(input[1]);
let amrj = input[2].split(" ").map(Number);

let result = 0;

amrj.sort((a,b)=> a-b);
let start = 0;
let last = num - 1 ;

while(start<last){

  let sum = amrj[start] + amrj[last];
  if(sum === amr){
    result = result + 1;
    start += 1;
  }else if(sum < amr){
    start += 1;
  }else if(sum > amr){
    last -= 1 ;
  }
// 가장 큰수와 가장작은수를 더한것보다 기준값이 크다면 이후 가장작은수와 더하는 그 밑에 수는 의미가 없음
}console.log(result);