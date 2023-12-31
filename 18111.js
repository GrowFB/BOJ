const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let num = []
num = input.shift().split(' ')
let arr = []

for(let i = 0 ; i< input.length ; i++){
  arr[i] = input[i].split(' ').map(Number)
}

let maxnum = 0;
let minnum = 0;
let max = 0 ;
let min = 0 ; 

for(let i of arr){
 maxnum = Math.max(...i)
}

for(let i = 0 ; i<num[0] ; i++){
  for(let j = 0 ; j <num[1] ; j++){
  
    if( arr[i][j] >= maxnum){
      maxnum = arr[i][j]
      max++
    }else if(arr[i][j] < maxnum){
      minnum = arr[i][j]
      min++
    }
  }
}
/////////////////
function solution(N, M, B, input) {
  const heights = input.map((row) => row.split(" ").map(Number));

  let minTime = Infinity;
  let resultHeight = -1;

  for (let targetHeight = 256; targetHeight >= 0; targetHeight--) {
    let getBlocks = 0;
    let useBlocks = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        const diff = heights[i][j] - targetHeight;
        if (diff >= 0) {
          // 땅에서 블록 빼서 가지기
          getBlocks += diff;
        } else {
          // 인벤에서 블록 꺼내서 쓰기
          useBlocks -= diff;
        }
      }
    }

    if (B - useBlocks + getBlocks >= 0) {
      const time = 2 * getBlocks + useBlocks;
      if (time < minTime) {
        minTime = time;
        resultHeight = targetHeight;
      }
    }
  }
  console.log(minTime, resultHeight);
}

///
// 세로 N, 가로 M 크기의 집터
// 땅을 고르게 하기 위한 작업 경우의수 2개
// 1. (i,j)의 맨 위에있는 블록을 제거 후 인벤토리에 넣기 (2초)
// 2. 인벤토리에서 블록 하나 꺼내서 (i,j)의 맨위에 두기
// 최대한 빠르게 땅 고르기를 해야하는데 이때 걸리는 최소 시간과 그 경우 땅의 높이 출력
const [N, M, B] = input[0].split(" ").map(Number);

// 중요 포인트
// 사용가능 블록 = 인벤토리 안에 있는 블록 + 땅에 있는 블록
// 평탄화할 땅에 쌓아질 블록의 최대 높이 = 사용가능 블록 / (N*M)

const map = Array.from({ length: N }, () => new Array(M));

let total = B; // 사용가능 블록

for (let i = 0; i < N; i++) {
  const line = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    map[i][j] = line[j];
    total += map[i][j];
  }
}

// 한칸에 가질 수 있는 최대 높이
let limitH = Math.floor(total / (N * M));
if (limitH > 256) limitH = 256;

let minTime = Number.MAX_SAFE_INTEGER;

let finalH = limitH;
while (limitH >= 0) {
  // 평탄화를 limitH로 했을 때의 최소 시간 구하기
  let curTime = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] <= limitH) {
        curTime += limitH - map[i][j];
      } else {
        curTime += 2 * (map[i][j] - limitH);
      }
    }
  }
  if (curTime < minTime) {
    minTime = curTime;
    finalH = limitH;
  }
  limitH--;
}

console.log(`${minTime} ${finalH}`);
//////////////
/*
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');
*/
const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [N, M, B] = input[0].split(' ').map(Number);
let arr = input.slice(1).map(_ => _.trim().split(' ').map(Number));


function main() {
    let min = Math.min(...arr.flat()); // 현재 높이가 가장 작은 값
    let max = Math.max(...arr.flat()); // 현재 높이가 가장 큰 값

    let minTime = Number.MAX_SAFE_INTEGER;
    let maxHeight = 0;

    for(let height=min; height<=max; height++) {
        let inven = B; //인벤토리
        let time = 0; //걸린 시간
        for(let r=0;r<N;r++) {
            for(let c=0;c<M;c++) {
                let count = 0; // 맞추려는 높이와 현재 높이의 차이
                if(height < arr[r][c]) { //만약 맞추려는 높이보다 더 높으면 깎기
                    count = arr[r][c] - height;
                    inven += count;
                    time += count*2; // 2초
                }
                else if(height > arr[r][c]) { //만약 맞추려는 높이보다 더 낮으면 추가하기
                    count = height - arr[r][c];
                    inven -= count;
                    time += count; // 1초
                }
            }
        }
        if(inven < 0) { // 인벤토리는 음수가 될 수 없다.
            continue;
        }
        if(time <= minTime) { //시간이 같은 경우, 더 높은 높이가 정답이 된다.
            minTime = time;
            maxHeight = height;
        }
    }
    console.log(minTime, maxHeight)
}

main();