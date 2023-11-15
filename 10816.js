const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let n = parseInt(input[2]);

let arr1 = input[1].split(" ").map(Number);
let arr2 = input[3].split(" ").map(Number);

arr1.sort((a, b) => a - b);

function solution() {
  let answer = "";
  // 빈 객체를 만든다
  let result = [];

  //N과M을 구한다

  //N의 배열

  //M의 배열

  // N의 숫자를 Key로 만들고 value 키값이 있을때마다 ++한다

  for (let key of arr1) {
    if (result[key] !== undefined) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }

  }

  for (let key of arr2) {
    if (result[key]) {
      answer += result[key] + " ";
    } else {
      answer += 0 + " ";
    }

  }

  console.log(answer);
}

solution();
