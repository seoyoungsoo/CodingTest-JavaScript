// 2206번 벽 부수고 이동하기
// 1차, 2차 모두 실패 해 파이썬으로 제출
// 백준 js 문제인 듯...

// 1차 코드 메모리 초과 발생
// const fs = require('fs');
// const stdin = (process.platform === 'linux'
// ? fs.readFileSync('/dev/stdin').toString()
// : `4 4
// 0111
// 1111
// 1111
// 1110`
// ).split('\n');

// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

// const bfs = () => {
//   const q = [];
//   q.push([0, 0, 0]);
//   visited[0][0][0] = 1;

//   while (q.length) {
//     const [x, y, c] = q.shift();
//     if (x === N - 1 && y === M - 1) return visited[x][y][c];

//     for (let [dx, dy] of dxy) {
//       const nx = x + dx;
//       const ny = y + dy;
      
//       if (0 <= nx && nx < N && 0 <= ny && ny < M) {
//         if (!visited[nx][ny][c]) {
//           if (graph[nx][ny] === 0) { // 벽을 뚫을 필요가 없을 경우
//             visited[nx][ny][c] = visited[x][y][c] + 1;
//             q.push([nx, ny, c]);
//           } else if (c === 0) { // 벽을 뚫을 경우
//             visited[nx][ny][1] = visited[x][y][c] + 1;
//             q.push([nx, ny, 1]);
//           }   
//         }
//       }
//     }
//   }
// }

// const [N, M] = input().split(' ').map(e => parseInt(e));
// const graph = Array.from({length: N}, () => input().split('').map(e => parseInt(e)));
// const visited = Array.from({length: N}, () => Array.from({length: M}, () => Array(M).fill(0)));
// const dxy = [[1, 0], [-1, 0], [0, 1], [0, -1]];

// const res = bfs();
// res ? console.log(res) : console.log(-1);

// 2차 코드 시간 초과 발생
const fs = require('fs')
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `6 4
0100
1110
1000
0000
0111
0000`
).split('\n')

const input = (() => {
  let line = 0
  return () => stdin[line++]
})()

const [N, M] = input().split(' ').map(e => parseInt(e));
const graph = Array.from({length: N}, () => input().split('').map(e => parseInt(e)));
const visited = Array.from({length: N}, () => Array.from({length: M}, () => Array(2).fill(0)));
const dxy = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const q = [];
let res = -1;
q.push({x: 0, y: 0, cost: 1, k: 1})

while (q.length) {
  const { x, y, cost, k } = q.shift();

  if (x === N - 1 && y === M - 1) {
    res = cost;
    break;
  }

  if (visited[x][y][k] === true) continue;
  visited[x][y][k] = 1;

  for (let [dx, dy] of dxy) {
    const next = { x: x + dx, y: y + dy, cost: cost + 1, k }
    if (next.x < 0 || next.x >= N || next.y < 0 || next.y >= M) continue;

    if (graph[next.x][next.y] === 1) {
      if (k > 0) next.k -= 1;
      else continue;
    }

    q.push(next);
  }
}

console.log(res);