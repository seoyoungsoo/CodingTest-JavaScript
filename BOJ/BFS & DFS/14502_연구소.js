// 14502번 연구소

const fs = require('fs');
const { exit } = require('process');
const stdin = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString()
: `4 6
0 0 0 0 0 0
1 0 0 0 0 2
1 1 1 0 0 2
0 0 0 0 0 2`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const bfs = (g) => {
  const q = [];
  const visited = Array.from({length: N}, () => Array(M).fill(0));
  let cnt = 0;

  for (let virus of virusList) {
    q.push(virus);
  }

  while (q.length) {
    const [x, y] = q.shift();
    for (let [dx, dy] of dxy) {
      const nx = dx + x;
      const ny = dy + y;

      if (0 <= nx && nx < N && 0 <= ny && ny < M) {
        if (g[nx][ny] === EMPTY && visited[nx][ny] === 0) {
          q.push([nx, ny]);
          g[nx][ny] = VIRUS;
          visited[nx][ny] = 1;
        }
      }
    }
  }

  for (let i = 0; i < g.length; i++) {
    cnt += g[i].filter(e => e === EMPTY).length;
  }

  if (res < cnt) res = cnt;
}

const EMPTY = 0, WALL = 1, VIRUS = 2;
const [N, M] = input().split(' ').map(e => parseInt(e));
const graph = Array.from({length: N}, () => input().split(' ').map(e => parseInt(e)));
const dxy = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const emptyList = [], virusList = [];
let res = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] === EMPTY) emptyList.push([i, j]);
    if (graph[i][j] === VIRUS) virusList.push([i, j]);
  }
}

for (let i = 0; i < emptyList.length; i++) {
  for (let j = 0; j < i; j++) {
    for (let k = 0; k < j; k++) {
      const [x1, y1] = emptyList[i]
      const [x2, y2] = emptyList[j]
      const [x3, y3] = emptyList[k]

      const newGraph = graph.map(v => v.slice());

      newGraph[x1][y1] = WALL;
      newGraph[x2][y2] = WALL;
      newGraph[x3][y3] = WALL;

      bfs(newGraph);
    }
  }
}

console.log(res);