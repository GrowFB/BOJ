const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

// input을 미리 정리합니다.
const [height, width] = input[0].split(" ").map((el) => parseInt(el));
const originBoard = [];
for (let i = 1; i <= height; i++) {
  let row = input[i].split("");
  originBoard.push(row);
}

// 우리가 색칠 할 Size를 먼저 정의를 해주었습니다.
// 문제를 풀때 x, y 만 수정하면 작은 경우의 수부터 테스트를 진행 할 수 있거든요.
const SIZE = { x: 8, y: 8 };

// 색칠 횟수를 count 하는 함수를 먼저 정의합니다.
// 시작하는 위치에서 부터 SIZE에서 정의한 만큼의 체스판을 색칠해봅니다.
function countNeedPainting(startRowNum, startColNum, startColor) {
  let nextColor = startColor;
  let count = 0;
  // i = row
  for (let i = startRowNum; i < startRowNum + SIZE.x; i++) {
    // j = column
    for (let j = startColNum; j < startColNum + SIZE.y; j++) {
      if (originBoard[i][j] !== nextColor) {
        count++;
      }
      nextColor = nextColor === "B" ? "W" : "B";
    }
    nextColor = nextColor === "B" ? "W" : "B";
  }
  return count;
}

// 최소값을 미리 넉넉하게 설정해 뒀습니다.
let min = SIZE.x * SIZE.y;
// 전체 크기에서 체스판을 자를 수 있는 모든 경우의 수를 loop를 돌며 확인합니다.
for (let i = 0; i <= height - SIZE.x; i++) {
  for (let j = 0; j <= width - SIZE.y; j++) {
    const blakCount = countNeedPainting(i, j, "B");
    const whiteCount = SIZE.x * SIZE.y - blakCount;
    const currentMin = blakCount > whiteCount ? whiteCount : blakCount;

    if (min > currentMin) {
      min = currentMin;
    }
  }
}

console.log(min);
