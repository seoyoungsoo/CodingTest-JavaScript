// 14502번 연구소
// 풀지 못한 문제

const fs = require('fs');
const { parse } = require('path');
const stdin = (
  process.platform === 'linux'
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

const dxy = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let res = 0;
let emptyList = [],
  virusList = [];
const EMPTY = 0,
  WALL = 1,
  VIRUS = 2;

const [n, m] = input()
  .split(' ')
  .map((e) => parseInt(e));
const graph = Array.from({ length: n }, () => Array(m).fill(0));

const BFS = (newGraph) => {
  let q = [];
  let visited = Array.from({ length: n }, () => Array(m).fill(false));
  let cnt = 0;

  for (let virus of virusList) {
    q.push(virus);
  }

  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dxy[i][0];
      let ny = y + dxy[i][1];

      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (newGraph[nx][ny] === EMPTY && visited[nx][ny] === false) {
          q.push([nx, ny]);
          newGraph[nx][ny] = VIRUS;
          visited[nx][ny] = true;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    cnt = newGraph[i].filter((e) => e === EMPTY).length;
  }

  if (res < cnt) {
    res = cnt;
  }
};

for (let x = 0; x < n; x++) {
  let raw = input()
    .split(' ')
    .map((e) => parseInt(e));

  for (let y = 0; y < m; y++) {
    graph[x][y] = raw[y];
    if (graph[x][y] === EMPTY) emptyList.push([x, y]);
    if (graph[x][y] === VIRUS) virusList.push([x, y]);
  }
}

for (let i = 0; i < emptyList.length; i++) {
  for (let j = 0; j < i; j++) {
    for (let k = 0; k < j; k++) {
      const [x1, y1] = emptyList[i];
      const [x2, y2] = emptyList[j];
      const [x3, y3] = emptyList[k];

      graph[x1][y1] = WALL;
      graph[x2][y2] = WALL;
      graph[x3][y3] = WALL;

      let newGraph = JSON.parse(JSON.stringify(graph));
      BFS(newGraph);

      graph[x1][y1] = EMPTY;
      graph[x2][y2] = EMPTY;
      graph[x3][y3] = EMPTY;
    }
  }
}

console.log(res);
