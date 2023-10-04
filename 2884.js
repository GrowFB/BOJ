const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let h = parseInt(input[0]);
let m = parseInt(input[1]);

if(h != 0 && m <45){
  console.log(parseInt(h-1),parseInt(60+(m-45)));
}else if( h ==0 && m < 45){
  console.log(parseInt(-(h-23)),parseInt(60+(m-45)));
}else{
  console.log(parseInt(h),parseInt(m-45));
}
