const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = new Array(30);
let std = new Array(28);
let n ;

function start(){
for(let i = 0 ; i<num.length ; i++){
  num[i] = i + 1;
}
for(let i = 0 ; i<std.length ; i++){
  std[i] = input[i];
}
for(let i = 0 ; i<30 ; i++){
  for(let j = 0; j<28 ; j++){
    if(num[i] == std[j]){
      num[i] = 0;
    }
  }
}

for(let i =0 ; i<30 ; i++){
  if(num[i] != 0 ){
    console.log(num[i]);
  }
}
}
start();
