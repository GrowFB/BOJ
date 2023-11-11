const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let test = parseInt(input[0])


let i = 1 ;
let j = 2;
let k = 1;


while( k<= test){
 let [N,M] = input[i].split(" ").map(Number)
  let que = input[j].split(" ").map(Number)
 let cnt = 1;

 while(que.length !== 0){
  let curr = que.shift();
  let maxNum = Math.max(...que)

  if(maxNum > curr){
    que.push(curr) ;
  }else {
    if(M == 0){
      console.log(cnt);
      break ;
    }
    
    cnt++;
  }

    M-- ;
    if(M == -1){
      
      M = que.length-1;
    }
 }

  i = i + 2 ;
  j = j + 2;

  k++

};
