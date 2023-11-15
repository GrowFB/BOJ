const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let arr1 = input[1].split(" ").map(Number);
let arr2 = input[2].split(" ").map(Number);
let num = input[0].split(" ").map(Number);
let n = num[0];
let m = num[1];

let arr3 = new Array(n+m) ;
let i = 0;
let temp ;

while( i < arr3.length){
  if( i < n){
    for(let j = 0 ; j<n ; j++){
      arr3[i] = arr1[j]
      i++
    }
  }else if( n<= i ){
    for(let k = 0; k<m ; k++){
      arr3[i] = arr2[k]
      i++
    }
  }

}

for(let i = 0 ; i<arr3.length ; i++){
  for(let j  = 0 ; j<arr3.length; j++){
  if(arr3[i] - arr3[j] == 0 || arr3[i] - arr3[j] > 0 ){
    continue;
  }else if(arr3[i] - arr3[j] < 0){
    temp = arr3[i];
    arr3[i] = arr3[j];
    arr3[j] = temp;
  }
}
}

console.log(...arr3);


