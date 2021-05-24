// 2583번 영역 구하기

const fs = require('fs');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const BFS = (i, j) => {
  graph[i][j] = 1;
  let cnt = 1;
  const q = [[i, j]];

  while (q.length) {
    let [nx, ny] = q.shift();
    for (let i = 0; i < 4; i++) {
      let dx = nx + dxy[i][0];
      let dy = ny + dxy[i][1];
      if (0 <= dx && dx < M && 0 <= dy && dy < N) {
        if (graph[dx][dy] === 0) {
          graph[dx][dy] = 1;
          q.push([dx, dy]);
          cnt++;
        }
      }
    }
  }
  res.push(cnt);
}

const dxy = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const [M, N, K] = input().split(' ').map(e => parseInt(e));
const graph = Array.from({length:M}, () => Array(N).fill(0));
const res = [];

for (let i = 0; i < K; i++) {
  const [x1, y1, x2, y2] = input().split(' ').map(e => parseInt(e));

  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      if (graph[y][x] === 0) {
        graph[y][x] = 1;
      }
    }
  }
}

let field = 0;
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 0) {
      field++;
      BFS(i, j);
    }
  }
}

console.log(field);
console.log(res.sort((a, b) => a - b).join(' '));