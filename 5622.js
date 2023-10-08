const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("");

let time = 0;

for(let i = 0 ; i <input.length ;i++){
  let asc = input[i].charCodeAt();
  if( asc <= 67){
    time += 3;
  }else if(asc <=70){
    time += 4;
  }else if(asc <=73){
    time += 5;
  }else if(asc <=76){
    time += 6;
  }else if(asc <=79){
    time += 7;
  }else if(asc <= 83){
    time +=8 ;
  }else if(asc <=86){
    time +=9;
  }else{
    time += 10;
  }
}  console.log(time);
