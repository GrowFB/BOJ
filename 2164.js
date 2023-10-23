const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let num = parseInt(input);
let arr = [];

for(let i  = 0 ; i < num ; i++){
  arr[i] = i+1;
}

let start = 0 ; 
let last = num ;

for(let i = num ; i>1 ; i--){
    start++;
    arr[last] = arr[start];

    start++;
    last ++;
    console.log(arr);
}
console.log(arr.pop());


// const start = (arr) =>{
//   let i = 1;
// while(arr.length > 1){
  
//   if(i%2 === 0){
//     arr.push(arr.shift());
//   }else{
//     arr.shift();
//   }
//   i++
// }
// return arr[0];
// }
// console.log(start(arr));