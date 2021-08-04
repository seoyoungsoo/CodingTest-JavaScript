// 2206번 벽 부수고 이동하기

// 3차 코드
// 다차원 배열 생성 시 Array.from 보다 new Array 사용을 지향해야 할 것 같음
// 시간 초과 발생 원인이 무엇인가 확인하기 위해 2차 코드 구조를 3차와 똑같게 변경하였으나 시간 초과 발생
// 코드 구조는 전체적으로 똑같고 변수명만 다른 상태에서도 2차 코드는 여전히 시간 초과 발생
// 백준의 문제인가?
const fs = require('fs')
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `8 8
01000100
01010100
01010100
01010100
01010100
01010100
01010100
00010100`
).split('\n')

const input = (() => {
  let line = 0
  return () => stdin[line++]
})()

const [n, m] = input().split(' ').map((str) => parseInt(str))
const map = new Array(n).fill(0).map(() => input().split('').map((str) => parseInt(str)))
const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]
const visited = new Array(n).fill(0).map(() => new Array(m).fill(0).map(() => new Array(2).fill(false)))
const queue = []
queue.push({ x: 0, y: 0, cost: 1, k: 1 })
let result = -1

while (queue.length) {
  const { x, y, cost, k } = queue.shift()

  if (x === n - 1 && y === m - 1) {
    result = cost
    break
  }

  if (visited[x][y][k] === true) continue
  visited[x][y][k] = true

  for (let i = 0; i < dx.length; i++) {
    const next = { x: x + dx[i], y: y + dy[i], cost: cost + 1, k }
    if (next.x < 0 || next.x >= n || next.y < 0 || next.y >= m) continue // if (visited[next.x][next.y][next.k]) continue

    if (map[next.x][next.y] === 1) {
      if (k > 0) next.k -= 1
      else continue
    }

    queue.push(next)
  }
}

console.log(result)

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
// const fs = require('fs')
// const stdin = (process.platform === 'linux'
//   ? fs.readFileSync('/dev/stdin').toString()
//   : `6 4
// 0100
// 1110
// 1000
// 0000
// 0111
// 0000`
// ).split('\n')

// const input = (() => {
//   let line = 0
//   return () => stdin[line++]
// })()

// const [N, M] = input().split(' ').map(e => parseInt(e));
// const graph = new Array(N).fill(0).map(() => input().split('').map((str) => parseInt(str)))
// const visited = new Array(N).fill(0).map(() => new Array(M).fill(0).map(() => new Array(2).fill(false)))
// const dx = [1, -1, 0, 0];
// const dy = [0, 0, 1, -1];

// const q = [];
// let res = -1;
// q.push({x: 0, y: 0, cost: 1, k: 1})

// while (q.length) {
//   const { x, y, cost, k } = q.shift();

//   if (x === N - 1 && y === M - 1) {
//     res = cost;
//     break;
//   }

//   if (visited[x][y][k] === true) continue;
//   visited[x][y][k] = 1;

//   for (let i = 0; i < dx.length; i++) {
//     const next = { x: x + dx[i], y: y + dy[i], cost: cost + 1, k }
//     if (next.x < 0 || next.x >= N || next.y < 0 || next.y >= M) continue;

//     if (graph[next.x][next.y] === 1) {
//       if (k > 0) next.k -= 1;
//       else continue;
//     }

//     q.push(next);
//   }
// }

// console.log(res);