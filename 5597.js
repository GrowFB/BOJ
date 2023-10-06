const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let student = new Array(28);
let num = new Array(30);
let n = '';
for(let i = 0 ; i<30 ; i++){
  num[i] =+ (i+1);
}
for(let i = 0 ; i<28 ; i++){
  student[i] = input[i];
}
for(let i = 0 ; i<30 ; i++){
  for(let j = 0 ; j <28 ; j++){
    if(num[i] == student[j]){
       num[i] = 0 ;
    }
  }
}
for(let i = 0 ; i <30; i++){
  if(num[i] != 0){
    console.log(num[i]);
  }
}