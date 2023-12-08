const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

let sooo = parseInt(input)


  let arr = []
  for( let i = 2 ; i<= sooo ; i++){
    let num = i
    while(sooo%num === 0){
      arr.push(num)
      sooo = sooo/num
      if(sooo/num === 1){
        arr.push(num)
        break
      }
    }
  }
 console.log(arr.join('\n'))


