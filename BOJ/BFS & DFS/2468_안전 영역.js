// 2468번 안전 영역
// 코드참조: https://ghost4551.tistory.com/32

const fs = require('fs');
const { parse } = require('path');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `5
6 8 2 6 2
3 2 3 4 6
6 7 3 3 2
7 2 5 3 6
8 9 5 2 7`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const solution = (tmpGraph) => {
  let cnt = 0, cntList = [];

  // 81%에서 실패해 이유를 찾아보니
  // 비가 아예 오지 않을 수 도 있기 때문에 k의 값은 1~100이 아닌 0~100이 된다.
  for (let k = 0; k < 101; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][j] > k) {
          DFS(i, j, k);
          cnt++;
        }
      }
    }
    cntList.push(cnt);
    cnt = 0;

    graph = JSON.parse(JSON.stringify(tmpGraph));
  }
  console.log(Math.max(...cntList));
}

const DFS = (i, j, k) => {
  let stack = [[i, j]];

  while (stack.length) {
    let [x, y] = stack.pop();
    for (let c = 0; c < dxy.length; c++) {
      let nx = x + dxy[c][0];
      let ny = y + dxy[c][1];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        if (graph[nx][ny] > k) {
          graph[nx][ny] = -1;
          stack.push([nx, ny]);
        }
      }
    }
  }
}

let dxy = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const n = parseInt(input());
let graph = Array.from({length:n}, () => input().split(' ').map(e => parseInt(e)));

// 깊은 복사
let tmpGraph = JSON.parse(JSON.stringify(graph));

solution(tmpGraph);

