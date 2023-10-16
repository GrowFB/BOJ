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

}console.log(result);